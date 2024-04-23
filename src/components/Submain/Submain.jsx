import React, { useState } from 'react';
import './submain.css';
import underwaterImage from '../../assets/underwater.jpg';
import londonImage from '../../assets/london.jpg';
import australiaImage from '../../assets/australia.jpg';
import parisImage from '../../assets/paris.jpg';
import tokyoImage from '../../assets/tokyo.jpg';
import CoxsBazarSea from '../Submain/Tours/Popular Outbound/CoxsBazarSea';
import London from '../Submain/Tours/Popular Outbound/London';
import Australia from '../Submain/Tours/Popular Outbound/Australia';
import Paris from '../Submain/Tours/Popular Outbound/Paris';
import Tokyo from '../Submain/Tours/Popular Outbound/Tokyo';
import InboundTours from './InboundTours';
import OutboundPlaces from './OutboundPlaces';
import { Link } from 'react-router-dom';

const places = {
  'CoxsBazarSea': CoxsBazarSea,
  'London': London,
  'Australia': Australia,
  'Paris': Paris,
  'Tokyo': Tokyo,
};

const Submain = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);

  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentPlace(null);
  };

  const handleOpenForm = (place) => {
    setCurrentPlace(place);
    setShowForm(true);
  };
  
  const CurrentPlaceComponent = places[currentPlace];

  return (
    <div className="subMain" id="sub-main">
      <h2 className="subMainTop">Popular OutBound Tour Places</h2>
      <div className="tourPlaces">
        {Object.keys(places).map(place => (
         <Link to={`/tours/${place}`} key={place}> 
          <div className="tourPlace" key={place}>
            <img src={place === 'CoxsBazarSea' ? underwaterImage : place === 'London' ? londonImage : place === 'Australia' ? australiaImage : place === 'Paris' ? parisImage : tokyoImage} alt={place === 'CoxsBazarSea' ? "Cox's Bazar Sea Beach" : place === 'London' ? "Festival" : place === 'Paris' ? "Adventures ride" : place === 'Australia' ? "Sundorban Bromon" : "Sundorban Bromon"} />
            <div className="tourPlaceDetails">
              <h3>{place === 'CoxsBazarSea' ? "Cox's Bazar Sea Beach" : place === 'London' ? "London" : place === 'Paris' ? "City of Romance" : place === 'Australia' ? "Sundorban Bromon" : "Life of Animation"}</h3>
              <p>{place === 'CoxsBazarSea' ? "chitagong, bangladesh" : place === 'London' ? "London, UK" : place === 'Paris' ? "Paris" : place === 'Australia' ? "Australia" : "Tokyo"}</p>
              <div className="price">
                <span className="discountedPrice">{place === 'CoxsBazarSea' ? "$1290" : place === 'London' ? "$1590" : place === 'Paris' ? "$3344" : place === 'Australia' ? "$2290" : "$4290"}</span>
                <span className="originalPrice">{place === 'CoxsBazarSea' ? "$2200" : place === 'London' ? "$2500" : place === 'Paris' ? "$5200" : place === 'Australia' ? "$3200" : "$6200"}</span>
              </div>
              <button onClick={() => handleOpenForm(place)}>Open</button>
            </div>
          </div>
          </Link>
        ))}
      </div>
      {showForm && CurrentPlaceComponent && <CurrentPlaceComponent onClose={handleCloseForm} />}
      <InboundTours />
      <OutboundPlaces/>
    </div>
  );
};

export default Submain;
