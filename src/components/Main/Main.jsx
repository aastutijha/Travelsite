import React, { useState } from 'react';
import './main.css';
import background from '../../assets/bgphoto.jpeg';
import Bookingform from '../Bookingform/Bookingform'; // Import the BookingForm component

const Main = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSearchButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmitForm = (formData) => {
    // Implement the functionality to handle form submission (e.g., sending data to backend)
    console.log(formData);
    setIsFormOpen(false);
  };

  return (
    <div className='main' id='main' style={{ backgroundImage: `url(${background})` }}>
      <div className="center-main">
        <div className="text1">
          Wonders are waiting.....
        </div>
        <div className="text2">
          Discover the world with unforgettable travel experiences.
        </div>
        <div className="searchButtonContainer">
          {/* Change the button text and onClick event */}
          <button className="searchButton" onClick={handleSearchButtonClick}>
            Book a Tour
          </button>
        </div>
      </div>
      {/* Conditionally render the BookingForm component */}
      {isFormOpen && <Bookingform onClose={handleCloseForm} onSubmit={handleSubmitForm} />}
    </div>
  );
};

export default Main;