import {LOGIN, GET_ROLE, KELUAR, ERROR} from '../type/auth';

const initialState = {
  isLogin: false,
  role: '',
  token: '',
  error:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case KELUAR:
      return {
        ...state,
        token: '',
        isLogin: false,
        _persist: {
          rehydrated: true,
          version: -1,
        },
        role: '',
      };
    case GET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};
