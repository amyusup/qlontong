import {GET_PRODUK} from '../type/produk';

const initialState = {
  produk: [],
  orderby:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUK:
      return {
        ...state,
        produk: action.payload,
      };
    default:
      return state;
  }
};
