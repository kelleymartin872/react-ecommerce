import productsReducer from './productsReducer';
import cartItems from './cartItems'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  productsReducer:productsReducer,
  cartItems:cartItems,
})
export default allReducers;