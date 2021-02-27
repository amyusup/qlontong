import React from 'react';
import {View, StyleSheet, Dimensions, Text, FlatList} from 'react-native';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getProduk} from '../redux/actions/produk';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import InputBorderedBottom from '../components/InputBorderedBottom';

export default function Beranda({navigation}) {
  const dispatch = useDispatch();
  const {produk} = useSelector((state) => state.produk);
  const [nama, setNama] = React.useState('');
  const [limit, setLimit] = React.useState(25);
  const [orderby, setOrderby] = React.useState('tanggal_input DESC');
  const [refresh, setRefresh] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'terbaru', title: 'Terbaru'},
    {key: 'termurah', title: 'Termurah'},
  ]);
  const initialLayout = {width: Dimensions.get('window').width};

  const renderItem = ({item}) => {
    return (
      <View style={styles.content}>
        <Card foto={item.foto} nama={item.nama} harga={item.harga} />
      </View>
    );
  };

  const _handleLoadMore = () => {
    setLimit(limit + 25);
    setRefresh(true);
  };

  const TabKonten = () => (
    <View style={styles.container}>
      <FlatList
        data={produk}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.wrap}
        numColumns={2}
        onEndReached={_handleLoadMore}
        onEndReachedThreshold={0.001}
        // refreshing={refresh}
        // initialNumToRender={25}
      />
    </View>
  );

  const renderScene = SceneMap({
    terbaru: TabKonten,
    termurah: TabKonten,
  });

  React.useEffect(() => {
    dispatch(getProduk(nama, limit, orderby));
    console.log(limit);
  }, [orderby, nama, limit]);

  const _onPress = (key) => {
    if (key === 'termurah') {
      setOrderby('harga');
    } else {
      setOrderby('tanggal_input DESC');
    }
  };

  return (
    <>
      <View style={{backgroundColor: 'white', paddingHorizontal: 20}}>
        <InputBorderedBottom
          keyType="next"
          // onSubmit={() => inputPassword.current.focus()}
          icon="search"
          placeholder="Cari produk..."
          value={nama}
          onChange={(text) => setNama(text)}
          style={{marginVertical: 10}}
          returnKeyType="send"
        />
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            onTabPress={({route}) => _onPress(route.key)}
            {...props}
            style={{backgroundColor: 'white'}}
            renderLabel={({route}) => (
              <Text style={{color: 'black'}}>{route.title}</Text>
            )}
            indicatorStyle={{backgroundColor: '#0099ff', height: 2}}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
  },
  wrap: {flexDirection: 'column', marginBottom: 300},
  content: {marginHorizontal: 5},
});
