import React from 'react';
import { Link } from 'react-router-dom';

import FooterLogo from "../../assets/shared/desktop/logo-light.png";
import FacebookLogo from "../../assets/shared/desktop/icon-facebook.svg";
import YoutubeLogo from "../../assets/shared/desktop/icon-youtube.svg";
import TwitterLogo from "../../assets/shared/desktop/icon-twitter.svg";
import PinterestLogo from "../../assets/shared/desktop/icon-pinterest.svg";
import InstagramLogo from "../../assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-header">
          <Link to="/">
            <img className="logo" src={FooterLogo} alt="Designo" />
          </Link>
          <div className="footer-header-link">
            <Link to="/about" className="li_nk">OUR COMPANY</Link>
            <Link to="/location" className="li_nk">LOCATIONS</Link>
            <Link to="/contact" className="li_nk">CONTACT</Link>
          </div>
        </div>
        <div className="footer-border"></div>
        <div className="footer-content">
          <div className="footer-content-right">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="footer-content-left">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="footer-content-link">
            <img src={FacebookLogo} alt="Facebook" />
            <img src={YoutubeLogo} alt="Youtube" />
            <img src={TwitterLogo} alt="Twitter" />
            <img src={PinterestLogo} alt="Pinterest" />
            <img src={InstagramLogo} alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;