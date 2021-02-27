import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {imageURI} from '../../utils';

export default function Card(props) {
  const {foto, nama, harga} = props;
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.imagesWrap}>
          <Image
            source={{uri: imageURI + foto}}
            style={styles.images}
          />
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight: 'bold'}}>{nama}</Text>
          <Text>{harga}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
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
    height: 200,
    flex: 1,
    flexDirection: 'column',
  },
  imagesWrap: {
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  images:{
    height: '120%',
    width: '100%',
    resizeMode: 'stretch',
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
