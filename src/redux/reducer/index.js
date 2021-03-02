import { combineReducers } from 'redux'
import penggunaReducer from './pengguna'
import produkReducer from './produk'
import authReducer from './auth'
import keranjangReducer from './keranjang'
import pesananReducer from './pesanan'
export default combineReducers({
    auth:authReducer,
    pengguna:penggunaReducer,
    produk:produkReducer,
    keranjang:keranjangReducer,
    pesanan:pesananReducer,
})