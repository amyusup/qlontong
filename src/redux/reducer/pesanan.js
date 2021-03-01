import {GET_PESANAN, TAMBAH_PESANAN, GET_PESANAN_DETAIL} from '../type/pesanan';

const initialState = {
  pesanan: [],
  pesananDetail: [],
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PESANAN:
      return {
        ...state,
        pesanan: action.payload,
      };
    case GET_PESANAN_DETAIL:
      return {
        ...state,
        pesananDetail: action.payload,
      };
    case TAMBAH_PESANAN:
      return {
        ...state,
        pesanan: action.payload,
      };
    default:
      return state;
  }
};
