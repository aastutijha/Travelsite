import React from 'react';
import './everest.css';
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
            <li>Day 1: Arrive Kathmandu</li>
            <li>Day 2: Flight to Lukla and Trek to Phakding (2652m)</li>  <li>Day 3: Trek from Phakding to Namche Bazaar (3440m) </li>
            <li> Day 4: Acclimatization Day in Namche Bazaar</li> 
            <li> Day 5: Trek from Namche Bazaar to Tengboche (3860m)</li> <li>Day 6: Trek from Tengboche to Dingboche (4410m) </li>
          <li>Day 7: Acclimatization Day in Dingboche </li> 
          <li>Day 8: Trek from Dingboche to Lobuche (4910m) </li>
           <li>Day 9: Trek from Lobuche to Everest Base Camp (5364m) and Back to Gorak Shep (5164m)</li>
            <li> Day 10: Hike to Kala Patthar (5545m) and Descend to Pheriche (4371m)</li>
             <li> Day 11: Trek from Pheriche to Namche Bazaar</li> 
              <li> Day 12: Trek from Namche Bazaar to Lukla </li> 
              <li> Day 13: Flight from Lukla to Kathmandu</li>  
               <li>Day 14: Departure from Kathmandu</li>
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

const Everest = () => {
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
        <h1 className="text-3xl font-bold mb-2">The Best of Everest Base Camp Trek / Kalapathar Trekking</h1>
        <p className="mb-4">
          Everest Base camp is one of the most trekked destinations among the other trekking routes in the Everest region.
        </p>
        <p className="mb-4">
        The Everest Base Camp trek is an iconic and challenging journey that attracts adventurers and nature enthusiasts from around the globe. Situated in the heart of the Himalayas, the Everest Base Camp (EBC) serves as the starting point for climbers aiming to conquer Mount Everest, the world's highest peak.

The trek to Everest Base Camp is a remarkable blend of natural beauty, cultural immersion, and physical endurance. It typically begins with a scenic flight from Kathmandu to Lukla, a small mountain airstrip nestled among towering peaks. From Lukla, trekkers embark on a multi-day trek through picturesque Sherpa villages, lush forests, and high-altitude landscapes.

As trekkers ascend higher into the Khumbu region, they experience the rugged beauty of the Himalayan terrain, crossing suspension bridges over roaring rivers, ascending steep ridges, and navigating rocky paths. Acclimatization stops in villages like Dingboche and Lobuche help hikers adjust to the altitude and prevent altitude-related illnesses.

Reaching Everest Base Camp itself is a momentous achievement, as trekkers stand in the shadow of the world's highest mountain. The base camp is a hive of activity during the climbing season, with expedition teams preparing for their summit attempts and mountaineers sharing stories of their adventures.

The trek also offers opportunities to explore nearby attractions like Kala Patthar, a renowned vantage point offering panoramic views of Everest, Lhotse, Nuptse, and other Himalayan giants. The Khumbu Glacier, icefalls, and mountain vistas create a surreal and awe-inspiring backdrop throughout the journey.

Besides the natural beauty, the Everest Base Camp trek provides insights into Sherpa culture, Buddhist monasteries, and traditional mountain life. Trekkers often interact with friendly locals, visit ancient monasteries like Tengboche, and learn about the region's rich mountaineering history.

Overall, the Everest Base Camp trek is a life-changing adventure that combines physical challenge, natural splendor, cultural immersion, and the thrill of standing at the foot of the world's highest peak, making it a bucket-list experience for outdoor enthusiasts and adventurers seeking an unforgettable Himalayan expedition.
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

export default Everest;