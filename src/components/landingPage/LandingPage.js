import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 12
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function LandingPage() {
    const classes = useStyles();

  return (
    <div className={classes.root}>

  </div>
  );
  
}
export default LandingPage;
