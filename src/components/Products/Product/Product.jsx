import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCartButton from './AddCartButton';
const Product = ({ product, index }) => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      animation: '$app 600ms ease',
      animationDelay: `${index * 80}ms`,
      WebkitAnimationFillMode: 'backwards',
      transition:'400ms ease',
      '&:hover':{
        transform:'scale(1.04)'
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
    },
  }));
  const classes = useStyles();
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
      <CardActions disableSpacing className={classes.cardActions}>
        <AddCartButton product={product}/>
      </CardActions>
    </Card>

  )
}

export default Product
