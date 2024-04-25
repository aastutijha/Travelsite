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
            <li>Day : 1 Arrival in Hotel</li>
            <li>Day : 2 Sightseeing in Kathmandu valley in Hotel +O</li>
            <li>Day : 3 Drive to Syabru Bensi (1550m, 7-8 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 4 Trek to Lama Hotel (2450m, 6-7 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 5 Trek to Langtang Village (3430m, 4-5 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 6 Trek to Kyanjin Gompa (3870m, 4 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 7 Acclimatization day in Kyanjin (3870m) o/n in Guest House +O+L+D</li>
            <li>Day : 8 Trekking back to Lama Hotel (3430m, 6 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 9 Trek to Big Syabru Bensi (2230m, 6-7 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 10 Trek to Sing Gompa (3330m, 3-4 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 11 Trek to Gosaikunda Lake (4460m, 4-6 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 12 Trek to Ghopte (3440m, 6-8 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 13 Trek to Kutumsang (2440m, 6-7 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 14 Trek to Chisopani (2140m, 5-6 hrs) o/n in Guest House +O+L+D</li>
            <li>Day : 15 Chisopani to Nagarkot (1620m, 5hrs) o/n in Hotel +O+L+D</li>
            <li> Day : 16 Trek to Dhulikhel o/n in Hotel +O+L+D</li>
            <li>Day : 17 Trek to Panauti and drive back to Kathmandu via Bhaktapur o/n in Hotel +O</li>
            <li>Day : 18 Drive to Chitwan o/n in Hotel +O+L+D</li>
            <li>Day : 19 Drive back to Kathmandu o/n in Hotel +O</li>
            <li>Day : 20 Departure</li>
            
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
 const Langtang = () => {
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
         <h1 className="text-3xl font-bold mb-2">Langtang Trek</h1>
         <p className="mb-4">
         The Langtang Trek is a captivating journey through the Langtang Valley in Nepal, offering trekkers a blend of natural beauty, cultural immersion, and stunning Himalayan vistas. This trek is renowned for its accessibility from Kathmandu and the diverse landscapes it traverses, making it a popular choice for adventurers seeking a memorable mountain experience.

The trek typically begins with a scenic drive from Kathmandu to Syabrubesi, the starting point of the Langtang Trek. From there, trekkers embark on a trail that winds through lush forests of rhododendron, pine, and oak trees, providing glimpses of diverse flora and fauna along the way. The Langtang National Park, through which the trek passes, is home to rare wildlife such as red pandas, Himalayan tahrs, and various bird species, adding an element of wildlife viewing to the journey.

As trekkers ascend higher into the Langtang Valley, they are treated to panoramic views of snow-capped peaks, including Langtang Lirung, Ganesh Himal, and Dorje Lakpa, among others. The trek also includes visits to traditional Tamang and Sherpa villages like Lama Hotel, Langtang Village, and Kyanjin Gompa, where trekkers can immerse themselves in the local culture, interact with friendly villagers, and witness age-old customs and traditions.</p>
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

  export default Langtang
  