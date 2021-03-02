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

import {useDispatch, useSelector} from 'react-redux';
import {getPesananDetail, ubahPesanan} from '../redux/actions/pesanan';
import {ubahSaldo} from '../redux/actions/pengguna';
import {imageURI} from '../utils';
import CardPesanan from '../components/CardPesanan';

export default function DetailPesanan({navigation, route}) {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {pesananDetail} = useSelector((state) => state.pesanan);
  const {kode, halaman} = route.params;
  React.useState(() => {
    dispatch(getPesananDetail(token, kode));
  });
  const batal = () => {
    dispatch(ubahPesanan(token, {status: 'batal'}, kode));
    navigation.navigate(halaman);
  };
  const kirim = () => {
    dispatch(ubahPesanan(token, {status: 'dikirim'}, kode));
    navigation.navigate(halaman);
  };
  const selesai = async () => {
    await dispatch(ubahPesanan(token, {status: 'selesai'}, kode));
    const saldo = pesananDetail.harga_produk * pesananDetail.qyt;
    await dispatch(ubahSaldo(token, {saldo}, pesananDetail.id_pembeli));
    await dispatch(ubahSaldo(token, {saldo}, pesananDetail.id_penjual));
    navigation.navigate(halaman);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <View style={styles.card}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={{fontWeight: 'bold'}}>
              {pesananDetail.nama_penjual}
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              #{pesananDetail.kode_pesanan}
            </Text>
          </View>
          <Text>+62 {pesananDetail.no_hp}</Text>
          <Text>{pesananDetail.alamat}</Text>
          <View style={{marginVertical: 50}}>
            <CardPesanan
              item={pesananDetail}
              halaman="detailPesanan"
              navigator={() => console.log('nothing')}
            />
            <Text style={styles.total}>
              Total : {pesananDetail.harga_produk * pesananDetail.qyt}
            </Text>
          </View>

          {pesananDetail.status === 'selesai' ||
          pesananDetail.status === 'batal' ? null : halaman == 'pesanan' ? (
            pesananDetail.status == 'dikemas' ? (
              <>
                <TouchableOpacity
                  style={[styles.button, {marginBottom: 10}]}
                  onPress={kirim}>
                  <Text style={{color: 'white'}}>Kirim Pesanan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: '#ff6666'}]}
                  onPress={batal}>
                  <Text style={{color: 'white'}}>Batalkan Pesanan</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#ff6666'}]}
                onPress={batal}>
                <Text style={{color: 'white'}}>Batalkan Pesanan</Text>
              </TouchableOpacity>
            )
          ) : pesananDetail.status === 'dikirim' ? (
            <>
              <TouchableOpacity
                style={[styles.button, {marginBottom: 10}]}
                onPress={selesai}>
                <Text style={{color: 'white'}}>Selesai</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#ff6666'}]}
                onPress={batal}>
                <Text style={{color: 'white'}}>Batalkan Pesanan</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#ff6666'}]}
              onPress={batal}>
              <Text style={{color: 'white'}}>Batalkan Pesanan</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    // marginVertical: 10,
    // borderRadius: 10,
    height: '100%',
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
    flex: 1,
    paddingBottom: 20,
  },
  data: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  total: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0099ff',
  },
});
