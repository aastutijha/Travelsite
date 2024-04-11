import React from 'react';
import './submain.css';
import underwaterImage from '../../assets/underwater.jpg';
import londonImage from '../../assets/london.jpg';
import australiaImage from '../../assets/australia.jpg';
import parisImage from '../../assets/paris.jpeg';
import tokyoImage from '../../assets/tokyo.jpg';

const Submain = () => {
  return (
    <div className="subMain" id="sub-main">
      <h2 className="subMainTop">Popular Tour Places</h2>
      <div className="tourPlaces">
        <div className="tourPlace">
          <img src={underwaterImage} alt="Cox's Bazar Sea Beach" />
          <div className="tourPlaceDetails">
            <h3>Cox's Bazar Sea Beach</h3>
            <p>chitagong, bangladesh</p>
            <div className="price">
              <span className="discountedPrice">$1290</span>
              <span className="originalPrice">$2200</span>
            </div>
          </div>
        </div>
        <div className="tourPlace">
          <img src={londonImage} alt="Festival" />
          <div className="tourPlaceDetails">
            <h3>Beautiful places</h3>
            <p>London</p>
            <div className="price">
              <span className="discountedPrice">$3344</span>
              <span className="originalPrice">$4200</span>
            </div>
          </div>
        </div>
        <div className="tourPlace">
          <img src={parisImage} alt="Adventures ride" />
          <div className="tourPlaceDetails">
            <h3>City of Romance</h3>
            <p>Paris</p>
            <div className="price">
              <span className="discountedPrice">$3344</span>
              <span className="originalPrice">$5200</span>
            </div>
          </div>
        </div>
        <div className="tourPlace">
          <img src={australiaImage} alt="Sundorban Bromon" />
          <div className="tourPlaceDetails">
            <h3> Sundorban Bromon</h3>
            <p>Australia</p>
            <div className="price">
              <span className="discountedPrice">$2290</span>
              <span className="originalPrice">$3200</span>
            </div>
          </div>
        </div>
        <div className="tourPlace">
          <img src={tokyoImage} alt="Sundorban Bromon" />
          <div className="tourPlaceDetails">
            <h3>Life of Animation</h3>
            <p>Tokyo</p>
            <div className="price">
              <span className="discountedPrice">$4290</span>
              <span className="originalPrice">$6200</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Submain;