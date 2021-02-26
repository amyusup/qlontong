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

export default function CardPesanan(props) {
  const {navigator} = props;
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 100, marginTop: 10}}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={navigator}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={{fontWeight: 'bold'}}>Beli1</Text>

            <Text style={{color: '#0099ff', fontWeight: 'bold'}}>Dikemas</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.images}>
              <Text>gambar</Text>
            </View>
            <View style={styles.data}>
              <Text style={{fontWeight: 'bold'}}>Minyak</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>40</Text>
                <Text>Rp. 10.000</Text>
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
    // width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  data: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
    // justifyContent: 'center',
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
