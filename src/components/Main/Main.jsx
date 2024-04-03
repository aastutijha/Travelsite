import React from 'react';
import './main.css';
import background from '../../assets/bgphoto.jpeg';

const Main = () => {
  const handleSearchButtonClick = () => {
    // Implement the functionality for the search button
    // This could include opening a search bar, navigating to a search page, etc.
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
        <div className="buttonContainer">
          
        </div>
        <div className="searchButtonContainer">
          {/* Add the search button here */}
          <button className="searchButton" onClick={handleSearchButtonClick}>
            Any where you want to go...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
