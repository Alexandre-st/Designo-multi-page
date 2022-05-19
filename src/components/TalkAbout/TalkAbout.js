import React from 'react';
import { Link } from 'react-router-dom';

const TalkAbout = () => {
  return ( 
    <section className="talk container">
      <div className="talk-content">
        <div className="talk-content-text">
          <h5>Let’s talk about your project</h5>
          <p className="small-text">
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </p>
        </div>
        <div className="talk-content-button">
          <div role="button" className="button">
            <Link to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default TalkAbout;