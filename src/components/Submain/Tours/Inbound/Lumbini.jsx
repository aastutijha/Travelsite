import React from 'react';
import './everest.css';
import lumbiniImage from '../../../../assets/buddha.jpg';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>CHITWAN</h3>
        <div className="current-weather">
          <span className="temperature">39°C</span>
          <span className="condition">Sunny</span>
          <span className="icon">☀️</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">37°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">35°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">🌤</span>
          <span className="temperature">32°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">29°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">23°C</span>
        </div>
      </div>
    </div>
  );
};
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
            <li><b>Day 1: Arrival in Lumbini :-</b>
Arrive at Gautam Buddha Airport in Bhairahawa or at Lumbini by road from nearby cities like Pokhara or Kathmandu.
Check into your hotel or guesthouse in Lumbini.
After settling in, visit the Lumbini Garden, the sacred site where Lord Buddha was born. Explore the Maya Devi Temple, Ashoka Pillar, and other significant monuments within the garden.
Attend the evening prayer ceremony at the Maya Devi Temple, a serene and spiritually enriching experience.</li>
            <li><b>Day 2: Exploring Lumbini's Monastic Zone :-</b>
Spend the day exploring the Monastic Zone, home to numerous monasteries and meditation centers built by Buddhist communities from around the world.
Visit the International Monastic Zone, where you can explore monasteries representing different Buddhist traditions, cultures, and countries.
Take a peaceful stroll or rent a bicycle to explore the serene surroundings of Lumbini, dotted with beautiful gardens and tranquil pathways.</li>
            <li><b>Day 3: Excursion to Kapilvastu :-</b>
Take a day trip to Kapilvastu, the ancient capital of the Shakya Kingdom and the childhood home of Prince Siddhartha (Lord Buddha).
Visit Tilaurakot Archaeological Site, believed to be the remains of Kapilvastu's ancient palace complex where Prince Siddhartha spent his early years.
Explore other historical sites in Kapilvastu, including Kudan, Niglihawa, and Gotihawa, associated with Lord Buddha's life and teachings.</li>
            <li><b>Day 4: Mahaparinirvana Temple and Nearby Attractions :-</b>
Visit the Mahaparinirvana Temple, located outside the Monastic Zone, which enshrines the ruins of a monastery and the reclining Buddha statue depicting Lord Buddha's passing into Nirvana.
Explore nearby attractions such as the Ramagrama Stupa, believed to house Lord Buddha's relics, and the Devadaha, associated with the early life of Buddha's mother, Queen Mahamaya.
Spend your evening in meditation or attending a discourse on Buddhism, offered by local monks or meditation centers in Lumbini.</li>
            <li><b> Day 5: Departure from Lumbini :-</b>
Depending on your departure schedule, you may have some free time in the morning to revisit any sites of interest or indulge in souvenir shopping.
Depart from Lumbini, either by road or air, concluding your spiritual journey to the birthplace of Lord Buddha.</li>
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
const Lumbini = () => {
  return (
    <div>
       <div className="flex flex-col items-center">
        <div className="mb-4">
        <img
            src={lumbiniImage}
            alt="Birth Place of Lord Buddha"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Lumbini</h1>
        <p className="mb-4">
        Lumbini is a revered pilgrimage site located in the Rupandehi District of Nepal, renowned as the birthplace of Siddhartha Gautama, who later became known as Lord Buddha. It holds immense significance for Buddhists worldwide and is recognized as a UNESCO World Heritage Site.

The historical and spiritual importance of Lumbini is deeply rooted in Buddhist tradition. It is believed that Queen Maya Devi, the mother of Siddhartha Gautama, gave birth to him while visiting her maternal home in Lumbini. The exact spot of Lord Buddha's birth is marked by the Mayadevi Temple, where pilgrims from all over the world come to pay their respects and offer prayers.

Lumbini is not only a place of religious significance but also a center for cultural and historical exploration. The sacred site is surrounded by tranquil gardens, monasteries, and meditation centers, creating a serene and contemplative atmosphere for visitors. The Ashoka Pillar, erected by Emperor Ashoka in the 3rd century BCE, stands as a testament to the ancient Buddhist heritage of Lumbini.

Visitors to Lumbini can explore various monastic zones representing different Buddhist traditions, including Theravada, Mahayana, and Vajrayana. These zones house beautifully designed monasteries, stupas, and shrines built by Buddhist communities from different countries, showcasing the global reverence for Lord Buddha and his teachings.

Apart from its religious and cultural significance, Lumbini also offers opportunities for spiritual reflection, meditation, and learning about Buddhist philosophy and practices. The peaceful surroundings, coupled with the spiritual ambiance, make it an ideal destination for those seeking inner peace, enlightenment, and a deeper understanding of Buddhism.

Lumbini's allure extends beyond its religious context, attracting travelers interested in history, archaeology, and architecture. The nearby Lumbini Museum and archaeological ruins provide insights into the region's ancient past and the evolution of Buddhism over the centuries.
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

export default Lumbini
