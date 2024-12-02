import React from 'react'
import { Container, Row, Col, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
              <p className="footer_desc">
                Your company is committed to delivering high-quality services and exceptional experiences. 
                Follow us to stay updated on our latest news.
              </p>
              <div className="social_icons">
                <Link to="https://github.com/nitin14gupta"><i className="ri-github-fill"></i></Link>
                <Link to="https://x.com/CMNitingupta"><i className="ri-twitter-fill"></i></Link>
                <Link to="https://www.linkedin.com/in/nitinCMgupta"><i className="ri-linkedin-fill"></i></Link>
                <Link to="https://www.instagram.com/only__nitin/"><i className="ri-instagram-fill"></i></Link>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <div className="footer_links">
              <h5>Company</h5>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <div className="footer_links">
              <h5>Support</h5>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/support">Help Center</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg="4" md="12">
            <div className="newsletter">
              <h5>Subscribe to our Newsletter</h5>
              <p>Stay updated with the latest news, offers, and insights.</p>
              <div className="newsletter_input d-flex">
                <Input type="email" placeholder="Enter your email" />
                <Button className="btn primary_btn">Subscribe</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer_bottom d-flex justify-content-between align-items-center">
          <Col lg="6">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
          <Col lg="6" className="text-right">
            <p>Developed by <Link to="https://github.com/nitin14gupta" target="_blank">NITIN GUPTA</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
