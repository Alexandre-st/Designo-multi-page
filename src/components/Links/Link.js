import React from 'react';
import Arrow from '../../assets/shared/desktop/arrow.svg'

const Link = ({ title, text, linkStyle }) => {
  return ( 
    <div className="link-content">
      <div className={linkStyle}>
        <div className="link-contain">
          <h2>{title}</h2>
          <h4>{text}<i><img src={Arrow} alt="Arrow" /></i></h4>
        </div>
      </div>
    </div>
  );
}
 
export default Link;