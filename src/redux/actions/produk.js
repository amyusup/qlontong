import {GET_PRODUK, TAMBAH_PRODUK, GET_PRODUK_DETAIL, UBAH_PRODUK, HAPUS_PRODUK} from '../type/produk';
import axios from 'axios';
import {URI} from '../../utils';
import { ToastAndroid } from 'react-native';

export const getProduk = (
  nama = '',
  limit = 25,
  orderby = 'tanggal_input',
) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${URI}/produk?nama=${nama}&limit=${limit}&orderby=${orderby}`,
    );
    dispatch({type: GET_PRODUK, payload: res.data.data});
  } catch (e) {
    console.log(e);
    dispatch({type: GET_PRODUK, payload: null});
  }
};

export const getProdukDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/produk/${id}`);
    dispatch({type: GET_PRODUK_DETAIL, payload: res.data.data[0]});
  } catch (e) {
    console.log(e);
    dispatch({type: GET_PRODUK_DETAIL, payload: null});
  }
};
export const tambahProduk = (token, data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/produk/tambah`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: TAMBAH_PRODUK, payload: res.data.data});
    ToastAndroid.show('Produk berhasil ditambahkan', ToastAndroid.SHORT)
  } catch (e) {
    console.log(e);
    dispatch({type: TAMBAH_PRODUK, payload: null});
  }
};
export const ubahProduk = (token, data, id) => async (dispatch) => {
  try {
    const res = await axios.patch(`${URI}/produk/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: UBAH_PRODUK, payload: res.data.data});
    ToastAndroid.show('Produk berhasil diubah', ToastAndroid.SHORT)
  } catch (e) {
    console.log(e);
    dispatch({type: UBAH_PRODUK, payload: null});
  }
};
export const hapusProduk = (token, id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URI}/produk/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: HAPUS_PRODUK, payload: res.data.data});
    dispatch(getProduk())
    ToastAndroid.show('Produk berhasil dihapus', ToastAndroid.SHORT)
  } catch (e) {
    console.log(e);
    dispatch({type: HAPUS_PRODUK, payload: null});
  }
};
