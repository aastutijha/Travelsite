import { useState } from 'react';
import './Bookingform.css';

function Bookingform({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        date: '04/16/2024',
        destination: '',
        adult: 0,
        children: 0,
        infant: 0,
        name: '', 
    });
    const [submitted, setSubmitted] = useState(false); // Track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(formData).some(value => value === '');

        if (isEmpty) {
            alert('Please fill in all the details.');
            return;
        }
        onSubmit(formData);
        setSubmitted(true); // Set form submission status to true
        onClose(); // Close the form after submission
    };

    const calculateTotalAmount = () => {
        // Implement your logic to calculate the total amount based on the formData
        return 0;
    };
  
    const ThankYouMessage = () => {
        return (
            <div className="thank-you-message">
                <h2>Thank You!</h2>
                <p>Dear {formData.name}, your booking has been confirmed.</p>
            </div>
        );
    };

    return (
        <div className="booking-form-container">
            {submitted ? (
                <ThankYouMessage />
            ) : (
                <div className="booking-form">
                    <h2>Book a Tour ✈</h2>
                    <button className="close-button" onClick={onClose}>
                        ❌
                    </button>
                    <div className="form-group">
                        <label>Tour Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Destination</label>
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Adult</label>
                        <select name="adult" value={formData.adult} onChange={handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Children</label>
                        <select
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Infant 0-3 yrs</label>
                        <select name="infant" value={formData.infant} onChange={handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="button-group">
                        <button type="submit" onClick={handleSubmit} className="book-now">
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ParentComponent = () => {
    const [isFormOpen, setIsFormOpen] = useState(true);
  
    const handleClose = () => {
      setIsFormOpen(false);
    };
  
    const handleSubmit = (formData) => {
      console.log('Form submitted:', formData);
    };
  
    return (
      <>
        {isFormOpen && (
          <Bookingform onClose={handleClose} onSubmit={handleSubmit} />
        )}
      </>
    );
  };
  
  export default ParentComponent;