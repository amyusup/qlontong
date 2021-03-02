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
import {Images} from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {keluar} from '../redux/actions/auth';
import ButtonLogin from '../components/ButtonLogin';
import {imageURI} from '../utils';

export default function Akun({navigation}) {
  const dispatch = useDispatch();
  const {isLogin} = useSelector((state) => state.auth);
  const {pengguna} = useSelector((state) => state.pengguna);

  const _onLogout = () => {
    dispatch(keluar());
  };

  if (!isLogin) {
    return <ButtonLogin navigation={navigation} />;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EditAkun')}>
        <Text style={{marginLeft: 'auto', fontSize: 16, color: '#0099ff'}}>
          Edit
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Image
          source={
            pengguna.foto
              ? {uri: imageURI + pengguna.foto}
              : Images.user_default
          }
          style={styles.images}
        />
      </View>
      <View style={styles.card}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold'}}>Saldo</Text>
            <Text>Rp. {pengguna.saldo}</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Topup')}>
            <Icons name="plus" size={30} color="#0099ff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold'}}>Nama</Text>
        <Text>{pengguna.nama}</Text>
      </View>
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold'}}>Emai</Text>
        <Text>{pengguna.email}</Text>
      </View>
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold'}}>No. Handphone</Text>
        <Text>+62 {pengguna.no_hp}</Text>
      </View>
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold'}}>Alamat</Text>
        <Text>{pengguna.alamat}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={_onLogout}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    padding: 10,
    
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  images: {
    height: 100,
    width: 100,
    borderColor: '#0099ff',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor:'white',
    padding:10
  },
  button: {
    backgroundColor: '#ff6666',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginBottom: 30,
    marginTop: 10,
  },
});
