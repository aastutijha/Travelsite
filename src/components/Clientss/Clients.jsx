import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <h1 className="read-the-top-container">
        <span>{`Read The Top `}</span>
        <span className="travel-reviews">Travel Reviews</span>
      </h1>
      <main className="clients-inner">
        <section className="frame-group">
        <div className="frame-container">
      <div className="frame-div">
        <div className="frame-wrapper">
          <div className="parent">
            <h3 className="h32">★★★★★</h3>
            <h1 className="h12">‘’</h1>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="vector-parent">
            <img className="frame-child" alt="" src="/ellipse-1.svg" />
            <div className="frame-item" />
            <div className="wrapper-frame-1">
              <img
                className="wrapper-frame-1-child"
                alt=""
                src="/frame-1@2x.png"
              />
            </div>
          </div>
          <div className="overall-travel-holidays">
            Overall, Travel Holidays exceeded my expectations, and I highly
            recommend them to anyone looking for a hassle-free and memorable
            travel experience. I'll definitely be booking with them again for my
            future vacations.
          </div>
        </div>
      </div>
      <div className="carl-moore-tarragona-wrapper">
        <div className="carl-moore-tarragona-container">
          <p className="carl-moore">Carl Moore</p>
          <p className="tarragona">Tarragona</p>
        </div>
      </div>
      <div className="image-placeholder-parent">
        <div className="image-placeholder" />
        <img
          className="image-2-icon"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
    </div>
          <div className="second-review-content-wrapper">
            <div className="second-review-content">
              <div className="second-review-header">
                <div className="second-review-rating">
                  <h3 className="h3">★★★★★</h3>
                  <h1 className="h1">‘’</h1>
                </div>
              </div>
              <div className="i-recently-booked">
                I recently booked a holiday through Travel Holidays and I must
                say, it was an exceptional experience from start to finish. The
                website was easy to navigate, allowing me to explore various
                destinations and packages effortlessly.
              </div>
              <div className="second-reviewer">
                <div className="andy-silva-beautiful-container">
                  <p className="andy-silva">Andy Silva</p>
                  <p className="beautiful-holland">Beautiful Holland</p>
                </div>
              </div>
              <div className="second-reviewer-image">
                <div className="second-image-placeholder" />
                <img
                  className="image-1-icon"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="third-review-content-wrapper">
            <div className="third-review-content">
              <div className="kelvin-devid-temple-container">
                <p className="kelvin-devid">Kelvin Devid</p>
                <p className="temple-tour">Temple Tour</p>
              </div>
              <h1 className="h11">‘’</h1>
              <div className="third-review-body">
                <div className="third-review-body-child" />
                <div className="third-paragraph">
                  <div className="third-review-rating">
                    <div className="third-star-rating">
                      <h3 className="h31">★★★★★</h3>
                    </div>
                    <div className="during-my-trip">
                      During my trip, everything was arranged seamlessly, from
                      airport transfers to hotel check-ins. The itinerary was
                      well-planned, ensuring that I got the most out of my
                      vacation without feeling rushed.
                    </div>
                  </div>
                </div>
                <img
                  className="image-3-icon"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Clients;
