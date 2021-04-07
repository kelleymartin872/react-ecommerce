import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducer from './store';
import { Provider } from 'react-redux';

//創建store，導入合併後的allReducer，第二參數為chrome的擴充工具
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//利用react-redux的Provider從最頂層父元素向下傳遞讓所有子元件都能調用到store的數據
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);

