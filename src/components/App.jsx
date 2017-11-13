import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../styles/App.css';
import Header from './Header.jsx';
import routes from './routes/route.js';
import Main from './Main.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.styleHeader = this.styleHeader.bind(this);
  }

  styleHeader() {
    let route = window.location.href.split('/').pop();
    if (route === 'home' || route === '') {
      return (
        <div>
          <Link to='/'>
            <button className="header-btn header-btn-active">Home</button>
          </Link>
          <Link to='/portfolio'>
            <button className="header-btn">Portfolio</button>
          </Link>
          <Link to='/blog'>
            <button className="header-btn">Blog</button>
          </Link>
        </div>
      )
    } else if (route === 'portfolio') {
      return (
        <div>
          <Link to='/'>
            <button className="header-btn">Home</button>
          </Link>
          <Link to='/portfolio'>
            <button className="header-btn header-btn-active">Portfolio</button>
          </Link>
          <Link to='/blog'>
            <button className="header-btn">Blog</button>
          </Link>
        </div>
      )
    } else if (route === 'blog') {
      return (
        <div>
          <Link to='/'>
            <button className="header-btn">Home</button>
          </Link>
          <Link to='/portfolio'>
            <button className="header-btn">Portfolio</button>
          </Link>
          <Link to='/blog'>
            <button className="header-btn header-btn-active">Blog</button>
          </Link>
        </div>
      );
    };
  };

  render() {
    return(
      <div className="app-container">
        <Header styleHeader={this.styleHeader} routes={routes} />
        <Main routes={routes} />
      </div>
    )
  }
}

export default App;