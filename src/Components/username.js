import React from 'react';
import {
  fade,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
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
}));



function Username() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Email or Username
        </InputLabel>
        <BootstrapInput id="bootstrap-input" />
      </FormControl>
     
    </form>
  );
}
export default Username;