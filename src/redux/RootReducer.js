import { combineReducers } from 'redux'
import UserReducer from './user/UserReducer'
import CartReducer from './cart/CartReducer'
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer
})


export default persistReducer(persistConfig, rootReducer)