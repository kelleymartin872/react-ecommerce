import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../../actions';
import emptyCart from '../../assets/empty.png';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, IconButton } from '@material-ui/core';
import { MonetizationOn, ShoppingCartRounded, KeyboardArrowDown, KeyboardArrowUp, ChevronRight, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
  },
  list: {
    width: '100%',
    height: '90%',
  },
  button: {
    width: 100,
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  emptycart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
}));
const Cartlist = ({ toggleDrawer }) => {
  const cart = useSelector(state => state.cartItems);
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = () => {
    if (cart.length === 0) {
      return 0;
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
  const cashFlow = () => {
    alert(`您購買的件數為${totalCount()}件\r總金額為${total()}元`)
  }
  return (
    <div className={classes.list}>
      <IconButton onClick={toggleDrawer(false)}>
        <ChevronRight />
      </IconButton>
      {cart.length !== 0 ?
        <>
          <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="spanning table" >
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <h1><ShoppingCartRounded />購物車</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell align="left" style={{ padding: 0 }}>商品資訊</TableCell>
                  <TableCell align="center" style={{ padding: 0 }}>數量</TableCell>
                  <TableCell align="center">小計</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell align="center"  style={{ padding: 0 }}>
                      <IconButton onClick={() => dispatch(removeItem(index))}><Delete /></IconButton>
                    </TableCell>
                    <TableCell align="left" style={{ padding: 0 }}>
                      <div style={{ fontSize: 14, display: 'flex' }}><img style={{ height: "40px" }} src={product.image} alt={product.name} /><p style={{ marginLeft: 'auto' }}>${product.price}</p></div>
                      <p style={{ margin: 0 }}>{product.name}</p>
                    </TableCell>
                    <TableCell align="center" style={{ padding: 0 }}>
                      <IconButton onClick={() => { dispatch(increment(index)) }}><KeyboardArrowUp fontSize="small" /></IconButton><br />
                      {product.quantity}<br />
                      <IconButton onClick={() => { dispatch(decrement(index)) }}><KeyboardArrowDown fontSize="small" /></IconButton>
                    </TableCell>
                    <TableCell align="center">{(product.quantity) * (product.price)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell colSpan={1} align="center">共</TableCell>
                  <TableCell align="center">{totalCount()} 件</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell colSpan={1} align="center" style={{ padding: 0 }}>總金額</TableCell>
                  <TableCell align="center">{total()} 元</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ display: 'flex' }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<MonetizationOn />}
              onClick={cashFlow}
            >
              結帳
            </Button>
          </div>
        </>
        :
        <div className={classes.emptycart}>
          <img src={emptyCart} alt="empty-cart" />
        </div>
      }
    </div>
  );
}

export default Cartlist;
