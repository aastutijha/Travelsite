import React, { useState } from 'react';
import './OutboundPlaces.css';
import dubaiImage from '../../assets/dubai.jpeg';
import indonesiaImage from '../../assets/indonesia.jpeg';
import thailandImage from '../../assets/thailand.jpeg';
import cambodiaImage from '../../assets/cambodia.jpeg';
import europeImage from '../../assets/europe.jpeg';
import chinaImage from '../../assets/china.jpeg';
import japanImage from '../../assets/japan.jpeg';

const OutboundPlaces = () => {
  const [openFormIndex, setOpenFormIndex] = useState(null);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('');

  const handleOpenForm = (index) => {
    setOpenFormIndex(index);
  };


  const placeCards = [
    { image: dubaiImage, alt: "Dubai", title: "Dubai", tours: "1 Tour" },
    { image: indonesiaImage, alt: "Indonesia", title: "Indonesia", tours: "1 Tour" },
    { image: thailandImage, alt: "Thailand", title: "Thailand", tours: "2 Tours" },
    { image: cambodiaImage, alt: "Cambodia", title: "Cambodia", tours: "1 Tour" },
    { image: europeImage, alt: "Colours Of Europe", title: "Colours Of Europe", tours: "1 Tour" },
    { image: chinaImage, alt: "China", title: "China", tours: "1 Tour" },
    { image: japanImage, alt: "Japan", title: "Japan", tours: "2 Tours" },
  ];

  return (
    <div className={`outbound-places ${openFormIndex !== null ? 'blur' : ''}`}>
      <h2>TOP OUTBOUND PLACES</h2>
      <p>Spots at the top of our outbound must-go list</p>
      <div className="place-cards">
        {placeCards.map((card, index) => (
          <div className="place-card" key={index}>
            <img src={card.image} alt={card.alt} />
            <h3>{card.title}</h3>
            <p>{card.tours}</p>
            <button onClick={() => handleOpenForm(index)}>Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutboundPlaces;