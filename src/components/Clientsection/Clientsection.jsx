import React from "react";
import "./clientsection.css";
import backgroundImage from "../../assets/camera.jpg"; // Import your background image

const Clientsection = () => {
  return (
    <div className="clients-section" style={{ backgroundImage: `url(${backgroundImage})` }} id="clients">
        <h2>Read The Top Travel Reviews</h2>
      <p className="subtitle">
      </p>
      <div className="feedback-container">
        <div className="feedback-box">
          <div className="rating">★★★★★</div>
          <p>Overall, Travel Holidays exceeded my expectations, and I highly recommend them to anyone looking for a hassle-free and memorable travel experience. I'll definitely be booking with them again for my future vacations.</p>
          <div className="client-info">
            <img src="src\assets\woman.jpeg" alt="Client Avatar" />
            <div>
              <span>Carl Moore</span>
              <span>Tarragona</span>
            </div>
          </div>
        </div>
        <div className="feedback-box">
          <div className="rating">★★★★</div>
          <p> I recently booked a holiday through Travel Holidays and I must say, it was an exceptional experience from start to finish. The website was easy to navigate, allowing me to explore various destinations and packages effortlessly. </p>
          <div className="client-info">
            <img src="src\assets\man.jpeg" alt="Client Avatar" />
            <div>
              <span>Andy Silva</span>
              <span>Beautiful Holland</span>
            </div>
          </div>
        </div>
        <div className="feedback-box">
          <div className="rating">★★★★</div>
          <p> During my trip, everything was arranged seamlessly, from airport transfers to hotel check-ins. The itinerary was well-planned, ensuring that I got the most out of my vacation without feeling rushed.</p>
          <div className="client-info">
            <img src="src\assets\boy.jpeg" alt="Client Avatar" />
            <div>
              <span>Kelvin Devid</span>
              <span>Temple Tour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientsection; 