import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import logo from '../../assets/logo.png';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
import { shakeShake } from '../../actions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    width: '100%',
    padding: '0px',
    margin:'0px',
    height:'64px'
  },
  toolbar: {
    padding:'0px 0px',
    [theme.breakpoints.up('md')]: {
      width: 940,
      margin: '0px auto',
      padding: '0px',
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    padding:'1px',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    height:'50px',
    width:'50px',
    marginRight:'3px',
    padding:'3px',
  },
  image:{
    marginLeft:'10px',
    height:'40px',
    width:'40px',
  },
  shakeing:{
    animation:`$shaSha 300ms`,
    fontSize:'35px',
    color:'orange',
  },
  '@keyframes shaSha':{
    '0%':{
      color:'orange',
      fontSize:'35px',
    },
    '50%':{
      transform: 'rotate(-15deg)',
    },
    '75%':{
      transform: 'rotate(10deg)',
    },
    '100%':{
      transform: 'rotate(0deg)',
    },
  }
}));

const Navbar = () => {
  const cart = useSelector(state=>state.cartItems);
  const shakingAnimation = useSelector(state=>state.shaking);
  const dispatch = useDispatch();
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (open) => (e) => {
    setState({ ...state, right: open });
  };
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} className={classes.image} alt="Gigathumb"/>
          </Typography>
          <div className={classes.grow} />
            <IconButton className={classes.button} aria-label="Show cart items" coloe="inherit"  onClick={toggleDrawer(true)} >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCart className={shakingAnimation?classes.shakeing:''} onAnimationEnd={()=>{dispatch(shakeShake(false))}} />
              </Badge>
            </IconButton>
            <Sidebar toggleDrawer={toggleDrawer} state={state} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
