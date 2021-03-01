import {GET_KERANJANG, TAMBAH_KERANJANG, HAPUS_KERANJANG} from '../type/keranjang';

const initialState = {
  keranjang: [],
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_KERANJANG:
      return {
        ...state,
        keranjang: action.payload,
      };
    case TAMBAH_KERANJANG:
      return {
        ...state,
        message: action.payload,
      };
    case HAPUS_KERANJANG:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
