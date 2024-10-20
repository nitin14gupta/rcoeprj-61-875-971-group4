import React, {useState} from "react";
import { useParams } from "react-router-dom";
import tours from "../assets/data/tours"; // Import the tours data
import "../styles/TourDetails.css";
import { Container, Row, Col } from "reactstrap";
import Reviews from "../components/Reviews/Reviews";
import FAQs from "../components/FAQ/FAQ";
import RelatedTours from "../components/RelatedTours/RelatedTours";
const TourDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const tour = tours.find((tour) => tour.id === id); // Find the specific tour by id
  const [isBooked, setIsBooked] = useState(false); // Track booking status

  const handleBooking = () => {
    setIsBooked(true); // Change the state to booked
  };
  // Check if the tour exists
  if (!tour) {
    return <h2>Tour not found!</h2>;
  }

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    avgRating,
  } = tour;

  return (
    <section>
      <Container className="main-tour-details">
        <Row>
          <Col lg="8">
            <div className="tour_content">
              <img src={photo} alt={title} className="tour-details-image" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>
                    <span>
                      {avgRating} ({reviews.length} reviews)
                    </span>
                  </span>
                </div>
                <p>{desc}</p>
                <div className="tour-details-info">
                  <p>
                    <i className="ri-price-tag-3-line"></i> {/* Price Icon */}
                    <strong> Price:</strong> ${price}
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> {/* City Icon */}
                    <strong> City:</strong> {city}
                  </p>
                  <p>
                    <i className="ri-road-map-line"></i> {/* Distance Icon */}
                    <strong> Distance:</strong> {distance} km
                  </p>
                  <p>
                    <i className="ri-group-line"></i>{" "}
                    {/* Max Group Size Icon */}
                    <strong> Max Group Size:</strong> {maxGroupSize}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <Reviews />
            <FAQs lg="4" />
            <button
        onClick={handleBooking}
        disabled={isBooked} // Disable button if booked
        className={isBooked ? 'btn-booked' : 'btn-book'}
      >
        {isBooked ? "Booked" : "Book"} {/* Change text based on status */}
      </button>
          </Col>
          <Row>
            <Col lg="12">
              <RelatedTours
                relatedTours={tours.filter((tour) => tour.id !== id)}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
