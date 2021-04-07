import productsReducer from './productsReducer';
import cartItems from './cartItems'
import {combineReducers} from 'redux';

//將兩個store混合成一個
const allReducers = combineReducers({
  productsReducer:productsReducer,
  cartItems:cartItems,
})
export default allReducers;