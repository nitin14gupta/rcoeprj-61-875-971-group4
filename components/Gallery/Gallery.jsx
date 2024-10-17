import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../../shared/Subtitle';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImg1 from '../../assets/images/gallery-01.jpg';
import galleryImg2 from '../../assets/images/gallery-02.jpg';
import galleryImg3 from '../../assets/images/gallery-03.jpg';
import galleryImg4 from '../../assets/images/gallery-04.jpg';
import galleryImg5 from '../../assets/images/gallery-05.jpg';
import galleryImg6 from '../../assets/images/gallery-06.jpg';
import galleryImg7 from '../../assets/images/gallery-07.jpg';
import './Gallery.css'

const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery-title">Visit our Customer Tour Gallery</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
              <Masonry gutter="1rem">
                {galleryImages.map((item, index) => (
                  <img
                    src={item}
                    alt={`Gallery Image ${index + 1}`}
                    key={index}
                    className="gallery-image"
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
