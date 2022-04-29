import React from 'react';

import CellularPhone from '../../assets/home/desktop/image-hero-phone.png';
import CellularTablet from '../../assets/home/desktop/image-hero-tablet.png';
import CellularDesktop from '../../assets/home/desktop/image-hero-desktop.png';

const Home = () => {
  return ( 
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p className="text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <button className="button">Learn More</button>
        </div>
        <div className="hero-content-img">
          <picture>
            <source media="(min-width: 1064px)" srcSet={CellularDesktop} />
            <source media="(min-width: 768px)" srcSet={CellularTablet} />
            <img src={CellularPhone} alt="Cellular Frame" />
          </picture>
        </div>
      </div>
    </section>
  );
}
 
export default Home;