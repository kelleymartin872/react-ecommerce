import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { AddShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { addCarting, shakeShake } from '../../../actions';
//useDispatch夾帶action發送到store
const useStyles = makeStyles(() => ({
  plusOne: {
    position: 'relative',
    '&:after': {
      content: "'+1'",
      position: 'absolute',
      animation: '$plus 0.5s',
      font: 'small-caps bold 24px sans-serif',
      color: 'orange',
    }
  },
  '@keyframes plus': {
    'from': {
      transform: 'translateY(-15px)',
      opacity: '1'
    },
    'to': {
      transform: 'translateY(-50px)',
      opacity: '0'
    }
  }
}));
const AddCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const classes = useStyles();
  const handleAddCart = () => {
    dispatch(shakeShake(true));
    dispatch(addCarting(product));
    setId(product.id)
  }
  return (
    <IconButton onClick={handleAddCart} className={id === product.id ? classes.plusOne : ''} onAnimationEnd={() => { setId() }}>
      <AddShoppingCart />
    </IconButton>
  )
}

export default AddCartButton

