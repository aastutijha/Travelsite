import React from 'react';
import './tour.css';
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
            <li>Day 1: Arrival in Beijing</li>
            <li>Day 2: Beijing City Tour</li>
            <li>Day 3: Beijing to Xi'an</li>
            <li>Day 4: Xi'an City Tour</li>
            <li>Day 5: Xi'an to Guilin</li>
            <li>Day 6: Guilin to Yangshuo</li>
            <li>Day 7: Yangshuo to Chengdu</li>
            <li>Day 8: Chengdu City Tour</li>
            <li>Day 9: Chengdu to Shanghai</li>
            <li>Day 10: Shanghai City Tour</li>
            <li>Day 11: Shanghai to Suzhou</li>
            <li>Day 12: Departure from Shanghai</li>
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
            src="../../assets/everst.jpg"
            alt="Everest Base Camp Trek"
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