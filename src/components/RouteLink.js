import React from 'react';
// eslint-disable-next-line import/order
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Contact from '../screens/Contact';

export default function Header() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
