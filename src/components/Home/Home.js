import React from 'react';

import CellularPhone from '../../assets/home/desktop/image-hero-phone.png';
import CellularTablet from '../../assets/home/desktop/image-hero-tablet.png';
import CellularDesktop from '../../assets/home/desktop/image-hero-desktop.png';
import Link from '../Links/Link';

const Home = () => {
  return ( 
    <main>
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p className="text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className="button">Learn More</button>
          </div>
          <picture className="hero-content-img">
            <source srcSet={CellularDesktop} media="(min-width: 1024px)" />
            <source srcSet={CellularTablet}  media="(min-width: 768px)" />
            <img src={CellularPhone} alt="Cellular Frame" />
          </picture>
        </div>
      </section>

      <section className="link container">
        <Link linkStyle="link-content-web" title="Web Design" text="View Projects" />
        <div className="link-cut">
          <Link linkStyle="link-content-app" title="App Design" text="View Projects" />
          <Link linkStyle="link-content-graphic" title="Graphic Design" text="View Projects" />
        </div>
      </section>
    </main>
  );
}
export default Home;