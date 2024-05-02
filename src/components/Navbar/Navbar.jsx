import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import company from '../../assets/logo.png';
// import companyInv from '../../assets/logoInv.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light-mode');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // const switchTheme = () => {
  //   setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  // }

  useEffect(() => {
    document.body.classList.remove('showMenu');
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

    document.addEventListener('click', closeMenu);

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
        <div className="company">
          <img src={theme=='light-mode'?company:companyInv} alt="Logo" className='logoImage' />
        </div>
        <div className="name">
          Travel holidays
        </div>
      </div>
      <div className="middle"> 
        <div className={`navItems ${showMenu ? 'show' : ''}`}>
          <Link activeClass='active' to='main' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Home</Link>
          <Link activeClass='active' to='sub-main' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Places</Link>
          {/* <Link activeClass='active' to='aboutus' spy={true} smooth={true} offset={-60} duration={400} className="navItem">About</Link> */}
          <Link activeClass='active' to='aboutus' spy={true} smooth={true} offset={-60} duration={400} className="navItem">About</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Clients</Link>
          <Link activeClass='active' to='facilities' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Facilities</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={400} className="navItem">Contact</Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        <FaBars />
        <div className={` ${showMenu?'showMobMenu':'myMobMenu'} `}>
          <Link onClick={toggleMenu} activeClass='active' to='main' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Home</Link>
          <Link onClick={toggleMenu} activeClass='active' to='sub-main' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Places</Link>
          
          <Link onClick={toggleMenu} activeClass='active' to='aboutus' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">About</Link>
          <Link onClick={toggleMenu} activeClass='active' to='clients' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Clients</Link>
          <Link onClick={toggleMenu} activeClass='active' to='facilities' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Facilities</Link>
          <Link onClick={toggleMenu} activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={400} className="mobItem">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;