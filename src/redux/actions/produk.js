import { GET_PRODUK } from '../type/produk'
import axios from 'axios'
import {URI} from '../../utils'

export const getProduk = (nama="", limit=25, orderby="tanggal_input") => async (dispatch) => {
    try{
        const res = await axios.post(`${URI}/produk?nama=${nama}&limit=${limit}&orderby=${orderby}`);
        dispatch({type: GET_PRODUK, payload: res.data.data});
    }catch(e){
        console.log(e)
        dispatch({type: GET_PRODUK, payload: e});
    }
  };