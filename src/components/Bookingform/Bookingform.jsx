import React from 'react';
import './bookingform.css';

const BookingForm = ({ onClose }) => {
  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2> </h2>
        {/* JotForm iframe */}
        <iframe
          title="JotForm Template"
          src="https://form.jotform.com/241301239793455"
          frameborder="0"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
        {/* End of JotForm iframe */}
        <div className="button-group">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;