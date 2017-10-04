import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <div style={{textAlign: 'center', width: '100%', height: '400px', marginTop: '10%'}}>
          <p style={{marginLeft: '23%', marginTop: '18%', fontSize: '3em', width: '54%', fontWeight: 900, letterSpacing: '6px'}}>MY PASSIONS AND PERSONALITY</p>
        </div>
        <p style={{color: 'black'}}>A few fun facts about myself</p><hr width='70%'/>
      </div>
    )
  }
}

export default About;