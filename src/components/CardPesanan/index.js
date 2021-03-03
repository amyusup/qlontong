import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {imageURI} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {hapusKeranjang} from '../../redux/actions/keranjang';
import {tambahPesanan} from '../../redux/actions/pesanan';
import {ubahPengguna} from '../../redux/actions/pengguna';

export default function CardPesanan(props) {
  const {item, halaman, navigator} = props;
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {pengguna} = useSelector((state) => state.pengguna);
  const _hapusKeranjang = () => {
    dispatch(hapusKeranjang(token, item.id));
  };
  const _tambahPesanan = async () => {
    console.log(item.qyt * item.harga_produk);
    if (pengguna.saldo <= item.qyt * item.harga_produk) {
      ToastAndroid.show(
        'Saldo tidak mencukupi, harap isi ulang saldo anda',
        ToastAndroid.SHORT,
      );
    } else {
      await dispatch(hapusKeranjang(token, item.id));
      // const saldo = pengguna.saldo - item.qyt * item.harga_produk;
      // await dispatch(ubahPengguna(token, {saldo}));

      dispatch(
        tambahPesanan(token, {
          id_penjual: item.id_penjual,
          id_produk: item.id_produk,
          qyt: item.qyt,
        }),
      );
    }
  };
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={navigator}>
      <View
        style={[
          styles.row,
          {justifyContent: 'space-between', marginBottom: 10},
        ]}>
        <Text style={{fontWeight: 'bold'}}>{item.nama_penjual}</Text>
        {halaman == 'keranjang' ? null : (
          <Text
            style={{
              color: '#0099ff',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {item.status}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <View style={styles.images}>
          {/* <Text>gambar</Text> */}
          <Image
            source={{uri: imageURI + item.foto_produk}}
            style={styles.images}
          />
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{item.nama_produk}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.qyt} x</Text>
            <Text>Rp. {item.harga_produk}</Text>
          </View>
        </View>
      </View>
      {halaman == 'keranjang' ? (
        <>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={_hapusKeranjang}>
            <Text style={{color: 'white'}}>Hapus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#0099ff', marginTop: 10}]}
            activeOpacity={0.8}
            onPress={_tambahPesanan}>
            <Text style={{color: 'white'}}>Bayar</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  images: {
    // backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    paddingBottom: 20,
  },
  data: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
    // justifyContent: 'center',
  },
  action: {
    flexDirection: 'column',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff6666',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
