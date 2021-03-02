import {GET_PENGGUNA, UBAH_PENGGUNA} from '../type/pengguna';
import axios from 'axios';
import {URI} from '../../utils';
import {ToastAndroid} from 'react-native';

export const getPengguna = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/pengguna`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: GET_PENGGUNA, payload: res.data.data[0]});
  } catch (e) {
    // console.log(e);
    dispatch({type: GET_PENGGUNA, payload: e.message});
  }
};
export const ubahPengguna = (token, data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await axios.patch(`${URI}/pengguna`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: UBAH_PENGGUNA, payload: res.data.data});
    dispatch(getPengguna(token));
    ToastAndroid.show('Data pengguna berhasil diubah', ToastAndroid.SHORT);
  } catch (e) {
    // console.log(e);
    dispatch({type: UBAH_PENGGUNA, payload: e.message});
  }
};
