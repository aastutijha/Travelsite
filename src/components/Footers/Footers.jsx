import React from 'react';
import './Footers.css';

const Footers = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="links">
          <div className="column">
            <h2>QUICK LINKS</h2>
            <ul>
              <li>Company Profile</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Testimonials</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h2>TOURS IN NEPAL</h2>
            <ul>
              <li>Best of Nepal Tour</li>
              <li>Classical Nepal Tour</li>
              <li>Nepal Hiking Tour</li>
              <li>Kathmandu Valley Trek</li>
              <li>Chitwan Safari Tour</li>
              <li>Yoga / Meditation Tour</li>
            </ul>
          </div>
          <div className="column">
            <h2>TREKS IN NEPAL</h2>
            <ul>
              <li>Ghorepani Poonhill Trek</li>
              <li>Annapurna Base Camp Trek</li>
              <li>Instant Everest Trek</li>
              <li>Annpaurna Circuit Trek</li>
              <li>Langtang Valley Trek</li>
              <li>Everest Base Camp Trek</li>
            </ul>
          </div>
          <div className="column">
            <h2>CONTACT DETAILS</h2>
            <p>Thamel, Kathmandu, Nepal</p>
            <p>Tel: +977-1-4435300 , 4422325</p>
            <p>Cell: +977-9851093862</p>
            <p>Email: info@plannepal.com / plannepaltoursn@gmail.com</p>
            <p>whatapps/Viber: 9801044333</p>
            <button>QUICK INQUIRY</button>
          </div>
        </div>
        <div className="bottom">
          <p>WE ARE ASSOCIATED WITH</p>
          <div className="payment-modes">
            <p>PAYMENT MODE WE ACCEPT</p>
            <div className="logos">
              <img src="visa.png" alt="Visa" />
              <img src="mastercard.png" alt="Mastercard" />
              <img src="paypal.png" alt="PayPal" />
            </div>
          </div>
          <div className="affiliations">
            <p>WE ARE AFFILIATED</p>
            <div className="logos">
              <img src="logo1.png" alt="Affiliation 1" />
              <img src="logo2.png" alt="Affiliation 2" />
              <img src="logo3.png" alt="Affiliation 3" />
              <img src="logo4.png" alt="Affiliation 4" />
              <img src="logo5.png" alt="Affiliation 5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;