import React, { useRef} from 'react';
import './SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import tours from '../assets/data/tours'; // Adjust the path as needed

const SearchBar = ({ setFilteredTours }) => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value.toLowerCase();
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('All fields are required !!');
    }

    // Filter the tours based on input values
    const filteredTours = tours.filter((tour) => {
      return (
        tour.city.toLowerCase().includes(location) &&
        tour.distance <= parseInt(distance) &&
        tour.maxGroupSize >= parseInt(maxGroupSize)
      );
    });

    // Pass filtered tours to the parent component or state
    setFilteredTours(filteredTours);
  };

  return (
    <Col lg='12'>
      <div className="search_bar">
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span>
              <i className='ri-map-pin-line'></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder='Where are you going?' ref={locationRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span>
              <i className='ri-map-pin-time-line'></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder='Distance (km)' ref={distanceRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span>
              <i className='ri-group-line'></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder='0' ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search_icon" onClick={searchHandler}>
            <i className='ri-search-line'></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
