import React from 'react';
import { Link } from 'react-router-dom';

import designoBlack from '../../assets/shared/desktop/logo-dark.png';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <img className="header-logo" src={designoBlack} alt="Designo" />

        <nav className="header-nav">
          <ul className="header-nav-list">
          <Link to="/"><li>OUR COMPANY</li></Link>
          <Link to="/"><li>LOCATIONS</li></Link>
          <Link to="/"><li>CONTACT</li></Link>
          </ul>
        </nav>

        <Menu />
      </div>
    </header> 
  );
}
 
export default Header;