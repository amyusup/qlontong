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

export default function Akun({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('EditAkun')}>
        <Text style={{marginLeft: 'auto', fontSize: 16, color: '#0099ff'}}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image source={Images.user_default} style={styles.images} />
      </TouchableOpacity>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>Saldo</Text>
          <Text>Rp.100.000</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>Nama</Text>
          <Text>Penjual 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>Emai</Text>
          <Text>penjual@gmail.com</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>No. Handphone</Text>
          <Text>0812121212</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>Alamat</Text>
          <Text>Jl. asdsauisadhuiasduiuiadsb</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white'}}>Logout</Text>
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
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginBottom:30,
    marginTop:10
  },
});
