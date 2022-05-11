import React from 'react';

import TalkAbout from '../../components/TalkAbout/TalkAbout';
import ButtonLocation from '../../components/ButtonLocation/ButtonLocation';
import TeamWorkPictureMobile from '../../assets/about/mobile/image-about-hero.jpg';
import TeamWorkPictureTablet from '../../assets/about/tablet/image-about-hero.jpg';
import TeamWorkPictureDesktop from '../../assets/about/desktop/image-about-hero.jpg';
import WomanPictureMobile from '../../assets/about/mobile/image-world-class-talent.jpg';
import WomanPictureTablet from '../../assets/about/tablet/image-world-class-talent.jpg';
import WomanPictureDesktop from '../../assets/about/desktop/image-world-class-talent.jpg';
import HandPictureMobile from '../../assets/about/mobile/image-real-deal.jpg';
import HandPictureTablet from '../../assets/about/tablet/image-real-deal.jpg';
import HandPictureDesktop from '../../assets/about/desktop/image-real-deal.jpg';

const About = () => {
  return ( 
    <main>
      <section className="about new-container">
        <div className="about-header">
          <picture className="about-header-img">
            <source srcSet={TeamWorkPictureDesktop} media="(min-width: 1024px)" />
            <source srcSet={TeamWorkPictureTablet}  media="(min-width: 495px)" />
            <img src={TeamWorkPictureMobile} alt="Team work" />
          </picture>
          <div className="about-header-text">
            <h1>About Us</h1>
            <p className="small-text">
              Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="infos new-container">
        <div className="infos-content">
          <picture className="infos-content-img">
            <source srcSet={WomanPictureDesktop} media="(min-width: 1024px)" />
            <source srcSet={WomanPictureTablet}  media="(min-width: 768px)" />
            <img src={WomanPictureMobile} alt="Woman stand in front of a wall" />
          </picture>          
          <div className="infos-content-text">
            <h2>World-class talent</h2>
            <p className="small-text">
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br /><br /> 
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>
      
      <ButtonLocation />

      <section className="infos new-container">
        <div className="infos-content infos-content-reverse">
          <picture className="infos-content-img-reverse">
            <source srcSet={HandPictureDesktop} media="(min-width: 1024px)" />
            <source srcSet={HandPictureTablet}  media="(min-width: 768px)" />
            <img src={HandPictureMobile} alt="Hand holding a photopic" />
          </picture>
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