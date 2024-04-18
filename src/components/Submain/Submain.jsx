import { useState } from 'react';
import './submain.css';
import underwaterImage from '../../assets/underwater.jpg';
import londonImage from '../../assets/london.jpg';
import australiaImage from '../../assets/australia.jpg';
import parisImage from '../../assets/paris.jpeg';
import tokyoImage from '../../assets/tokyo.jpg';
import InboundTours from './InboundTours';
import OutboundPlaces from './OutboundPlaces';

const Submain = () => {
  const [showForm, setShowForm] = useState([false, false, false, false, false]);
  function handleOpenForm (index)  {
    let newShowForm = [...showForm];
    newShowForm[index] = !newShowForm[index];
    setShowForm(newShowForm);
  }

  function handleCloseForm (index)  {
    let newShowForm = [...showForm];
    newShowForm[index] = false;
    setShowForm(newShowForm);
  }

  const tourPlaces = [
    { image: underwaterImage, alt: "Cox's Bazar Sea", title: "Cox's Bazar Sea ", location: "chitagong, bangladesh", discountedPrice: "$1290", originalPrice: "$2200" },
    { image: londonImage, alt: "Festival", title: "Beautiful places", location: "London", discountedPrice: "$3344", originalPrice: "$4200" },
    { image: parisImage, alt: "Adventures ride", title: "City of Romance", location: "Paris", discountedPrice: "$3344", originalPrice: "$5200" },
    { image: australiaImage, alt: "Sundorban Bromon", title: "Sundorban Bromon", location: "Australia", discountedPrice: "$2290", originalPrice: "$3200" },
    { image: tokyoImage, alt: "Sundorban Bromon", title: "Life of Animation", location: "Tokyo", discountedPrice: "$4290", originalPrice: "$6200" },
  ];

  return (
    <div className="subMain" id="sub-main">
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
              <button className="openButton" onClick={handleOpenForm}>Open</button>
              {showForm[index] && (
                <div className="bookingForm">
                  <h3>Booking Information</h3>
                  <label htmlFor="price">Price: {place.discountedPrice}</label>
                  <label htmlFor="person">Number of Person:</label>
                  <input type="number" id="person" />
                  <label htmlFor="date">Tour Dates :</label>
                  <input type="date" id="date" />
                  <button onClick={handleCloseForm} className="bookNowButton">Book Now</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <InboundTours />
      <OutboundPlaces/>
    </div>
  );
};

export default Submain