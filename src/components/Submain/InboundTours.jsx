
import  { useState } from 'react';
import './InboundTours.css';
import everestImage from '../../assets/mountain.jpeg';
import IlamImage from '../../assets/Ilam.jpeg';
import langtangImage from '../../assets/langtang.jpeg';
import raralakeImage from '../../assets/raralake.jpeg';
import lumbiniImage from '../../assets/lumbini.jpg';
import darjeelingImage from '../../assets/darjeeling.jpeg';
import chitwanImage from '../../assets/chitwan.jpg';

const InboundTours = () => {
  const [openFormIndex, setOpenFormIndex] = useState(null);

  const handleOpenForm = (index) => {
    setOpenFormIndex(index);
  };

  const handleCloseForm = () => {
    setOpenFormIndex(null);
  };

  const tourCards = [
    { image: everestImage, alt: "Mount Everest, Nepal", title: "Best of Everest Base Camp", duration: "18N/19D", rating: "&#9733;★★★★" },
    { image: IlamImage, alt: "Ilam Tea Garden, Nepal", title: "Illam Tea Garden", duration: "10N/11D", rating: "&#9733;★★★" },
    { image: langtangImage, alt: "Langtang Trek, Nepal", title: "Langtang Trek", duration: "20N/21D", rating: "&#9733;★★" },
    { image: lumbiniImage, alt: "Lumbini, Nepal", title: "Lumbini", duration: "8N/9D", rating: "&#9733;★★" },
    { image: darjeelingImage, alt: "Darjeeling, India", title: "Darjeeling Sikkim Trek", duration: "11N/12D", rating: "&#9733;★★" },
    { image: raralakeImage, alt: "Rara Lake, Nepal", title: "Rara Lake Trekking", duration: "6N/7D", rating: "&#9733;★★★" },
    { image: chitwanImage, alt: "Chitwan, Nepal", title: "Chitwan Safari", duration: "5N/6D", rating: "&#9733;★" },
  ];

  return (
    <div className={`inbound-tours ${openFormIndex !== null ? 'blur' : ''}`}>
      <h2>TOP INBOUND TOURS</h2>
      <p>Spots at the top of our domestic must-go list</p>
      <div className="tour-cards">
        {tourCards.map((card, index) => (
          <div className="tour-card" key={index}>
            <img src={card.image} alt={card.alt} />
            <h3>{card.title}</h3>
            <p>{card.duration}</p>
            <span className="rating" dangerouslySetInnerHTML={{ __html: card.rating }}></span>
            <button onClick={() => handleOpenForm(index)}>Explore</button>
            {openFormIndex === index && (
              <div className="bookingForm">
                <img src={card.image} alt={card.alt} />
                <h3>{card.title}</h3>
                <p>{card.duration}</p>
                <span className="rating" dangerouslySetInnerHTML={{ __html: card.rating }}></span>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" />
                <label htmlFor="date">Tour Dates :</label>
                <input type="date" id="date" />
                <button onClick={handleCloseForm}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboundTours;
