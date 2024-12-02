// Newsletter.js
import React, { useState } from 'react';
import './NewsLetter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing to our travel newsletter!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="newsletter-container">
            <h2 className="newsletter-title">Join Our Adventure!</h2>
            <p className="newsletter-description">
              Discover the best camping spots, travel tips, and exclusive deals. Subscribe to our newsletter for
              the latest updates and offers tailored just for you!
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe Now
              </button>
            </form>
            {message && <p className="newsletter-message">{message}</p>}
            <div className="newsletter-features">
              <h3>What You'll Get:</h3>
              <ul>
                <li>🏕️ Exclusive access to hidden camping spots</li>
                <li>✈️ Discounted travel packages from top airlines</li>
                <li>🗺️ Customizable travel itineraries just for you</li>
                <li>🧳 Insider tips for stress-free travel</li>
                <li>🌍 Inspiring stories from fellow travelers</li>
                <li>🎁 Monthly giveaways and contests!</li>
              </ul>
            </div>
            <div className="newsletter-footer">
              <p>Follow us on social media for more travel inspiration!</p>
              <div className="social-icons">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
