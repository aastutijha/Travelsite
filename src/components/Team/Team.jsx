import React from 'react';
import './team.css';
// Import the images and icons here if needed

const Team = () => {
  return (
    <div className='team' id='team'>
      <div className="teamHeading">
        <h1>Professional Team</h1>
      </div>
      <div className="teamMembers">
        <div className="member">
          {/* Add image source here */}
          <div className="name">
            Nirmal Dongal
          </div>
          <div className="designation">
            CTO
          </div>
          <hr />
          <div className="socialHandles">
            <a href="https://www.linkedin.com/in/nirmaldongal/" target="_blank" rel="noreferrer">
              {/* Add social icon */}
            </a>
          </div>
        </div>

        <div className="member">
          {/* Add image source here */}
          <div className="name">
            Astuti Jha
          </div>
          <div className="designation">
            Web Designer
          </div>
          <hr />
          <div className="socialHandles">
            <a href="https://www.linkedin.com/in/AstutiJha/" target="_blank" rel="noreferrer">
              {/* Add social icon */}
            </a>
          </div>
        </div>

        <div className="member">
          {/* Add image source here */}
          <div className="name">
            Anusha Khadka
          </div>
          <div className="designation">
            Strategic Officer
          </div>
          <hr />
          <div className="socialHandles">
            <a href="https://www.linkedin.com/in/anushakhadka/" target="_blank" rel="noreferrer">
              {/* Add social icon */}
            </a>
          </div>
        </div>

        {/* Add the new member here */}
        <div className="member">
          {/* Add image source here */}
          <div className="name">
            Binita shrestha 
          </div>
          <div className="designation">
           Web Designation
          </div>
          <hr />
          <div className="socialHandles">
            <a href="https://www.linkedin.com/in/bintashrestha/" target="_blank" rel="noreferrer">
              {/* Add social icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;