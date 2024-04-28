import React from 'react';
import './tour.css';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Kathmandu</h3>
        <div className="current-weather">
          <span className="temperature">22°C</span>
          <span className="condition">Partly Cloudy</span>
          <span className="icon">☁️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">19°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">❄️</span>
          <span className="temperature">-5°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌬️</span>
          <span className="temperature">25°C</span>
        </div>
      </div>
    </div>
  );
};
const TourRate = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md left-box">
      <h2 className="text-lg font-semibold mb-4">Tour Rate</h2>
      <div className="grid grid-cols-4 gap-4">
        <div>
          
          <label htmlFor="tourDate" className="block text-sm font-medium text-gray-700">
            Tour Date
          </label>
          <input
            type="date"
            id="tourDate"
            name="tourDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="adult" className="block text-sm font-medium text-gray-700">
            Adult
          </label>
          <select
            id="adult"
            name="adult"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
             <option value="4">4</option>
            <option value="5">5</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="children" className="block text-sm font-medium text-gray-700">
            Children
          </label>
          <select
            id="children"
            name="children"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="infant" className="block text-sm font-medium text-gray-700">
            Infant 0-3 yrs
          </label>
          <select
            id="infant"
            name="infant"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Book Now
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

const AdditionalIncluded = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md left-box">
       <h2 className="text-lg font-semibold mb-4">YOUR ITINERARY</h2>
          <ul className="list-disc pl-6">
            <li><b>Day 1: Arrival in Delhi :-</b> 
Arrive in Delhi, the capital city of India.
Check into your hotel and relax after your journey.
Optionally, explore local markets like Chandni Chowk or visit historical sites like Red Fort or Humayun's Tomb.</li>
            <li><b>Day 2: Delhi Sightseeing :-</b> 
Visit India Gate, Rashtrapati Bhavan, and Parliament House.
Explore the vibrant markets of Connaught Place and Janpath.
Visit the Lotus Temple and Qutub Minar.</li> 
            <li><b> Day 3: Delhi to Agra :-</b> 
Travel to Agra, home to the iconic Taj Mahal.
Visit the Taj Mahal, Agra Fort, and Itmad-ud-Daulah's Tomb.
Explore local markets for handicrafts and marble artifacts.</li> 
            <li><b> Day 4: Agra to Jaipur (via Fatehpur Sikri) :-</b> 
En route to Jaipur, visit Fatehpur Sikri, a UNESCO World Heritage site.
Arrive in Jaipur, known as the "Pink City."
Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal.</li> 
            <li><b> Day 5: Jaipur Sightseeing :-</b> 
Explore Jaipur's local markets for handicrafts and textiles.
Visit Jal Mahal, Albert Hall Museum, and Nahargarh Fort.
Experience traditional Rajasthani cuisine at a local restaurant.</li> 
            <li><b>Day 6: Jaipur to Udaipur :-</b> 
Travel to Udaipur, often called the "City of Lakes."
Visit the City Palace, Jagdish Temple, and Saheliyon ki Bari.
Enjoy a boat ride on Lake Pichola, visiting Jag Mandir and the Lake Palace.</li> 
            <li><b>Day 7: Udaipur Sightseeing :-</b> 
Explore the art and culture of Udaipur at Bagore ki Haveli and Shilpgram.
Visit the Monsoon Palace for panoramic views of the city.
Relax in the evening by the lakeside or attend a cultural show.</li> 
            <li><b> Day 8: Udaipur to Mumbai :-</b> 
Fly to Mumbai, India's financial and entertainment capital.
Visit Gateway of India, Marine Drive, and Hanging Gardens.
Explore the bustling markets of Colaba and Fashion Street.</li>
            <li><b>Day 9: Mumbai Sightseeing :-</b> 
Visit Elephanta Caves or explore Sanjay Gandhi National Park (optional).
Discover Mumbai's history at Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly Prince of Wales Museum).
Enjoy an evening walk at Juhu Beach or Marine Drive.</li>
            <li><b>Day 10: Mumbai Departure :-</b> 
Depart from Mumbai, concluding your India tour.
Optionally, extend your stay to explore more of Mumbai or nearby destinations like Goa or Aurangabad.
            </li>
          </ul>
      <h2 className="text-lg font-semibold mb-4">ADDITIONAL INCLUDED</h2>
      <ul className="list-disc list-inside">
        <li>Pick and Drop Services</li>
        <li>1 Meal Per Day</li>
        <li>Cruise Dinner &amp; Music Event</li>
        <li>Visit 7 Best Places in the City With Group</li>
      </ul>
      <div className="flex justify-end mt-4">
        <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          <span>For more Enquiry</span>
          <div className="flex flex-col">
            <span>+977 015900337</span>
            <span>+977 9802348633</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const  EXCLUDED = () => {
  return (
<div className="bg-white p-4 rounded-md shadow-md left-box">
<h2 className="text-lg font-semibold mb-2">WHAT'S EXCLUDED</h2>
<ul className="list-disc list-inside">
  <li>Pick and Drop Services</li>
  <li>1 Meal Per Day</li>
  <li>Cruise Dinner &amp; Music Event</li>
  <li>Visit 7 Best Places in the City With Group</li>
</ul>
</div>
 );
};

const India = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img
            src="../../assets/everst.jpg"
            alt="Everest Base Camp Trek"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">India</h1>
        <p className="mb-4">
        India, a land of diverse cultures and traditions, is a captivating tapestry woven with ancient history, architectural marvels, and natural wonders. From the majestic Himalayas to the tranquil backwaters of Kerala, India's landscapes are as varied as its people. Rich in heritage, India's historical monuments like the Taj Mahal, Red Fort, and Ajanta-Ellora caves narrate tales of bygone eras. Spiritual seekers find solace in holy cities like Varanasi and Bodh Gaya, while wildlife enthusiasts explore the jungles of Ranthambore and Kaziranga. The aroma of spices and flavors of Indian cuisine, from delectable curries to mouthwatering street food, delight the senses. Vibrant festivals like Diwali and Holi paint the country in a riot of colors, showcasing India's unity amid diversity. With modern advancements in technology and a welcoming hospitality culture, India offers a unique blend of tradition and progress, making it a truly incredible destination.
        </p>
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TripWeatherForecast />
            <TourRate />
            <AdditionalIncluded />
            <EXCLUDED />
          </div>
        </div>
      </div>
    </div>
  );
};
export default India

