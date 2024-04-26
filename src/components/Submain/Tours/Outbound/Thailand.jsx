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
            <li>Day 1: Arrival in Bangkok</li>
            <li>Day 2: Bangkok City Tour</li>
            <li>Day 3: Bangkok to Ayutthaya</li>
            <li>Day 4: Ayutthaya to Chiang Mai</li>
            <li>Day 5: Chiang Mai Elephant Sanctuary</li>
            <li>Day 6: Chiang Mai to Phuket</li>
            <li>Day 7: Phuket Island Tour</li>
            <li>Day 8: Phuket to Krabi</li>
            <li>Day 9: Krabi Island-Hopping Tour</li>
            <li>Day 10: Krabi to Koh Samui</li>
            <li>Day 11: Koh Samui Island Tour</li>
            <li>Day 12: Koh Samui to Bangkok</li>
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

const Thailand = () => {
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
        <h1 className="text-3xl font-bold mb-2">Thailand</h1>
        <p className="mb-4">
        Thailand, known as the "Land of Smiles," is a captivating and diverse country in Southeast Asia that attracts millions of visitors each year with its rich cultural heritage, stunning landscapes, vibrant cities, and warm hospitality. From bustling metropolises to tranquil beaches, ancient temples to modern skyscrapers, Thailand offers a myriad of experiences that appeal to travelers of all interests.

Bangkok, the bustling capital city, is a vibrant hub of culture, commerce, and cuisine. Here, visitors can explore ornate temples like Wat Phra Kaew (Temple of the Emerald Buddha) and Wat Pho (Temple of the Reclining Buddha), shop for local handicrafts at markets like Chatuchak Weekend Market, and indulge in delicious street food along bustling streets like Khao San Road.
Northern Thailand is renowned for its picturesque landscapes and cultural heritage.  The region's lush jungles and hill tribes also attract adventure seekers and nature enthusiasts.

In the south, Thailand's stunning islands and beaches beckon travelers seeking relaxation and natural beauty. Phuket, Koh Samui, Krabi, and Phi Phi Islands are just a few of the famous beach destinations known for their crystal-clear waters, white sandy beaches, and vibrant marine life. Activities such as snorkeling, diving, island hopping, and beach parties are popular here.

Thailand's cultural heritage is also evident in its ancient cities and historical sites. Ayutthaya, a UNESCO World Heritage Site, was once the capital of the Kingdom of Siam and boasts impressive ruins of temples and palaces. Sukhothai Historical Park is another UNESCO site known for its well-preserved ancient temples and monuments.

Thailand's culinary scene is renowned worldwide, with its flavorful and diverse cuisine ranging from spicy curries and noodle dishes to tropical fruits and seafood delicacies. Street food markets like Bangkok's Chinatown and Chiang Mai's Night Bazaar are culinary hotspots where visitors can sample a wide variety of local dishes.
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
export default Thailand