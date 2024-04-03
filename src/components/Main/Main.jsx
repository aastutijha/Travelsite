import React, { useEffect, useRef, useState } from 'react';
import './main.css';
// Import any necessary assets or components for the search functionality

const Main = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    video.playbackRate = 1.25;
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  const handleSearchButtonClick = () => {
    // Implement the functionality for the search button
    // This could include opening a search bar, navigating to a search page, etc.
  };

  return (
    <div className='main' id='main'>
      <div className="center-main">
        <div className="text1">
          Wonders are waiting for .....
        </div>
        <div className="text2">
          Discover the world with over 50,000+ unforgettable travel experiences.
        </div>
        <div className="buttonContainer">
          <div className="text3">
            <button className="contactButton" onClick={handleSearchButtonClick}>
              Search
            </button>
          </div>
        </div>
        <div className="searchButtonContainer">
          {/* Add the search button here */}
          <button className="searchButton" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>
      </div>
      <div className="right-main">
        <video 
          autoPlay 
          muted 
          loop 
          id="myVideo" 
          className="video-background" 
          onClick={handleVideoClick} 
          ref={videoRef}
        >
          {/* <source src={videoSource} type="video/mp4" /> */}
        </video>
        {/* {!isPlaying && <img src={pauseImage} alt="Pause" className="pause-image" onClick={handleVideoClick} />} */}
      </div>
    </div>
  )
}

export default Main;