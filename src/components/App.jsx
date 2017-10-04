import React, { Component } from 'react';
import './../styles/App.css';
import Main from './Main.jsx';

import axios from 'axios';

import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

////// import icons

class App extends Component {
  constructor(props) {
    super(props);
    this.styleHeader = this.styleHeader.bind(this);
  }

  styleHeader() {
    let route = window.location.href.split('/').pop();
    if (route === 'home' || route === '') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link style={{margin: '0 auto', padding: 0}} to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '4%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'portfolio') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'blog') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'about') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'services') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'resume') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
        </header>
      )
    } else if (route === 'contact') {
      return(
        <header style={{margin: '0 auto'}}>
          <Link to='/home'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='home' style={{marginLeft: '46%', width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/portfolio'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='portfolio' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/blog'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='blog' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/about'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='about' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/services'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='services' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/> 
          </Link>
          <Link to='/resume'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='resume' style={{width: '6%', margin: '0 auto', display: 'inline-block'}}/>
          </Link>
          <Link to='/contact'>
            <FlatButton labelStyle={{color: 'white', letterSpacing: '3px', fontSize: '.6em', height: '30px', padding: 0, margin: '0 auto'}} hoverColor='none' label='contact' style={{width: '6%', margin: '0 auto', display: 'inline-block', border: '3px solid white'}}/>
          </Link>
        </header>
      )
    }
  }

  render() {
    return(
      <div>
        <Main toggleHeader={this.toggleHeader} styleHeader={this.styleHeader}/>
      </div>
    )
  }
}

export default App;