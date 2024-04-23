import React from 'react';
import './TourDetails.css'; // Import CSS module
import InboundTours from '../components/Submain/InboundTours';
const TourDetailspage = ({match}) => {
  const tourDetails= {
    id:1,
    title: 'Best of everest base...',
    description:'Everest Base camp is one of the most trekked destinations among the other trekking routes in the Everest region. One of the worlds most challenging treks and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime.',
    duration: '18N/19D',
    rating: '★★★★',
    image: 'mountain.jpeg',
  };
  // const tourDetails= {
  //   id:2,
  //   title: 'Illam Tea Garden',
  //   description:'Illam Tea Garden, nestled in Nepal Ilam District, is a picturesque expanse of rolling hills adorned with lush tea plantations.Its idyllic setting against the backdrop of the Himalayas creates a serene and captivating environment. Renowned for producing high-quality black and green teas, the garden sustainable practices ensure a harmonious blend of nature and cultivation. Visitors are treated to breathtaking views, cultural insights, and a tranquil escape into the heart of Nepales tea country, making Illam Tea Garden a must-visit destination for nature lovers and tea enthusiasts alike.',
  //   duration: '10N/11D',
  //   rating: '★★★',
  //   image: 'Ilam.jpeg',
  // };
  // const tourDetails= {
  //   id:3,
  //   title: 'Langtang Trek',
  //   description:'The Langtang Trek is a captivating adventure that takes you through the stunning Langtang Valley in Nepal. It is a perfect blend of natural beauty and cultural immersion, with lush forests, picturesque meadows, and majestic snow-capped peaks like Langtang Lirung and Ganesh Himal providing a breathtaking backdrop. Along the way, you will encounter traditional Tamang villages, ancient monasteries, and prayer flags fluttering in the Himalayan breeze, offering glimpses into the rich local culture. The treks moderate difficulty makes it accessible to a wide range of trekkers, while the opportunity to explore the Langtang Glacier and soak in panoramic mountain views makes it an unforgettable Himalayan experience. ',
  //   duration: '20N/21D',
  //   rating: '★★',
  //   image: 'langtang.jpeg',
  // };
  // const tourDetails= {
  //   id:4,
  //   title: 'Lumbini',
  //   description:'Lumbini, located in Nepal Rupandehi District, is renowned as the birthplace of Siddhartha Gautama, who later became Gautama Buddha. This sacred site holds deep religious significance for Buddhists worldwide, being one of the key pilgrimage destinations associated with Buddhas life. The Maya Devi Temple, marking the exact birthplace, and the Monastic Zone with its diverse monasteries are major attractions. Lumbini peaceful environment, historical ruins, and ongoing conservation efforts make it a serene and culturally rich destination, offering visitors a chance for spiritual reflection and cultural exploration.',
  //   duration: '8N/9D',
  //   rating: '★★',
  //   image: 'lumbini.jpg',
  // };
  // const tourDetails= {
  //   id:5,
  //   title: 'Darjeeking sikkim Trek',
  //   description:'The Darjeeling-Sikkim trek is a mesmerizing journey through the eastern Himalayas, offering a blend of scenic beauty and cultural exploration. As you traverse the picturesque landscapes, including lush tea gardens, dense forests, and cascading waterfalls, you will be greeted by panoramic views of snow-capped peaks like Kanchenjunga. Along the way, you will encounter charming villages inhabited by diverse ethnic groups, providing insights into their traditional way of life. The trek also encompasses visits to monasteries, tea estates, and vibrant markets, adding layers of cultural immersion to the adventure. With its moderate difficulty level and captivating sights, the Darjeeling-Sikkim trek promises an enriching and unforgettable Himalayan experience.',
  //   duration: '11N/12D',
  //   rating: '★★',
  //   image: 'darjeeling.jpeg',
  // };
  // const tourDetails= {
  //   id:6,
  //   title: 'Rara Lake Trekking',
  //   description:' Rara Lake trekking is a mesmerizing adventure that takes you to the pristine Rara Lake, nestled in the remote regions of Nepal. This trek offers a blend of natural beauty with serene surroundings, including lush forests, cascading waterfalls, and panoramic mountain views. The tranquil atmosphere of Rara Lake, surrounded by snow-capped peaks, makes it a haven for nature lovers and a perfect destination for those seeking a peaceful retreat in the Himalayas.',
  //   duration: '6N/7D',
  //   rating: '★★★',
  //   image: 'raralake.jpeg',
  // };
  // const tourDetails= {
  //   id:7,
  //   title: 'Chitwan Safarii',
  //   description:'Nepal adventure scene, especially rafting, is a thrill-seekers paradise. The country rivers, stemming from the majestic Himalayas, offer a range of rafting experiences suitable for all levels. Whether navigating the gentle currents of the Trishuli River or braving the intense rapids of the Bhote Koshi, every journey promises stunning natural vistas and cultural encounters with riverside communities. Rafting in Nepal is not just about the adrenaline rush; its a holistic immersion into the country rugged beauty and rich heritage, making each trip down these waters an unforgettable adventure.',
  //   duration: '5N/6D',
  //   rating: '★',
  //   image: 'chitwan.jpeg',
  // };
  return (
    <div><InboundTours></InboundTours>
    <div className="tour-details">
      <img src={tourDetails.image} alt={tourDetails.title} />
      <h2>{tourDetails.title}</h2>
      <p>{tourDetails.description}</p>
      <p>Duration: {tourDetails.duration}</p>
      <p>Rating: {tourDetails.rating}</p>
      {/* Add more details */}
      {/* <div className={styles.tourRate}>
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
      </div> */}
    </div>
    </div>
  );
};

export default TourDetailspage;