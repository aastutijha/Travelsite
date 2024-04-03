import React from 'react' ;
//import {
  //Carousel
//}

//from 'react-responsive-carousel';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import img1 from '../../assets/achievements/image1.jpeg';
//import img2 from '../../assets/achievements/image2.jpeg';
//import img3 from '../../assets/achievements/image3.jpeg';
//import './achievements.css';
const Achievements=()=> {
  // array holding achievement title, img and desc 
  // add new achievements data in this array to add more to the carousel
//   const achievements=[ {
//       title: 'Achievement 1', img: img1, description: 'Description 1'
//   }
//   ,
//   {
//       title: 'Achievement 2', img: img2, description: 'Description 2'
//   }
//   ,
//   {
//       title: 'Achievement 3', img: img3, description: 'Description 3'
//   }
//   ,
//   ];
  return ( <div className='achievements'> <div className="heading"> <h1>Our Achievements</h1> </div> <div className="carouselContainer">
     <Carousel autoPlay interval= {
      3000
  }
  infiniteLoop useKeyboardArrows dynamicHeight showArrows= {
      true
  }
  showStatus= {
      false
  }
  showIndicators= {
      false
  }
  > {
      achievements.map((achievement, index)=> ( // <div >
      <div key= {
          index
      }
      className="description-container"> <div className="first"></div> {
          /* <h2>{achievement.title}</h2> */
      }
      <img className="image-class" src= {
          achievement.img
      }
      alt= {
          achievement.title
      }
      /> {
          /* <p>{achievement.description}</p> */
      }
      <div className="second"></div> </div> // </div>
      ))
  }
  </Carousel> </div> </div>)
}

export default Achievements