import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
// import store from '../../store';
import { useSelector } from 'react-redux';
//取出store裡的productReducer的方法


const Products = () => {
  const products = useSelector(state=>state.productsReducer)
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
