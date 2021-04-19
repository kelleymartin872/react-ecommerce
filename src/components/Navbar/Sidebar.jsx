import React from 'react';
import Cartlist from './Cartlist';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles((theme) => ({
  side: {
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: 450,
    },
  },
}));

const Sidebar = ({toggleDrawer,state}) => {
  
  const classes = useStyles();
  

  return (
    <div >
      <Drawer anchor='right' open={state.right} onClose={toggleDrawer(false)} classes={{ paper: classes.side, }} >
        <Cartlist toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export default Sidebar;