import React, { useRef,  useState, useEffect } from 'react';
import './contact.css';
import locationIcon from '../../assets/location.png';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/gmail.png';
import backgroundImage from "../../assets/contact.jpg"; 

const Contact = () => {
  const form = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when component mounts
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement email sending logic here
  };

  return (
    <div className={`contact ${animate ? 'animate' : ''}`}  style={{ backgroundImage: `url(${backgroundImage})` }}  id="contact">
      <div className="contactTop">
      <div className="Company name">"Travel holidays"</div>
        <div className="contactLeft">
          <div className="anyQueries">FAQ section</div>
        </div>
        <div className="contactRight">
          <div className="officeBg">
            <div className="officeDetails">
              <div className="office">
                <span className="detailIcon">
                  <img src={locationIcon} alt="Location Icon" />
                </span>
                <span>Baneshwor,kathmandu</span>
              </div>
              <div className="contactNumber">
                <span className="detailIcon">
                  <img src={phoneIcon} alt="Phone Icon" />
                </span>
                <span>9851243326</span>
              </div>
              <div className="emailAddress">
                <span className="detailIcon">
                  <img src={emailIcon} alt="Email Icon" />
                </span>
                <span>TravelHolidays@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBottom">
        <div className="formContainer">
          <form ref={form} onSubmit={sendEmail} className="queryForm">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;