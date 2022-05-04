import React from 'react';
import { Link } from 'react-router-dom';

import designoBlack from '../../assets/shared/desktop/logo-dark.png';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <Link to="/">
          <img className="logo" src={designoBlack} alt="Designo" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
          <Link to="/"><li className="li_nk">OUR COMPANY</li></Link>
          <Link to="/"><li className="li_nk">LOCATIONS</li></Link>
          <Link to="/"><li className="li_nk">CONTACT</li></Link>
          </ul>
        </nav>

        <Menu />
      </div>
    </header> 
  );
}
 
export default Header;