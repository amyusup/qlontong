import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CardPesanan from '../components/CardPesanan';

const Dikemas = ({navigation}) => (
  <CardPesanan navigator={() => navigation.navigate('DetailPesanan')} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function Pesanan({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dikemas', title: 'Dikemas'},
    {key: 'dikirim', title: 'Dikirim'},
    {key: 'selesai', title: 'Selesai'},
    {key: 'batal', title: 'Batal'},
  ]);

  const renderScene = SceneMap({
    dikemas: () => <Dikemas navigation={navigation} />,
    dikirim: SecondRoute,
    selesai: SecondRoute,
    batal: SecondRoute,
  });
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
