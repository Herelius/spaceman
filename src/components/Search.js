import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField id="standard-basic" label="Standard" />
      <TextField id="standard-basic" label="Standard" />
      <TextField id="standard-basic" label="Standard" />
    </form>
  );
}
