import React from 'react';
import { Products, Navbar } from './components';
//import from index.js 集中導入維持code整潔

const App = () => {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default App
