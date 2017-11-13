import React, { Component } from 'react';

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
      <div className="home-div">
        <span className="typer" ref={(el) => { this.el = el; }}/><br/>
        <div className="home-div-contact">
        <a className="home-div-contact-btn" href="https://www.dropbox.com/s/wulobj7z2wizjjg/Jerry%20Jong%20Resume.pdf?dl=0">Contact</a>
        <a className="home-div-contact-btn" href="https://www.dropbox.com/s/wulobj7z2wizjjg/Jerry%20Jong%20Resume.pdf?dl=0">Resume</a>
        </div>
      </div>
    )
  }
}

export default Home;