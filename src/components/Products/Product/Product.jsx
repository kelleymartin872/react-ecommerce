import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addCarting, shakeShake } from '../../../actions';
//useDispatch夾帶action發送到store

const Product = ({ product, index }) => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      animation: '$app 600ms ease',
      animationDelay: `${index * 80}ms`,
      WebkitAnimationFillMode: 'backwards',
      '&:hover': {
        opacity: '1',
      }
    },
    '@keyframes app': {
      '0%': {
        opacity: '0',
        transform: 'translateY(80px)',
      },
      '60%': {
        opacity: '1',
        transform: 'translateY(-10px)',
      },
      '100': {
        transform: 'translateY(0px)',
        opacity: '1',
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    }
  }));
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} onClick={() => dispatch(addCarting(product))}>
        <IconButton onClick={()=>{dispatch(shakeShake(true))}}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

  )
}

export default Product
