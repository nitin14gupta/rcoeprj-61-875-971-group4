// src/pages/Home.js

import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import IMAGES from "../constants/Images";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import Services from "../shared/Services";
import Feature from "../components/FeaturedTour/Feature";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={IMAGES.worldImg} alt="World" />
                </div>
                <h1>
                  Traveling opens the doors to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  temporibus odio id ducimus? Odit temporibus iste soluta ut
                  non? Incidunt voluptate inventore magnam est dicta non rerum,
                  id minima porro!
                </p>
              </div>
            </Col>

            {/* <SearchBar /> */}

            <Col lg="2">
              <div className="hero_img-box">
                <img src={IMAGES.heroImg} alt="hero-img" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video
                  loop
                  controls
                  muted
                  autoPlay
                  src={IMAGES.heroVideo}
                  alt="hero-video"
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={IMAGES.heroImg2} alt="hero-img2" />
              </div>
            </Col>

            {/* Search Bar Compnent */}

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Service components */}
      <Services />

      {/* feature tour section   */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <Feature />
          </Row>
        </Container>
      </section>

      <section className="experience-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2 className="experience-title">
                  With our all experiences <br />
                  we will serve you
                </h2>
                <p className="experience-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                  <br />
                  Facilis beatae veritatis, tempora veniam deleniti vitae <br />
                  expedita quae impedit dolore provident saepe, omnis qui <br />
                  odio dignissimos. Voluptatibus ipsam delectus dolore.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span className="counter-value">12k+</span>
                  <h6 className="counter-label">Successful Trips</h6>
                </div>

                <div className="counter_box">
                  <span className="counter-value">10K</span>
                  <h6 className="counter-label">Regular Clients</h6>
                </div>

                <div className="counter_box">
                  <span className="counter-value">10</span>
                  <h6 className="counter-label">Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experienceImg">
                <img src={IMAGES.experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}

      <Gallery />

      {/* Testimonial Section */}

      <Testimonial/>

      {/* NewsLetter Section */}

      <Newsletter/>
    </>
  );
};

export default Home;
