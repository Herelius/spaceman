/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/order
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Home from '../screens/Home';
import Contact from '../screens/Contact';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    margin: 50,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
