import React, { useState, useEffect, useRef } from 'react'
import image1 from '../../assets/carousel-1.jpg'
import image2 from '../../assets/carousel-2.jpg'
import image3 from '../../assets/carousel-3.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { ChevronRightSharp, ChevronLeftSharp } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imgCarousel: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    marginTop:'64px',
    animation:'$EaseIn 1s',
    [theme.breakpoints.up('md')]: {
      margin: '64px auto 0px',
      padding: '0px 16px',
      display: 'flex',
      position: 'relative',
      overflow:'hidden',
      height: 521,
      width: 940,
    },
  },
  '@keyframes EaseIn': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    }
  },
  leftIcon: {
    position: 'absolute',
    top: '50%',
    left: '0px',
    zIndex:200,
    transform: 'translate(0px,-50%)',
  },
  rightIcon: {
    position: 'absolute',
    top: '50%',
    right: '0px',
    zIndex:200,
    transform: 'translate(0px,-50%)'
  },
  image: {
    width: '100%',
    position:'absolute',
    top:'0px',
    left:'0px',
  },
  slide: {
    opacity: '0.1',
    transition: '1s ease-in-out',
  },
  slideActive: {
    opacity: '1',
    transition: '1s ease'
  },
}))

const ImageCarousel = () => {
  const classes = useStyles()
  const [counter, setCounter] = useState(0)
  const timeoutRef = useRef(null)

  const nextImage = () => {
    setCounter(counter === items.length - 1 ? 0 : counter + 1);
  }
  const prevImage = () => {
    setCounter(counter === 0 ? items.length - 1 : counter - 1);
  }
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  const items = [
    {
      name: "Random Name #1",
      image: image1,
    },
    {
      name: "Random Name #2",
      image: image2
    },
    {
      name: "Random Name #2",
      image: image3
    }
  ]
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCounter((prevCounter) => (
        prevCounter === items.length - 1 ? 0 : prevCounter + 1
      ))
    }, 4000);
    return () => {
      resetTimeout();
    };
  }, [counter, items.length])
  return (
    <div className={classes.imgCarousel}>
      <IconButton  onClick={prevImage} className={classes.leftIcon} size='medium' >
        <ChevronLeftSharp/>
      </IconButton>
      <IconButton onClick={nextImage} className={classes.rightIcon} size='medium'>
        <ChevronRightSharp/>
      </IconButton>
      <img src={image1} style={{width:'100%',opacity:'0'}} alt="empty"></img>
      {items.map((item, index) => (
        <div className={index === counter ? classes.slideActive : classes.slide} key={index} >
          {index === counter && (<img src={item.image} className={classes.image} alt={item.name} />)}
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel
