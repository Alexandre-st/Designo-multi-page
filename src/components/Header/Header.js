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
            <li className="li_nk"><Link to="/about">OUR COMPANY</Link></li>
            <li className="li_nk"><Link to="/location">LOCATIONS</Link></li>
            <li className="li_nk"><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        <Menu />
      </div>
    </header> 
  );
}
 
export default Header;