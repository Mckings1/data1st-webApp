import React, { useState, useEffect } from "react";
import image1 from "../Images/How Slide 1.png";
import image2 from "../Images/How Slide 2.png";
import image3 from "../Images/How Slide 3.png";
import image4 from "../Images/How Slide 4.png";
import image5 from "../Images/How Slide 5.png";
import image6 from "../Images/How Slide 6.png";

const HowWeWork = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="how-we-work-container">
      <h2 className="Howweworkit-title">How we Work it</h2>
      <div className="image-carousel">
        <div className="carousel-images">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="carousel-image"
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
