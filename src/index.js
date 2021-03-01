import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackPenjual, StackPembeli} from './navigator';
import {useSelector} from 'react-redux';
export default function index() {
  const {role} = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {role == 'penjual' ? <StackPenjual /> : <StackPembeli />}
    </NavigationContainer>
  );
}
