// Tours.js
import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/Tours.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
import Newsletter from "../components/NewsLetter/NewsLetter";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4); // Adjust based on actual data
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section className="search-section">
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="tours-section">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={`pagination-item ${page === number ? 'active' : ''}`}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        <Newsletter/>
      </section>
    </>
  );
};

export default Tours;
