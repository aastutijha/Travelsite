import React, { useState, useEffect } from 'react';
import imgPlaceholder from '../../assets/group.jpg';

const Productandservices = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const body = document.body;
    let scrollPosition = 0;

    if (showPopup) {
      scrollPosition = window.pageYOffset;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
    } else {
      body.style.overflow = 'unset';
      body.style.position = 'unset';
      body.style.top = 'unset';
      window.scrollTo(0, scrollPosition);
    }
  }, [showPopup]);

  return (
    <div className="container" id="products">
      <section className="title">
        <h1>Who Are We?</h1>
       
        <div className="image-container">
          <img src={imgPlaceholder} alt="Image Description" />
        </div>
        <p>We Are Travel Experts</p>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
        </p>
       
      </section>
      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={stopPropagation}>
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <div className="popup-details">
              <h3>Popup Title</h3>
              <p>
                Popup Description. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productandservices;