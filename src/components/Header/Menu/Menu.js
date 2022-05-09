import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import hamburgerMenu from '../../../assets/shared/mobile/icon-hamburger.svg';
import closeMenu from '../../../assets/shared/mobile/icon-close.svg';

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  }
  return ( 
    <div className="header-menu" onClick={openMenu}>
      { !menu && <img className="header-hamburger" src={hamburgerMenu} alt="Open the menu" /> }
      { menu && 
        <>
          <img className="header-close" src={closeMenu} alt="Close the Menu" />
          <div className="nav">
            <nav>
            <ul className="nav-list">
              <Link to="/about">
                <li>OUR COMPANY</li>
              </Link>
              <Link to="/location">
                <li>LOCATIONS</li>
              </Link>
              <Link to="/">
                <li>CONTACT</li>
              </Link>
            </ul>
            </nav>
          </div>
        </>
      }
    </div>
  );
}
 
export default Menu;