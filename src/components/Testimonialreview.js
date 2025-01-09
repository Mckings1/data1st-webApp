import React from "react";
import React, { useState } from "react";

const testimonials = [
  {
    text: "Picture this: I’m in a meeting, low on data. Panic! But Datalst swooped in, saved the day. Thank You!",
    name: "Chukwugokie",
    role: "Content Marketer",
  },
  {
    text: "Dear Datalst, thank you for your friendly reminders and always keeping me connected.",
    name: "Stella-Maris",
    role: "Actor",
  },
  {
    text: "I don’t believe how budget friendly these guys are, and my data legit lasts, you guys are the best.",
    name: "Kenny",
    role: "Tech Bro",
  },
  {
    text: "The service is incredible, I get more than I paid for every single time. So happy with Datalst.",
    name: "Jessica",
    role: "Designer",
  },
  {
    text: "Amazing customer support and seamless connectivity. I can always count on Datalst.",
    name: "John",
    role: "Entrepreneur",
  },
  {
    text: "Fast, reliable, and affordable data. I’m never going back to my old provider.",
    name: "Mia",
    role: "Engineer",
  },
];

const Testimonialreview = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const handleNext = () => {
    setCurrentSet((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const handlePrev = () => {
    setCurrentSet(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const currentTestimonials = testimonials.slice(
    currentSet * 3,
    (currentSet + 1) * 3
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center">Testimonial & Reviews</h2>
      <div className="row justify-content-center">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card testimonial-card">
              <div className="card-body text-center">
                <p className="testimonial-text">{`"${testimonial.text}"`}</p>
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="carousel-control-prev" onClick={handlePrev}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonialreview;
