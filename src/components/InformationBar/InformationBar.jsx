import React from 'react';
import './InformationBar.css';

const InformationBar = () => {
  const handleQuickInquiryClick = () => {
    // Scroll to the contact FAQ section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navigation-bar">
      <div className="tours">
        <h3>TOURS IN NEPAL</h3>
        <ul>
          <li>Best of Nepal Tour</li>
          <li>Classical Nepal Tour</li>
          <li>Nepal Hiking Tour</li>
          <li>Kathmandu Valley Trek</li>
          <li>Chitwan Safari Tour</li>
        </ul>
      </div>
      <div className="treks">
        <h3>TREKS IN NEPAL</h3>
        <ul>
          <li>Ghorepani Poonhill Trek</li>
          <li>Rara lake Trek</li>
          <li>Annapurna Base Camp Trek</li>
          <li>Instant Everest Trek</li>
          <li>Langtang Valley Trek</li>
          <li>Everest Base Camp Trek</li>
        </ul>
      </div>
      <div className="contact-details">
        <h3>CONTACT DETAILS</h3>
        <p>Baneshwor, Kathmandu, Nepal</p>
        <p>Tel: +977-1-4435300 , 4422325</p>
        <p>Cell: 9851243326</p>
        <p>Email:TravelHolidays@gmail.com</p>
        <p>Whatapps/Viber : 9851243326</p>
        <button className="quick-inquiry" onClick={handleQuickInquiryClick} >QUICK INQUIRY</button>
      </div>
      <div className="associated-with">
        <h3>PAYMENT MODE WE ACCEPT</h3>
        <div className="payment-modes">
          <img src="src\assets\mastercards.png" alt="Allcard" />
        </div>
      </div>
    </div>
  );
};

export default InformationBar;