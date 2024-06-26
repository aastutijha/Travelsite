import React from 'react';
import './tour.css';
import dubaiImage from '../../../../assets/dubaiii.jpg';
import Navbar from "../../../Navbar/Navbar.jsx"; // Updated the import path
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header text-orange-500">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>DUBAI</h3>
        <div className="current-weather">
          <span className="temperature">34°C</span>
          <span className="condition">Mostly Sunny</span>
          <span className="icon">☀️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">32°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">30°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">29°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">28°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">23°C</span>
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
            <li><b>Day 1: Arrival in Dubai :-</b>
Arrive in Dubai and check into your hotel.
Spend the afternoon relaxing or exploring the nearby areas.</li>
            <li><b>Day 2: Dubai City Tour :-</b>
Start your day with a visit to the iconic Burj Khalifa, the tallest building in the world.
Explore the Dubai Mall, a paradise for shopping enthusiasts, and enjoy attractions like the Dubai Aquarium and Underwater Zoo.
Visit the Dubai Fountain in the evening for a mesmerizing water and light show.</li>
            <li><b>Day 3: Desert Safari Adventure :-</b>
Embark on an exciting desert safari adventure with dune bashing, camel rides, and sandboarding.
Experience traditional Bedouin culture with a desert camp dinner featuring live entertainment like belly dancing and Tanoura shows.</li>
            <li><b>Day 4: Abu Dhabi Day Trip :-</b>
Take a day trip to Abu Dhabi, the capital city of the UAE.
Visit the Sheikh Zayed Grand Mosque, a stunning architectural masterpiece.
Explore the Louvre Abu Dhabi or the Ferrari World theme park for a fun-filled day.</li>
            <li><b>Day 5: Dubai Marina and Palm Jumeirah :-</b>
Spend the day exploring Dubai Marina, known for its waterfront promenade, luxury yachts, and upscale dining options.
Visit the Palm Jumeirah, an artificial archipelago featuring luxury resorts like Atlantis, The Palm.
Relax on Jumeirah Beach or indulge in water sports activities.</li>
            <li><b>Day 6: Cultural and Historical Tour :-</b>
Discover Dubai's heritage and culture at the Dubai Museum in Al Fahidi Fort.
Explore the Al Bastakiya Quarter and its narrow lanes filled with art galleries and traditional wind-tower architecture.
Take an abra (traditional boat) ride across Dubai Creek to explore the spice and gold souks.</li>
            <li><b>Day 7: Free Day or Optional Activities :-</b>
Enjoy a free day to relax, shop, or explore any attractions you missed.
Optional activities include a visit to IMG Worlds of Adventure, Ski Dubai at Mall of the Emirates, or a dinner cruise on Dubai Marina.</li>
            <li><b>Day 8: Departure from Dubai :-</b>
Check out of your hotel and transfer to the airport for your departure flight.</li>
            
          </ul>
      <h2 className="text-lg font-semibold mb-4 text-blue-500">ADDITIONAL INCLUDED</h2>
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
<div className="bg-white p-4 rounded-md shadow-md center-box">
<h2 className="text-lg font-semibold mb- text-blue-500">WHAT'S EXCLUDED</h2>
<ul className="list-disc list-inside">
  <li>Pick and Drop Services</li>
  <li>1 Meal Per Day</li>
  <li>Cruise Dinner &amp; Music Event</li>
  <li>Visit 7 Best Places in the City With Group</li>
</ul>
</div>
 );
};

const Dubai = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={dubaiImage}
            alt="Dubai"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Dubai</h1>
        <p className="mb-4">
        Dubai, located in the United Arab Emirates (UAE), is a modern and dynamic city known for its futuristic skyline, luxury shopping, vibrant nightlife, and world-class attractions. It has transformed from a small fishing village into a global metropolis and tourist hotspot, attracting millions of visitors each year.

One of Dubai's most iconic landmarks is the Burj Khalifa, the tallest building in the world, offering breathtaking views of the city from its observation decks. The Dubai Fountain, located at the base of the Burj Khalifa, is a mesmerizing water and light show set to music, creating a spectacular visual experience.

Dubai is also renowned for its luxury shopping malls, including The Dubai Mall, home to over 1,200 retail outlets, an indoor aquarium, an ice rink, and the Dubai Fountain. Visitors can indulge in high-end fashion brands, fine dining, and entertainment options within these extravagant shopping destinations.

The Dubai Desert Safari is a popular excursion for adventure seekers, offering thrilling activities such as dune bashing, camel riding, sandboarding, and traditional Bedouin-style desert camps with entertainment and BBQ dinners under the stars.

Dubai's coastline is dotted with luxurious beach resorts and pristine beaches like Jumeirah Beach, where visitors can relax, sunbathe, and enjoy water sports such as jet skiing, parasailing, and paddleboarding.

The city's culinary scene is diverse and vibrant, with a plethora of international restaurants, celebrity chef venues, and traditional Arabic eateries serving delicious cuisine. Visitors can sample local delicacies like shawarma, falafel, hummus, and Arabic sweets.

Dubai's commitment to innovation and entertainment is evident in attractions like the Dubai Marina, Palm Jumeirah Island, Dubai Parks and Resorts, and the upcoming Expo 2020 Dubai, a global event showcasing technology, innovation, and culture.
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
export default Dubai
