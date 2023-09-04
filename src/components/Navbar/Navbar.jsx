import React, { useState } from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChildReaching, faClose, faGolfBall, faHome, faNewspaper, faShop, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
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
      <div className='navMenu'>
            <div className="menu-icon openMenu" onClick={handleShowNavbar}>
                <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <Link to="/BlueGreenRework" className='links flex center' onClick={handleShowNavbar}><FontAwesomeIcon icon={faHome} /><p>Home</p></Link>
                </li>
                <li>
                  <Link to="/Nos-Golfs" className='links flex center' onClick={handleShowNavbar}><FontAwesomeIcon icon={faGolfBall} /><p>Nos Golfs</p></Link>
                </li>
                <li>
                  <Link to="/Nos-Offres" className='links flex center' onClick={handleShowNavbar}><FontAwesomeIcon icon={faTags} /><p>Nos Offres</p></Link>
                </li>
                <li>
                  <Link to="/about" className='links flex center' onClick={handleShowNavbar}><FontAwesomeIcon icon={faNewspaper} /><p>Actualité</p></Link>
                </li>
                <li>
                  <Link to="/contact" className='links flex center' onClick={handleShowNavbar}><FontAwesomeIcon icon={faShop} /><p>Proshop</p></Link>
                </li>
                <li className="menu-icon close" onClick={handleShowNavbar}>
                  <FontAwesomeIcon icon={faClose} />
                </li>
              </ul>
              <Link className='espaceClient flex center justify-center onMobile'>
                      <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
      </div>
      <Link className='espaceClient flex center justify-center notOnMobile'>
              <FontAwesomeIcon icon={faUser} />
      </Link>

    </nav>
  )
}

export default Navbar