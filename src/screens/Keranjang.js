import React from 'react';
import CardPesanan from '../components/CardPesanan';
import ButtonLogin from '../components/ButtonLogin';
import {useDispatch, useSelector} from 'react-redux';
import {getKeranjang} from '../redux/actions/keranjang';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
export default function Keranjang({navigation}) {
  const dispatch = useDispatch();
  const {isLogin, token} = useSelector((state) => state.auth);
  const {keranjang} = useSelector((state) => state.keranjang);

  React.useEffect(() => {
    dispatch(getKeranjang(token));
  }, [token, dispatch]);

  if (!isLogin) {
    return <ButtonLogin navigation={navigation} />;
  }

  const renderItem = ({item}) => {
    return (
      <CardPesanan
        item={item}
        halaman="keranjang"
        navigator={()=>console.log('nothing')}
      />
    );
  };
  const empty = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text>Belum ada produk di keranjang</Text>
      </View>
    );
  };

  // return <CardPesanan />;
  return (
    <View style={styles.container}>
      <FlatList
        data={keranjang}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{height: '50%', marginBottom: 180}}
        ListEmptyComponent={empty}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
  },
});
