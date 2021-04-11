import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  toolbar:theme.mixins.toolbar,
  content:{
    flexGrow:1,
    backgroundColor:theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      width: 940,
      margin: '0px auto',
      padding: '0px 16px',
    },
  },
  root:{
    flexGrow:1,
  }
}))