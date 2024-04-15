import React, { useState } from 'react';
import './bookingform.css'; // Import your CSS file for styling the form

const BookingForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '', 
    person: '',
    date: '',
  });

  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const [isBookNowClicked, setIsBookNowClicked] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsBookNowClicked(true); // Set book now button clicked
  };

  const handleCloseClick = () => {
    setIsCloseClicked(true);
    onClose();
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2>Book a Tour</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <label htmlFor="person">Adults?</label>
          <input
            type="number"
            name="person"
            id="person"
            placeholder="How Many Adults?"
            value={formData.person}
            onChange={handleChange}
            required
          />
           <label htmlFor="person">Children</label>
          <input
            type="number"
            name="person"
            id="person"
            placeholder="How Many Children?"
            value={formData.person}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Tour dates</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="How Many Days?"
            value={formData.days}
            onChange={handleChange}
            required
          />
          <div className="button-group">
          <button type="submit" className={isBookNowClicked ? 'book-now-clicked' : ''}>
              Book Now
            </button>
            <button className={isCloseClicked ? "close-button-red" : "close-button"} onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;