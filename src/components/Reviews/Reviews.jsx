import React, { useState } from "react";
import "./Reviews.css"; // Import your CSS styles

const Reviews = () => {
  const [rating, setRating] = useState(0); // State for rating
  const [reviewText, setReviewText] = useState(""); // State for review text
  const [reviews, setReviews] = useState([]); // State to hold reviews

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (rating > 0 && reviewText) {
      // Only submit if rating and text are valid
      const newReview = {
        rating,
        text: reviewText,
      };
      setReviews([...reviews, newReview]); // Add new review to state
      setRating(0); // Reset rating
      setReviewText(""); // Reset review text
    }
  };

  return (
    <div className="review-form">
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => setRating(star)} // Set rating on star click
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)} // Update review text
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <div className="reviews-list">
        <h4>Reviews:</h4>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-rating">{`Rating: ${review.rating} ★`}</div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
