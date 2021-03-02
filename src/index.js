import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackPenjual, StackPembeli} from './navigator';
import {useSelector, useDispatch} from 'react-redux';
import {getPengguna} from './redux/actions/pengguna';
export default function index() {
  const {isLogin, role, token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLogin) {
      dispatch(getPengguna(token));
    }
  }, [isLogin]);
  return (
    <NavigationContainer>
      {role == 'penjual' ? <StackPenjual /> : <StackPembeli />}
    </NavigationContainer>
  );
}
