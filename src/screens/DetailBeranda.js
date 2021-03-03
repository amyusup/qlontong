import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {imageURI} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getProdukDetail} from '../redux/actions/produk';
import {tambahKeranjang} from '../redux/actions/keranjang';
import Icons from 'react-native-vector-icons/Feather';

export default function DetailBeranda({navigation, route}) {
  const dispatch = useDispatch();
  const {produkDetail} = useSelector((state) => state.produk);
  const {token, isLogin} = useSelector((state) => state.auth);
  const {id} = route.params;

  const _tambahKeranjang = () => {
    if (!isLogin) {
      navigation.navigate('Login');
    } else {
      const id_penjual = produkDetail.id_penjual;
      const id_produk = produkDetail.id;
      dispatch(tambahKeranjang(token, {id_penjual, id_produk}));
      navigation.navigate('Beranda');
    }
  };

  React.useState(() => {
    dispatch(getProdukDetail(id));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: imageURI + produkDetail.foto}}
          style={styles.images}
        />
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 18, marginVertical: 10}}>
            {produkDetail.nama}
          </Text>
          <View style={styles.row}>
            <Icons name="info" size={20} color="#0099ff" />
            <Text style={{fontSize: 16, color: '#0099ff', marginLeft: 20}}>
              Rp. {produkDetail.harga}
            </Text>
          </View>
          <View style={styles.row}>
            <Icons name="layers" size={20} color="#0099ff" />
            <Text style={{fontSize: 16, color: '#0099ff', marginLeft: 20}}>
              {produkDetail.stok} pcs
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Icons name="shopping-bag" size={20} color="black" />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>
              {produkDetail.nama_penjual}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Icons name="edit" size={20} color="#0099ff" />
            <Text style={{fontSize: 18, color: '#0099ff', marginLeft: 10}}>
              Deskripsi
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text>{produkDetail.deskripsi}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={_tambahKeranjang}>
        <Text style={{color: 'white'}}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 5,
    flex: 1,
    margin: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  images: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 20,
    resizeMode: 'stretch',
  },
  data: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0099ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginBottom: 125,
  },
  total: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0099ff',
  },
});
