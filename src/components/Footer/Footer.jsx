import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@import':'url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap")',
  footer: {
    fontFamily: 'Poppins, sans-serif',
    width: '100%',
    background: 'linear-gradient(105deg,#ddd 50%,#ccc 50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    margin: '20px 0px 0px',
    height:'auto',
    '& div': {
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center',
      color: '#666',
      margin:'16px 0px',
      '& a': {
        textDecoration: 'none',
        '&:visited': {
          color: '#666',
        },
        '&:hover': {
          color: '#999',
        },
        '&:link': {
          color: '#666',
        },
      }
    },
    '& p':{
      color:'#3c3c3c',
      fontStyle:'italic',
    }
  },

}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div>
        <span><a href="https://github.com/gn00667340/react-ecommerce">View Source on Github</a>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span><a href="https://www.cakeresume.com/street85240-da66d3">Go to My CakeResume</a>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span><a href="https://www.cakeresume.com/users/street85240/portfolio?ref=dashboard_navs_portfolio">Watch My Portfolio</a></span>
      </div>
      <p>2021 Design by Tyson Lin  </p>
    </div>
  )
}

export default Footer
