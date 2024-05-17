import React from 'react';
//import './tour.css';
import parisImage from '../../../../assets/pariss.jpg';
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
            <li><b>Day 1: Arrival and Introduction to Paris :-</b>
Morning: Arrive in Paris and check into your hotel.
Afternoon: Visit the Eiffel Tower for stunning views of the city. Consider taking a Seine River cruise for a different perspective.
Evening: Explore the charming streets of Montmartre, visit Sacré-Cœur Basilica, and enjoy dinner at a local bistro.</li>
            <li><b>Day 2: Cultural Exploration :-</b>
Morning: Explore the Louvre Museum, home to iconic artworks like the Mona Lisa and Venus de Milo.
Afternoon: Visit Notre-Dame Cathedral (currently under restoration, check for access) and wander around the Latin Quarter.
Evening: Take a leisurely walk along the Seine River and enjoy dinner at a riverside restaurant. </li>
            <li><b>Day 3: Art and Gardens :-</b>
Morning: Visit Musée d'Orsay to admire Impressionist and Post-Impressionist masterpieces.
Afternoon: Stroll through the Tuileries Garden and visit Place de la Concorde and Champs-Élysées.
Evening: Experience a cabaret show at Moulin Rouge or Lido for a memorable night out.</li>
            <li><b>Day 4: Palace of Versailles Day Trip :-</b>
Morning: Take a day trip to the Palace of Versailles, exploring its grandeur and gardens.
Afternoon: Return to Paris and visit the Arc de Triomphe and walk down Champs-Élysées.
Evening: Enjoy dinner at a classic French brasserie.</li>
            <li><b>Day 5: Modern Paris and Departure :-</b>
Morning: Visit the Centre Pompidou for contemporary art and rooftop views.
Afternoon: Explore the Marais district, including the Picasso Museum and trendy boutiques.
Evening: Relax at Luxembourg Gardens or enjoy a farewell meal at a Michelin-starred restaurant.</li>
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

const Paris = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4">
        <img
            src={parisImage}
            alt="Paris"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Paris</h1>
        <p className="mb-4">
        Paris, often referred to as the "City of Light," is a global center of art, culture, fashion, and history. Situated along the banks of the Seine River in northern France, Paris is renowned for its iconic landmarks, romantic ambiance, and rich cultural heritage.

One of Paris's most famous landmarks is the Eiffel Tower, an architectural marvel that offers breathtaking views of the city from its observation decks. The Louvre Museum, home to thousands of priceless artworks including the Mona Lisa and the Venus de Milo, is another must-visit destination for art enthusiasts.

The city's historic heart is the Île de la Cité, where the Notre-Dame Cathedral stands as a masterpiece of French Gothic architecture, despite recent restoration work following a fire. The nearby Sainte-Chapelle boasts stunning stained glass windows dating back to the 13th century.

Paris is synonymous with haute couture and luxury shopping, with avenues like the Champs-Élysées lined with designer boutiques and flagship stores. The city's fashion scene comes to life during Paris Fashion Week, a globally renowned event showcasing the latest trends from top designers.

Paris is also a hub of intellectual and literary history, with famous literary figures like Hemingway, Fitzgerald, and Voltaire having spent time in the city's literary cafés and bookstores. The Latin Quarter, home to the historic Sorbonne University, exudes a scholarly vibe and is a center for intellectual discourse.
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
export default Paris
