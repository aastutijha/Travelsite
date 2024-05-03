// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import{NavLink} from "react-router-dom";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import './navbar.css';
//import HamburgerIcon from '../../assets/HamburgerIcon.svg';
import company from '../../assets/logo.png';
//import companyInv from '../../assets/logoInv.png';

  const Navbar = () => {
    const [theme] = useState('light-mode');
    const [showMenu, setShowMenu] = useState(false); // Set initial state to false
    const menuRef = useRef();


  useEffect(() => { 
    // Close the menu by default when the component mounts
    setShowMenu(true);
    document.body.classList.remove('showMenu'); // Remove 'showMenu' class
  }, []);

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  
  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    // document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('showMenu', showMenu);
  }

  return (
   
    <div className='navbar'>
           <div className="left">
          { <div className="company">
            <img src={theme === 'light-mode' ? company : companyInv} alt="Logo" className='logoImage' />
          </div> }
          <div className="name">
            Travel holidays
          </div>
        </div>
{/* this is main desktop view navbar */}
<div className="middle">
        <div className={`navItems ${showMenu ? 'show' : ''}`}>
          <Link activeClass='active' to='Main' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Home</Link>
          <Link activeClass='active' to='Submain' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Places</Link>
          <Link activeClass='active' to='AboutUs' spy={true} smooth={true} offset={-60} duration={400} className="navItem">About</Link>
          <Link activeClass='active' to='Clientsection' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Clients</Link>
          <Link activeClass='active' to='OurFacilities' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Facilities</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Contact</Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        <FaBars />
        <div className={` ${showMenu?'showMobMenu':'myMobMenu'} `}>
          <Link onClick={toggleMenu} activeClass='active' to='Main' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Home</Link>
          <Link onClick={toggleMenu} activeClass='active' to='Submain' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Places</Link>
          <Link onClick={toggleMenu} activeClass='active' to='AboutUs' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">About</Link>
          <Link onClick={toggleMenu} activeClass='active' to='Clientsection' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Clients</Link>
          <Link onClick={toggleMenu} activeClass='active' to='OurFacilities' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Facilities</Link>
          <Link onClick={toggleMenu} activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;