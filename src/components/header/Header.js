import React from 'react';
import img from '../../resources/img/hselogo.png';
import './header.scss';

function Header() {
  return (
    <div className="header">
   
      <img src={img} className="App-logo" alt="logo" />
    
  
    </div>
  );
}

export default Header;
