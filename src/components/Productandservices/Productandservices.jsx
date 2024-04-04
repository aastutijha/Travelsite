import React, { useState, useEffect } from 'react';
import './productandservices.css';
//import img1 from '../../assets/products/img3.png';
//import img2 from '../../assets/products/img2.png';
//import img3 from '../../assets/products/img3.png';
// import img4 from '../../assets/products/img4.jpg';
// import img5 from '../../assets/products/img5.jpg';
// import img6 from '../../assets/products/img6.jpg';


const Productandservices = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  // useEffect(() => {
  //   const body = document.body;
  //   if (showPopup) {
  //     body.style.overflow = 'hidden';
  //     body.style.position = 'fixed';
  //   } else {
  //     body.style.overflow = 'unset';
  //     body.style.position = 'unset';
  //   }
  // }, [showPopup]);

  useEffect(() => {
    const body = document.body;
    let scrollPosition = 0;
  
    if (showPopup) {
      scrollPosition = window.pageYOffset; // Store the scroll position
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`; // Set the top position to the negative of the scroll position
    } else {
      body.style.overflow = 'unset';
      body.style.position = 'unset';
      body.style.top = 'unset';
      window.scrollTo(0, scrollPosition); // Scroll back to the stored position
    }
  }, [showPopup]);
  

  return (
    <div className="container" id="products">
      <section className='title'>
      <h1> Travel info </h1>
      </section>
      {/* <section className="product-section">
        <h2>Products</h2>
        <p>Explore our range of products below.</p>
        <div className="carousel">
          {[
            { img: img1, title: 'Product 1', shortDescription: 'Short description of Product 1.', description: 'Complete description of Product 1.' },
            { img: img2, title: 'Product 2', shortDescription: 'Short description of Product 2.', description: 'Complete description of Product 2.' },
            { img: img3, title: 'Product 3', shortDescription: 'Short description of Product 3.', description: 'Complete description of Product 3.' },
          ].map((item, index) => (
            <div className="card" key={index} onClick={() => openPopup(item)}>
              <img src={item.img} alt={item.title} />
              <div className="card-details">
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="service-section">
        <h2>Services</h2>
        <p>Explore our range of services below.</p>
        <div className="carousel">
        {[
            { img: img1, title: 'Services 1', shortDescription: 'Short description of Services 1.', description: 'Complete description of Services 1.' },
            { img: img2, title: 'Services 2', shortDescription: 'Short description of Services 2.', description: 'Complete description of Services 2.' },
            { img: img3, title: 'Services 3', shortDescription: 'Short description of Services 3.', description: 'Complete description of Services 3.' },
          ].map((item, index) => (
            <div className="card" key={index} onClick={() => openPopup(item)}>
              <img src={item.img} alt={item.title} />
              <div className="card-details">
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={stopPropagation}>
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <img src={selectedItem.img} alt={selectedItem.title} />
            <div className="popup-details">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productandservices;