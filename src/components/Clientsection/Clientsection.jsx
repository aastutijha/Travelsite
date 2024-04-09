import React from "react";
import "./clientsection.css";

const Clientsection = () => {
  return (
    <div className="clients-section" id="clients">
      <h2>Happy Clients</h2>
      <div className="feedback-container">
        <div className="feedback-box">
          <p>
          I recently booked a holiday through Travel Holidays and I must say, it was an exceptional experience from start to finish. The website was easy to navigate, allowing me to explore various destinations and packages effortlessly.
          </p>
          <span>Jhonathon Doe</span>
          <span>Officer</span>
        </div>
        <div className="feedback-box">
          <p>
          Overall, Travel Holidays exceeded my expectations, and I highly recommend them to anyone looking for a hassle-free and memorable travel experience. I'll definitely be booking with them again for my future vacations
          </p>
          <span>Katrina Kaif</span>
          <span>Actress</span>
        </div>
        <div className="feedback-box">
          <p>
          During my trip, everything was arranged seamlessly, from airport transfers to hotel check-ins. The itinerary was well-planned, ensuring that I got the most out of my vacation without feeling rushed.
          </p>
          <span>Zaire Aktar</span>
          <span>Business Men</span>
        </div>
      </div>
    </div>
  );
};

export default Clientsection;