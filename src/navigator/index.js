import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const RoutePembeli = () => {
    return (
      <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    )
}
export const RoutePenjual = () => {
    return (
      <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
           <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    )
}
