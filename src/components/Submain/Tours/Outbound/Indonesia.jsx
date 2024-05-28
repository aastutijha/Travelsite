import React from 'react';
import './tour.css';
import indonesiaImage from '../../../../assets/bali.jpg';
import Navbar from "../../../Navbar/Navbar.jsx"; // Updated the import path
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header text-orange-500">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Kathmandu</h3>
        <div className="current-weather">
          <span className="temperature">33°C</span>
          <span className="condition">Partly Cloudy</span>
          <span className="icon">⛅</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">33°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">32°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">🌦</span>
          <span className="temperature">31°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">🌦
</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">🌧
</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌧</span>
          <span className="temperature">20°C</span>
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
            <li><b>Day 1: Arrival in Bali :-</b>
Arrive at Ngurah Rai International Airport in Bali and transfer to your hotel in Kuta or Seminyak.
Spend the day relaxing on the beach or exploring the local markets and eateries.</li>
            <li><b>Day 2: Ubud Cultural Tour :-</b>

Visit Ubud, known for its rich cultural heritage and lush landscapes.
Explore the Ubud Monkey Forest, a sacred sanctuary with playful monkeys and ancient temples.
Visit traditional art villages like Celuk (silver jewelry), Batuan (paintings), and Mas (wood carvings).
Enjoy a traditional Balinese dance performance in the evening.</li>
            <li><b>Day 3: Bali Waterfalls and Rice Terraces :-</b>

Explore Bali's natural beauty with a tour to Tegenungan Waterfall for a refreshing dip.
Visit the stunning Tegalalang Rice Terraces and learn about traditional Balinese farming practices.
Optional: Visit the Goa Gajah (Elephant Cave) or Tirta Empul Temple for spiritual experiences.</li>
            <li><b>Day 4: Nusa Penida Day Trip :-</b>

Take a day trip to Nusa Penida, a picturesque island off the coast of Bali.
Visit Kelingking Beach for breathtaking views and photo opportunities.
Explore Broken Beach and Angel's Billabong for natural rock formations and clear waters.
Relax at Crystal Bay Beach before returning to Bali in the evening.</li>
            <li><b>Day 5: Jakarta City Tour :-</b>
Fly to Jakarta, the capital city of Indonesia, and check into your hotel.
Explore Jakarta's historical sites like the National Monument (Monas), Jakarta Old Town (Kota Tua), and Istiqlal Mosque.
Visit museums such as the National Museum and Museum Bank Indonesia to learn about Indonesian history and culture.</li>
            <li><b>Day 6: Shopping and Culinary Experience :-</b>
Spend the day shopping at Jakarta's vibrant markets like Pasar Baru and Tanah Abang.
Explore local culinary delights at street food stalls or dine at trendy restaurants offering Indonesian cuisine.
Optional: Visit Jakarta's modern attractions like Taman Mini Indonesia Indah or Ancol Dreamland for family-friendly entertainment.</li>
            <li><b>Day 7: Departure from Jakarta :-</b>
Depending on your flight schedule, explore any remaining attractions or enjoy leisure time at your hotel.
Transfer to Soekarno-Hatta International Airport for your departure flight.</li>
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
<h2 className="text-lg font-semibold mb-2 text-blue-500">WHAT'S EXCLUDED</h2>
<ul className="list-disc list-inside">
  <li>Pick and Drop Services</li>
  <li>1 Meal Per Day</li>
  <li>Cruise Dinner &amp; Music Event</li>
  <li>Visit 7 Best Places in the City With Group</li>
</ul>
</div>
 );
};

const Indonesia = () => {
  return (
    <div>
      <Navbar/>
     <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={indonesiaImage}
            alt="Indonesia"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Indonesia </h1>
        <p className="mb-4">
        Indonesia, an archipelago nation located in Southeast Asia, is renowned for its diverse culture, stunning natural landscapes, rich history, and warm hospitality. With thousands of islands, each offering unique experiences, Indonesia is a paradise for travelers seeking adventure, relaxation, cultural immersion, and natural beauty.

One of Indonesia's most iconic destinations is Bali, known for its beautiful beaches, vibrant cultural scene, and lush rice terraces. Visitors can explore ancient temples like Tanah Lot and Uluwatu, participate in traditional Balinese ceremonies, enjoy water sports, and indulge in delicious Balinese cuisine.

Jakarta, the capital city, is a bustling metropolis with a blend of modern skyscrapers, historic sites, vibrant markets, and diverse culinary options. It's a melting pot of cultures, reflecting Indonesia's diverse population and heritage.

Borneo, shared between Indonesia, Malaysia, and Brunei, is renowned for its pristine rainforests, diverse wildlife, and opportunities for eco-tourism and wildlife conservation. Visitors can explore orangutan sanctuaries, go jungle trekking, or cruise along the Kinabatangan River.

Sumatra, another large island in Indonesia, is known for its stunning natural beauty, including Lake Toba, the largest volcanic lake in the world, and the dense rainforests of Gunung Leuser National Park, home to endangered species like orangutans and Sumatran tigers.

Indonesia's cultural diversity is reflected in its festivals, such as the colorful celebrations of Nyepi (Balinese New Year) in Bali, the lively parades of Jakarta's Car Free Day, and the traditional art performances during Yogyakarta's Sekaten Festival.

The cuisine of Indonesia is a treat for food lovers, with dishes like nasi goreng (fried rice), satay skewers, rendang (spicy meat stew), gado-gado (vegetable salad with peanut sauce), and soto (aromatic soup) showcasing the country's culinary diversity.
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
export default Indonesia
