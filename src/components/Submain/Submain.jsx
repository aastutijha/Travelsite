import React, { useState } from 'react';
import './submain.css';
import underwaterImage from '../../assets/underwater.jpg';
import londonImage from '../../assets/london.jpg';
import australiaImage from '../../assets/australia.jpg';
import parisImage from '../../assets/paris.jpeg';
import tokyoImage from '../../assets/tokyo.jpg';
import InboundTours from './InboundTours';
import OutboundPlaces from './OutboundPlaces';

const Submain = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="subMain" id="sub-main">
      <h2 className="subMainTop">Popular OutBound Tour Places</h2>
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
            <button className="openButton" onClick={handleOpenForm}>Open</button>
            {showForm && (
              <div className="bookingForm">
                <h3>Booking Information</h3>
                <label htmlFor="price">Price: $1290</label>
                <label htmlFor="person">Number of Person:</label>
                <input type="number" id="person" />
                <label htmlFor="date">Tour Dates :</label>
                <input type="date" id="date" />
                <button className="bookNowButton">Book Now</button>
                <button className="closeButton" onClick={handleCloseForm}>Close</button>
              </div>
            )}
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
            <button className="openButton" onClick={handleOpenForm}>Open</button>
            {showForm && (
              <div className="bookingForm">
                <h3>Booking Information</h3>
                <label htmlFor="price">Price: $3344</label>
                <label htmlFor="price">Number of Person:</label>
                <input type="number" id="person" />
                <label htmlFor="date">Tour Dates:</label>
                <input type="date" id="date" />
                <button className="bookNowButton">Book Now</button>
                <button className="closeButton" onClick={handleCloseForm}>Close</button>
              </div>
            )}
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
            <button className="openButton" onClick={handleOpenForm}>Open</button>
            {showForm && (
              <div className="bookingForm">
                <h3>Booking Information</h3>
                <label htmlFor="price">Price: $3344</label>
                <label htmlFor="person">Number of Person:</label>
                <input type="number" id="person" />
                <label htmlFor="date">Tour Dates:</label>
                <input type="date" id="date" />
                <button className="bookNowButton">Book Now</button>
                <button className="closeButton" onClick={handleCloseForm}>Close</button>
              </div>
            )}
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
            <button className="openButton" onClick={handleOpenForm}>Open</button>
            {showForm && (
              <div className="bookingForm">
                <h3>Booking Information</h3>
                <label htmlFor="price">Price: $2290</label>
                <label htmlFor="person">Number of Person:</label>
                <input type="number" id="person" />
                <label htmlFor="date">Tour Dates:</label>
                <input type="date" id="date" />
                <button className="bookNowButton">Book Now</button>
                <button className="closeButton" onClick={handleCloseForm}>Close</button>
              </div>
            )}
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
            <button className="openButton" onClick={handleOpenForm}>Open</button>
            {showForm && (
              <div className="bookingForm">
                <h3>Booking Information</h3>
                <label htmlFor="price">Price: $4290</label>
                <label htmlFor="person">Number of Person:</label>
                <input type="number" id="person" />
                <label htmlFor="date">Tour Dates:</label>
                <input type="date" id="date" />
                <button className="bookNowButton">Book Now</button>
                <button className="closeButton" onClick={handleCloseForm}>Close</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <InboundTours />
      <OutboundPlaces/>
    </div>
    
  );
};

export default Submain;