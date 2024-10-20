import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      // Prepare form data to send to Web3Forms
      const formData = new FormData();
      formData.append("access_key", "5e981274-7751-4ccd-abe9-1b711cc6b507"); // Use your access key
      formData.append("email", email);

      try {
        // Send the data to the API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setMessage("Thank you for subscribing!");
          setEmail(""); // Reset the email field after submission
        } else {
          setMessage("Something went wrong. Please try again.");
        }
      } catch (error) {
        setMessage("Error in submission. Please try again later.");
      }
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
              <p className="footer_desc">
                Your company is committed to delivering high-quality services
                and exceptional experiences. Follow us to stay updated on our
                latest news.
              </p>
              <div className="social_icons">
                <Link to="https://github.com/nitin14gupta">
                  <i className="ri-github-fill"></i>
                </Link>
                <Link to="https://x.com/CMNitingupta">
                  <i className="ri-twitter-fill"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/nitinCMgupta">
                  <i className="ri-linkedin-fill"></i>
                </Link>
                <Link to="https://www.instagram.com/only__nitin/">
                  <i className="ri-instagram-fill"></i>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <div className="footer_links">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <div className="footer_links">
              <h5>Support</h5>
              <ul>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/support">Help Center</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="4" md="12">
            <div className="newsletter">
              <h5>Subscribe to our Newsletter</h5>
              <p>Stay updated with the latest news, offers, and insights.</p>
              <form onSubmit={handleSubmit} className="newsletter_input d-flex">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="btn primary_btn">
                  Subscribe
                </Button>
              </form>
              {message && <p className="newsletter-message">{message}</p>}
            </div>
          </Col>
        </Row>

        <Row className="footer_bottom d-flex justify-content-between align-items-center">
          <Col lg="6">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" className="text-right">
            <p>
              Developed by{" "}
              <Link to="https://github.com/nitin14gupta" target="_blank">
                NITIN GUPTA
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
