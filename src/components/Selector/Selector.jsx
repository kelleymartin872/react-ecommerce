import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  option: {
    display: 'flex',
    marginTop: '90px',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 940,
      margin: '90px auto 0px',
      padding: '0px 16px',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Selector = ({ items, products, setProducts }) => {
  const classes = useStyles();
  const [brandOpen, setBrandOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectBrand, setSelectBrand] = useState('')
  const [sortPrice, setSortPrice] = useState('')

  const handleChange = (event) => {
    setSelectBrand(event.target.value)
    if (event.target.value === 'all') {
      setProducts(items);
      setSortPrice('');
    } else {
      setProducts(items.filter(product => product.brand === event.target.value));
      setSortPrice('');
    }
  };
  const sorter = (event) => {
    setSortPrice(event.target.value)
    switch (event.target.value) {
      default:
        const normal = [...products].sort((a, b) => a.id - b.id)
        setProducts(normal)
        break;
      case ('lowToHigh'):
        const low = [...products].sort((a, b) => a.price - b.price);
        setProducts(low)
        break;
      case ('highToLow'):
        const high = [...products].sort((a, b) => b.price - a.price)
        setProducts(high)
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
          <InputLabel id="demo-controlled-open-select-label">依品牌排序</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={brandOpen}
            onClose={brand_Close}
            onOpen={brand_Open}
            value={selectBrand}
            onChange={handleChange}
          >
            <MenuItem value='all'>
              <em>全部品牌</em>
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
          <InputLabel id="demo-controlled-open-select-label">依價格排序</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={sortOpen}
            onClose={sort_Close}
            onOpen={sort_Open}
            value={sortPrice}
            onChange={sorter}
          >
            <MenuItem value='all'>
              <em>--------</em>
            </MenuItem>
            <MenuItem value='lowToHigh'>低→高</MenuItem>
            <MenuItem value='highToLow'>高→低</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Selector;