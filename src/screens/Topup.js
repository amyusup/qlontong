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
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ubahPengguna} from '../redux/actions/pengguna';
import ButtonLogin from '../components/ButtonLogin';

export default function Akun({navigation}) {
  const dispatch = useDispatch();
  const {token, isLogin} = useSelector((state) => state.auth);
  const {pengguna} = useSelector((state) => state.pengguna);

  const topup = async (jumlah) => {
    const saldo = pengguna.saldo + jumlah;
    await dispatch(ubahPengguna(token, {saldo}));
    navigation.goBack();
  };

  if (!isLogin) {
    return <ButtonLogin navigation={navigation} />;
  }

  return (
    <>
      <StatusBar backgroundColor="#0099ff" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={() => topup(25000)}>
          <Text style={{fontWeight: 'bold'}}>Rp. 25.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => topup(50000)}>
          <Text style={{fontWeight: 'bold'}}>Rp. 50.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => topup(75000)}>
          <Text style={{fontWeight: 'bold'}}>Rp. 75.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => topup(100000)}>
          <Text style={{fontWeight: 'bold'}}>Rp. 100.000</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
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
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginBottom: 30,
    marginTop: 10,
  },
});
