import React from "react";
import "./TourCard.css";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.photo} alt={tour.title} className="tour-card-image" />
      <div className="tour-card-content">
        <h3 className="tour-card-title">{tour.title}</h3>
        <p className="tour-card-description">{tour.desc}</p>
        <div className="tour-card-info">
          <p className="tour-card-city">
            <i className="ri-map-pin-2-line"></i> {tour.city}
          </p>
          <p className="tour-card-distance">
            <i className="ri-road-map-line"></i> {tour.distance} km
          </p>
          <p className="tour-card-group-size">
            <i className="ri-group-line"></i> Max Group: {tour.maxGroupSize}
          </p>
        </div>
        <div className="tour-card-footer">
          <span className="tour-card-price">${tour.price}</span>
          <span className="tour-card-rating">
            <i className="ri-star-fill"></i> {tour.avgRating}
          </span>
          <Link to={`/tourDetails/${tour.id}`} className="btn_link">
            <button className="tour-card-button">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
