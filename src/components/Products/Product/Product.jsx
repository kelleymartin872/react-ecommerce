import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { addCarting } from '../../../actions';
import { useDispatch,useSelector } from 'react-redux';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartItems);
  
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>dispatch(addCarting(product))}
        disabled={cart.find(item => item.id === product.id)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
