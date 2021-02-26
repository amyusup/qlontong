import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Card({navigation}) {
  return (
      <View>
        <View style={styles.card}>
          <View style={styles.images}>
            <Text>gambar</Text>
          </View>
          <View style={styles.data}>
            <Text style={{fontWeight: 'bold'}}>Minyak</Text>
            <Text>Rp. 10.000</Text>
          </View>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{color: 'white'}}>Beli</Text>
          </TouchableOpacity>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    height:200,
    flex: 1,
    flexDirection: 'column',
  },
  images: {
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  data: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
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
