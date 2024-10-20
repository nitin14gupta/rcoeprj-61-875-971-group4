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
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore omnis quas fugit corrupti ipsum harum dolorum velit officiis facilis non! Animi non, ullam neque quisquam facere nobis id reprehenderit ipsum.",
    name: "Nitin Gupta",
    avatar: AVATAR.avt01,
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
    name: "Aisha Khan",
    avatar: AVATAR.avt02,
  },
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born. But I must explain to you how all this mistaken idea",
    name: "John Doe",
    avatar: AVATAR.avt03,
  },
  {
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
    name: "Emily Smith",
    avatar: AVATAR.avt04,
  },
  {
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    name: "Michael Brown",
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