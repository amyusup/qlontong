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
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/auth';
import Akun from './Akun';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const {isLogin, role} = useSelector((state) => state.auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const inputPassword = React.useRef();

  const _onSubmit = () => {
    dispatch(login({email, password}));
  };
  React.useEffect(()=>{
    if (isLogin) {
      role == 'penjual'
        ? navigation.navigate('Penjual', {screen: 'Akun'})
        : navigation.navigate('Pembeli', {screen: 'Akun'});
    }
  },[isLogin])

  // if (isLogin) {
  //   role == 'penjual'
  //     ? navigation.navigate('Penjual', {screen: 'Akun'})
  //     : navigation.navigate('Akun');
  // }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.title}>Login</Text>
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

        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#0099ff'}]}
          onPress={_onSubmit}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#eee'}]}
          onPress={() => navigation.navigate('Daftar')}>
          <Text style={{color: 'black'}}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  loginCard: {
    backgroundColor: 'white',
    padding: 50,
    elevation: 10,
    borderRadius: 10,
    width: '95%',
    marginTop: 70,
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
