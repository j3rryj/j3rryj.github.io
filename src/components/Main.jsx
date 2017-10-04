import React, { Component } from 'react';

import routes from './routes/route.js';

class Main extends Component {
  render() {
    return(
      <div className='background' style={{backgroundImage: 'url(./../../webdev.jpg)', height: '640px'}}>
        {this.props.styleHeader()}
        {routes}
      </div>
    )
  }
}

export default Main;