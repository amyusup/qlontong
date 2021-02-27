import { combineReducers } from 'redux'
import produkReducer from './produk'
export default combineReducers({
    produk:produkReducer,
})