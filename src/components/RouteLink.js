import React from 'react';
// eslint-disable-next-line import/order
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Contact from '../screens/Contact';

export default function Header() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
