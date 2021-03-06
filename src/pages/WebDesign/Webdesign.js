import React from 'react';
import { Link } from 'react-router-dom';

import Links from '../../components/Links/Links';

import CardPicture from '../../components/CardPicture/CardPicture';
import ExpressProject from '../../assets/web-design/desktop/image-express.jpg';
import TransferProject from '../../assets/web-design/desktop/image-transfer.jpg';
import PhotonProject from '../../assets/web-design/desktop/image-photon.jpg';
import BuilderProject from '../../assets/web-design/desktop/image-builder.jpg';
import BlogRProject from '../../assets/web-design/desktop/image-blogr.jpg';
import CampProject from '../../assets/web-design/desktop/image-camp.jpg';
import TalkAbout from '../../components/TalkAbout/TalkAbout';
import BackgroundImage from '../../assets/shared/desktop/bg-pattern-leaf.svg';

const WebDesign = () => {
  return ( 
    <main className="background">
      <section className="web container">
        <div className="web-content">
          <h1>Web Design</h1>
          <p className="text">
            We build websites that serve as powerful marketing tools and bring memorable brand experiences.
          </p>
        </div>
      </section>
      <div className="background-image background-image-card">
          <img src={BackgroundImage} alt="Deco" />
      </div>

      <section className="card container">
        <div className="card-container">
          <CardPicture 
            url={ExpressProject} 
            name="Express"
            text="A multi-carrier shipping website for ecommerce businesses"
          />
          <CardPicture 
            url={TransferProject}
            name="transfer"
            text="Site for low-cost money transfers and sending money within seconds"
          />
          <CardPicture 
            url={PhotonProject}
            name="Photon"
            text="A state-of-the-art music player with high-resolution audio and DSP effects"
          />
          <CardPicture 
            url={BuilderProject}
            name="Builder"
            text="Connects users with local contractors based on their location"
          />
          <CardPicture 
            url={BlogRProject}
            name="BlogR"
            text="Blogr is a platform for creating an online blog or publication"
          />
          <CardPicture 
            url={CampProject}
            name="Camp"
            text="Get expert training in coding, data, design, and digital marketing"
          />
        </div>
      </section>
      <section className="link container">
        <Link className="link-size" to="/graphic-design">
          <Links linkStyle="link-content-graphic" title="Graphic Design" text="View Projects" />
        </Link>
        <Link className="link-size" to="/app-design">
          <Links linkStyle="link-content-app" title="App Design" text="View Projects" />
        </Link>
      </section>

      <TalkAbout />
    </main>
  );
}
 
export default WebDesign;