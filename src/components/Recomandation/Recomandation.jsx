import React from 'react';
import './recomandation.css';
import culinaryImage from '../../assets/culinary.jpg';
import mountainImage from '../../assets/mountain.jpeg';
import adventureImage from '../../assets/adventure.jpeg';

const Recommendation = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mb-8">Recommendation as you like</h1>
      <div className="recommendations">
        <div className="recommendation">
          <div className="recommendation-item" style={{ backgroundImage: `url(${mountainImage})` }}>
            <h2>Mountain view</h2>
            <p>Grave the opportunities for mountain climbing</p>
            <div className="price">
              <span className="discountedPrice">$1290</span>
              <span className="originalPrice">$3600</span>
            </div>
          </div>
          <div className="recommendation-item" style={{ backgroundImage: `url(${adventureImage})` }}>
            <h2>Rafting</h2>
            <p>For the adventurous ride in the river</p>
            <div className="price">
              <span className="discountedPrice">$1290</span>
              <span className="originalPrice">$3200</span>
            </div>
          </div>
          <div className="recommendation-item" style={{ backgroundImage: `url(${culinaryImage})` }}>
            <h2>Culinary</h2>
            <p>Best cuisine of Nepal</p>
            <div className="price">
              <span className="discountedPrice">$1090</span>
              <span className="originalPrice">$1600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;