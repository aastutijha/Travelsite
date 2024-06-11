import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import "./navbar.css";
import company from "../../assets/logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import the Link component from React Router and useNavigate hook
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ setIsAuthenticated }) => {
  const [theme] = useState("light-mode");
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false); // State for dropdown
  const menuRef = useRef();
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    setShowMenu(true);
    document.body.classList.remove("showMenu");
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

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("showMenu", showMenu);
  };

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var scrollTop = window.scrollY;

    if (scrollTop === 0) {
      navbar.classList.add("transparent-box");
    } else {
      navbar.classList.remove("transparent-box");
    }
  });

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login"); // Programmatically navigate to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="main" spy={true} smooth={true} duration={500}>
          <img src={company} alt="Logo" className="logoImage" />
        </Link>

        <div className="name">Travel Holidays</div>
      </div>

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
          <div
            className="navItem"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link
              activeClass="active"
              to="sub-main"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
              className="navLink"
            >
              Places <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && (
              <div className="dropdownMenu">
                <Link
                  activeClass="active"
                  to="inbound-tours"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={400}
                  className="dropdownItem"
                >
                  Inbound
                </Link>
                <Link
                  activeClass="active"
                  to="outbound-places"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={400}
                  className="dropdownItem"
                >
                  Outbound
                </Link>
              </div>
            )}
          </div>
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
          <RouterLink to="#" onClick={handleLogout} className="navItem">
            Logout
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
