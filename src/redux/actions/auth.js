import {LOGIN, GET_ROLE, KELUAR, ERROR} from '../type/auth';
import axios from 'axios';
import {URI} from '../../utils';
import { ToastAndroid } from 'react-native';

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/auth/login`, data);
    if (res.data.data.roles == 'penjual') {
      dispatch({type: GET_ROLE, payload: 'penjual'});
    } else {
      dispatch({type: GET_ROLE, payload: 'pembeli'});
    }
    ToastAndroid.show('Berhasil login', ToastAndroid.SHORT)
    dispatch({type: LOGIN, payload: res.data.data.token});
  } catch (e) {
    ToastAndroid.show('Email / password salah', ToastAndroid.SHORT)
    dispatch({type: ERROR, payload: e.message});
    // console.log(e.response.data.data.message)
  }
};

export const keluar = () => {
  return {type: KELUAR};
};
