import React, { useState } from 'react';
import "./Mains.css";
import BookingForm from '../Bookingform/Bookingform';

const Mains = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <b className="to-the-any-container">
        <span className="to-the-any">to the any corner of</span>
        <span className="span">{` `}</span>
        <span className="the-world">the world.</span>
      </b>
      <b className="best-destination-around">
        Best destination around the world
      </b>
      <img className="image-1-icon" alt="" src="src/assets/travel.png" />
      <img className="image-3-icon" alt="" src="src/assets/bags-fotor-bg-remover-20240514133739.png" />
      
      <button className="book-now-button" onClick={openModal}>
        Book Now ✈
      </button>

      {isModalOpen && <BookingForm closeModal={closeModal} />}
    </div>
  );
};

export default Mains;