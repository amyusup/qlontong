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

export default function Produk({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TambahProduk')}>
        <Text style={{color: 'white'}}>Tambah Produk</Text>
      </TouchableOpacity>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <View style={styles.card}>
          <View style={styles.images}>
            <Text>gambar</Text>
          </View>
          <View style={styles.data}>
            <Text style={{fontWeight: 'bold'}}>Minyak</Text>
            <Text>Rp. 10.000</Text>
            <Text>40</Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={() => navigation.navigate('EditProduk')}>
              <Icons name="edit-2" size={20} color="#0099ff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons name="trash-2" size={20} color="#ff6666" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
  },
});
