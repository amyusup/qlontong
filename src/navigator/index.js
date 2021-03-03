import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Daftar,
  Produk,
  Pesanan,
  Akun,
  EditAkun,
  TambahProduk,
  EditProduk,
  DetailPesanan,
  PesananSaya,
  Keranjang,
  Beranda,
  Topup,
  DetailBeranda
} from '../screens';
import Icons from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabPenjual = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0099ff',
        labelStyle: {fontSize: 12},
        style: {height: 50},
      }}>
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icons name="list" size={25} color="#0099ff" />
            ) : (
              <Icons name="list" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Produk"
        component={Produk}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icons name="package" size={25} color="#0099ff" />
            ) : (
              <Icons name="package" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icons name="user" size={25} color="#0099ff" />
            ) : (
              <Icons name="user" size={25} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export const StackPenjual = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Penjual"
        component={TabPenjual}
        options={{title: 'QLontong Penjual',headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}
      />
      <Stack.Screen
        name="Pembeli"
        component={TabPembeli}
        options={{title: 'QLontong',headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}
      />
      <Stack.Screen name="TambahProduk" component={TambahProduk} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen name="EditProduk" component={EditProduk} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen name="EditAkun" component={EditAkun} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen name="DetailPesanan" component={DetailPesanan} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const TabPembeli = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{activeTintColor: '#0099ff',labelStyle:{fontSize:12} ,style: {height: 50}}}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icons name="home" size={25} color="#0099ff" />
            ) : (
              <Icons name="home" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarIcon: ({focused}) =>
          focused ? (
            <Icons name="shopping-cart" size={25} color="#0099ff" />
          ) : (
            <Icons name="shopping-cart" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="PesananSaya"
        component={PesananSaya}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icons name="list" size={25} color="#0099ff" />
            ) : (
              <Icons name="list" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarIcon: ({focused}) =>
          focused ? (
            <Icons name="user" size={25} color="#0099ff" />
          ) : (
            <Icons name="user" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const StackPembeli = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pembeli"
        component={TabPembeli}
        options={{title: 'QLontong', headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}
      />
      <Stack.Screen name="DetailBeranda" component={DetailBeranda} options={{title: 'Detail Produk',headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}/>
      <Stack.Screen name="DetailPesanan" component={DetailPesanan} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}/>
      <Stack.Screen name="EditAkun" component={EditAkun} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen name="Topup" component={Topup} options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerStyle:{backgroundColor:'#0099ff'}, headerTintColor:'white'}}
      />
    </Stack.Navigator>
  );
};


