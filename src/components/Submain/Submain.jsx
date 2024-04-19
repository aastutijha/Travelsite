import { useState } from "react";
import "./submain.css";
import underwaterImage from "../../assets/underwater.jpg";
import londonImage from "../../assets/london.jpg";
import australiaImage from "../../assets/australia.jpg";
import parisImage from "../../assets/paris.jpeg";
import tokyoImage from "../../assets/tokyo.jpg";
import InboundTours from "./InboundTours";
import OutboundPlaces from "./OutboundPlaces";

const Submain = () => {
  const [showFormIndex, setShowFormIndex] = useState(null);

  function handleOpenForm(index) {
    setShowFormIndex(index);
  }

  function handleCloseForm() {
    setShowFormIndex(null);
  }

  const tourPlaces = [
    {
      image: underwaterImage,
      alt: "Cox's Bazar Sea",
      title: "Cox's Bazar Sea ",
      location: "Chittagong, Bangladesh",
      discountedPrice: "$1290",
      originalPrice: "$2200",
    },
    {
      image: londonImage,
      alt: "London Eye",
      title: "Beautiful London",
      location: "London, UK",
      discountedPrice: "$3344",
      originalPrice: "$4200",
    },
    {
      image: parisImage,
      alt: "Eiffel Tower",
      title: "City of Romance",
      location: "Paris, France",
      discountedPrice: "$3344",
      originalPrice: "$5200",
    },
    {
      image: australiaImage,
      alt: "Sydney Opera House",
      title: "Sundarban Bromon",
      location: "Australia",
      discountedPrice: "$2290",
      originalPrice: "$3200",
    },
    {
      image: tokyoImage,
      alt: "Tokyo Tower",
      title: "Life of Animation",
      location: "Tokyo, Japan",
      discountedPrice: "$4290",
      originalPrice: "$6200",
    },
  ];

  return (
    <div
      className={`subMain ${showFormIndex !== null ? "blur" : ""}`}
      id="sub-main"
    >
      <h2 className="subMainTop">Popular Outbound Tour Places</h2>
      <div className="tourPlacesCards">
        {tourPlaces.map((place, index) => (
          <div className="tourPlace" key={index}>
            <img src={place.image} alt={place.alt} />
            <div className="tourPlaceDetails">
              <h3>{place.title}</h3>
              <p>{place.location}</p>
              <div className="price">
                <span className="discountedPrice">{place.discountedPrice}</span>
                <span className="originalPrice">{place.originalPrice}</span>
              </div>
              <button
                className="openButton"
                onClick={() => handleOpenForm(index)}
              >
                Open
              </button>
              {showFormIndex === index && (
                <div className="bookingForm">
                  <h3>Booking Information</h3>
                  <img src={place.image} alt={place.alt} />
                  <label htmlFor="price">Price: {place.discountedPrice}</label>
                  <label htmlFor="person">Number of Person:</label>
                  <input type="number" id="person" />
                  <label htmlFor="date">Tour Dates :</label>
                  <input type="date" id="date" />
                  <button onClick={handleCloseForm} className="bookNowButton">
                    Book Now
                  </button>
                  <button
                    onClick={() => setShowFormIndex(null)}
                    className="closeButton"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <InboundTours />
      <OutboundPlaces />
    </div>
  );
};

export default Submain;