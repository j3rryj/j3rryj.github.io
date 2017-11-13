import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import Typed from 'typed.js';

class Home extends Component {
  componentDidMount() {
    let strings = [
                  "JERRY JONG.",
                  "DEVELOPER.",
                  "BLOGGER.",
                  "ENTREPENEUR."
                  ]
    const options = {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnMount() {
    this.typed.destroy();
  }

  render() {
    return(
      <div style={{textAlign: 'center', paddingTop: '18%'}}>
        <span style={{whiteSpace: 'pre', letterSpacing: '12px', color: 'white', margin: '0 auto', fontSize: '3.5em', fontWeight: '900'}} ref={(el) => { this.el = el; }}/><br/>
        <FlatButton href="https://www.dropbox.com/s/wulobj7z2wizjjg/Jerry%20Jong%20Resume.pdf?dl=0" labelStyle={{fontSize: '1em', color: 'white'}} label='CONTACT' style={{display: 'inline-block', border: '1px solid white', marginTop: '1%', marginRight: '1%'}}/>
        <FlatButton href="https://www.dropbox.com/s/wulobj7z2wizjjg/Jerry%20Jong%20Resume.pdf?dl=0" labelStyle={{fontSize: '1em', color: 'white'}} label='RESUME' style={{display: 'inline-block', border: '1px solid white', marginTop: '1%'}}/>
      </div>
    )
  }
}

export default Home;