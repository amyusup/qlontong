import {GET_PRODUK, TAMBAH_PRODUK, GET_PRODUK_DETAIL, UBAH_PRODUK, HAPUS_PRODUK} from '../type/produk';

const initialState = {
  produk: [],
  produkDetail: [],
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUK:
      return {
        ...state,
        produk: action.payload,
      };
    case GET_PRODUK_DETAIL:
      return {
        ...state,
        produkDetail: action.payload,
      };
    case TAMBAH_PRODUK:
      return {
        ...state,
        message: action.payload,
      };
    case UBAH_PRODUK:
      return {
        ...state,
        message: action.payload,
      };
    case HAPUS_PRODUK:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
