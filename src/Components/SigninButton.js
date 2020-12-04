import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow:'none',
    textTransform: 'none',
    fontSize: 20,
    position:"relative",
    borderRadius: 10,
    height: 45,
    width: 380,
    backgroundColor: '#0063cc',
    fontFamily: [
      'Roboto',
    ].join(','),
    
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  margin: {
    margin: theme.spacing(1),
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(3),
  },
}));


function SigninButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Sign In
      </BootstrapButton>
    </div>
  );
}
export default SigninButton;
