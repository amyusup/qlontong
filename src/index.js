import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackSeller} from './navigator';

export default function index() {
  const role = 200;
  return (
    <NavigationContainer>
      {role == 200 ? <StackSeller /> : <StackSeller />}
    </NavigationContainer>
  );
}
