import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../../actions';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import emptyCart from '../../assets/empty.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  list: {
    width: 500,
    height:'90%',
  },
  emptycart:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
  }
});
const Cartlist = ({ toggleDrawer }) => {
  const cart = useSelector(state => state.cartItems);
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = () => {
    if (cart.length === 0) {
      return "刺激經濟呀!";
    } else {
      const toTo = cart.map(product => (product.price) * (product.quantity)).reduce((a, b) => a + b);
      return toTo;
    }
  }
  const totalCount = () => {
    if (cart.length === 0) {
      return 0;
    } else {
      const toTocount = cart.map(product => product.quantity).reduce((a, b) => a + b);
      return toTocount;
    }
  }
  return (
    <div className={classes.list}>
      <IconButton>
        <ChevronRightIcon onClick={toggleDrawer(false)} />
      </IconButton><br />
      {cart.length !== 0 ? 
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <h1>購物車</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" />
              <TableCell align="center">商品圖片</TableCell>
              <TableCell align="center">商品名稱</TableCell>
              <TableCell align="center">價格</TableCell>
              <TableCell align="center">數量</TableCell>
              <TableCell align="center">小計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product, index) => (
              <TableRow key={product.ip}>
                <TableCell align="center">
                  <IconButton onClick={() => dispatch(removeItem(index))}><DeleteIcon /></IconButton>
                </TableCell>
                <TableCell align="center">
                  <img style={{ height: "50px" }} src={product.image} />
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => { dispatch(increment(index)) }}><KeyboardArrowUpIcon fontSize="small" /></IconButton><br />
                  {product.quantity}<br />
                  <IconButton onClick={() => { dispatch(decrement(index)) }}><KeyboardArrowDownIcon fontSize="small" /></IconButton>
                </TableCell>
                <TableCell align="center">{(product.quantity) * (product.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} />
              <TableCell colSpan={2} align="left">總共 - </TableCell>
              <TableCell align="center">{totalCount()} 件</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} />
              <TableCell colSpan={2} align="left">總金額 - </TableCell>
              <TableCell align="center">{total()} 元</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      :
      <div className={classes.emptycart}>
        <img src={emptyCart} alt="empty-cart"/>
      </div>
      }
    </div>
  );
}

export default Cartlist;
