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
       <div className="mt-4">
         <h2 className="text-lg font-semibold mb-2">WHAT'S EXCLUDED</h2>
         <ul className="list-disc list-inside">
           <li>Pick and Drop Services</li>
           <li>1 Meal Per Day</li>
           <li>Cruise Dinner &amp; Music Event</li>
           <li>Visit 7 Best Places in the City With Group</li>
         </ul>
       </div>
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
           </div>
         </div>
       </div>
     </div>
   );
 };

  export default Langtang
  