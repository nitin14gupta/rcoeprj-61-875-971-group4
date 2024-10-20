// Card.js
import React from 'react';
import './ServiceCard.css'; // For styling (optional)

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
