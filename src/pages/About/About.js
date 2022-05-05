import React from 'react';

import TalkAbout from '../../components/TalkAbout/TalkAbout';
import TeamWorkPicture from '../../assets/about/mobile/image-about-hero.jpg';
import WomanPicture from '../../assets/about/mobile/image-world-class-talent.jpg';

const About = () => {
  return ( 
    <main>
      <section className="about container">
        <div className="about-header">
          <div className="about-header-img">
            <img src={TeamWorkPicture} alt="Team work" />
          </div>
          <div className="about-header-text">
            <h1>About Us</h1>
            <p className="small-text">
              Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="infos container">
        <div className="infos-content">
          <div className="infos-content-img">
            <img src={WomanPicture} alt="Woman stand in front of a wall" />
          </div>
          <div className="infos-content-text">
            <h2>World-class talent</h2>
            <p className="small-text">
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br /><br /> 
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>
      <section className="button-location container">
        
      </section>

      <TalkAbout />
    </main>

  );
}
 
export default About;