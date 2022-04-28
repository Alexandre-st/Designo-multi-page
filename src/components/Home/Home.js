import React from 'react';

import Cellular from '../../assets/home/desktop/image-hero-phone.png';

const Home = () => {
  return ( 
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <button className="button">Learn More</button>
        </div>
        <img className="hero-content-img" src={Cellular} alt="Cellular Frame" />
      </div>
    </section>
  );
}
 
export default Home;