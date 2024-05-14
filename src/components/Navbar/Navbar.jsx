// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import "./navbar.css";
import company from "../../assets/logo.png";import { Link as RouterLink } from 'react-router-dom'; // Import the Link component from React Router



const Navbar = () => {
  const [theme] = useState("light-mode");
  const [showMenu, setShowMenu] = useState(false); // Set initial state to false
  const menuRef = useRef();

  useEffect(() => {
    // Close the menu by default when the component mounts
    setShowMenu(true);
    document.body.classList.remove("showMenu"); // Remove 'showMenu' class
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("showMenu", showMenu);
  };
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.scrollY;

    // Change background color based on scroll position
    if (scrollTop === 0) {
        navbar.classList.add('transparent-box'); // Add transparent background class
    } else {
        navbar.classList.remove('transparent-box'); // Remove transparent background class
    }
});
  return (
    <div className="navbar">
      <div className="left">
        <Link to="main" spy={true} smooth={true} duration={500}>
          <img
            src={theme === "light-mode" ? company : companyInv}
            alt="Logo"
            className="logoImage"
          />
        </Link>

        <div className="name">Travel holidays</div>
      </div>

      {/* this is main desktop view navbar */}
      <div className="middle">
        <div className={`navItems ${showMenu ? "show" : ""}`}>
          <Link
            activeClass="active"
            to="desktop-1"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="sub-main"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            Places
          </Link>
          <Link
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            About
          </Link>
          
          <Link
            activeClass="active"
            to="ourfacilities"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            Facilities
          </Link>
          <Link
            activeClass="active"
            to="clients-section"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="navItem"
          >
            Contact
          </Link>
           {/* Link to the Login page */}
           <RouterLink to="/login" className="navItem">
            Login
          </RouterLink>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        <FaBars />
        <div className={` ${showMenu ? "showMobMenu" : "myMobMenu"} `}>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="desktop-1"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="sub-main"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            Places
          </Link>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="clients-section"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            Clients
          </Link>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="ourfacilities"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            Facilities
          </Link>
          <Link
            onClick={toggleMenu}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            className="mobItem"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
