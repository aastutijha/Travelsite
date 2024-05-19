// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './InboundTours.css';
import everestImage from '../../assets/mountain.jpeg';
import IllamImage from '../../assets/Ilam.jpeg';
import langtangImage from '../../assets/langtang.jpeg';
import raralakeImage from '../../assets/raralake.jpeg';
import lumbiniImage from '../../assets/lumbini.jpg';
import darjeelingImage from '../../assets/darjeeling.jpeg';
import chitwanImage from '../../assets/chitwan.jpg';

const InboundTours = () => {
  const tourCards = [
    { id: 'everest', image: everestImage, alt: 'Mount Everest, Nepal', title: 'Best of Everest Base Camp', duration: '14N/15D', rating: '&#9733;★★★★' },
    { id: 'illam', image: IllamImage, alt: 'Illam Tea Garden, Nepal', title: 'Illam Tea Garden', duration: '5N/6D', rating: '&#9733;★★★' },
    { id: 'langtang', image: langtangImage, alt: 'Langtang Trek, Nepal', title: 'Langtang Trek', duration: '7N/8D', rating: '&#9733;★★' },
    { id: 'lumbini', image: lumbiniImage, alt: 'Lumbini, Nepal', title: 'Lumbini Tour', duration: '4N/5D', rating: '&#9733;★★' },
    { id: 'darjeeling', image: darjeelingImage, alt: 'Darjeeling, India', title: 'Darjeeling Sikkim Tour', duration: '7N/8D', rating: '&#9733;★★' },
    { id: 'rara', image: raralakeImage, alt: 'Rara Lake, Nepal', title: 'Rara Lake Trek', duration: '5N/6D', rating: '&#9733;★★★' },
    { id: 'chitwan', image: chitwanImage, alt: 'Chitwan, Nepal', title: 'Chitwan Safari', duration: '3N/4D', rating: '&#9733;★' },
  ];

  return (
    <div className ="inbound-tours">
      <h2>TOP INBOUND TOURS</h2>
      <p>Spots at the top of our domestic must-go list</p>
      <div className="tour-cards">
        {tourCards.map((card, index) => (
          <div className="tour-card" key={index}>
            <img src={card.image} alt={card.alt} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.duration}</p>
              <span className="rating" dangerouslySetInnerHTML={{ __html: card.rating }}></span>
              <Link to={`/tours/inbound/${card.id}`}>Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboundTours;
