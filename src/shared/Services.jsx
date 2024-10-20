import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Services.css'
import ServiceList from '../services/ServicesList'
const Services = () => {
  return (
    <>
        <section>
        <Container>
          <Row>
              <Col lg='3'>
                <h5 className="services_subtitle">
                  What we serve
                </h5>
                <h2 className="services">
                We offer our best services
                </h2>
              </Col>
          </Row>
        <ServiceList/>
        </Container>
      </section>


    </>
  )
}

export default Services