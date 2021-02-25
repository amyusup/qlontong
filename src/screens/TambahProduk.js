import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputBorderedBottom from '../components/InputBorderedBottom';
import Icons from 'react-native-vector-icons/Feather';

export default function EditAkun({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const inputPassword = React.useRef();
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.registerCard}>
          <TouchableOpacity
            style={{
              borderColor: '#eee',
              borderWidth: 5,
              width: '100%',
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icons name="plus-square" size={50} color="#eee" />
            <Text style={{color:'#eee'}}>Foto</Text>
          </TouchableOpacity>
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="package"
            placeholder="Nama Produk"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="dollar-sign"
            placeholder="Harga dalam rupiah"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="layers"
            placeholder="Stok"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="edit"
            placeholder="Deskripsi"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />


          <TouchableOpacity style={[styles.button, {backgroundColor: '#0099ff'}]}>
            <Text style={{color: 'white'}}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
  },
  registerCard: {
    backgroundColor: 'white',
    padding: 30,
    elevation: 10,
    borderRadius: 10,
    width: '95%',
    marginBottom: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    color: '#0099ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});
