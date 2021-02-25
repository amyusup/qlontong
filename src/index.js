import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RoutePembeli, RoutePenjual} from './navigator';

export default function index() {
  const role = 200;
  return (
    <NavigationContainer>
      {role == 200 ? <RoutePenjual /> : <RoutePembeli />}
    </NavigationContainer>
  );
}
