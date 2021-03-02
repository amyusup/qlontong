import {GET_PENGGUNA, UBAH_PENGGUNA} from '../type/pengguna';

const initialState = {
  pengguna: [],
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PENGGUNA:
      return {
        ...state,
        pengguna: action.payload,
      };
    case UBAH_PENGGUNA:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
