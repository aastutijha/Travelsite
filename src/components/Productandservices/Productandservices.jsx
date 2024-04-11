import React from 'react';
import './productandservices.css';
import imgPlaceholder from '../../assets/group.jpg';

const Productandservices = () => {
  return (
    <div className="container" id="products">
      <section className="title">
      <div className="title-wrapper">
        <h1>Who Are We?</h1>
        </div>
        <div className="content-wrapper">
          <div className="image-content">
            <img src={imgPlaceholder} alt="Image Description" />
          </div>
          <div className="text-content">
            <p>We Are Travel Experts</p>
            <div className="text-content"></div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Travel holidays is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productandservices;