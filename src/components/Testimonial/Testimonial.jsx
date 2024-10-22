import React from "react";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../../shared/Subtitle";
import Slider from 'react-slick';
import './Testimonial.css';

const AVATAR = {
    avt01: require('../../assets/images/ava-1.jpg'),
    avt02: require('../../assets/images/ava-2.jpg'),
    avt03: require('../../assets/images/ava-3.jpg'),
    avt04: require('../../assets/images/ava-2.jpg'),
    avt05: require('../../assets/images/ava-1.jpg'),
};

const testimonials = [
  {
    text: "Our trip was a dream come true! The itinerary was perfectly tailored, allowing us to explore both popular sights and hidden gems. Highly recommend!",
    name: "Nitin Gupta",
    avatar: AVATAR.avt01,
  },
  {
    text: "Absolutely amazing experience! The local guides were knowledgeable and passionate, making every tour unforgettable. Can't wait to book again!",
    name: "Daniyal Ghori",
    avatar: AVATAR.avt02,
  },
  {
    text: "Traveling with [Your Company Name] was life-changing. Each destination was well-planned, and I loved the personal touches throughout the journey.",
    name: "Affan Ansari",
    avatar: AVATAR.avt03,
  },
  {
    text: "From start to finish, the service was exceptional. Every detail was taken care of, and I felt truly immersed in the local culture.",
    name: "Shoiab Jamadar",
    avatar: AVATAR.avt04,
  },
  {
    text: "The best travel experience I've ever had! The guides made us feel like we were part of the community. I can't recommend them enough!",
    name: "Adarsh Mauryaa",
    avatar: AVATAR.avt05,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="testimonial-title">What our fans say about us</h2>
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial py-4 px-3" key={index}>
                  <img src={testimonial.avatar} alt={`Avatar ${index + 1}`} />
                  <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                    <h5>{testimonial.name}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
