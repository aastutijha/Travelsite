import React, { useState } from 'react';
import './submain.css';

const Submain = () => {
  // State to track if a package is clicked
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the clicked state
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='subMain' id='sub-main'>
      {/* Box for TOP INBOUND TOURS */}
      <div className='packageBox' onClick={handleClick}>
        <div className="subMainTop">
          TOP INBOUND TOURS
        </div>
        {/* Conditionally render content when box is clicked */}
        {isClicked && (
          <div className="text2">
            Spots at the top of our domestic must-go list
          </div>
        )}
      </div>
      {/* Box for TOP OUTBOUND TOURS */}
      <div className='packageBox' onClick={handleClick}>
        <div className="subMainTop">
          TOP OUTBOUND TOURS
        </div>
        {/* Conditionally render content when box is clicked */}
        {isClicked && (
          <div className="text2">
            Spots at the top of our outbound must-go list
          </div>
        )}
      </div>
    </div>
  );
}

export default Submain;