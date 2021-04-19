import shaking from './shaking';
import cartItems from './cartItems';
import {combineReducers} from 'redux';

//將兩個store混合成一個
const allReducers = combineReducers({
  shaking:shaking,
  // 使用串接API資料替代，留下原本資料日後參考用
  cartItems:cartItems,
})
export default allReducers;