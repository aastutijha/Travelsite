import React from 'react';
import './everest.css';
import raraImage from '../../../../assets/Rara-Lake.jpg';
import Navbar from "../../../Navbar/Navbar.jsx"; // Updated the import path
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header text-orange-500">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Rara</h3>
        <div className="current-weather">
          <span className="temperature">14°C</span>
          <span className="condition">Partly cloudy</span>
          <span className="icon">☁️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">14°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">12°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">🌨
</span>
          <span className="temperature">10°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">❄️</span>
          <span className="temperature">-5°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌬️</span>
          <span className="temperature">-3°C</span>
        </div>
      </div>
    </div>
  );
};
const TourRate = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md center-box">
      <h2 className="text-lg font-semibold mb-4 text-blue-500">Tour Rate</h2>
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
    <div className="bg-white p-4 rounded-md shadow-md center-box">
       <h2 className="text-lg font-semibold mb-4 text-blue-500">YOUR ITINERARY</h2>
          <ul className="list-disc pl-6">
            <li><b>Day 1: Kathmandu to Nepalgunj :-</b>
Fly from Kathmandu to Nepalgunj, a major city in the western Terai region of Nepal.
Check into a hotel in Nepalgunj and rest for the day, preparing for your journey to Rara Lake.</li>
            <li><b>Day 2: Nepalgunj to Jumla :-</b>
Take an early morning flight from Nepalgunj to Jumla Airport, the gateway to Rara Lake.
Upon arrival in Jumla, meet your trekking guide and crew.
Begin trekking towards Rara Lake, passing through picturesque villages, terraced fields, and lush forests.
Overnight stay in a teahouse or campsite along the trekking route.</li>
            <li><b>Day 3: Trek to Rara Lake :-</b>
Continue your trek towards Rara Lake, enjoying breathtaking views of the surrounding mountains and landscapes.
Arrive at Rara Lake, one of the largest and most beautiful lakes in Nepal, renowned for its crystal-clear waters and serene atmosphere.
Settle into your accommodation near Rara Lake, either at a guesthouse or camping site.
Spend the afternoon exploring the lakeshore, taking in the tranquility and natural beauty.</li>
            <li><b>Day 4: Explore Rara Lake :-</b>
Dedicate this day to fully exploring Rara Lake and its surroundings.
Take a leisurely walk around the lake, enjoying the reflections of the surrounding hills and forests on the water.
Visit Murma Top for panoramic views of Rara Lake and the surrounding Himalayan peaks.
Engage in bird watching, as Rara Lake is a habitat for various bird species including migratory birds.
Relax by the lakeshore, soak in the peaceful ambiance, and capture stunning photographs.</li>
            <li><b>Day 5: Return to Jumla :-</b>
Bid farewell to Rara Lake and start your trek back towards Jumla.
Enjoy the scenic trekking route once again, appreciating the natural beauty and cultural encounters along the way.
Arrive in Jumla and spend the evening relaxing and reflecting on your Rara Lake experience.</li>
            <li><b>Day 6: Jumla to Nepalgunj to Kathmandu :-</b>
Take a morning flight from Jumla to Nepalgunj.
From Nepalgunj, fly back to Kathmandu, concluding your journey to Rara Lake.</li>        
          </ul>
      <h2 className="text-lg font-semibold mb-4 text-blue-500">ADDITIONAL INCLUDED</h2>
      <ul className="list-disc list-inside">
        <li>Accommodation: Tourist Standard Hotels/Lodges on Full board basis (AP basis) on sharing basis</li>
        <li>Access: Surface transport</li>
        <li>Experience Professional Guide</li>
        <li>Sight-seeing Entrance fees.</li>
        <li>First aid (Medical kits).</li>
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
<div className="bg-white p-4 rounded-md shadow-md center-box">
<h2 className="text-lg font-semibold mb-2 text-blue-500">WHAT'S EXCLUDED</h2>
<ul className="list-disc list-inside">
  <li>Pick and Drop Services</li>
  <li>1 Meal Per Day</li>
  <li> Music Event</li>
  <li>Visit 7 Best Places in the City With Group</li>
</ul>
</div>
 );
};
const Rara = () => {
  return (
    <div>
      <Navbar/>
       <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4"></div>
        <div className="mb-4">
        <img
            src={raraImage}
            alt="Rara Lake"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Rare Lake Trek</h1>
        <p className="mb-4">
        The Rare Lake Trek is a captivating adventure that takes explorers through some of the most pristine and less-traveled landscapes, offering a unique experience away from the usual tourist trails. The trek typically encompasses a journey to remote and lesser-known lakes, often nestled in high-altitude regions surrounded by breathtaking mountain scenery.

One of the defining aspects of the Rare Lake Trek is its focus on exploration and discovery. Trekkers venture into off-the-beaten-path areas, traversing rugged terrain, dense forests, alpine meadows, and crossing streams and rivers. This element of exploration adds an adventurous and exploratory spirit to the trek, appealing to those seeking solitude, tranquility, and a deeper connection with nature.

The lakes encountered during the Rare Lake Trek are often pristine and untouched, offering crystal-clear waters reflecting the surrounding mountains and sky. These lakes are havens for biodiversity, with unique flora and fauna thriving in their vicinity. Trekkers may also encounter nomadic communities, yak herders, and indigenous cultures along the way, providing insights into traditional mountain life and adding a cultural dimension to the trek.

The trekking routes for Rare Lake Trek vary in duration and difficulty, catering to a range of preferences and fitness levels. Some routes may involve challenging ascents and descents, while others offer more moderate terrain suitable for all skill levels. Trekkers can choose between guided expeditions with experienced local guides or self-guided adventures for a more independent experience.
     </p>
     <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TripWeatherForecast/>
            <TourRate />
            <AdditionalIncluded />
            <EXCLUDED />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rara
