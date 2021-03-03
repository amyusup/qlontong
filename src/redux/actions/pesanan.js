import {
  GET_PESANAN,
  UBAH_PESANAN,
  TAMBAH_PESANAN,
  GET_PESANAN_DETAIL
} from '../type/pesanan';
import axios from 'axios';
import {URI} from '../../utils';
import { ToastAndroid } from 'react-native';

export const getPesanan = (token, status = 'dikemas') => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/pesanan?status=${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: GET_PESANAN, payload: res.data.data});
  } catch (e) {
    // console.log(e)
    // dispatch({type: GET_PESANAN, payload: e.response.data.data.message});
    dispatch({type: GET_PESANAN, payload: null});
  }
};
export const getPesananDetail = (token, kode) => async (dispatch) => {
  // console.log(kode);
  // console.log(token);
  try {
    const res = await axios.post(`${URI}/pesanan/detail?kode=${kode}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: GET_PESANAN_DETAIL, payload: res.data.data[0]});
  } catch (e) {
    // console.log(e)
    dispatch({type: GET_PESANAN_DETAIL, payload: e});
    // dispatch({type: GET_PESANAN_DETAIL, payload: null});
  }
};

export const tambahPesanan = (token, data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/pesanan`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    ToastAndroid.show('Berhasil membayar barang', ToastAndroid.SHORT);
    dispatch({type: TAMBAH_PESANAN, payload: res.data.data.message});
    dispatch(getPesanan(token, 'dikemas'));
  } catch (e) {
    // console.log(e)
    dispatch({type: TAMBAH_PESANAN, payload: e.message});
  }
};
export const ubahPesanan = (token, data, kode) => async (dispatch) => {
  try {
    const res = await axios.patch(`${URI}/pesanan?kode=${kode}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    ToastAndroid.show('Berhasil mengubah pesanan', ToastAndroid.SHORT);
    dispatch({type: UBAH_PESANAN, payload: res.data.data.message});
    dispatch(getPesanan(token, 'dikemas'));
  } catch (e) {
    // console.log(e)
    dispatch({type: UBAH_PESANAN, payload: e.message});
  }
};
