import React, { useState } from 'react';
import './AboutUs.css';
import imgPlaceholder from '../../assets/group.jpg';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

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
            At Travel Holidays, we redefine travel experiences by going beyond the ordinary. We are not just a travel agency; we are your dedicated travel partner, meticulously curating personalized adventures tailored to your unique preferences and interests. Whether you seek serene beach getaways, thrilling mountain expeditions, cultural immersions in vibrant cities, or off-the-beaten-path explorations, our team of passionate experts is here to turn your travel dreams into reality. We handpick accommodations, activities, and itineraries to ensure they align perfectly with your expectations, allowing you to immerse yourself fully in each destination's wonders. Our personalized matching approach ensures that every aspect of your trip resonates with your travel style, making each moment memorable and meaningful.
            </p>
            {showMore && (
              <p>
                Additionally, our wide network of partners and suppliers enables us to offer an extensive range of destinations and experiences, giving you the freedom to choose from a diverse array of travel options. Whether you're seeking luxury retreats, cultural encounters, adventure-packed escapades, or family-friendly vacations, we have something to cater to every traveler's preferences.
              </p>
            )}
            <button className="learn-more-btn" onClick={() => setShowMore(!showMore)}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;