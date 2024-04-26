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
            <li>Day 1: Arrival in Jakarta</li>
            <li>Day 2: Jakarta City Tour</li>
            <li>Day 3: Jakarta to Yogyakarta</li>
            <li>Day 4: Yogyakarta City Tour</li>
            <li>Day 5: Yogyakarta to Mount Bromo</li>
            <li>Day 6: Mount Bromo Sunrise Tour</li>
            <li>Day 7: Mount Bromo to Bali</li>
            <li>Day 8: Bali Cultural and Sightseeing Tour</li>
            <li>Day 9: Bali Beach Day and Water Activities</li>
            <li>Day 10: Bali Highlands and Volcano Tour</li>
            <li>Day 11: Bali to Gili Islands</li>
            <li>Day 12: Gili Islands Relaxation and Water Sports</li>
            <li>Day 13: Gili Islands to Lombok</li>
            <li>Day 14: Departure from Lombok</li>
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

const Indonesia = () => {
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
        <h1 className="text-3xl font-bold mb-2">Indonesia </h1>
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
