import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Card from '../components/Card';

export default function Beranda({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.wrap}
        style={{marginBottom: 180}}>
        <View style={styles.content}>
          <Card />
        </View>
        <View style={{margin: 5, width: '47%'}}>
          <Card />
        </View>
        <View style={{margin: 5, width: '47%'}}>
          <Card />
        </View>
        <View style={{margin: 5, width: '47%'}}>
          <Card />
        </View>
        <View style={{margin: 5, width: '47%'}}>
          <Card />
        </View>
        <View style={{margin: 5, width: '47%'}}>
          <Card />
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
  wrap: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  content: {margin: 5, width: '47%'},
});
