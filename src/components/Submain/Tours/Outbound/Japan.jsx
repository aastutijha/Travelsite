import React from 'react';
import './tour.css';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>JAPAN</h3>
        <div className="current-weather">
          <span className="temperature">27°C</span>
          <span className="condition">Clear</span>
          <span className="icon">☀️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">28°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">26°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">21°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">☁️</span>
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
            <li><b>Day 1: Arrival in Tokyo :-</b>
Arrive at Tokyo Narita or Haneda International Airport and transfer to your hotel.
Rest and acclimate to the local time zone.
Depending on your arrival time, you may explore nearby areas like Shibuya or Shinjuku.</li>
            <li><b>Day 2: Tokyo - Imperial Palace and Asakusa :-</b>
Visit the Imperial Palace East Gardens, a tranquil oasis in the heart of Tokyo.
Explore Asakusa district, including Senso-ji Temple, Nakamise Shopping Street, and Asakusa Shrine.
Enjoy a river cruise on the Sumida River for scenic views of Tokyo Skytree and bridges.</li>
            <li><b>Day 3: Tokyo - Tsukiji Market and Meiji Shrine :-</b>
Visit Tsukiji Outer Market for fresh seafood, sushi breakfast, and culinary delights.
Explore Meiji Shrine and Yoyogi Park for a peaceful retreat in the bustling city.
Discover Harajuku district for trendy shops, Takeshita Street, and cosplay culture.</li>
            <li><b>Day 4: Tokyo to Kyoto :-</b>
Travel to Kyoto by Shinkansen (bullet train), experiencing Japan's efficient rail system.
Visit Fushimi Inari Taisha, famous for its thousands of vermilion torii gates.
Explore Gion district, known for geisha culture, traditional tea houses, and historic streets.</li>
            <li><b>Day 5: Kyoto - Arashiyama and Kinkaku-ji :-</b>
Explore Arashiyama Bamboo Grove and Togetsukyo Bridge for scenic views.
Visit Tenryu-ji Temple and its beautiful garden, a UNESCO World Heritage Site.
Discover Kinkaku-ji (Golden Pavilion) and its stunning reflection on the pond.</li>
<li><b>Day 6: Kyoto - Nijo Castle and Philosopher's Path :-</b>
Visit Nijo Castle, known for its beautiful architecture and historic significance.
Stroll along the Philosopher's Path, lined with cherry blossoms in spring and colorful foliage in autumn.
Explore Ginkaku-ji (Silver Pavilion) and nearby tea houses.</li>
<li><b>Day 7: Kyoto to Hiroshima and Miyajima :-</b>
Travel to Hiroshima by train and visit the Peace Memorial Park and Museum.
Take a ferry to Miyajima Island, known for Itsukushima Shrine and iconic torii gate.
Explore the island's temples, hiking trails, and local delicacies like Hiroshima-style okonomiyaki.</li>
<li><b>Day 8: Hiroshima to Osaka :-</b>
Travel to Osaka, known for its vibrant food scene and modern attractions.
Visit Osaka Castle and its museum for a glimpse into Japan's history.
Explore Dotonbori district for street food, neon lights, and entertainment.</li>
<li><b>Day 9: Osaka - Day Trip to Nara :-</b>
Take a day trip to Nara, famous for its ancient temples and friendly deer.
Visit Todai-ji Temple, housing the Great Buddha statue, and Nara Park.
Explore Kasuga Taisha Shrine and Naramachi district for traditional atmosphere.</li>
<li><b>Day 10: Departure from Osaka :-</b>
Depending on your flight schedule, you may have time for last-minute shopping or sightseeing.
Transfer to Kansai International Airport for your departure.</li>
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

const Japan = () => {
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
        <h1 className="text-3xl font-bold mb-2">Japan </h1>
        <p className="mb-4">
        Japan, an archipelago nation in East Asia, is a captivating blend of ancient traditions and cutting-edge modernity. Renowned for its rich culture, stunning landscapes, advanced technology, and unique experiences, Japan attracts millions of visitors from around the world each year.

Tokyo, Japan's bustling capital, is a vibrant metropolis where traditional temples and historic sites coexist with towering skyscrapers, neon-lit streets, and bustling markets. The city is a hub of innovation, fashion, cuisine, and entertainment, offering endless opportunities for exploration and discovery.

Kyoto, Japan's former imperial capital, is a treasure trove of cultural heritage, featuring iconic landmarks such as the Fushimi Inari Shrine with its thousands of vermillion torii gates, the serene Kinkaku-ji Temple (Golden Pavilion), and the historic Gion district known for its traditional tea houses and geisha culture.

Osaka, known as Japan's "Kitchen of the Nation," is renowned for its culinary delights, vibrant nightlife, and modern attractions like Universal Studios Japan. Visitors can explore Osaka Castle, stroll through bustling street markets like Dotonbori, and indulge in delicious street food and local delicacies.

Hiroshima, a city with a poignant history, is home to the Peace Memorial Park and Museum, dedicated to the victims of the atomic bombing during World War II. The Itsukushima Shrine on Miyajima Island, with its iconic "floating" torii gate, is another must-visit attraction near Hiroshima.

Nara, Japan's first permanent capital, is famous for its ancient temples, deer park, and the towering bronze Buddha statue at Todai-ji Temple. Visitors can experience the tranquility of nature at Nara Park while interacting with friendly deer considered sacred in Japanese culture.

Other notable destinations in Japan include the historic city of Kamakura with its Great Buddha statue, the scenic coastal region of Kanagawa Prefecture, the ancient temples of Nikko, and the picturesque villages of Shirakawa-go and Gokayama with their traditional thatched-roof houses (gassho-zukuri).

Japanese culture is deeply rooted in traditions like tea ceremonies, kimono wearing, cherry blossom viewing (hanami), and seasonal festivals such as the iconic Gion Matsuri in Kyoto and the vibrant Nebuta Matsuri in Aomori.
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
export default Japan
