import { combineReducers } from 'redux'
import produkReducer from './produk'
import authReducer from './auth'
import keranjangReducer from './keranjang'
import pesananReducer from './pesanan'
export default combineReducers({
    produk:produkReducer,
    auth:authReducer,
    keranjang:keranjangReducer,
    pesanan:pesananReducer,
})