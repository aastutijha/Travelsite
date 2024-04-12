import React from 'react';
import './TourDetails.css';

const TourDetails = ({ tour }) => {
  return (
    <div className="tour-details">
      <h2>{tour.name}</h2>
      <div className="image-container">
        <img src={tour.image} alt={tour.name} />
      </div>
      <div className="tour-info">
        <h3>Tour Rate</h3>
        <div className="tour-rate">
          <div className="rate-details">
            <span>Tour Date</span>
            <input type="date" value="2024-04-12" />
          </div>
          <div className="rate-details">
            <span>Adult</span>
            <select>
              <option value="0">0</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="rate-details">
            <span>Children</span>
            <select>
              <option value="0">0</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="rate-details">
            <span>Infant 0-3 yrs</span>
            <select>
              <option value="0">0</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="rate-details">
            <span>Total Amount</span>
            <span>0</span>
          </div>
        </div>
        <div className="tour-actions">
          <button className="book-now">Book Now</button>
          <button className="more-info">More Info</button>
        </div>
        <div className="enquiry">
          <h3>For more Enquiry</h3>
          <p>+977 015900337</p>
          <p>+977 9802348633</p>
        </div>
      </div>
      <div className="tour-details-content">
        <h3>Your Itinerary</h3>
        <ul>
          <li>Day: 1 Arrive Kathmandu</li>
          <li>Day: 2 Flight To Pokhara</li>
          {/* Add more itinerary items as needed */}
        </ul>
        <h3>What's Included</h3>
        <div className="included-items">
          <div className="included-item">
            <span className="icon">&#x1F6E9;</span>
            <span>ACCOMMODATION</span>
            <p>Hotel, Camp</p>
          </div>
          <div className="included-item">
            <span className="icon">&#x1F372;</span>
            <span>MEALS</span>
            <p>Breakfast, Lunch, Dinner</p>
          </div>
          <div className="included-item">
            <span className="icon">&#x1F68D;</span>
            <span>TRANSPORT</span>
            <p>Bus, Walking</p>
          </div>
          <div className="included-item">
            <span className="icon">&#x1F64B;</span>
            <span>GUIDE</span>
            <p>Expert Guide</p>
          </div>
          <div className="included-item">
            <span className="icon">&#x2753;</span>
            <span>ADDITIONAL INCLUDED</span>
            <ul>
              <li>Pick and Drop Services</li>
              <li>1 Meal Per Day</li>
              <li>Cruise Dinner &amp; Music Event</li>
              <li>Visit 7 Best Places in the City With Group</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;