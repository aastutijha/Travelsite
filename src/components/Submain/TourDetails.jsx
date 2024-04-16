import React from 'react';
import styles from './TourDetails.css'; // Import CSS module

const TourDetailspage = ({match}) => {
  const tourId = match.params.id;
  const tourdetails= {
    id:1,
    title: 'Best of everest base...',
    description:'Everest Base camp is one of the most trekked destinations among the other trekking routes in the Everest region. One of the world\'s most challenging treks and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime.',
    duration: '18N/19D',
    rating: '★★★★',
    image: 'mountain.jpeg',
  };
  return (
    <div className="tour-details">
      <img src={tourDetails.image} alt={tourDetails.title} />
      <h2>{tourDetails.title}</h2>
      <p>{tourDetails.description}</p>
      <p>Duration: {tourDetails.duration}</p>
      <p>Rating: {tourDetails.rating}</p>
      {/* Add more details */}
      <div className={styles.tourRate}>
        <h2 className={styles.sectionHeading}>Tour Rate</h2>
        <div className={styles.rateContainer}>
          <div className={styles.rateItem}>
            <span className={styles.rateLabel}>Tour Date</span>
            <span className={styles.rateValue}>04/15/2024</span>
          </div>
          <div className={styles.rateItem}>
            <span className={styles.rateLabel}>Adult</span>
            <span className={styles.rateValue}>0</span>
          </div>
          <div className={styles.rateItem}>
            <span className={styles.rateLabel}>Children</span>
            <span className={styles.rateValue}>0</span>
          </div>
          <div className={styles.rateItem}>
            <span className={styles.rateLabel}>Infant 0-3 yrs</span>
            <span className={styles.rateValue}>0</span>
          </div>
          <div className={styles.rateItem}>
            <span className={styles.rateLabel}>Total Amount</span>
            <span className={styles.rateValue}>0</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.bookButton}>Book Now</button>
          <button className={styles.infoButton}>More Info</button>
        </div>
      </div>
      <div className={styles.itinerary}>
        <h2 className={styles.sectionHeading}>Your Itinerary</h2>
        <ul className={styles.itineraryList}>
          <li className={styles.itineraryItem}>Day : 1 Arrive Kathmandu</li>
          <li className={styles.itineraryItem}>Day : 2 Flight To Pokhara</li>
        </ul>
      </div>
      <div className={styles.inclusion}>
        <h2 className={styles.sectionHeading}>What's Included</h2>
        <div className={styles.inclusionItem}>
          <span className={styles.inclusionIcon}>🛋️</span>
          <span className={styles.inclusionLabel}>ACCOMMODATION</span>
          <span className={styles.inclusionValue}>Hotel, Camp</span>
        </div>
        <div className={styles.inclusionItem}>
          <span className={styles.inclusionIcon}>🍽️</span>
          <span className={styles.inclusionLabel}>MEALS</span>
          <span className={styles.inclusionValue}>Breakfast, Lunch, Dinner</span>
        </div>
      </div>
      <div className={styles.additionalInclusion}>
        <h2 className={styles.sectionHeading}>ADDITIONAL INCLUDED</h2>
        <ul className={styles.inclusionList}>
          <li>Pick and Drop Services</li>
          <li>1 Meal Per Day</li>
          <li>Cruise Dinner &amp; Music Event</li>
          <li>Visit 7 Best Places in the City With Group</li>
        </ul>
        <div className={styles.enquiryContainer}>
          <span className={styles.enquiryLabel}>For more Enquiry</span>
          <span className={styles.enquiryNumber}>+977 015900337</span>
          <span className={styles.enquiryNumber}>+977 9802348633</span>
        </div>
      </div>
      <div className={styles.exclusion}>
        <h2 className={styles.sectionHeading}>WHAT'S EXCLUDED</h2>
        <ul className={styles.exclusionList}>
          <li>Pick and Drop Services</li>
          <li>1 Meal Per Day</li>
          <li>Cruise Dinner &amp; Music Event</li>
          <li>Visit 7 Best Places in the City With Group</li>
        </ul>
      </div>
    </div>
  );
};

export default TourDetailspage;