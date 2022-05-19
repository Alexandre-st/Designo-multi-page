import React from 'react';
import Arrow from '../../assets/shared/desktop/arrow.svg'

const Link = ({ title, text, linkStyle }) => {
  return ( 
    <div className={linkStyle}>
      <div className="link-content">
        <h2 className="link-content-title">{title}</h2>
        <p>{text}<i><img src={Arrow} alt="Arrow" /></i></p>
      </div>
    </div>
  );
}
 
export default Link;