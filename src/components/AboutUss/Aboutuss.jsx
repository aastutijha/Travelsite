import "./Aboutuss.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <footer className="hero-image-parent">
        <section className="hero-image" />
        <div className="who-are-we-wrapper">
          <h3 className="who-are-we">Who are we ?</h3>
        </div>
        <div className="frame-parent">
          <div className="we-are-travel-experts-wrapper">
            <div className="we-are-travel">We Are Travel Experts</div>
          </div>
          <div className="travel-holidays-offers-container">
            <ol className="travel-holidays-offers-unique">
              <li className="travel-holidays-offers">
                Travel Holidays offers unique and extraordinary travel
                experiences.
              </li>
              <li className="we-are-more">
                We are more than just a travel agency; we are your dedicated
                travel partner.
              </li>
              <li className="to-curate-personalized">
                To curate personalized adventures tailored to your preferences
                and interests.
              </li>
              <li className="whether-you-prefer">
                Whether you prefer beach getaways, mountain expeditions, city
                immersions, or off-the-beaten-path explorations, they have
                options for you.
              </li>
              <li className="we-carefully-select">
                We carefully select accommodations, activities, and itineraries
                to align with your expectations.
              </li>
              <li>
                Our goal is to make each moment of your trip memorable and
                meaningful.
              </li>
            </ol>
          </div>
        </div>
      </footer>
      <img
        className="marten-bjork-wgu1pzdsm3g-unspl-icon"
        alt=""
        src="src\assets\bag-fotor-bg-remover-20240513174322.png"
      />
    </div>
  );
};

export default AboutUs;
