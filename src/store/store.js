import { createStore } from 'redux';
import allReducer from './';

//創建store，導入合併後的allReducer，第二參數為chrome的擴充工具
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;