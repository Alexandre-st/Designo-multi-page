import React from 'react';
import { Link } from 'react-router-dom';

import CardPicture from '../../components/CardPicture/CardPicture';
import Links from '../../components/Links/Links';

import BrownPicture from '../../assets/graphic-design/desktop/image-change.jpg';
import BoxedPicture from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import SciencePicture from '../../assets/graphic-design/desktop/image-science.jpg';
import TalkAbout from '../../components/TalkAbout/TalkAbout';
import BackgroundImage from '../../assets/shared/desktop/bg-pattern-leaf.svg';

const GraphicDesign = () => {
  return ( 
    <main className="background">
      <section className="web container">
        <div className="web-content">
          <h1>Graphic Design</h1>
          <p className="small-text">
            We deliver eye-catching branding materials that are tailored to meet your business objectives.
          </p>
        </div>
      </section>
      <div className="background-image background-image-card">
          <img src={BackgroundImage} alt="Deco" />
      </div>

      <section className="card container">
        <div className="card-container">
          <CardPicture 
            url={BrownPicture}
            name="Tim Brown"
            text="A book cover designed for Tim Brown’s new release, ‘Change’"
          />
          <CardPicture 
            url={BoxedPicture}
            name="Boxed Water"
            text="A simple packaging concept made for Boxed Water"
          />
          <CardPicture 
            url={SciencePicture}
            name="Science!"
            text="A poster made in collaboration with the Federal Art Project"
          />
        </div>
      </section>

      <section className="link container">
        <Link to="/app-design" className="link-size">
          <Links 
            linkStyle="link-content-app"
            title="App Design" 
            text="View Projects" 
          />
        </Link>
        <Link to="/web-design" className="link-size">
          <Links 
            linkStyle="link-size-web" 
            title="Web Design" 
            text="View Projects"
          />
        </Link>
      </section>

      <TalkAbout />
    </main>
  );
}
 
export default GraphicDesign;