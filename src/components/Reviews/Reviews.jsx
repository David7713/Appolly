import React, { useState } from 'react';
import './Reviews.css';
import customerImage from '../../assets/reviews-assets/customerImage.png';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    { image: customerImage, name: 'ANN LUBIN', title: 'CO-FOUNDER' },
    { image: customerImage, name: 'JOHN DOE', title: 'CEO' },
    { image: customerImage, name: 'JANE SMITH', title: 'MANAGER' },
    { image: customerImage, name: 'MIKE JOHNSON', title: 'DESIGNER' },
    { image: customerImage, name: 'LUCY WILLIAMS', title: 'DEVELOPER' },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const getReviewClass = (index) => {
    if (index === currentSlide) return 'customer-container active';
    if (
      index === (currentSlide - 1 + reviews.length) % reviews.length ||
      index === (currentSlide + 1) % reviews.length
    ) {
      return 'customer-container partial';
    }
    return 'customer-container hidden';
  };

  return (
    <div className="reviews-section" id='screenshot'>
      <h1>OUR HAPPY CUSTOMERS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
        <br />
        Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
        <br />
        Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>

      <div className="customers-container">
        {reviews.map((review, index) => (
          <div key={index} className={getReviewClass(index)}>
            <img src={review.image} alt="Customer" />
            <span>{review.name}</span>
            <label>{review.title}</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
              <br />
              Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            </p>
          </div>
        ))}
      </div>

      <div className="dot-container">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
