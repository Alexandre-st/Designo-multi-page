import React from 'react';

const CardPicture = ({ url, name, text }) => {
  return ( 
    <div className="card-content">
      <div className="card-content-image">
        <img src={url} alt={name} />
      </div>
      <div className="card-content-text">
        <h3>{name}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
 
export default CardPicture;