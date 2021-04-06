import React, { useState, useEffect } from 'react';
import Cartlist from './Cartlist';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
  sideBar: {
    minWidth: "320px",
  },
});

const Sidebar = () => {
  const [state, setState] = useState({ right: false });
  const classes = useStyles();
  const toggleDrawer = (open) => (e) => {
    setState({ ...state, right: open });
  };
    

  return (
    <div >
      <ShoppingCart onClick={toggleDrawer(true)} />
      <Drawer anchor='right' open={state.right} onClose={toggleDrawer(false)} className={classes.sideBar}>
        <Cartlist toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export default Sidebar;