import React, { useState } from 'react';
import './submain.css';
// Import your image
import historicalImage from '../../assets/historical.jpg';
import naturalImage from '../../assets/natural.jpg';
import culturalImage from '../../assets/cultural.jpg';
import adventureImage from '../../assets/adventure.jpeg';
import beachImage from '../../assets/beach.jpeg';
import culinaryImage from '../../assets/culinary.jpg';

const Submain = () => {
  // State to track if a package is clicked
  const [inboundClicked, setInboundClicked] = useState(false);
  const [outboundClicked, setOutboundClicked] = useState(false);

  // Function to toggle the clicked state for inbound tours
  const handleInboundClick = () => {
    setInboundClicked(!inboundClicked);
    // Close outbound tours content when inbound tours clicked
    setOutboundClicked(false);
  };

  // Function to toggle the clicked state for outbound tours
  const handleOutboundClick = () => {
    setOutboundClicked(!outboundClicked);
    // Close inbound tours content when outbound tours clicked
    setInboundClicked(false);
  };

  return (
    <div className='subMain' id='sub-main'>
      {/* Box for TOP INBOUND TOURS */}
      <div className='packageBox' onClick={handleInboundClick}>
        <div className="subMainTop">
          TOP INBOUND TOURS
        </div>
        <div className="text2">
          Spots at the top of our domestic must-go list
        </div>
        {/* Conditionally render content when box is clicked */}
        {inboundClicked && (
          <div className="subMainContent">
            <div className="subsection" onClick={() => console.log('Historical Sites Clicked')} style={{ backgroundImage: `url(${historicalImage})` }}>
              <h3>Historical Sites</h3>
              <p>Explore ancient ruins and historic landmarks</p>
            </div>
            <div className="subsection" onClick={() => console.log('Natural Wonders Clicked')} style={{ backgroundImage: `url(${naturalImage})` }}>
              <h3>Natural Wonders</h3>
              <p>Discover breathtaking landscapes and scenic vistas</p>
            </div>
            <div className="subsection" onClick={() => console.log('Cultural Experiences Clicked')} style={{ backgroundImage: `url(${culturalImage})` }}>
              <h3>Cultural Experiences</h3>
              <p>Immerse yourself in local traditions and customs</p>
            </div>
          </div>
        )}
      </div>
      {/* Box for TOP OUTBOUND TOURS */}
      <div className='packageBox' onClick={handleOutboundClick}>
        <div className="subMainTop">
          TOP OUTBOUND TOURS
        </div>
        <div className="text2">
          Spots at the top of our outbound must-go list
        </div>
        {/* Conditionally render content when box is clicked */}
        {outboundClicked && (
          <div className="subMainContent">
            <div className="subsection" onClick={() => console.log('Adventure Destinations Clicked')} style={{ backgroundImage: `url(${adventureImage})` }}>
              <h3>Adventure Destinations</h3>
              <p>Embark on thrilling outdoor adventures</p>
            </div>
            <div className="subsection" onClick={() => console.log('Beach Getaways Clicked')} style={{ backgroundImage: `url(${beachImage})` }}>
              <h3>Beach Getaways</h3>
              <p>Relax and unwind on pristine sandy beaches</p>
            </div>
            <div className="subsection" onClick={() => console.log('Culinary Journeys Clicked')} style={{ backgroundImage: `url(${culinaryImage})` }}>
              <h3>Culinary Journeys</h3>
              <p>Indulge in delicious cuisine from around the world</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Submain;