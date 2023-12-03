import React from 'react';
import './Testimonial.css'; 

const Testimonial = ({ quote, photoUrl, name, designation }) => {
  return (
    <div className="client-testimonial">
      <div className="quote">{quote}</div>
      <div className="client-info">
        <img src={photoUrl} alt={name} className="client-photo" />
        <div className="client-details">
          <div className="client-name">{name}</div>
          <div className="client-designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
