import React, { useRef } from 'react'
import './contact.css'
//import logo from '../../assets/logoInv.png'; 
//import logoInv from '../../assets/logoInv.png'; 
//import emailjs from '@emailjs/browser';
//import facebookIcon from '../../assets/team/facebook.png';
//import instagramIcon from '../../assets/team/instagram.png';
//import linkedinIcon from '../../assets/team/linkedin.png';


const Contact = () => {
  console.log(document.body.classList);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

// This is the basic template for emailJs 
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  // Set the environment variables prefixed with VITE_ to use in the website

    // emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
    //   .then((result) => {
    //       e.target.reset();
    //       alert("Message Sent Successfully")
    //   }, (error) => {
    //     console.log(error);
    //       alert("Error while sending message!!!! Try Resending")
    //   });
  }

  return (
    <div className='contact' id='contact'>
      <div className="contactTop"> 
        <div className="contactLeft">
          {/* <div className="stayInLoop">
            Stay in the loop
          </div> */}
          <div className="anyQueries">
            Do you have any queries for Us ?
          </div>
        </div>
        <div className="contactRight">
          <form ref={form} onSubmit={sendEmail} className='queryForm'>
            <input type="text" name="message" id="" placeholder='Your Query'/>
            <input type="email" name="from_email" id="" placeholder='Your Email' />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

<div className="contactBottom">
 
  <div className="contactBottomLeft">
    <div className="bottomHeading">
    {/* <img src={logo} alt="Logo" /> */}
      <span>Housetechnologies.in</span>
      </div>
      <div className='contact-us'>Contact Us</div>
      <div className='phone-no'>Phone: 8595340682</div>
      <div className="socialHandles">
        <div className="icon">
          {/* Linkedin icon */}
          <a href="https://www.linkedin.com/company/house-technologies/" target="_a">
            {/* <img src={linkedinIcon} alt="LinkedIn" height="45rem" /> */}
          </a>
        </div>
        <div className="icon">
          {/* Instagram icon */}
          <a href="https://www.instagram.com/housetechnologiesindia/" target="_a">
            {/* <img src={instagramIcon} alt="Instagram" height="60rem" /> */}
          </a>
        </div>
        <div className="icon">
          {/* Facebook icon */}
          <a href="https://www.facebook.com/housetechnologiesIndia/" target="_a">
            {/* <img src={facebookIcon} alt="Facebook" height="60rem" /> */}
          </a>
        </div>
      </div>
      </div>
  <div className="contactBottomMiddle">
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6995.957600888368!2d77.11047831373133!3d28.750049901995723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1698581400889!5m2!1sen!2sin" frameborder="0" allowFullScreen> </iframe> */}
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1749.0012636719644!2d77.1150908!3d28.7493415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01067c5dae05%3A0xf184f68786576801!2sA3%20Block%2C%20Dept.%20of%20Information%20Technology%20%26%20Applied%20Mathematics!5e0!3m2!1sen!2sin!4v1699884211393!5m2!1sen!2sin" allowfullscreen></iframe>
  </div>
  {/* <div className="contactBottomRight">
    Visit Our Office
 
  </div> */}
</div>
    </div>
  )
}

export default Contact