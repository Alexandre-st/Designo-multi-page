import React from 'react';
import { Link } from 'react-router-dom';

import CardPicture from '../../components/CardPicture/CardPicture';
import Links from '../../components/Links/Links';
import TalkAbout from '../../components/TalkAbout/TalkAbout';
import AirFilterPicture from '../../assets/app-design/desktop/image-airfilter.jpg';
import EyeCamPicture from '../../assets/app-design/desktop/image-eyecam.jpg';
import FaceItPicture from '../../assets/app-design/desktop/image-faceit.jpg';
import TodoPicture from '../../assets/app-design/desktop/image-todo.jpg';
import LoopstudiosPicture from '../../assets/app-design/desktop/image-loopstudios.jpg';

const AppDesign = () => {
  return (
    <main>
    <section className="web container">
        <div className="web-content">
          <h1>App Design</h1>
          <p className="text">
            Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
          </p>
        </div>
      </section>

      <section className="card container">
        <div className="card-container">
          <CardPicture 
            url={AirFilterPicture}
            name="Air filter"
            text="Solving the problem of poor indoor air quality by filtering the air"
          />
          <CardPicture 
            url={EyeCamPicture}
            name="EyeCam"
            text="Product that lets you edit your favorite photos and videos at any time"
          />
          <CardPicture 
            url={FaceItPicture}
            name="FaceIT"
            text="Get to meet your favorite internet superstar with the faceit app"
          />
          <CardPicture 
            url={TodoPicture}
            name="Todo"
            text="A todo app that features cloud sync with light and dark mode"
          />
          <CardPicture 
            url={LoopstudiosPicture}
            name="Loopstudios"
            text="A VR experience app made for Loopstudios"
          />
        </div>
      </section>
      <section className="link container">
        <Link to="/web-design" className="link-size">
          <Links 
            linkStyle="link-size-web" 
            title="Web Design" 
            text="View Projects"
          />
        </Link>
        <Link to="/graphic-design" className="link-size">
          <Links 
            linkStyle="link-size-graphic" 
            title="Graphic Design" 
            text="View Projects" 
            />
        </Link>
      </section>

      <TalkAbout />
    </main>
  );
}
 
export default AppDesign;