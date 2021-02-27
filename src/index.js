import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackPenjual, StackPembeli} from './navigator';

export default function index() {
  const role = 100;
  return (
    <NavigationContainer>
      {role == 200 ? <StackPenjual /> : <StackPembeli />}
    </NavigationContainer>
  );
}
