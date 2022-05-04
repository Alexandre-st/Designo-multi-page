import React from 'react';
import Arrow from '../../assets/shared/desktop/arrow.svg'

const Link = ({ title, text, linkStyle }) => {
  return ( 
    <div className={linkStyle}>
      <div className="link-content">
        <h2>{title}</h2>
        <h4>{text}<i><img src={Arrow} alt="Arrow" /></i></h4>
      </div>
    </div>
  );
}
 
export default Link;