import React from 'react';
import { Link } from 'react-router-dom';

import CellularPhone from '../../assets/home/desktop/image-hero-phone.png';
import CellularTablet from '../../assets/home/desktop/image-hero-tablet.png';
import CellularDesktop from '../../assets/home/desktop/image-hero-desktop.png';
import Passionate from '../../assets/home/desktop/illustration-passionate.svg';
import Resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import Friendly from '../../assets/home/desktop/illustration-friendly.svg';
import Links from '../../components/Links/Links';
import TalkAbout from '../../components/TalkAbout/TalkAbout';
import BackgroundImageBotoom from '../../assets/shared/desktop/bg-pattern-leaf.svg';

const Home = () => {
  return ( 
    <main className="background ">
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p className="small-text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className="button">Learn More</button>
          </div>
          <picture className="hero-content-img">
            <source srcSet={CellularDesktop} media="(min-width: 1024px)" />
            <source srcSet={CellularTablet}  media="(min-width: 768px)" />
            <img src={CellularPhone} alt="Cellular Frame" />
          </picture>
        </div>
      </section>
        <div className="background-image background-image-top">
          <img src={BackgroundImageBotoom} alt="Deco" />
        </div>

      {/* Link Part */}
      <section className="link container">
        <Link to="/web-design" style={{ flex : "2" }}>
          <Links linkStyle="link-content-web" title="Web Design" text="View Projects" />
        </Link>
        <div className="link-cut" style={{ flex : "2" }}>
          <Link to="/app-design">
            <Links linkStyle="link-content-app" title="App Design" text="View Projects" />
          </Link>
          <Link to="/graphic-design">
            <Links linkStyle="link-content-graphic" title="Graphic Design" text="View Projects" />
          </Link>
        </div>
      </section>

      {/* Work Part */}
      <section className="work background">
        <div className="work-container container">
          <div className="work-content">
          <div className="work-content-img">
            <div className="work-img-passionate">
              <img src={Passionate} alt="Passionate job" />
            </div>
          </div>
          <div className="work-content-text">
            <h3>PASSIONATE</h3>
            <p className="text">
              Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
            </p>
          </div>
          </div>
          <div className="work-content">
          <div className="work-content-img">
            <div className="work-img-resourceful">
              <img src={Resourceful} alt="Resourceful approach" />
            </div>
          </div>
          <div className="work-content-text">
            <h3>RESOURCEFUL</h3>
            <p className="text">
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
          </div>
          <div className="work-content">
            <div className="work-content-img">
              <div className="work-img-friendly">
                <img src={Friendly} alt="Friendly share" />
              </div>
            </div>
            <div className="work-content-text">
              <h3>FRIENDLY</h3>
              <p className="text">
                We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
        <div className="background-image background-image-bottom">
          <img src={BackgroundImageBotoom} alt="Deco" />
        </div>
      </section>

      {/* Talk About Part */}
      <TalkAbout />
    </main>
  );
}
export default Home;