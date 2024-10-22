// App.js
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the Card component
import IMAGES from '../constants/Images';

function ServiceList() {
  return (
    <div className="app">
      <div className="card-container">
        <ServiceCard
          icon={IMAGES.weatherImg}
          title="Calculate Weather"
          description="Stay informed about the weather at your destination to plan the perfect day."
        />
        <ServiceCard
          icon={IMAGES.guideImg}
          title="Best Tour Guide"
          description="Connect with experienced local guides who can show you the hidden gems and rich culture of the area."
        />
        <ServiceCard
          icon={IMAGES.customizationImg}
          title="Customization"
          description="Tailor your travel experience with personalized itineraries that match your interests and preferences."
        />
      </div>
    </div>
  );
}

export default ServiceList;
