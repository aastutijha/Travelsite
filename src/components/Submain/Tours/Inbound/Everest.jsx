import React from 'react';
import './everest.css';
import everestImage from '../../../../assets/everest.jpg';
const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Langtang</h3>
        <div className="current-weather">
          <span className="temperature">6°C</span>
          <span className="condition">Partly cloudy</span>
          <span className="icon">🌨</span>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">6°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">🌨</span>
          <span className="temperature">5°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">🌨</span>
          <span className="temperature">3°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">🌨
</span>
          <span className="temperature">0°C</span>
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
            <li><b>Day 1: Arrival in Kathmandu :-</b>
Arrive at Tribhuvan International Airport in Kathmandu.
Transfer to your hotel in Thamel, a vibrant tourist hub in Kathmandu.
Explore Thamel's bustling streets, shops, and restaurants in the evening.</li>
            <li><b>Day 2: Kathmandu Sightseeing :-</b>
Visit UNESCO World Heritage Sites in Kathmandu Valley, such as Swayambhunath (Monkey Temple), Pashupatinath Temple, Boudhanath Stupa, and Kathmandu Durbar Square.
Obtain necessary permits and gear for the Everest Base Camp trek.
Prepare for the trek and attend a pre-trek briefing in the evening.</li> 
 <li><b>Day 3: Kathmandu to Lukla (Flight) and Trek to Phakding :-</b>
Fly from Kathmandu to Lukla, a thrilling mountain flight offering scenic views.
Begin trekking from Lukla to Phakding, a small village along the Dudh Koshi River.
Enjoy the first day of trekking amidst beautiful landscapes and Sherpa villages.</li>
            <li><b>Day 4: Phakding to Namche Bazaar :-</b>
Trek from Phakding to Namche Bazaar, the bustling commercial hub of the Khumbu region.
Cross suspension bridges over the Dudh Koshi River and ascend through forests and Sherpa villages.
Acclimatize in Namche Bazaar and explore the local market, shops, and bakeries.</li> 
            <li><b>Day 5: Acclimatization Day in Namche Bazaar :-</b>
Take a day hike to Everest View Hotel for panoramic views of Everest, Lhotse, Ama Dablam, and other peaks.
Visit the Sherpa Culture Museum and Everest Photo Gallery to learn about Sherpa history and mountaineering.
Rest and acclimatize in Namche Bazaar, preparing for higher altitudes.</li>
 <li><b>Day 6: Namche Bazaar to Tengboche :-</b>
Trek from Namche Bazaar to Tengboche, known for its monastery and scenic vistas.
Pass through rhododendron forests, suspension bridges, and picturesque villages like Phunki Tenga.
Visit Tengboche Monastery, one of the largest monasteries in the Everest region, with stunning views of Everest and Ama Dablam.</li>
          <li><b>Day 7: Tengboche to Dingboche :-</b>
Trek from Tengboche to Dingboche, gradually gaining altitude.
Enjoy views of Thamserku, Kangtega, and other Himalayan peaks along the trail.
Reach Dingboche, a village with stone-walled fields and incredible mountain views.</li> 
          <li><b>Day 8: Acclimatization Day in Dingboche :-</b>
Take a day hike to Nangkartshang Peak or Chukkhung Ri for acclimatization and panoramic mountain views.
Explore Dingboche's surroundings, visit local lodges, and interact with fellow trekkers.
Rest and prepare for the challenging ascent ahead.</li>
           <li><b>Day 9: Dingboche to Lobuche :-</b>
Trek from Dingboche to Lobuche, ascending gradually along the moraine of the Khumbu Glacier.
Pass through Duglha, where the memorial for climbers is located, and continue towards Lobuche.
Reach Lobuche, a small settlement with stunning views of Nuptse, Pumori, and other peaks.</li>
            <li><b>Day 10: Lobuche to Gorak Shep and Everest Base Camp :-</b>
Trek from Lobuche to Gorak Shep, the last settlement before Everest Base Camp.
Hike to Everest Base Camp, following the Khumbu Glacier and enjoying panoramic views of Khumbu Icefall and surrounding peaks.
Explore Everest Base Camp, take photos, and soak in the surreal atmosphere of the world's highest base camp.
Return to Gorak Shep for an overnight stay.</li>
             <li><b>Day 11: Gorak Shep to Kala Patthar and Pheriche :-</b>
Early morning hike to Kala Patthar for sunrise views over Everest, Lhotse, and Nuptse.
Descend to Gorak Shep for breakfast and then trek down to Pheriche.
Enjoy a comfortable night's rest in Pheriche, celebrating the Everest Base Camp achievement.</li> 
              <li><b>Day 12: Pheriche to Namche Bazaar :-</b>
Trek from Pheriche to Namche Bazaar, descending through forests and Sherpa villages.
Enjoy the familiar sights and sounds of Namche Bazaar, a welcome stop after the challenging trek.
Relax, shop for souvenirs, and celebrate the successful Everest Base Camp trek. </li> 
              <li><b>Day 13: Namche Bazaar to Lukla :-</b>
Trek from Namche Bazaar to Lukla, retracing your steps through scenic landscapes and suspension bridges.
Reflect on the journey, share experiences with fellow trekkers, and enjoy a farewell dinner in Lukla.</li>  
               <li><b>Day 14: Fly from Lukla to Kathmandu :-</b>
Take an early morning flight from Lukla to Kathmandu.
Transfer to your hotel in Kathmandu and enjoy a leisurely day exploring the city, shopping for souvenirs, or relaxing.
Attend a farewell dinner with your trekking team and celebrate the successful Everest Base Camp adventure.</li>
<li><b>Day 15: Departure from Kathmandu :-</b>
Depending on your flight schedule, explore more of Kathmandu or relax at your hotel.
Transfer to Tribhuvan International Airport for your departure, concluding your Everest Base Camp trekking experience.</li>
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
            src={everestImage}
            alt="Everest Base Camp Trek"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">The Best of Everest Base Camp Trek / Kalapathar Trekking</h1>
        <p className="mb-4">
        The Everest Base Camp trek is an iconic and challenging journey that attracts adventurers and nature enthusiasts from around the globe. Situated in the heart of the Himalayas, the Everest Base Camp (EBC) serves as the starting point for climbers aiming to conquer Mount Everest, the world's highest peak.

The trek to Everest Base Camp is a remarkable blend of natural beauty, cultural immersion, and physical endurance. It typically begins with a scenic flight from Kathmandu to Lukla, a small mountain airstrip nestled among towering peaks. From Lukla, trekkers embark on a multi-day trek through picturesque Sherpa villages, lush forests, and high-altitude landscapes.

As trekkers ascend higher into the Khumbu region, they experience the rugged beauty of the Himalayan terrain, crossing suspension bridges over roaring rivers, ascending steep ridges, and navigating rocky paths. Acclimatization stops in villages like Dingboche and Lobuche help hikers adjust to the altitude and prevent altitude-related illnesses.

Reaching Everest Base Camp itself is a momentous achievement, as trekkers stand in the shadow of the world's highest mountain. The base camp is a hive of activity during the climbing season, with expedition teams preparing for their summit attempts and mountaineers sharing stories of their adventures.

The trek also offers opportunities to explore nearby attractions like Kala Patthar, a renowned vantage point offering panoramic views of Everest, Lhotse, Nuptse, and other Himalayan giants. The Khumbu Glacier, icefalls, and mountain vistas create a surreal and awe-inspiring backdrop throughout the journey.
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

export default Everest;