import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Location = ({ city, company, street, zip, number, mail }) => {
  return ( 
    <div className="location-content">
      <div className="location-content-left">
        <MapContainer
          center={[43.7043993969338, -79.2418294949938]}
          zoom={13}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
          dragging={false}
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      <div className="location-content-right">
        <h2>{city}</h2>
        <div className="location-text">
          <div className="location-text-left">
            <p><strong>{company}</strong></p>
            <p>{street}</p>
            <p>{zip}</p>
          </div>
          <div className="location-text-right">
            <p><strong>Contact</strong></p>
            <p>{number}</p>
            <p>{mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Location;

