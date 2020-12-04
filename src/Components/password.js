import React from 'react';
import {
  fade,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },

  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    height: 30,
    width: 370,
    paddingLeft:8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button:{
    display: 'flex',
    position:"absolute",
    textDecoration:'none',
    marginTop:theme.spacing(3.5),
    marginLeft:theme.spacing(37),
    fontSize:16,
    fontFamily: 'Roboto',
    textTransform: 'none',
  },
  
}));



function Password() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
        Password
        </InputLabel>
        <BootstrapInput type="password" id="bootstrap-input" />
      
      <a href="#" color="primary" className={classes.button}>
        Forgot?
      </a>
      </FormControl>
    </form>
  );
}
export default Password;