import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Article from 'components/pages/Article';

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/article/:id" exact component={Article} />
    </Switch>
  </BrowserRouter>
);
