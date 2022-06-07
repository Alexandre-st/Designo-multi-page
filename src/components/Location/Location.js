import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Location = ({ ref, city, company, street, zip, number, mail, lat, lng, zoom, id }) => {
  
  return ( 
    <div className="location-content" id={id}>
      <div className="location-content-left">
        <MapContainer
          center={[lat, lng]}
          zoom={zoom}
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
            <p className="small-text"><strong>{company}</strong></p>
            <p className="small-text">{street}</p>
            <p className="small-text">{zip}</p>
          </div>
          <div className="location-text-right">
            <p className="small-text"><strong>Contact</strong></p>
            <p className="small-text">P : {number}</p>
            <p className="small-text">M : {mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Location;

