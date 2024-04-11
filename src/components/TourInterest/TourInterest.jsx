import React from 'react';
import './TourInterest.css';
import touringImage from './assets/touring-image.jpg';

const TourInterest = () => {
  return (
    <div className="tour-interest">
      <img src={touringImage} alt="Touring Location" className="touring-image" />
      <div className="content">
        <h2>Are You Still Interested To Tour?</h2>
        <p>We Offer A Wide Range Of Procedures To Help You Get The Perfect Smile</p>
        <button className="tour-btn">Book A Tour!</button>
      </div>
    </div>
  );
};

export default TourInterest;