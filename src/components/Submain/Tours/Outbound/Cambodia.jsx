import React from 'react';
import './tour.css';
import cambodiaImage from '../../../../assets/cambodi.jpg';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>CAMBODIA</h3>
        <div className="current-weather">
          <span className="temperature">38°C</span>
          <span className="condition">Mostly sunny</span>
          <span className="icon">☀️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">30°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">29°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">27°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">18°C</span>
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
            <li><b>Day 1: Arrival in Siem Reap :-</b>
Arrive at Siem Reap International Airport and transfer to your hotel.
Visit the Angkor National Museum to learn about Khmer history, art, and culture.
Explore the vibrant Pub Street area for dinner and evening entertainment.</li>
            <li><b>Day 2: Angkor Archaeological Park :-</b>
Full-day exploration of the Angkor Archaeological Park, a UNESCO World Heritage Site.
Visit Angkor Wat, the largest religious monument in the world, known for its stunning architecture and intricate carvings.
Explore Bayon Temple with its iconic stone faces and Ta Prohm Temple, famous for its tree roots.</li>
            <li><b>Day 3: Siem Reap Countryside and Floating Village :-</b>
Take a guided tour of the Siem Reap countryside, visiting local villages and experiencing rural Cambodian life.
Visit a floating village on Tonle Sap Lake, such as Kampong Phluk or Chong Khneas, to see stilt houses and floating markets.</li>
            <li><b>Day 4: Travel to Battambang :-</b>
Travel by road to Battambang, a charming riverside town known for its French colonial architecture and cultural heritage.
Visit Phare Ponleu Selpak, an NGO supporting Cambodian youth through arts and education.
Explore the lively Battambang Night Market for local food and handicrafts.</li>
            <li><b>Day 5: Battambang Cultural Tour :-</b>
Discover Battambang's cultural sites, including the historic Battambang Provincial Museum and Wat Ek Phnom temple.
Take a ride on the Bamboo Train (Norry) for a unique railway experience.
Visit local workshops producing rice paper, pottery, and traditional Khmer textiles.</li>
            <li><b>Day 6: Phnom Penh City Tour :-</b>
Travel to Phnom Penh, the capital city of Cambodia.
Visit the Royal Palace, Silver Pagoda, and National Museum to explore Khmer art, history, and culture.
Reflect on Cambodia's history at the Tuol Sleng Genocide Museum (S-21) and the Killing Fields of Choeung Ek.</li>
            <li><b>Day 7: Departure from Phnom Penh :-</b>
Depending on your flight schedule, you may have time for additional sightseeing or shopping in Phnom Penh.
Transfer to Phnom Penh International Airport for your departure.</li>
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

const Cambodia = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
        <img
            src={cambodiaImage}
            alt="Cambodia"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Cambodia</h1>
        <p className="mb-4">
        Cambodia, located in Southeast Asia, is a country with a rich cultural heritage, ancient history, and natural beauty. Its most famous attraction is the magnificent Angkor Wat, a UNESCO World Heritage site and one of the largest religious monuments in the world. Built in the early 12th century, Angkor Wat is a symbol of Cambodia's Khmer Empire and is renowned for its intricate carvings, grand architecture, and spiritual significance.
Cambodia's capital city, Phnom Penh, is a bustling metropolis with a mix of traditional Khmer architecture and modern developments. The Royal Palace, Silver Pagoda, and National Museum are must-visit sites that reflect Cambodia's royal history and artistic heritage. The Tuol Sleng Genocide Museum and Killing Fields of Choeung Ek offer poignant insights into Cambodia's tragic past during the Khmer Rouge regime.

For nature lovers, Cambodia's countryside is dotted with lush landscapes, including the Tonle Sap Lake, Southeast Asia's largest freshwater lake, and the Cardamom Mountains, a biodiverse region rich in wildlife and ecotourism opportunities.

The coastal areas of Cambodia, such as Sihanoukville and Koh Rong, boast pristine beaches, turquoise waters, and vibrant coral reefs, making them ideal for beach vacations, water activities, and relaxation.

Cambodia's cultural heritage is also reflected in its traditional arts and crafts, including Khmer classical dance, silk weaving, pottery, and intricate stone carvings. Visitors can explore local markets, such as Psar Thmei (Central Market) and Psar Chas (Old Market), to experience Cambodia's vibrant street food scene, handicrafts, and cultural diversity.

Cambodia's people are known for their warmth, hospitality, and resilience, making it a welcoming destination for travelers seeking historical insights, natural beauty, cultural immersion, and memorable experiences
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

export default Cambodia
