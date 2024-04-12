import React from 'react';
import './OutboundPlaces.css';
import dubaiImage from '../../assets/dubai.jpeg';
import indonesiaImage from '../../assets/indonesia.jpeg';
import thailandImage from '../../assets/thailand.jpeg';
import cambodiaImage from '../../assets/cambodia.jpeg';
import europeImage from '../../assets/europe.jpeg';
import chinaImage from '../../assets/china.jpeg';
import japanImage from '../../assets/japan.jpeg';

const OutboundPlaces = () => {
  return (
    <div className="outbound-places">
      <h2>TOP OUTBOUND PLACES</h2>
      <p>Spots at the top of our outbound must go list</p>
      <div className="place-cards">
        <div className="place-card">
          <img src={dubaiImage} alt="Dubai" />
          <h3>Dubai</h3>
          <p>1 Tour</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={indonesiaImage} alt="Indonesia" />
          <h3>Indonesia</h3>
          <p>1 Tour</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={thailandImage} alt="Thailand" />
          <h3>Thailand</h3>
          <p>2 Tours</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={cambodiaImage} alt="Cambodia" />
          <h3>Cambodia</h3>
          <p>1 Tour</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={europeImage} alt="Colours Of Europe" />
          <h3>Colours Of Europe</h3>
          <p>1 Tour</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={chinaImage} alt="China" />
          <h3>China</h3>
          <p>1 Tour</p>
          <button>Explore</button>
        </div>
        <div className="place-card">
          <img src={japanImage} alt="Japan" />
          <h3>Japan</h3>
          <p>2 Tours</p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default OutboundPlaces;