import React, { useState } from "react";
import arrowfront from "../Images/arrowfront.png";
import arrowback from "../Images/arrowback.png";

const testimonials = [
  {
    name: "Chukwugokie",
    role: "Content Marketer",
    text: "Picture this: I’m in a meeting, low on data. Panic! But Data1st swooped in, save the day. Thank You!",
  },
  {
    name: "Stella-Maris",
    role: "Actor",
    text: "Dear Datalst, thank you for your friendly reminders and always keeping me connected.",
  },
  {
    name: "Kenny",
    role: "Tech Bro",
    text: "I don’t believe how budget friendly these guys are, and my data legit lasts, you guys are the best.",
  },
  {
    name: "Simi",
    role: "Teacher",
    text: "This website was very easy to use, I was worried I would struggle but this has encouraged me to continue using technology.",
  },
  {
    name: "Christine",
    role: "Social Media Manager",
    text: "The way this Data1st recharges data fast, for a reselling platform, and the way my data last, it’s like buying straight from the networks.",
  },
  {
    name: "Fred",
    role: "Accountant",
    text: "Impressed by their reliability. Consistent service, wallet-friendly data plans. My bank account approves always on time.",
  },
  {
    name: "Kenny",
    role: "Tech Bro",
    text: "I don’t believe how budget friendly these guys are, and my data legit lasts, you guys are the best.",
  },
  {
    name: "Chukwugokie",
    role: "Content Marketer",
    text: "Picture this: I’m in a meeting, low on data. Panic! But Data1st swooped in, save the day. Thank You!",
  },
  {
    name: "Stella-Maris",
    role: "Actor",
    text: "Dear Datalst, thank you for your friendly reminders and always keeping me connected.",
  },
  {
    name: "Fred",
    role: "Accountant",
    text: "Impressed by their reliability. Consistent service, wallet-friendly data plans. My bank account approves always on time.",
  },
  {
    name: "Simi",
    role: "Teacher",
    text: "This website was very easy to use, I was worried I would struggle but this has encouraged me to continue using technology.",
  },
  {
    name: "Christine",
    role: "Social Media Manager",
    text: "The way this Data1st recharges data fast, for a reselling platform, and the way my data last, it’s like buying straight from the networks.",
  },
  {
    name: "Stella-Maris",
    role: "Actor",
    text: "Dear Datalst, thank you for your friendly reminders and always keeping me connected.",
  },
  {
    name: "Fred",
    role: "Accountant",
    text: "Impressed by their reliability. Consistent service, wallet-friendly data plans. My bank account approves always on time.",
  },
  {
    name: "Kenny",
    role: "Tech Bro",
    text: "I don’t believe how budget friendly these guys are, and my data legit lasts, you guys are the best.",
  },
];

const TestimonialReview = () => {
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

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonial & Reviews</h2>
      <div className="testimonial-cards">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h5 className="testimonial-name">{testimonial.name}</h5>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-text">{`"${testimonial.text}"`}</p>
            {index === 2 && totalSlides > 1 && (
              <img
                src={arrowfront}
                alt="Next"
                className="arrow-right"
                onClick={handleNext}
              />
            )}
          </div>
        ))}
      </div>
      <div className="dots-container">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSet ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
      {currentSet > 0 && (
        <img
          src={arrowback}
          alt="Previous"
          className="arrow-left"
          onClick={handlePrev}
        />
      )}
    </div>
  );
};

export default TestimonialReview;
