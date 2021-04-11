import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux';

//利用react-redux的Provider從最頂層父元素向下傳遞讓所有子元件都能調用到store的數據
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);

