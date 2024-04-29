import React from 'react';
import './tour.css';
import chinaImage from '../../../../assets/chinna.jpg';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>CHINA</h3>
        <div className="current-weather">
          <span className="temperature">17°C</span>
          <span className="condition">Partly Cloudy</span>
          <span className="icon">⛅</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">19°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">16°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">🌧

</span>
          <span className="temperature">10°C</span>
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
            <li><b>Day 1: Arrival in Beijing :-</b>
Arrive at Beijing Capital International Airport and transfer to your hotel.
Rest and acclimate to the local time zone.
Depending on your arrival time, you may explore nearby attractions like Wangfujing Street or enjoy a welcome dinner.</li>
            <li><b>Day 2: Beijing - Forbidden City and Tiananmen Square :-</b>
Visit Tiananmen Square, one of the world's largest public squares.
Explore the Forbidden City, a UNESCO World Heritage Site and the former imperial palace of China's emperors.
Optional: Visit Jingshan Park for panoramic views of the Forbidden City.</li>
            <li><b>Day 3: Beijing - Great Wall of China :-</b>
Full-day excursion to the Great Wall of China at Mutianyu or Badaling section.
Hike along the ancient walls, marveling at the stunning landscapes and historical significance.
Visit the Ming Tombs or stop at a local village for a cultural experience.</li>
            <li><b>Day 4: Beijing - Temple of Heaven and Hutong Tour :-</b>
Visit the Temple of Heaven, an iconic symbol of Beijing's imperial past.
Experience a traditional rickshaw tour through Beijing's historic Hutongs (alleys) to learn about local culture and lifestyle.
Explore Nanluoguxiang, a lively area with shops, cafes, and traditional architecture.</li>
            <li><b>Day 5: Beijing to Xi'an :-</b>
Fly or take a high-speed train to Xi'an, an ancient capital of China.
Visit the Ancient City Wall of Xi'an, one of the best-preserved city walls in China.
Explore the Muslim Quarter and try local delicacies like Xi'an's famous dumplings (Jiaozi).</li>
            <li><b>Day 6: Xi'an - Terracotta Warriors and Big Wild Goose Pagoda :-</b>
Visit the UNESCO-listed Terracotta Warriors and Horses Museum, marveling at the ancient clay army.
Explore the Big Wild Goose Pagoda, a Buddhist landmark with cultural relics and beautiful surroundings.
Optional: Attend a Tang Dynasty Dinner Show for traditional music and dance performances.</li>
            <li><b>Day 7: Xi'an to Shanghai :-</b>
Fly or take a high-speed train to Shanghai, China's modern metropolis.
Explore the Bund, a historic waterfront area with colonial-era buildings and skyline views.
Visit Yu Garden and Old Town for traditional architecture and shopping.</li>
            <li><b>Day 8: Shanghai - City Highlights :-</b>
Visit the Shanghai Museum to explore Chinese art, history, and culture.
Explore the French Concession for a blend of historic charm and trendy cafes.
Optional: Take a Huangpu River cruise for panoramic views of Shanghai's skyline.</li>
            <li><b>Day 9: Shanghai - Day Trip to Suzhou :-</b>
Take a day trip to Suzhou, known for its classical gardens and canals.
Visit the Humble Administrator's Garden, a UNESCO World Heritage Site.
Explore Pingjiang Road and Suzhou Silk Museum for cultural insights.</li>
            <li><b>Day 10: Departure from Shanghai :-</b>
Depending on your flight schedule, you may have time for last-minute shopping or sightseeing.
Transfer to Shanghai Pudong International Airport for your departure.</li>
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

const China = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
        <img
            src={chinaImage}
            alt="CHINA"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">China</h1>
        <p className="mb-4">
        China, a vast and diverse country in East Asia, is renowned for its rich history, cultural heritage, stunning landscapes, and modern cities. As one of the world's oldest civilizations, China has a wealth of historical sites, including the Great Wall, the Forbidden City, and the Terracotta Army, which showcase its ancient glory and architectural marvels.

The capital city, Beijing, is a blend of ancient traditions and modernity, with landmarks like Tiananmen Square, the Temple of Heaven, and the Summer Palace reflecting its imperial past. Beijing is also a hub of cultural activities, with traditional opera performances, art galleries, and thriving street food markets.

Shanghai, on the other hand, is a bustling metropolis known for its futuristic skyline, vibrant nightlife, and cosmopolitan lifestyle. The iconic Bund waterfront offers stunning views of colonial-era buildings juxtaposed with modern skyscrapers, while the Yu Garden and Nanjing Road are popular spots for shopping and exploration.

Guilin's picturesque landscapes, characterized by karst mountains, winding rivers, and rice terraces, make it a haven for nature lovers and photographers. The Li River cruise from Guilin to Yangshuo offers breathtaking scenery and opportunities to immerse in rural life.

China's diverse culture is reflected in its festivals, such as the vibrant celebrations of Chinese New Year, the colorful lantern festivals, and traditional performances like Peking Opera and Chinese martial arts demonstrations.

The country's culinary scene is equally diverse, with regional specialties like Peking duck, Sichuan hotpot, Cantonese dim sum, and spicy Hunan cuisine delighting food enthusiasts. Tea culture is also integral to Chinese tradition, with tea houses offering a serene escape for tea appreciation and relaxation.

China's rapid development has also led to modern marvels like the Shanghai Tower, the Beijing National Stadium (Bird's Nest), and the high-speed railway network, showcasing its technological advancements and global influence.
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
export default China
