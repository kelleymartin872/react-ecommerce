import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import logo from '../../assets/logo.png';
import useStyles from './styles';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const cart = useSelector(state=>state.cartItems)
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} height="40px" className={classes.image} alt="Gigathumb"/>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" coloe="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <Sidebar />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
