import {
  GET_KERANJANG,
  TAMBAH_KERANJANG,
  HAPUS_KERANJANG,
} from '../type/keranjang';
import axios from 'axios';
import {URI} from '../../utils';
import { ToastAndroid } from 'react-native';

export const getKeranjang = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/keranjang`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: GET_KERANJANG, payload: res.data.data});
  } catch (e) {
    // console.log(e)
    dispatch({type: GET_KERANJANG, payload: null});
  }
};
export const tambahKeranjang = (token, data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/keranjang`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    ToastAndroid.show('Berhasil menambah ke keranjang', ToastAndroid.SHORT)
    dispatch({type: TAMBAH_KERANJANG, payload: res.data.data.message});
    dispatch(getKeranjang(token));
  } catch (e) {
    // console.log(e)
    dispatch({type: TAMBAH_KERANJANG, payload: e.message});
  }
};
export const hapusKeranjang = (token, id) => async (dispatch) => {
  // console.log(id)
  try {
    const res = await axios.delete(`${URI}/keranjang/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    ToastAndroid.show('Berhasil menghapus dari keranjang', ToastAndroid.SHORT)
    dispatch({type: HAPUS_KERANJANG, payload: res.data.data.message});
    dispatch(getKeranjang(token));
  } catch (e) {
    console.log(e)
    dispatch({type: HAPUS_KERANJANG, payload: e.message});
  }
};
