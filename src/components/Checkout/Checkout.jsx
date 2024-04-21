import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="progress-bar">
        {/* Add progress bar steps here */}
      </div>
      <div className="checkout-content">
        <div className="billing-details">
          <h3>Billing Details</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Country" />
          {/* Add other billing details fields here */}
        </div>
        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <div className="booking-item">
            <p>Tour: With Roman Forum</p>
            <p>Starting Date: May 27, 2021</p>
            <p>2 Adult</p>
            <p>USD 2,350.00</p>
          </div>
          <div className="booking-item">
            <p>Tour: With Roman Forum</p>
            <p>Starting Date: May 27, 2021</p>
            <p>2 Adult</p>
            <p>USD 2,350.00</p>
          </div>
          <div className="total">
            <p>Total: USD 2,550.00</p>
          </div>
          <div className="terms-condition">
            <input type="checkbox" />
            <label>Check the box to confirm you've read and agree to our Terms and Conditions and Privacy Policy.</label>
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;