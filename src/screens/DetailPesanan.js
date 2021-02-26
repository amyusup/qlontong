import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function DetailPesanan({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <View style={styles.card}>
          <View style={[styles.row,{justifyContent:'space-between'}]}>
            <Text style={{fontWeight: 'bold'}}>Beli1</Text>
            <Text style={{fontWeight: 'bold'}}>#QLONTONG-1</Text>
          </View>
          <Text>08121212121</Text>
          <Text>Jl.asdbasidasbbasasbdjkasj</Text>
          <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('DetailProduk')} activeOpacity={0.8}>
          <View style={styles.row}>
            <View style={styles.images}>
              <Text>gambar</Text>
            </View>
            <View style={styles.data}>
              <Text style={{fontWeight: 'bold'}}>Minyak</Text>
              <Text>Rp. 10.000</Text>
              <Text>40</Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>
     
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pesanan')}>
          <Text style={{color: 'white'}}>Kirim Pesanan</Text>
        </TouchableOpacity>
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
  },
  row: {
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
