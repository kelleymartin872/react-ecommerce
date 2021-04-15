import React, { useState, useEffect } from 'react';
import { Products, Navbar, Selector } from './components';
//import from index.js 集中導入維持code整潔
// import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';

const App = () => {
  // const dispatch = useDispatch();
  let [items,setItems] = useState([]) ;
  const [products, setProducts] = useState([]);
  const apiUrl = 'https://xxxxxxxxxx.herokuapp.com/products';
  useEffect(() => {
    axios.get(apiUrl)
    .then((res)=>{
      // dispatch(pushProductsToStore(res.data))
      setItems(res.data)
      setProducts(res.data)
      console.log('success')
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  // const items = useSelector(state => state.productsReducer);
  return (
    <>
      <Navbar />
      <Selector items={items} products={products} setProducts={setProducts}/>
      <Products products={products}/>
    </>
  )
}

export default App
