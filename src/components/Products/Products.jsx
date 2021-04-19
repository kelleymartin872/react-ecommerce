import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  toolbar:theme.mixins.toolbar,
  content:{
    flexGrow:1,
    backgroundColor:theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      width: 940,
      margin: '0px auto',
      padding: '0px 16px',
    },
  },
  root:{
    flexGrow:1,
  },
}));

const Products = ({products}) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={2}>
        {products.map((product,index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={product.name}>
                <Product product={product} index={index} />
            </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
