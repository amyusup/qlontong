import React from 'react';
import {View, StyleSheet, Dimensions, Text, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CardPesanan from '../components/CardPesanan';
import {useDispatch, useSelector} from 'react-redux';
import {getPesanan, getPesananDetail} from '../redux/actions/pesanan';

export default function PesananSaya({navigation}) {
  const dispatch = useDispatch();
  const {pesanan} = useSelector((state) => state.pesanan);
  const {isLogin, token} = useSelector((state) => state.auth);
  const [status, setStatus] = React.useState('dikemas');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dikemas', title: 'Dikemas'},
    {key: 'dikirim', title: 'Dikirim'},
    {key: 'selesai', title: 'Selesai'},
    {key: 'batal', title: 'Batal'},
  ]);
  const initialLayout = {width: Dimensions.get('window').width};

  const _beforeRenderDetail = async(kode) =>{
    // await dispatch(getPesananDetail(token, kode))
    navigation.navigate('DetailPesanan',{kode, halaman:'pesananSaya'})
  }
  const renderItem = ({item}) => {
    return (
      <CardPesanan
        item={item}
        halaman="pesananSaya"
        navigator={()=>_beforeRenderDetail(item.kode_pesanan)}
      />
    );
  };

  const empty = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text>Belum ada produk di yang dipesan</Text>
      </View>
    );
  };

  const TabKonten = () => (
    <View style={styles.container}>
      <FlatList
        data={pesanan}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.wrap}
        ListEmptyComponent={empty}
      />
    </View>
  );

  const renderScene = SceneMap({
    dikemas: TabKonten,
    dikirim: TabKonten,
    selesai: TabKonten,
    batal: TabKonten,
  });

  React.useEffect(() => {
    dispatch(getPesanan(token, status));
    // console.log(limit);
  }, [status, token, dispatch]);

  const _onPress = (key) => {
    if (key === 'dikemas') {
      setStatus('dikemas');
    } else if (key === 'dikirim') {
      setStatus('dikirim');
    } else if (key === 'selesai') {
      setStatus('selesai');
    } else if (key === 'batal') {
      setStatus('batal');
    }
  };

  if (!isLogin) {
    return <ButtonLogin navigation={navigation} />;
  }
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{backgroundColor: 'white'}}
          onTabPress={({route}) => _onPress(route.key)}
          renderLabel={({route}) => (
            <Text style={{color: 'black'}}>{route.title}</Text>
          )}
          indicatorStyle={{backgroundColor: '#0099ff', height: 2}}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
