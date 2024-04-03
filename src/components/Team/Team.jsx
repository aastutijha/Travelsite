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
      <h1>Our Team</h1>
     </div>
     <div className="teamMembers">

     <div className="member">
        {/* <img src={img2} alt="" /> Use the imported image */}
        <div className="name">
          Shivam Gupta
        </div>
        <div className="designation">
          CEO
        </div>
        <hr />
        <div className="socialHandles">
  <a href="https://www.linkedin.com/in/shivam-gupta-990317197/" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>

      </div>

      <div className="member">
        {/* <img src={img1} alt="" /> Use the imported image */}
        <div className="name">
        Abhinav Raj Singh
        </div>
        <div className="designation">
        COO
        </div>
        <hr />
        <div className="socialHandles">
  <a href="https://linkedin.com/in/abhinav-raj-singh-378b57179" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>


      </div>
      <div className="member">
        {/* <img src={img3} alt="" /> Use the imported image */}
        <div className="name">
        AnshuGupta
        </div>
        <div className="designation">
          CFO
        </div>
        <hr />
        <div className="socialHandles">
        <a href="https://www.linkedin.com/in/aastutijha/" target="_blank" rel="noreferrer">
    {/* <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" /> Add class here */}
  </a>
</div>
</div>
<div className="member">
  {/* <img src={img4} alt="" /> Use the imported image */}
  <div className="name">
    Aditya Jain
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