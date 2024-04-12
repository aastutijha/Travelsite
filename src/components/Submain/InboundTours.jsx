import React from 'react';
import './InboundTours.css';
import everestImage from '../../assets/mountain.jpeg';
import IlamImage from '../../assets/Ilam.jpeg';
import langtangImage from '../../assets/langtang.jpeg';
import raralakeImage from '../../assets/raralake.jpeg';
import darjeelingImage from '../../assets/darjeeling.jpeg';
import adventureImage from '../../assets/adventure.jpeg';


const InboundTours = () => {
  return (
    <div className="inbound-tours">
      <h2>TOP INBOUND TOURS</h2>
      <p>Spots at the top of our domestic must go list</p>
      <div className="tour-cards">
        <div className="tour-card">
          <img src={everestImage} alt="The Best of Everest Base..." />
          <h3>Best of Everest Base...</h3>
          <p>18N/19D</p>
          <span className="rating">&#9733; 4</span>
          <button>Explore</button>
        </div>
        <div className="tour-card">
          <img src={IlamImage} alt="Gateway to Ilam Tea Garden" />
          <h3>Illam Tea Garden</h3>
          <p>10N/11D</p>
          <span className="rating">&#9733; 3</span>
          <button>Explore</button>
        </div>
        <div className="tour-card">
          <img src={langtangImage} alt="Langtang Trek" />
          <h3>Langtang Trek</h3>
          <p>20N/21D</p>
          <span className="rating">&#9733; 2</span>
          <button>Explore</button>
        </div>
        <div className="tour-card">
          <img src={darjeelingImage} alt="Darjeeling sikkim Trek" />
          <h3>Darjeeling sikkim Trek</h3>
          <p>11N/12D</p>
          <span className="rating">&#9733; 3</span>
          <button>Explore</button>
        </div>
        <div className="tour-card">
          <img src={raralakeImage} alt="Rara Lake Trekking" />
          <h3>Rara Lake Trekking</h3>
          <p>6N/7D</p>
          <span className="rating">&#9733; 4</span>
          <button>Explore</button>
        </div>
        <div className="tour-card">
          <img src={adventureImage} alt="Adventure Highlights" />
          <h3>Adventure Highlights</h3>
          <p>5N/6D</p>
          <span className="rating">&#9733; 2</span>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default InboundTours;