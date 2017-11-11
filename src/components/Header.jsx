import React from 'react';

const Header = (props) => {
  return (
    <header className='background header-container' style={{backgroundImage: 'url(./../../webdev.jpg)', width: '100%', backgroundRepeat: 'no-repeat'}}>
      {props.styleHeader()}
    </header>
  )
}

export default Header;
