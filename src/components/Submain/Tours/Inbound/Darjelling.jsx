import React from 'react';
import './everest.css';
import chitwanImage from '../../../../assets/safarii.jpeg';
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
            <li><b>Day 1: Arrival in Darjeeling :-</b>
Arrive at Bagdogra Airport or New Jalpaiguri Railway Station.
Transfer to your hotel in Darjeeling.
Spend the evening exploring the local markets and trying some Darjeeling tea.</li>
            <li><b>Day 2: Darjeeling Sightseeing :-</b>
Early morning visit to Tiger Hill to witness the sunrise over the Himalayas.
Visit Batasia Loop, Ghoom Monastery, and War Memorial.
Explore the Himalayan Mountaineering Institute and the Padmaja Naidu Himalayan Zoological Park.
Visit the Peace Pagoda and enjoy panoramic views of Darjeeling.</li>
            <li><b>Day 3: Excursion to Mirik and Pashupati Market :-</b>
Drive to Mirik and visit Sumendu Lake, Bokar Monastery, and Tea Gardens.
Explore Pashupati Market on the Nepal border for shopping and local experiences.
Return to Darjeeling in the evening.</li>
            <li><b>Day 4: Transfer to Gangtok :-</b>
Check out from your hotel in Darjeeling.
Drive to Gangtok, the capital of Sikkim.
Check into your hotel and rest.
Spend the evening exploring MG Marg and trying local cuisine.</li>
            <li><b>Day 5: Gangtok Sightseeing :-</b>
Visit Tashi Viewpoint for panoramic views of the Himalayas.
Explore Hanuman Tok and Ganesh Tok.
Visit Enchey Monastery and Do Drul Chorten Stupa.
Explore the Namgyal Institute of Tibetology and Flower Exhibition Centre.</li>
            <li><b>Day 6: Excursion to Tsomgo Lake and Baba Mandir :-</b>
Full-day excursion to Tsomgo Lake, a glacial lake at an altitude of 12,400 feet.
Visit Baba Harbhajan Singh Mandir, a sacred shrine near the Indo-China border.
Enjoy yak rides and local delicacies near Tsomgo Lake.
Return to Gangtok in the evening.</li>
<li><b>Day 7: Day Trip to Nathula Pass and Changu Lake :-</b>
Optional day trip to Nathula Pass, subject to permits and weather conditions.
Visit Changu Lake (also known as Tsomgo Lake) if Nathula Pass is closed.
Explore the surrounding areas and enjoy the natural beauty.
Return to Gangtok and relax in the evening.</li>
<li><b>Day 8: Departure :-</b>
Check out from your hotel in Gangtok.
Transfer to Bagdogra Airport or New Jalpaiguri Railway Station for your onward journey.</li>
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
const Darjelling = () => {
  return (
    <div>
       <div className="flex flex-col items-center">
        <div className="mb-4">
        <img
            src={chitwanImage}
            alt="Chitwan Safarii"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Darjelling and Shikkim</h1>
        <p className="mb-4">
        Darjeeling and Sikkim, nestled in the northeastern part of India, offer enchanting experiences for travelers. Darjeeling, known as the "Queen of the Hills," captivates with its panoramic views of the Himalayas, sprawling tea gardens producing exquisite teas, and the iconic Darjeeling Himalayan Railway, a UNESCO World Heritage Site. The town's cultural diversity, reflected in its monasteries, temples, and colonial architecture, adds to its allure. On the other hand, Sikkim, bordered by Bhutan, Nepal, Tibet, and West Bengal, showcases breathtaking landscapes with snow-capped peaks, alpine forests, and pristine lakes. Adventure enthusiasts flock to Sikkim for trekking, mountaineering, river rafting, and paragliding, while cultural enthusiasts immerse themselves in its Tibetan, Nepali, and Bhutia heritage through ancient monasteries, vibrant festivals, and local cuisine. Gangtok, the capital city, serves as a vibrant hub for exploration, and the state's rich biodiversity adds a layer of natural wonder to the experience. Together, Darjeeling and Sikkim offer a harmonious blend of natural beauty, cultural richness, and adventure, making them sought-after destinations for travelers seeking unforgettable Himalayan experiences.</p>
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
export default Darjelling