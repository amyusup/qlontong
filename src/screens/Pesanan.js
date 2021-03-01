import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CardPesanan from '../components/CardPesanan';
import {useDispatch, useSelector} from 'react-redux';
import {getPesanan} from '../redux/actions/pesanan';

export default function Pesanan({navigation}) {
  const dispatch = useDispatch();
  const {pesanan} = useSelector((state) => state.pesanan);
  const {isLogin, token} = useSelector((state) => state.auth);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dikemas', title: 'Dikemas'},
    {key: 'dikirim', title: 'Dikirim'},
    {key: 'selesai', title: 'Selesai'},
    {key: 'batal', title: 'Batal'},
  ]);
  const initialLayout = {width: Dimensions.get('window').width};

  const renderItem = ({item}) => {
    return <CardPesanan item={item} halaman="pesananSaya" />;
  };

  const TabKonten = () => (
    <View style={styles.container}>
      <FlatList
        data={pesanan}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.wrap}
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
    dispatch(getPesanan(token));
    // console.log(limit);
  }, []);

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
