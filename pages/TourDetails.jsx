// TourDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TourDetails.css'; // Import the CSS for styling
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS

const TourDetails = () => {
  const location = useLocation();
  const { tour } = location.state || {};
  <Y></Y>
  if (!tour) {
    return <div>No tour details available.</div>;
  }

  return (
    <div className="tour-details">
      <div className="tour-details-header">
        <img src={tour.photo} alt={tour.title} className="tour-details-image" />
        <h1 className="tour-details-title">{tour.title}</h1>
        <p className="tour-details-city">
          <i className="ri-map-pin-2-line"></i> {tour.city}
        </p>
      </div>
      
      <div className="tour-details-content">
        <h2>Description</h2>
        <p>{tour.desc}</p>

        <h2>Itinerary</h2>
        <ul>
          {tour.itinerary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="tour-details-footer">
          <span className="tour-details-price">${tour.price}</span>
          <span className="tour-details-rating">
            <i className="ri-star-fill"></i> {tour.avgRating}
          </span>
        </div>

        <div className="booking-form">
          <h2>Book Your Tour</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="group-size">Group Size</label>
              <input type="number" id="group-size" min="1" placeholder="Number of people" required />
            </div>
            <button type="submit" className="btn-submit">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
