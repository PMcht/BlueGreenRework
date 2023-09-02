import React, { useState } from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChildReaching, faGolfBall, faNewspaper, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../utils/SVG/Logo'


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);


const Navbar = () => {


  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link><Logo /></Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/" className='links'><FontAwesomeIcon icon={faGolfBall} />Nos Golfs</Link>
            </li>
            <li>
              <Link to="/blogs" className='links'><FontAwesomeIcon icon={faTags} />Nos Offres</Link>
            </li>
            <li>
              <Link to="/projects" className='links'><FontAwesomeIcon icon={faChildReaching} />Enseignements</Link>
            </li>
            <li>
              <Link to="/about" className='links'><FontAwesomeIcon icon={faNewspaper} />Actualité</Link>
            </li>
            <li>
              <Link to="/contact" className='links'><FontAwesomeIcon icon={faUser} />Espace Client</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar