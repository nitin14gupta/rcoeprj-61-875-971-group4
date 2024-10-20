// App.js
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the Card component
import IMAGES from '../constants/Images'

function ServiceList() {
  return (
    <div className="app">
      <div className="card-container">
        <ServiceCard
          icon={IMAGES.weatherImg}
          title="Calculate Weather"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServiceCard
          icon={IMAGES.guideImg}
          title="Best Tour Guide"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServiceCard
          icon={IMAGES.customizationImg}
          title="Customization"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default ServiceList;
