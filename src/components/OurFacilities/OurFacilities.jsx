import React, { useEffect, useRef, useState } from 'react';
import './OurFacilities.css';
import backgroundImage from "../../assets/background-image.jpeg";

const OurFacilities = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current.getBoundingClientRect();
      // Set animate to true when the section is near the viewport
      setAnimate(top < window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
     <div className="our-facilities-section"  id="ourfacilities">
        <h1 className="title">Our Facilities</h1>
    <div className="our-facilities">
      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-bookmark"></i>
        </div>
        
        <h3>Personalized Matching 🛡
</h3>
        <p>"Tailored experiences to match your travel dreams perfectly."</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-globe"></i>
        </div>
        <h3>Wide Variety of Destinations🏝
</h3>
        <p>"Explore an expansive array of diverse destinations for your next adventure."</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-user-tie"></i>
        </div>
        <h3>Highly Qualified Service 👩🏼‍💻🧑🏻‍💻
</h3>
        <p>"Experience unparalleled service excellence from our highly skilled and knowledgeable professionals."</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-umbrella"></i>
        </div>
        <h3>Best Price Guarantee 💰
</h3>
        <p>"Unlock unbeatable prices and savings with our Best Price Guarantee on all travel packages."</p>
      </div>

      <div className="facility">
        <div className="facility-icon">
          <i className="fa fa-users"></i>
        </div>
        <h3>24/7 Support 🏪
</h3>
        <p>"Round-the-clock assistance and support to ensure a seamless and worry-free travel experience."</p>
      </div>
    </div>
    </div>
    
  );
};

export default OurFacilities;