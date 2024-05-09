import React from 'react';
//import './tour.css';
import londanImage from '../../../../assets/londonn.jpg';
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
            <li><b>Day 1: Arrival in London :- </b>Arrive in London and check into your hotel.
Spend the afternoon exploring the immediate area around your hotel to get acquainted with the surroundings.
In the evening, take a leisurely stroll along the Thames River, passing iconic landmarks like the London Eye and Big Ben (Elizabeth Tower).</li>
            <li><b>Day 2: Historic London :-</b>
Start your day with a visit to the Tower of London, home to the Crown Jewels and steeped in history.
Afterward, head to the nearby Tower Bridge Exhibition to learn about the bridge's engineering and enjoy panoramic views from the walkways.
Explore the historic area of Westminster, visiting Westminster Abbey and the Houses of Parliament.
End the day with a relaxing walk through St. James's Park or Hyde Park, depending on your location.</li>
            <li><b>Day 3: Cultural Exploration :-</b>
Begin with a visit to the British Museum, home to a vast collection of art and artifacts from around the world.
After lunch, head to the National Gallery in Trafalgar Square to admire masterpieces by artists like Van Gogh, Da Vinci, and Rembrandt.
In the evening, consider catching a West End show in London's famous theatre district.</li>
            <li><b>Day 4: Royal London :-</b>
Start your day with a tour of Buckingham Palace, the official residence of the British monarch.
Explore the nearby Royal Parks, including Green Park and Kensington Gardens.
Visit Kensington Palace, a historic royal residence with beautiful gardens and exhibitions.
End the day with a visit to Harrods or another iconic London department store for some shopping.</li>
            <li><b>Day 5: Modern London and Departure :-</b>
Spend your last day exploring modern London. Visit the Shard for panoramic city views from the observation deck.
Explore the vibrant neighborhoods of Soho and Covent Garden, known for their shops, restaurants, and street performers.
Depending on your flight schedule, you may have time for a visit to the Tate Modern or a Thames River cruise.
Transfer to the airport for your departure, concluding your memorable trip to London.</li>

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

const London = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={londanImage}
            alt="Londan"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">London</h1>
        <p className="mb-4">
        London, the capital city of England and the United Kingdom, is a dynamic and diverse metropolis that seamlessly intertwines rich history with modernity. Renowned for its iconic landmarks, cultural heritage, vibrant arts scene, and global influence, London is a captivating destination for travelers from around the world.

One of London's most famous landmarks is the majestic Tower Bridge, a symbol of the city's engineering prowess and Victorian architecture. Nearby stands the historic Tower of London, a UNESCO World Heritage Site that houses the Crown Jewels and has a storied past as a royal palace, fortress, and prison.

The city's royal connections extend to Buckingham Palace, the official residence of the British monarch, where visitors can witness the Changing of the Guard ceremony. Nearby, Hyde Park offers a peaceful retreat with its expansive green spaces, serene lakes, and iconic landmarks like the Serpentine Gallery.

London's cultural scene is vibrant and diverse, with world-class museums and galleries such as the British Museum, Tate Modern, National Gallery, and Victoria and Albert Museum showcasing art and artifacts from across the globe. The West End district is renowned for its theatres, hosting top-notch productions of musicals, plays, and performances.

London's culinary scene is a melting pot of flavors, offering everything from traditional British fare like fish and chips to international cuisines representing cultures from around the world. Food markets like Borough Market and Camden Market are foodie havens, showcasing a plethora of culinary delights.
London's transport network, including the famous red double-decker buses, Underground (Tube), and Thames River cruises, makes navigating the city convenient for tourists, allowing easy access to its many attractions and hidden gems.
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
export default London;
