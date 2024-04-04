import React, { useState } from 'react';
import './bookingform.css'; // Import your CSS file for styling the form

const BookingForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    Email: '',
    destination: '', 
    Person: '',
    Days: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2>Book a Tour</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.address}
            onChange={handleChange}
            required
          />
           <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Person"
            placeholder="How Many Person?"
            value={formData.Person}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Days"
            placeholder="How Many Days?"
            value={formData.Days}
            onChange={handleChange}
            required
          />
         
          <button type="submit">Book Now</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingForm;