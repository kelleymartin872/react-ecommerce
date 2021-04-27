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
      animation: '$plus 0.7s ease-in-out',
      font: 'small-caps bold 24px sans-serif',
      color: 'orange',
    }
  },
  '@keyframes plus': {
    '0%': {
      transform: 'translateY(-15px)',
      opacity: '1'
    },
    '100%': {
      transform: 'translateY(-50px)',
      opacity: '0'
    },
  },
  box: {
    position: 'relative',
    transformStyle: 'preserve-3d',
    height:'25px',
    width:'25px',
    '& div': {
      position: 'absolute',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      transition: 'all 0.7s',
      '&:nth-of-type(1)': {
        transform: 'rotateX(-90deg) translateZ(25px)',
        backfaceVisibility: 'hidden'
      },
      '&:nth-of-type(2)': {
        transform: 'translateZ(25px)',
        backfaceVisibility: 'hidden'
      }
    }
  },
  boxAnimation: {
    animation: '$flash 0.7s ease-in-out',
  },
  '@keyframes flash': {
    '"0%"': { transform: 'rotateX(0)' },
    '60%': { transform: 'rotateX(105deg)' },
    '90%': { transform: 'rotateX(90deg)' },
    '100%': { transform: 'rotateX(90deg)' },
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
    <IconButton onClick={handleAddCart} className={id === product.id ? classes.plusOne : ''}>
      <div className={`${classes.box} ${id === product.id ? classes.boxAnimation : ''}`} onAnimationEnd={() => { setId() }}>
        
        <div><AddShoppingCart /></div>
        <div><AddShoppingCart /></div>
        <AddShoppingCart style={{ opacity: '0' }} />
      </div>

    </IconButton>
  )
}

export default AddCartButton

