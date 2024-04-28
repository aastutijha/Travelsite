import React from 'react';
import './everest.css';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Illam</h3>
        <div className="current-weather">
          <span className="temperature">22°C</span>
          <span className="condition">Partly cloudy</span>
          <span className="icon">⛅</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">18°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">⛅</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">☁️
</span>
          <span className="temperature">12°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">10°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">5°C</span>
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
            <li><b>Day 1: Arrival in Ilam :-</b>
Arrive at Ilam, either by road from Kathmandu or through nearby airports like Bhadrapur or Biratnagar.
Check into your accommodation, which could be a tea estate resort or a hotel in Ilam Bazaar.
Take a leisurely stroll around Ilam Bazaar in the evening, exploring local markets and sampling traditional snacks like sel roti and local teas.</li>
            <li><b>Day 2: Kanyam Tea Gardens :-</b>
Begin your day with a visit to Kanyam Tea Gardens, one of the largest and most picturesque tea estates in Ilam.
Take a guided tour of the tea gardens, learning about tea cultivation, processing, and the history of Ilam's tea industry.
Enjoy a scenic walk through the lush greenery of the tea gardens, soaking in the serene ambiance and stunning views of the surrounding hills and mountains.</li>
            <li><b>Day 3: Fikkal Tea Gardens and Tea Factory :-</b>
Head to Fikkal, another prominent tea-growing area in Ilam, known for its high-quality tea production.
Visit a tea factory in Fikkal to observe the tea processing methods firsthand, from plucking to drying and packaging.
Participate in tea-tasting sessions, sampling various tea varieties produced in the region and learning to distinguish their flavors and aromas.</li>
            <li><b>Day 4: Ilam Tea Museum and Siddhi Thumka :-</b>
Explore the Ilam Tea Museum, located in Ilam Bazaar, to delve deeper into the history and heritage of Ilam's tea industry.
Learn about the different stages of tea cultivation and processing, as well as the cultural significance of tea in Nepali society.
In the afternoon, visit Siddhi Thumka, a traditional Limbu village, to experience the indigenous culture, lifestyle, and hospitality of the local community.</li>
            <li><b>Day 5: Mai Pokhari and Sandakpur :-</b>
Take a day trip to Mai Pokhari, a beautiful lake surrounded by tea gardens and forests, offering breathtaking views of the Himalayas.
Continue your journey towards Sandakpur, a popular viewpoint on the Nepal-India border, known for its panoramic vistas of Kanchenjunga and other snow-capped peaks.
Spend the day exploring these scenic destinations, capturing memorable moments amidst nature's splendor.</li>
            <li><b>Day 6: Departure from Ilam :-</b>
Depending on your travel plans, depart from Ilam with fond memories of your tea garden tour, enriched with insights into tea cultivation, breathtaking landscapes, and warm Nepali hospitality.</li>
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
const Illam = () => {
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
        <h1 className="text-3xl font-bold mb-2">Illam Tea Garden</h1>
        <p className="mb-4">
        Illam, located in eastern Nepal, is renowned for its picturesque tea gardens that produce some of the finest teas in the world. The Illam district, nestled in the foothills of the majestic Himalayas, boasts an ideal climate and fertile soil for tea cultivation, making it a paradise for tea enthusiasts and nature lovers alike.

The Illam Tea Garden is a vast expanse of lush greenery spread across rolling hills, creating a serene and captivating landscape. The tea plants, meticulously cultivated on terraced slopes, thrive in the cool temperatures and abundant rainfall of the region, resulting in teas with unique flavors and aromas.

Walking through the Illam Tea Garden is a sensory delight, with the fragrant aroma of fresh tea leaves filling the air and the sight of neatly arranged tea bushes stretching as far as the eye can see. The tea pluckers, mostly local women with deft hands, skillfully harvest the tender tea leaves, a process that requires precision and expertise.

The tea estate also offers panoramic views of the surrounding mountains, including the iconic Kanchenjunga, the third highest peak in the world. Trekkers and visitors often marvel at the stunning vistas while savoring a cup of freshly brewed Illam tea, experiencing a harmonious blend of nature's beauty and the region's tea culture.

Illam's tea production includes a variety of teas, such as orthodox black tea, green tea, white tea, and oolong tea, each with its distinct characteristics and flavor profiles. The teas are processed using traditional methods that have been passed down through generations, ensuring high quality and authenticity.

Visitors to the Illam Tea Garden can also explore tea factories to witness the tea processing stages, from withering and rolling to oxidation and drying. This immersive experience offers insights into the art and science of tea production, enhancing appreciation for the labor-intensive yet rewarding journey from leaf to cup.</p>
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

 
export default Illam
