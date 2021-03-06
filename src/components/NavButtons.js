import React, {useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TweenMax, Power3 } from 'gsap';
 
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavButtons() {
  let logInButt = useRef()
  let signButt = useRef()
  let logOutButt = useRef()

  useEffect(() => {
    TweenMax.to(
      logInButt,
      3,
      {
        opacity:1,
        x:-30,
        ease: Power3.easeOut
      }
      )},[])

  useEffect(() => {
    TweenMax.to(
      signButt,
      3,
      {
        opacity:1,
        x:30,
        ease: Power3.easeOut
      }
      )},[])

  useEffect(() => {
    TweenMax.to(
      logOutButt,
      2,
      {
        opacity:1,
        x:100,
        ease: Power3.easeOut
      }
      )},[])

  const classes = useStyles();

  return (
    <div   className={classes.root}>
      <Button className="topNav"ref={el => {logInButt = el }}color="primary" href='/login'>Log In</Button>
      <Button className="topNav" ref={el => {signButt = el }}color="primary" href='/signup'>Sign Up</Button>
      <Button className="topNav" ref={el => {logOutButt = el }}color="primary" href='/logout'>Log Out</Button>
    </div>
  );
}

