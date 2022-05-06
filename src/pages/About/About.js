import React from 'react';

import TalkAbout from '../../components/TalkAbout/TalkAbout';
import TeamWorkPicture from '../../assets/about/mobile/image-about-hero.jpg';
import WomanPicture from '../../assets/about/mobile/image-world-class-talent.jpg';
import CanadaPicture from '../../assets/shared/desktop/illustration-canada.svg';
import AustraliaPicture from '../../assets/shared/desktop/illustration-australia.svg';
import UnitedKingdomPicture from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import HandPicture from '../../assets/about/mobile/image-real-deal.jpg';

const About = () => {
  return ( 
    <main>
      <section className="about about-container">
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

      <section className="infos about-container">
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
        <div className="button-location-container">
          <div className="button-location-content">
            <div className="work-content-img">
              <div className="work-img-friendly">
                <img src={CanadaPicture} alt="Canada Location" />
              </div>
            </div>
            <div className="button-location-text">
              <h3>Canada</h3>
              <button className="button">See Location</button>
            </div>
          </div>
          <div className="button-location-content">
            <div className="work-content-img">
              <div className="work-img-passionate">
                <img src={AustraliaPicture} alt="Australia Location" />
              </div>
            </div>
            <div className="button-location-text">
              <h3>Australia</h3>
              <button className="button">See Location</button>
            </div>
          </div>
          <div className="button-location-content">
            <div className="work-content-img">
              <div className="work-img-resourceful">
                <img src={UnitedKingdomPicture} alt="United Kingdom location" />
              </div>
            </div>
            <div className="button-location-text">
              <h3>United Kingdom</h3>
              <button className="button">See Location</button>
            </div>
          </div>
        </div>
      </section>

      <section className="infos about-container">
        <div className="infos-content">
          <div className="infos-content-img">
            <img src={HandPicture} alt="Hand holding a photopic" />
          </div>
          <div className="infos-content-text">
            <h2>The real deal</h2>
            <p className="small-text">
            As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
            Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br /><br />
            We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
            </p>
          </div>
        </div>
      </section>

      <TalkAbout />
    </main>

  );
}
 
export default About;