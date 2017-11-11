// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import Home from './../Home.jsx';
import Portfolio from './../Portfolio.jsx';
import Blog from './../Blog.jsx';

const routes = (
  <div>
    <Route exact path = '/' component={Home}/>
    <Route exact path = '/home' component={Home}/>
    <Route exact path = '/blog' component={Blog}/>
    <Route exact path = '/portfolio' component={Portfolio}/>
  </div>
)

export default routes;