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


export default function Pesanan({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DetailPesanan')}>
          <View style={[styles.row,{justifyContent:'space-between', marginBottom:10}]}>
            <Text style={{fontWeight: 'bold'}}>
              Beli1
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              #QLONTONG-1
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.images}>
              <Text>gambar</Text>
            </View>
            <View style={styles.data}>
              <Text style={{fontWeight: 'bold'}}>Minyak</Text>
              <Text>Rp. 10.000</Text>
              <Text>40</Text>
            </View>
            <View style={styles.action}>
              <View
                style={{
                  backgroundColor: '#0099ff',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Dikemas</Text>
              </View>
            </View>
          </View>
          <Text style={{textAlign: 'center', marginTop: 10, color: 'gray'}}>
            dan 2 produk lainnya <Icons name="arrow-down" />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
