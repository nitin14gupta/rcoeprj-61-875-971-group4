import React from "react";
import './FAQs.css'
const FAQs = () => {
  const faqData = [
    {
      question: "What should I bring on this tour?",
      answer: "It is recommended to bring comfortable shoes, a hat, and a water bottle."
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel your booking up to 24 hours in advance for a full refund."
    },
    {
      question: "Are meals included?",
      answer: "Meals are not included, but recommendations will be provided."
    },
  ];

  return (
    <div className="faqs">
      <h3>Frequently Asked Questions</h3>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h4>{item.question}</h4>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
