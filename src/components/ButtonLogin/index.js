import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
export default function index({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white'}}>
      <Text>Anda belum login, silahkan login terlebih dahulu</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#0099ff',
  },
});
