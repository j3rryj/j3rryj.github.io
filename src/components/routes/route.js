// routes.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './../Home.jsx';
import Resume from './../Resume.jsx';
import Services from './../Services.jsx';
import Portfolio from './../Portfolio.jsx';
import Contact from './../Contact.jsx';
import Blog from './../Blog.jsx';
import About from './../About.jsx';

const routes = (
  <div>
    <Route exact path = '/' component={Home}/>
    <Route exact path = '/home' component={Home}/>
    <Route exact path = '/blog' component={Blog}/>
    <Route exact path = '/about' component={About}/>
    <Route exact path = '/resume' component={Resume}/>
    <Route exact path = '/services' component={Services}/>
    <Route exact path = '/portfolio' component={Portfolio}/>
    <Route exact path = '/contact' component={Contact}/>
  </div>
)

export default routes;