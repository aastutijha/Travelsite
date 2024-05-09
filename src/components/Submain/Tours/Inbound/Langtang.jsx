import React from 'react';
import './everest.css';
import langtangImage from '../../../../assets/langtangvalley.jpg';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Langtang</h3>
        <div className="current-weather">
          <span className="temperature">10°C</span>
          <span className="condition">Partly cloudy</span>
          <span className="icon">🌨</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">10°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">8°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">🌨</span>
          <span className="temperature">5°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">🌨
</span>
          <span className="temperature">2°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">❄️</span>
          <span className="temperature">-1°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌬️</span>
          <span className="temperature">-5°C</span>
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
            <li><b>Day 1: Kathmandu to Syabrubesi :-</b>
Drive from Kathmandu to Syabrubesi, the starting point of the Langtang trek.
Enjoy scenic views of rural Nepal, terraced fields, and the Trishuli River along the way.
Overnight stay in Syabrubesi, a small village with basic accommodations.</li>
            <li><b>Day 2: Syabrubesi to Lama Hotel :-</b>
Begin your trek from Syabrubesi, following the Langtang Khola River.
Pass through dense forests and picturesque Tamang villages like Bamboo and Rimche.
Reach Lama Hotel and rest for the night amidst the tranquility of the mountains.</li>
            <li><b>Day 3: Lama Hotel to Langtang Village :-</b>
Trek through rhododendron and pine forests, with occasional views of Langtang Lirung (7,227m) and other peaks.
Pass by Ghoda Tabela (Horse Stable) and continue to Langtang Village, an ancient Tibetan-influenced settlement.
Explore the village and interact with the local Tamang community.
Overnight stay in Langtang Village.</li>
            <li><b>Day 4: Langtang Village to Kyanjin Gompa :-</b>
Trek to Kyanjin Gompa, a picturesque village with a Buddhist monastery and stunning mountain views.
Hike up to the Kyanjin Ri viewpoint for panoramic vistas of the Langtang range, glaciers, and surrounding peaks.
Explore the cheese factory and local yak pastures.
Overnight stay in Kyanjin Gompa.</li>
            <li><b>Day 5: Acclimatization Day at Kyanjin Gompa :-</b>
Spend a day acclimatizing at Kyanjin Gompa to prepare for higher altitudes.
Optional hikes to nearby viewpoints like Tserko Ri (4,984m) for breathtaking sunrise views.
Attend a meditation session at the monastery or interact with local monks.
Rest and relax to rejuvenate for the upcoming trekking days.</li>
            <li><b>Day 6: Kyanjin Gompa to Lama Hotel :-</b>
Begin your descent back towards Lama Hotel, retracing your steps through Langtang Village.
Enjoy the downhill trek with different perspectives of the landscape.
Overnight stay in Lama Hotel.</li>
            <li><b>Day 7: Lama Hotel to Syabrubesi :-</b>
Trek back to Syabrubesi, passing through forests, streams, and traditional Tamang settlements.
Reflect on your trekking experience and enjoy the last leg of your journey.
Celebrate the completion of the Langtang Valley Trek with fellow trekkers in Syabrubesi.
Overnight stay in Syabrubesi.</li>
            <li><b>Day 8: Syabrubesi to Kathmandu :-</b>
Drive back from Syabrubesi to Kathmandu, enjoying the scenic route once again.
Arrive in Kathmandu and transfer to your hotel.
Relax and unwind in Kathmandu or explore the city's cultural attractions and vibrant markets.</li>
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
  <li>Music Event</li>
  <li>Visit 7 Best Places in the City With Group</li>
</ul>
</div>
 );
};
 const Langtang = () => {
   return (
     <div>
        <div className="bg-white p-4 rounded-md shadow-md center-box">
        <div className="mb-4"></div>
         <div className="mb-4">
         <img
            src={langtangImage}
            alt="Langtang Valley Trek"
            className="w-full h-auto"
          />
         </div>
         <h1 className="text-3xl font-bold mb-2">Langtang Trek</h1>
         <p className="mb-4">
         The Langtang Trek is a captivating journey through the Langtang Valley in Nepal, offering trekkers a blend of natural beauty, cultural immersion, and stunning Himalayan vistas. This trek is renowned for its accessibility from Kathmandu and the diverse landscapes it traverses, making it a popular choice for adventurers seeking a memorable mountain experience.

The trek typically begins with a scenic drive from Kathmandu to Syabrubesi, the starting point of the Langtang Trek. From there, trekkers embark on a trail that winds through lush forests of rhododendron, pine, and oak trees, providing glimpses of diverse flora and fauna along the way. The Langtang National Park, through which the trek passes, is home to rare wildlife such as red pandas, Himalayan tahrs, and various bird species, adding an element of wildlife viewing to the journey.

As trekkers ascend higher into the Langtang Valley, they are treated to panoramic views of snow-capped peaks, including Langtang Lirung, Ganesh Himal, and Dorje Lakpa, among others. The trek also includes visits to traditional Tamang and Sherpa villages like Lama Hotel, Langtang Village, and Kyanjin Gompa, where trekkers can immerse themselves in the local culture, interact with friendly villagers, and witness age-old customs and traditions.</p>
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

  export default Langtang
  