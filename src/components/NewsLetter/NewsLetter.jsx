import React, { useState } from "react";
import "./NewsLetter.css";

const Newsletter = () => {
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="newsletter-container">
            <h2 className="newsletter-title">Join Our Newsletter</h2>
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
                Subscribe
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
                <a href="#" className="social-icon">
                  Facebook
                </a>
                <a href="#" className="social-icon">
                  Instagram
                </a>
                <a href="#" className="social-icon">
                  Twitter
                </a>
                <a href="#" className="social-icon">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
