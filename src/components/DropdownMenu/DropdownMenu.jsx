import React from 'react';
import { Link } from 'react-scroll';

const DropdownMenu = ({ toggleMenu }) => {
    return (
      <div className="dropdown-menu" onClick={toggleMenu}>
        <Link
          activeClass="active"
          to="Inbound" // Update this to match the id value of the element you want to scroll to
          spy={true}
          smooth={true}
          offset={-60}
          duration={400}
          className="dropdown-item"
        >
          Inbound
        </Link>
        <Link
          activeClass="active"
          to="Outbound" // Update this to match the id value of the element you want to scroll to
          spy={true}
          smooth={true}
          offset={-60}
          duration={400}
          className="dropdown-item"
        >
          Outbound
        </Link>
      </div>
    );
  };
  
  export default DropdownMenu;