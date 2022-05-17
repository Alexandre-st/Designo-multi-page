import React from 'react';
// import { Link } from 'react-router-dom';

import CanadaPicture from '../../assets/shared/desktop/illustration-canada.svg';
import AustraliaPicture from '../../assets/shared/desktop/illustration-australia.svg';
import UnitedKingdomPicture from '../../assets/shared/desktop/illustration-united-kingdom.svg';

const ButtonLocation = () => {
  return ( 
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
            {/* <Link> */}
              <button className="button button-orange">See Location</button>
            {/* </Link> */}
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
            <button className="button button-orange">See Location</button>
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
            <button className="button button-orange">See Location</button>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default ButtonLocation;