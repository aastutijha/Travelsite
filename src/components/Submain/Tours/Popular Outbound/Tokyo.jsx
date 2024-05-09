import React from 'react';
//import './tour.css';
import tokyoImage from '../../../../assets/tokyooo.jpg';
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
            <li><b>Day 1: Arrival in Tokyo :-</b>
Arrive in Tokyo and check into your accommodation.
Take a leisurely stroll around your neighborhood to get acquainted with the surroundings.
Enjoy dinner at a local izakaya (Japanese pub) or try some street food.</li>
            <li><b>Day 2: Tokyo City Exploration :-</b>
Visit the historic Asakusa district, including Senso-ji Temple and Nakamise Shopping Street.
Explore the Tokyo Skytree for panoramic city views.
Spend the evening in Akihabara, known for electronics, anime, and gaming culture.</li>
            <li><b>Day 3: Harajuku and Shibuya :-</b>
Visit Meiji Shrine in the morning, located in a peaceful forested area near Harajuku.
Explore Takeshita Street in Harajuku for quirky fashion and treats.
Visit Omotesando for upscale shopping and architecture.
Experience the famous Shibuya Crossing and explore Shibuya Center Street for shopping and dining.</li>
            <li><b>Day 4: Imperial Palace and Ginza :-</b>
Visit the Imperial Palace East Gardens for a glimpse of Tokyo's history and gardens.
Explore the upscale shopping district of Ginza for luxury brands and department stores.
Visit Kabuki-za Theater for a traditional kabuki performance or opt for a tea ceremony experience.</li>
            <li><b>Day 5: Ueno Park and Museums :-</b>
Spend the morning at Ueno Park, visiting attractions like Ueno Zoo, Tokyo National Museum, and Ueno Toshogu Shrine.
Explore Ameya-Yokocho market for street food and shopping.
Visit the futuristic Tokyo National Museum of Emerging Science and Innovation (Miraikan) in Odaiba.</li>
            <li><b>Day 6: Day Trip to Nikko :-</b>
Take a day trip to Nikko to visit UNESCO World Heritage sites like Toshogu Shrine and Rinno-ji Temple.
Explore Nikko National Park for nature walks and scenic beauty.
Return to Tokyo in the evening.</li>
            <li><b>Day 7: Tokyo Disney Resort :-</b>
Spend a fun-filled day at Tokyo Disneyland or Tokyo DisneySea (choose based on your preference).
Enjoy thrilling rides, entertainment, and themed attractions.
Stay for the evening parade and fireworks show.</li>
            <li><b>Day 8: Tsukiji Outer Market and Odaiba :-</b>
Visit Tsukiji Outer Market for fresh seafood breakfast and local snacks.
Explore Odaiba for attractions like teamLab Borderless (digital art museum), Odaiba Seaside Park, and Palette Town.
Optional: Visit Oedo Onsen Monogatari for a traditional Japanese hot spring experience.</li>
            <li><b>Day 9: Tokyo Tower and Roppongi :-</b>
Visit Tokyo Tower for iconic views and a glimpse of Tokyo's skyline.
Explore Roppongi Hills for shopping, dining, and Mori Art Museum.
Enjoy nightlife in Roppongi with its bars, clubs, and entertainment options.</li>
            <li><b>Day 10: Sumida River Cruise and Tokyo DisneySea :-</b>
Take a Sumida River cruise for a different perspective of Tokyo's landmarks.
Visit Tokyo DisneySea for a second day of theme park fun and exploration.
Enjoy a farewell dinner at a traditional Japanese restaurant.</li>
            <li><b>Day 11: Departure from Tokyo :-</b>
Depending on your flight time, explore local markets for last-minute souvenirs.
Transfer to Haneda or Narita Airport for departure.</li>
           
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

const Tokyo = () => {
  return (
    <div>
     <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={tokyoImage}
            alt="Tokyo"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Tokyo</h1>
        <p className="mb-4">
        Tokyo, the vibrant capital city of Japan, is a bustling metropolis that seamlessly blends modernity with traditional culture. Renowned for its cutting-edge technology, vibrant pop culture, and rich history, Tokyo offers a diverse and captivating experience for visitors.

One of Tokyo's most iconic landmarks is the Tokyo Tower, a symbol of the city's skyline that provides panoramic views from its observation decks. Another must-visit site is the historic Senso-ji Temple in Asakusa, one of Tokyo's oldest and most significant Buddhist temples, drawing pilgrims and tourists alike.

Tokyo's neighborhoods are a fascinating mix of contrasts. Shibuya is a bustling hub famous for its iconic pedestrian scramble crossing, vibrant nightlife, and fashion boutiques. Shinjuku boasts towering skyscrapers, bustling entertainment districts, and the tranquil Shinjuku Gyoen National Garden, an oasis of calm in the midst of the urban jungle.

Tokyo's culinary scene is unparalleled, offering a wide range of dining options from Michelin-starred restaurants to humble street food stalls. Ramen, sushi, tempura, and wagyu beef are just a few highlights of Tokyo's delectable cuisine.

The city also celebrates its traditional culture through events like cherry blossom viewing (hanami) in spring, where parks and gardens burst into a sea of pink blooms. Sumo wrestling tournaments, tea ceremonies, and festivals like the lively Sanja Matsuri showcase Tokyo's cultural heritage.
Tokyo's public transportation system, including its efficient subway and bullet trains (shinkansen), makes exploring the city and nearby regions convenient for tourists.
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
export default Tokyo
