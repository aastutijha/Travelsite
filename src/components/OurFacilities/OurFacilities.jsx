import React from 'react';
import './OurFacilities.css';
import backgroundImage from "../../assets/background-image.jpeg";

const OurFacilities = () => {
  return (
     <div className="our-facilities-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="title">Our Facilities</h1>
    <div className="our-facilities">
      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-bookmark"></i>
        </div>
        
        <h3>Personalized Matching</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-globe"></i>
        </div>
        <h3>Wide Variety Of Destinations</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-user-tie"></i>
        </div>
        <h3>Highly Qualified Service</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-umbrella"></i>
        </div>
        <h3>Best Price Guarantee</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-users"></i>
        </div>
        <h3>24/7 Support</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
      </div>
    </div>
    </div>
  );
};

export default OurFacilities;