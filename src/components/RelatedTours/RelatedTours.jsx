import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import './RelatedTours.css'

const RelatedTours = ({ relatedTours }) => {
  return (
    <div className="related-tours">
      <h3>Related Tours</h3>
      <div className="related-tours-list">
        {relatedTours.map((tour) => (
          <Card key={tour.id} className="related-tour-card">
            <Link to={`/tours/${tour.id}`}>
              <CardImg top src={tour.photo} alt={tour.title} />
              <CardBody>
                <CardTitle tag="h5">{tour.title}</CardTitle>
                <CardText>Price: ${tour.price}</CardText>
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedTours;
