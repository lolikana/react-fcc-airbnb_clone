import React from 'react';
import AirBnbLogo from './../../images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={AirBnbLogo} alt="airbnb logo" className='nav--logo'/>
      <p></p>
    </nav>
  );
};

export default Navbar;
