import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  option: {
    display: 'flex',
    margin: '0px auto',
    [theme.breakpoints.up('md')]: {
      width: 940,
      margin: '0px auto',
      padding: '0px 16px',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Selector = ({ setAllState, allState }) => {
  const classes = useStyles();
  const [brandOpen, setBrandOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectBrand, setSelectBrand] = useState('');
  const [sortPrice, setSortPrice] = useState('');
  const items = allState.items;
  const products = allState.products;

  const brandChange = (event) => {
    setSelectBrand(event.target.value);
    if (event.target.value === 'all') {
      setAllState({ ...allState, products: items });
      setSortPrice('');
    } else {
      setAllState({ ...allState, products: items.filter(product => product.brand === event.target.value) });
      setSortPrice('');
    }
  };
  const sortChange = (event) => {
    setSortPrice(event.target.value)
    switch (event.target.value) {
      default:
        const normal = [...products].sort((a, b) => a.id - b.id)
        setAllState({ ...allState, products: normal })
        break;
      case ('lowToHigh'):
        const low = [...products].sort((a, b) => a.price - b.price);
        setAllState({ ...allState, products: low })
        break;
      case ('highToLow'):
        const high = [...products].sort((a, b) => b.price - a.price)
        setAllState({ ...allState, products: high })
        break;
    }
  }
  const brand_Close = () => {
    setBrandOpen(false);
  };

  const brand_Open = () => {
    setBrandOpen(true);
  };
  const sort_Close = () => {
    setSortOpen(false);
  };

  const sort_Open = () => {
    setSortOpen(true);
  };

  return (
    <div className={classes.option}>
      <div style={{ marginLeft: 'auto' }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Select brand</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={brandOpen}
            onClose={brand_Close}
            onOpen={brand_Open}
            value={selectBrand}
            onChange={brandChange}
          >
            <MenuItem value='all'>
              <em>All brand</em>
            </MenuItem>
            <MenuItem value='+NICHE'>+NICHE</MenuItem>
            <MenuItem value='OWNDAYS'>OWNDAYS</MenuItem>
            <MenuItem value='John Dillinger'>John Dillinger</MenuItem>
            <MenuItem value='Memory Metal'>Memory Metal</MenuItem>
            <MenuItem value='AIR Ultem Classic'>AIR Ultem Classic</MenuItem>
            <MenuItem value='FUWA CELLU'>FUWA CELLU</MenuItem>
            <MenuItem value='lillybell'>lillybell</MenuItem>
            <MenuItem value='ECO2XY'>ECO2XY</MenuItem>
            <MenuItem value='Junni'>Junni</MenuItem>
            <MenuItem value='Graph Belle'>Graph Belle</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Sort by price</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={sortOpen}
            onClose={sort_Close}
            onOpen={sort_Open}
            value={sortPrice}
            onChange={sortChange}
          >
            <MenuItem value=''>
              <em>none</em>
            </MenuItem>
            <MenuItem value='lowToHigh'>Low → High</MenuItem>
            <MenuItem value='highToLow'>High → Low</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Selector;