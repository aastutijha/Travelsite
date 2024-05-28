import React from 'react';
import './everest.css';
import chitwanImage from '../../../../assets/safarii.jpeg';
import Navbar from "../../../Navbar/Navbar.jsx"; // Updated the import path


const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header text-orange-500 ">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>CHITWAN</h3>
        <div className="current-weather">
          <span className="temperature">34°C</span>
          <span className="condition">Mostly Sunny</span>
          <span className="icon">☀️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">🌤</span>
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
          <span className="temperature">26°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">24°C</span>
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
        <li>
          <b>Day 1: Arrival in Chitwan :-</b> Arrive in Chitwan, either by road or air from Kathmandu or Pokhara. Check into your safari lodge or hotel in Sauraha, the main gateway to Chitwan National Park. Rest and freshen up after your journey. In the evening, enjoy a cultural program featuring Tharu traditional dance and music.
        </li>
        <li>
          <b>Day 2: Chitwan National Park Safari :-</b> Start your day with an early morning jungle walk or bird watching tour with experienced guides. After breakfast, embark on a canoe ride along the Rapti River, observing aquatic wildlife and birds. Visit the Elephant Breeding Center to learn about elephant conservation efforts. Enjoy a delicious lunch at your lodge. In the afternoon, experience an elephant-back safari through the grasslands and forests of Chitwan, spotting wildlife such as rhinos, deer, and maybe even tigers (if lucky). Return to your lodge for dinner and overnight stay.
        </li>
        <li>
          <b>Day 3: Jeep Safari and Nature Walk :-</b> Begin your day with a thrilling jeep safari deep into the heart of Chitwan National Park, exploring diverse habitats and encountering wildlife in their natural habitat. Stop for a picnic lunch amidst the wilderness. Afternoon nature walk with naturalists to learn about flora, fauna, and jungle survival skills. Enjoy a sunset view over the park from a designated viewpoint. Return to your lodge for dinner and relaxation.
        </li>
        <li>
          <b>Day 4: Elephant Interaction and Departure :-</b> Participate in an elephant interaction program where you can feed, bathe, and learn about the daily care of elephants from mahouts (elephant keepers). Have a farewell breakfast at your lodge. Check out from your accommodation and depart for your onward journey, whether back to Kathmandu, Pokhara, or another destination.
        </li>
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

const EXCLUDED = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md center-box">
      <h2 className="text-lg font-semibold mb-2 text-blue-500">WHAT'S EXCLUDED</h2>
      <ul className="list-disc list-inside">
        <li>Pick and Drop Services</li>
        <li>Lunch and dinner while you are in Kathmandu & Pokhara.</li>
        <li>Travel insurance and emergency evacuation services.</li>
        <li>International airfare.</li>
        <li>Tips for guides and porters.</li>
        <li>Personal expenses such as alcoholic beverages, shopping, and laundry.</li>
        <li>Optional activities not mentioned in the itinerary.</li>
      </ul>
    </div>
  );
};

const Chitwan = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
          <img
            src={chitwanImage}
            alt="Chitwan Safarii"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Chitwan Safari</h1>
        <p className="mb-4">
          A Chitwan safari offers an exhilarating adventure into the heart of the lush Terai region of Nepal, renowned for its rich biodiversity and stunning natural beauty. The safari typically takes place in the iconic Chitwan National Park, a UNESCO World Heritage Site and one of the best-preserved conservation areas in Asia.
        </p>
        <p className="mb-4">
          Chitwan safaris provide an opportunity to explore the diverse ecosystems of the park, which include dense forests, grasslands, and wetlands. Visitors can embark on thrilling jungle excursions led by experienced guides, either on elephant-back or in four-wheel-drive vehicles, allowing them to traverse through the wilderness and observe the region's incredible wildlife up close.
        </p>
        <p className="mb-4">
          One of the highlights of a Chitwan safari is the chance to encounter rare and endangered species in their natural habitat. From majestic Bengal tigers and one-horned rhinoceros to Asian elephants and elusive leopards, the park is home to a remarkable array of wildlife. Additionally, visitors can spot various species of deer, monkeys, crocodiles, and over 500 species of birds, making it a paradise for wildlife enthusiasts and birdwatchers alike.
        </p>
        <p className="mb-4">
          Aside from wildlife viewing, Chitwan safaris offer a range of other exciting activities. Travelers can enjoy serene canoe rides along the Rapti River, where they may spot crocodiles basking on the riverbanks or vibrant birdlife fluttering above. Nature walks through the park's lush trails provide opportunities to learn about the region's flora and fauna from knowledgeable guides.
        </p>
        <p className="mb-4">
          Chitwan safaris also offer cultural experiences, allowing visitors to interact with the indigenous Tharu communities who call the region home. Travelers can visit Tharu villages, witness traditional dance performances, and learn about the unique customs and traditions of these fascinating people.
        </p>
        <p className="mb-4">
          Accommodations for Chitwan safaris range from luxury jungle lodges to eco-friendly resorts and budget-friendly guesthouses, ensuring that there are options to suit every traveler's preferences and budget. Whether seeking adventure, wildlife encounters, cultural immersion, or relaxation amidst nature, a Chitwan safari promises an unforgettable journey into the wilderness of Nepal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TripWeatherForecast />
          <TourRate />
          <AdditionalIncluded />
          <EXCLUDED />
        </div>
      </div>
    </div>
  );
};

export default Chitwan;