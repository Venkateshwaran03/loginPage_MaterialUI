import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Username from './username';
import Password from './password';
import SigninButton from './SigninButton';
import Icon from '@material-ui/core/Icon';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        paddingTop:100,        
      },
    signupbutton:{
        textDecoration:'none',
    },
    card:{
      minWidth:400,
      border:'1px solid silver',
    },
    icon:{
        paddingRight:5,
    },
  }));

function LoginPageLayout() {
    const classes = useStyles();
   
  return (
   
    <div className={classes.root} >
       <div className={classes.card} >
        <Icon><LocalGroceryStoreIcon className={classes.icon}/>Inpage Reviwer</Icon>
        <h1>Sign In</h1>
        <Username/>
        <Password/>
        <SigninButton/>
        <a href="#signup" className={classes.signupbutton}  >Don't have an account</a>
      </div>
    </div>
    
  );
}

export default LoginPageLayout;
