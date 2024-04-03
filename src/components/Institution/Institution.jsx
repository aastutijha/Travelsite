import React from 'react';
import './institution.css';
//import img1 from '../../assets/grid/zed.png';
//import img2 from '../../assets/grid/dtuiif.png';
//import img3 from '../../assets/grid/iitd.png';
//import img4 from '../../assets/grid/OIP.jpg';
//import img5 from '../../assets/grid/imc.png';
//import img6 from '../../assets/grid/zz.webp';
//import img7 from '../../assets/grid/iitm.png';
//import img8 from '../../assets/grid/nvidia.jpg';
//import img9 from '../../assets/grid/WadhwaniFoundation.jpg';
// const imageNames=['zed.png','dtuiif.png','iitd.png','OIP.png','imc.png','zz.webp','iitm.png','nvidia.jpg','WadhwaniFoundation.jpg']


const Institututions = () => {
  return (
    <div className='institutes'>
     <div className="instiHeading">
        Institutions who trust Us 
     </div>

     <div className="table">
        <table cellSpacing={0}>
            <tr>
                <td className="no-border-left no-border-top">
                <img src={img1} alt="" />
                {/* {console.log(images[0])} */}
                </td>
                <td className='no-border-top'>
                <img src={img4} alt="" />
                </td>
                <td className='no-border-top no-border-right'>
                <img src={img2} alt="" />
                </td>
            </tr>

            <tr>
                <td className='no-border-left'>
                <img src={img3} alt="" />
                </td>
                <td>
                <img src={img5} alt="" />
                </td>
                <td className='no-border-right'>
                <img src={img6} alt="" />
                </td>
            </tr>

            <tr>
                <td className='no-border-left no-border-bottom'>
                <img src={img8} alt="" />
                </td>
                <td className='no-border-bottom'>
                <img src={img7} alt="" />
                </td>
                <td className='no-border-right no-border-bottom'>
                <img src={img9} alt="" />
                </td>
            </tr>
        </table>
     </div>
    </div>
  )
}

export default Institututions;