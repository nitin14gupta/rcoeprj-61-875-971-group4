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
  const itemsPerPage = 4;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const [paginatedTours, setPaginatedTours] = useState([]);

  useEffect(() => {
    const searchResults = tourData.filter((tour) => {
      // Ensure that both name and description exist before using toLowerCase
      const tourName = tour.name ? tour.name.toLowerCase() : "";
      const tourDescription = tour.description ? tour.description.toLowerCase() : "";
  
      return tourName.includes(searchTerm.toLowerCase()) || tourDescription.includes(searchTerm.toLowerCase());
    });
    
    setFilteredTours(searchResults);
  
    // Reset page to 0 when a new search is performed
    setPage(0);
  
    // Calculate the total pages based on filtered results
    const pages = Math.ceil(searchResults.length / itemsPerPage);
    setPageCount(pages);
  }, [searchTerm]);

  // Effect to handle pagination
  useEffect(() => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedTours(filteredTours.slice(start, end));
  }, [page, filteredTours]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section className="search-section">
        <Container>
          <Row>
            <Col lg="12">
              {/* Pass the search term to the SearchBar */}
              <SearchBar setSearchTerm={setSearchTerm} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="tours-section">
        <Container>
          <Row>
            {/* Display paginated and filtered tours */}
            {paginatedTours.map((tour) => (
              <Col lg="3" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              {/* Pagination controls */}
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={`pagination-item ${page === number ? "active" : ""}`}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        <Newsletter />
      </section>
    </>
  );
};

export default Tours;
