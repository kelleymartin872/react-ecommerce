import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import Drawer from '@material-ui/core/Drawer';
//import from index.js 集中導入維持code整潔

const App = () => {
  const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // }

  // useEffect(()=>{
  //   fetchProducts();
  // },[]);

  const addCart = (add) => {
    setProducts([...products, add])
    console.log(products.length)
  }
  return (
    <div>
      <Navbar products={products} />
      <Products addCart={addCart} />
    </div>
  )
}

export default App
