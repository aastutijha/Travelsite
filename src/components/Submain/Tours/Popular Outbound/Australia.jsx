import React from 'react';
//import './tour.css';
import australiaImage from '../../../../assets/austr.jpeg';
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
            <li><b>Day 1: Arrival in Sydney :-</b>
Arrive in Sydney and check into your accommodation.
Explore Circular Quay, Sydney Harbour Bridge, and Sydney Opera House.
Enjoy a leisurely evening walk along the waterfront.</li>
            <li><b>Day 2: Sydney Exploration :-</b>
Visit Bondi Beach for a morning walk and beach experience.
Explore Darling Harbour, including attractions like SEA LIFE Sydney Aquarium and Wild Life Sydney Zoo.
Optional: Climb the Sydney Harbour Bridge for panoramic views.</li>
            <li><b>Day 3: Blue Mountains Day Trip :-</b>
Take a day trip to the Blue Mountains.
Visit Echo Point for views of the Three Sisters rock formation.
Explore Scenic World for rides and bushwalks.
Visit Leura village for shopping and dining.</li>
            <li><b>Day 4: Sydney to Cairns :-</b>
Fly from Sydney to Cairns.
Relax in Cairns Esplanade and explore the Cairns Botanic Gardens.
Enjoy dinner at a waterfront restaurant overlooking the marina.</li>
            <li><b>Day 5: Great Barrier Reef :-</b>
Take a full-day tour to the Great Barrier Reef.
Snorkel or dive to experience the vibrant marine life and coral reefs.
Enjoy a reef pontoon experience with activities like underwater observatory and semi-submersible rides.</li>
            <li><b>Day 6: Cairns to Brisbane :-</b>
Fly from Cairns to Brisbane.
Explore South Bank Parklands, including Streets Beach and the Wheel of Brisbane.
Visit Queensland Museum and Sciencentre.</li>
            <li><b>Day 7: Brisbane to Gold Coast :-</b>
Take a day trip to the Gold Coast.
Visit Surfers Paradise for beach activities and shopping.
Explore theme parks like Dreamworld, Movie World, or Wet'n'Wild.</li>
            <li><b>Day 8: Brisbane City Exploration :-</b>
Explore Brisbane City Hall and King George Square.
Visit Lone Pine Koala Sanctuary for koala encounters and Australian wildlife.
Enjoy an evening river cruise along Brisbane River.</li>
            <li><b>Day 9: Brisbane to Melbourne :-</b>
Fly from Brisbane to Melbourne.
Explore Federation Square, National Gallery of Victoria, and Melbourne Cricket Ground (MCG).
Stroll along the Yarra River and enjoy dinner at one of Melbourne's laneway restaurants.</li>
            <li><b>Day 10: Melbourne City Tour :-</b>
Visit Queen Victoria Market for fresh produce and local goods.
Explore Melbourne's laneways like Degraves Street and Hardware Lane for coffee and street art.
Optional: Visit Phillip Island for the Penguin Parade.</li>
            <li><b>Day 11: Melbourne to Adelaide :-</b>
Fly from Melbourne to Adelaide.
Explore Adelaide Central Market for gourmet food and local produce.
Visit Adelaide Botanic Garden and Adelaide Zoo.</li>
            <li><b>Day 12: Barossa Valley Wine Tour :-</b>
Take a day trip to Barossa Valley for wine tasting and vineyard tours.
Enjoy lunch at a winery restaurant.
Visit Hahndorf, Australia's oldest surviving German settlement.</li>
<li><b>Day 13: Adelaide to Perth :-</b>
Fly from Adelaide to Perth.
Explore Kings Park and Botanic Garden for panoramic city views.
Visit Fremantle for its historic charm, markets, and waterfront.</li>
<li><b>Day 14: Rottnest Island Day Trip :-</b>
Take a ferry to Rottnest Island.
Enjoy cycling around the island, visit beaches, and spot quokkas.
Snorkel or swim in the clear waters.</li>
<li><b>Day 15: Perth City Tour :-</b>
Explore Perth CBD, including Elizabeth Quay and Perth Cultural Centre.
Visit Perth Mint and learn about Western Australian gold history.
Relax at Cottesloe Beach for sunset.</li>
<li><b>Day 16: Departure :-</b>
Depending on your flight time, explore more of Perth or do last-minute shopping.
Transfer to Perth Airport for departure.</li>
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

const Australia = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={australiaImage}
            alt="Australia"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Australia</h1>
        <p className="mb-4">
        Australia, the world's sixth-largest country, is a vast land of diverse landscapes, rich biodiversity, and a unique blend of cultures. Its geography spans from the iconic Outback with its red deserts and rock formations to lush rainforests, pristine beaches, and vibrant cities. The continent-country is surrounded by the Indian and Pacific Oceans, offering spectacular coastal scenery and a haven for marine life.

The Australian Outback is synonymous with rugged beauty and ancient Indigenous culture. Uluru (Ayers Rock) stands as a symbol of this vast landscape, sacred to the Aboriginal people. The Great Barrier Reef, a UNESCO World Heritage Site, showcases the world's largest coral reef system, teeming with colorful marine species and providing exceptional diving and snorkeling opportunities.

Australia's cities, including Sydney, Melbourne, Brisbane, Perth, and Adelaide, are dynamic hubs of art, culture, cuisine, and innovation. Sydney's iconic Opera House and Harbour Bridge are iconic landmarks, while Melbourne is renowned for its arts scene, coffee culture, and multicultural diversity. Brisbane offers a laid-back lifestyle along the Brisbane River, while Perth boasts stunning beaches and a thriving culinary scene.
Australian culture reflects a blend of Indigenous heritage, British colonial influence, and a multicultural society shaped by immigration. The country celebrates events like Australia Day, ANZAC Day, and various cultural festivals that highlight its diverse population.

Economically, Australia is a major player in industries like mining, agriculture, tourism, education, and technology. It's known for producing high-quality agricultural products like wool, beef, and wine, as well as being a leader in mining resources such as coal, iron ore, and gold.
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
export default Australia
