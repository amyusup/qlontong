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
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {imageURI} from '../utils';
import {Images} from '../../assets/images';
import {getProduk, getProdukDetail, hapusProduk} from '../redux/actions/produk';

export default function Produk({navigation}) {
  const dispatch = useDispatch();

  const {isLogin, token} = useSelector((state) => state.auth);
  const {produk, message} = useSelector((state) => state.produk);

  const _beforeRenderDetail = async(id) =>{
    await dispatch(getProdukDetail(id))
    navigation.navigate('EditProduk',{id})
  }
  const hapus = (id) =>{
     dispatch(hapusProduk(token,id))
  }
 

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.card}>
          <Image
            source={item.foto ? {uri: imageURI + item.foto} : Images.no_images}
            style={styles.images}
          />
          <View style={styles.data}>
            <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
            <Text>Rp. {item.harga}</Text>
            <Text>{item.stok}</Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={()=>_beforeRenderDetail(item.id)}>
              <Icons name="edit-2" size={20} color="#0099ff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>hapus(item.id)}>
              <Icons name="trash-2" size={20} color="#ff6666" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const empty = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text>Belum ada produk</Text>
      </View>
    );
  };

  React.useEffect(() => {
    dispatch(getProduk());
    // console.log(limit);
  }, [message]);

  if (!isLogin) {
    return <ButtonLogin navigation={navigation} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={produk}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // style={{marginBottom:200}}
        // style={styles.wrap}
        // numColumns={2}
        ListEmptyComponent={empty}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TambahProduk')}>
        <Text style={{color: 'white'}}>Tambah Produk</Text>
      </TouchableOpacity>
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
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
  },
  images: {
    // backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 100,
    width: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
  },
  data: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'column',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginBottom: 180,
  },
});
