import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../../../assets/main.css';
import AboutMe from '../AboutMe';
import Home from '../Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/:id" component={ AboutMe } />
  </Switch>
);

export default App;
