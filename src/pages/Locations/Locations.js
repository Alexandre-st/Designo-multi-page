import React from 'react';

import Location from '../../components/Location/Location';
import TalkAbout from '../../components/TalkAbout/TalkAbout';

const Locations = () => {

  return (
    <main>
      <section className="map">
      <Location 
          city="Canada"
          company="Designo Central Office"
          street="3886 Wellington Street"
          zip="Toronto, Ontario M9C 3J5"
          number="P : +1 253-863-8967"
          mail="M : contact@designo.co"
        />
        {/* <Location 
          city=""
          company=""
          street=""
          zip=""
          number=""
          mail=""
        />
        <Location 
          city=""
          company=""
          street=""
          zip=""
          number=""
          mail=""
        /> */}
      </section>

      <TalkAbout />
    </main>
  );
}
 
export default Locations;