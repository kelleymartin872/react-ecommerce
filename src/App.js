import React, { useState } from 'react';
import { Products, Navbar, Selector } from './components';
import { useSelector } from 'react-redux';
//import from index.js 集中導入維持code整潔

const App = () => {
  const items = useSelector(state => state.productsReducer)
  const [products, setProducts] = useState(items);

  return (
    <>
      <Navbar />
      <Selector items={items} products={products} setProducts={setProducts}/>
      <Products products={products}/>
    </>
  )
}

export default App
