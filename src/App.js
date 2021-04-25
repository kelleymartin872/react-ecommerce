import React, { useState, useEffect } from 'react';
import { Products, Navbar, Selector, ImageCarousel } from './components';
//import from index.js 集中導入維持code整潔
import DataUsageSharpIcon from '@material-ui/icons/DataUsageSharp';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyle = makeStyles((theme) => ({
  "@import": 'url(https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap)',
  loading: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    display: 'flex',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
  },
  loadingIcon: {
    fontSize: '60px',
    animation: `$loading 2s infinite  ease`,
    color: 'rgb(255,160,122)',
  },
  '@keyframes loading': {
    '0%': {
      transform: 'rotate(0deg)',
      color: 'rgb(255,160,122)',
    },
    '33.3%': {
      transform: 'rotate(120deg)',
      color: 'rgb(0,191,255)',
    },
    '66.6%': {
      transform: 'rotate(240deg)',
      color: 'rgb(240,230,140)',
    },
    '100%': {
      transform: 'rotate(360deg)',
      color: 'rgb(255,160,122)',
    }
  },
  text: {
    fontFamily: 'Zen Dots, cursive',
    fontSize: '20px',
    color: 'gray',
    '& p': {
      display: 'inline-block',
      margin: '0px',
    }
  },
}));

const App = () => {
  const classes = useStyle();
  const apiUrl = 'https://mighty-tor-73123.herokuapp.com/products';
  const [allState, setAllState] = useState({
    items: [],
    products: [],
    isLoading: true
  });

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setAllState({
          items: res.data,
          products: res.data,
          isLoading: false
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
      {allState.isLoading ?
        <div className={classes.loading}>
          <DataUsageSharpIcon className={classes.loadingIcon} />
          <div className={classes.text}>
            <p>Waiting&nbsp;</p>
            <p>for&nbsp;</p>
            <p>Heruku&nbsp;</p>
            <p>to&nbsp;</p>
            <p>wake&nbsp;up...</p>
          </div>
        </div>
        :
        <>
          <Navbar />
          <ImageCarousel />
          <Selector setAllState={setAllState} allState={allState} />
          <Products products={allState.products} />
        </>
      }
    </>
  )
}

export default App
