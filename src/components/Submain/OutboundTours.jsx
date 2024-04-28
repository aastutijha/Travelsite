import React from 'react';
import { Link } from 'react-router-dom';
import './OutboundTours.css';
import dubaiImage from '../../assets/dubai.jpeg';
import indonesiaImage from '../../assets/indonesia.jpeg';
import thailandImage from '../../assets/thailand.jpeg';
import cambodiaImage from '../../assets/cambodia.jpeg';
import IndiaImage from '../../assets/india.jpeg';
import chinaImage from '../../assets/china.jpeg';
import japanImage from '../../assets/japan.jpeg';

const OutboundTours = () => {
  const tourCards = [
    { image: dubaiImage, alt: "Dubai", title: "Dubai", tours: "1 Tour", id: 'dubai' },
    { image: indonesiaImage, alt: "Indonesia", title: "Indonesia", tours: "1 Tour", id: 'indonesia' },
    { image: thailandImage, alt: "Thailand", title: "Thailand", tours: "2 Tours", id: 'thailand' },
    { image: cambodiaImage, alt: "Cambodia", title: "Cambodia", tours: "1 Tour", id: 'cambodia' },
    { image: IndiaImage, alt: "India", title: "India", tours: "1 Tour", id: 'india' },
    { image: chinaImage, alt: "China", title: "China", tours: "1 Tour", id: 'china' },
    { image: japanImage, alt: "Japan", title: "Japan", tours: "2 Tours", id: 'japan' },
  ];

  return (
    <div className="outbound-places">
      <h2>TOP OUTBOUND PLACES</h2>
      <p>Spots at the top of our outbound must-go list</p>
      <div className="tour-cards">
        {tourCards.map((card, index) => (
          <div className="tour-card" key={index}>
            <img src={card.image} alt={card.alt} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.tours}</p>
              <Link to={`/tours/outbound/${card.id}`}>Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutboundTours;
