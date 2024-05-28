import React from 'react';
//import './tour.css';
import bangladeshImage from '../../../../assets/dhaka.jpg';
import Navbar from "../../../Navbar/Navbar.jsx"; // Updated the import path
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
            <li><b>Day 1: Arrival in Dhaka :-</b>
Arrive at Hazrat Shahjalal International Airport in Dhaka.
Check into your hotel and rest after your journey.
In the evening, explore local markets like New Market or Bashundhara City Mall for shopping and dining.
Overnight stay in Dhaka.</li>
            <li><b>Day 2: Dhaka Sightseeing :-</b>
Visit Lalbagh Fort, a historical Mughal fortification.
Explore Ahsan Manzil (Pink Palace), a beautiful 19th-century architectural marvel.
Take a boat ride on the Buriganga River to experience the vibrant river life.
Visit the National Museum to learn about Bangladesh's rich history and culture.
Overnight stay in Dhaka.</li>
            <li><b>Day 3: Day Trip to Sonargaon :-</b>
Take a day trip to Sonargaon, known for its historical significance.
Visit Panam City, an ancient ghost town with well-preserved architecture.
Explore the Folk Art Museum and the Sonargaon Museum to learn about the region's heritage.
Return to Dhaka in the evening.
Overnight stay in Dhaka.</li>
            <li><b>Day 4: Dhaka to Sylhet :-</b>
Take a morning flight or drive to Sylhet.
Check into your hotel and relax.
Visit the famous Ratargul Swamp Forest, known for its natural beauty and boat rides.
Explore Jaflong, a picturesque spot with rivers, hills, and tea gardens.
Overnight stay in Sylhet.</li>
            <li><b>Day 5: Sylhet Excursion :-</b>
Visit the Lawachara National Park for nature walks and wildlife spotting.
Explore Madhabkunda Waterfall, one of the largest waterfalls in Bangladesh.
Visit the Shahjalal University of Science and Technology campus for its scenic beauty.
Return to your hotel and relax.
Overnight stay in Sylhet.</li>
            <li><b>Day 6: Sylhet to Cox's Bazar :-</b>
Take a morning flight or drive to Cox's Bazar, known for its long sandy beach.
Check into your hotel and enjoy beach activities like swimming and sunbathing.
Visit Himchari National Park and enjoy the scenic beauty and waterfalls.
Explore Inani Beach and enjoy the sunset.
Overnight stay in Cox's Bazar.</li>
            <li><b>Day 7: Cox's Bazar and Departure :-</b>
Visit the world's longest natural sandy beach in Cox's Bazar.
Explore nearby attractions like Laboni Beach, Kolatoli Beach, and Cox's Bazar Beach.
Enjoy local seafood delicacies for lunch.
Relax on the beach or indulge in water sports like surfing and jet skiing.
Depart from Cox's Bazar or extend your stay as per your travel plans.</li>
          </ul>
      <h2 className="text-lg font-semibold mb-4 text-blue-500">ADDITIONAL INCLUDED</h2>
      <ul className="list-disc list-inside">
        <li>Pick and Drop Services</li>
        <li>1 Meal Per Day</li>
        <li>Cruise Dinner &amp; Music Event</li>
        <li>Visit 7 Best Places in the City With Group  </li>
      </ul>
      <div className="flex justify-end mt-4">
        <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          <span>For more Enquiry</span>
          <div className="flex flex-col">
            <span>+977 015900337</span>
            <span>+977 9802348638</span>
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

const CoxsBazarSea = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={bangladeshImage}
            alt="Bangladesh"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Bangladesh</h1>
        <p className="mb-4">
        Bangladesh, situated in South Asia along the Bay of Bengal, is a country known for its captivating landscapes and vibrant culture. The geography of Bangladesh is characterized by lush greenery, extensive river networks, and the renowned Sundarbans, the world's largest mangrove forest and home to the Royal Bengal Tiger. Its tropical monsoon climate brings hot, humid summers and mild winters, shaping the country's agricultural cycles and natural environment.

Bengali culture thrives in Bangladesh, celebrated through literature, music, dance, and art. The Bengali language is integral to the country's identity, and festivals like Eid-ul-Fitr, Durga Puja, and Pohela Boishakh (Bengali New Year) showcase the richness of its traditions. The people of Bangladesh are known for their hospitality, warmth, and strong community ties, reflected in their everyday life and social interactions.
Tourism in Bangladesh is a blend of natural wonders and cultural heritage. Cox's Bazar beckons with its stunning beaches, while the Sundarbans National Park offers unique wildlife experiences. Dhaka, the bustling capital, boasts historical sites like Lalbagh Fort and Ahsan Manzil. The tea gardens of Sylhet, archaeological treasures of Mahasthangarh and Paharpur, and the tranquil beauty of Rangamati and Bandarban hill districts add to Bangladesh's allure for tourists.
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
export default CoxsBazarSea
