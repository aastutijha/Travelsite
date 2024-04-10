import React from 'react'
import './team.css'
//import img1 from '../../assets/team/abhinav.jpg'
//import img2 from '../../assets/team/shivam.jpg'
//import img3 from '../../assets/team/anshu.jpg'
//import img4 from '../../assets/team/aditya.jpg'
// import gmailIcon from '../../assets/team/gmail.png' // Import the gmail icon
// import githubIcon from '../../assets/team/github.png' // Import the github icon
//import linkedinIcon from '../../assets/team/linkedin.png' // Import the linkedin icon

const Team = () => {
  return (
    <div className='team' id='team'>
     <div className="teamHeading">
      <h1>Professional Team</h1>
     </div>
     <div className="teamMembers">

     <div className="member">
        {/* <img src={img2} alt="" /> Use the imported image */}
        <div className="name">
        Nirmal dongal
        </div>
        <div className="designation">
          CTO
        </div>
        <hr />
        <div className="socialHandles">
  <a href="https://www.linkedin.com/in/shivam-gupta-990317197/" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>

      </div>

      
      <div className="member">
        {/* <img src={img3} alt="" /> Use the imported image */}
        <div className="name">
          Astuti Jha
        </div>
        <div className="designation">
          Web deginer
        </div>
        <hr />
        <div className="socialHandles">
        <a href="https://www.linkedin.com/in/AstutiJha/" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>
</div>
<div className="member">
  {/* <img src={img4} alt="" /> Use the imported image */}
  <div className="name">
    Anusha khadka
  </div>
  <div className="designation">
  Strategic Officer
  </div>
  <hr />
  <div className="socialHandles">
  <a href="https://www.linkedin.com/in/adityajain2023/" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>
  
</div>
</div>
</div>
  )
}

export default Team