import React from 'react';

import Location from '../../components/Location/Location';
import TalkAbout from '../../components/TalkAbout/TalkAbout';

const Locations = () => {

  return (
    <main>
      <section className="location">
        <div className="location-container">
          <Location 
              lat={43.7043993969338}
              lng={-79.2418294949938}
              zoom={13}
              city="Canada"
              company="Designo Central Office"
              street="3886 Wellington Street"
              zip="Toronto, Ontario M9C 3J5"
              number="+1 253-863-8967"
              mail="contact@designo.co"
            />
            <Location 
              lat={-33.109334989573924}
              lng={151.64546848639955}
              zoom={12}
              city="Australia"
              company="Designo AU Office"
              street="19 Balonne Street"
              zip="New South Wales 2443"
              number="(02) 6720 9092"
              mail="contact@designo.au"
            />
            <Location
              lat={53.73417652344115}
              lng={-1.3167944591659246}
              zoom={14}
              city="United Kingdom"
              company="Designo UK Office"
              street="13  Colorado Way"
              zip="Rhyd-y-fro SA8 9GA"
              number="078 3115 1400"
              mail="contact@designo.uk"
            />
        </div>
      </section>

      <TalkAbout />
    </main>
  );
}
 
export default Locations;