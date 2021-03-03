import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import {imageURI} from '../../utils';
import {Images} from '../../../assets/images'
import {useDispatch, useSelector} from 'react-redux';
import {tambahKeranjang} from '../../redux/actions/keranjang';

export default function Card(props) {
  const {item, navigation} = props;
  const dispatch = useDispatch();
  const {token, isLogin} = useSelector((state) => state.auth);
  const _tambahKeranjang = () => {
    if (!isLogin) {
      navigation.navigate('Login');
    } else {
    const id_penjual = item.id_penjual
    const id_produk = item.id
    dispatch(tambahKeranjang(token, {id_penjual, id_produk}));
    }
  };
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('DetailBeranda', {id: item.id})} activeOpacity={0.8}>
      <View style={styles.card}>
        {/* <View style={styles.imagesWrap}> */}
          <Image source={item.foto?{uri: imageURI + item.foto}:Images.no_images} style={styles.images} />
        {/* </View> */}
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{item.nama.substring(0,10)}...</Text>
          <Text>Rp. {item.harga}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={_tambahKeranjang}>
          <Text style={{color: 'white'}}>Beli</Text>
        </TouchableOpacity>
      </View>
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
    width: Dimensions.get('screen').width/2 - 20,
    height: 250,
    flex: 1,
    flexDirection: 'column',
  },
  images: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flex: 4,
    // marginVertical:5,
    resizeMode: 'stretch',
  },
  data: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    marginTop:20
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
