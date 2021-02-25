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

export default function EditAkun({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const inputPassword = React.useRef();
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.registerCard}>
     
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="user"
            placeholder="Nama Lengkap"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="mail"
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="phone"
            placeholder="No. Handphone"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputPassword.current.focus()}
            icon="map-pin"
            placeholder="Alamat"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />

          <InputBorderedBottom
            inputRef={inputPassword}
            keyType="done"
            // onSubmit={_onSubmit}
            icon="lock"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text)}
            secureTextEntry={true}
            style={{marginVertical: 10}}
          />

          <TouchableOpacity style={[styles.button, {backgroundColor: '#0099ff'}]}>
            <Text style={{color: 'white'}}>Ubah</Text>
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
    marginVertical:10,
    marginHorizontal:10,
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
