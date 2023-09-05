import React, { useState } from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBurger, faChildReaching, faClose, faGolfBall, faHome, faNewspaper, faShop, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../utils/SVG/Logo'



const Navbar = () => {


  const [showNavbar, setShowNavbar] = useState(false);



  return (
    <nav className="navbar">
      <div className='navMenu white-Color flex center'>
            <div className="nav-test">
              <ul>
                <li>
                  <Link to="/BlueGreenRework" className='flex center justify-center' onClick={() => setShowNavbar(false)}><img src="/navbar/LogoSide.svg" className='mainLogo' /></Link>
                </li>
                <li className='flex center'>
                  <FontAwesomeIcon onClick={() => setShowNavbar(!showNavbar)} icon={faBars} />
                </li>
              </ul>
            </div>
            <div className={`nav-elements  ${showNavbar}`}>
              <ul>
                <li>
                  <Link to="/BlueGreenRework" className='flex center justify-center' onClick={() => setShowNavbar(false)}><img src="/navbar/LogoSide.svg" className='mainLogo' /></Link>
                </li>
                <li className='flex center justify-center'>
                  <Link to="/Nos-Golfs" className='links flex center' onClick={() => setShowNavbar(false)}><FontAwesomeIcon icon={faGolfBall} /><p>Nos Golfs</p></Link>
                </li>
                <li className='flex center justify-center'>
                  <Link to="/Nos-Offres" className='links flex center' onClick={() => setShowNavbar(false)}><FontAwesomeIcon icon={faTags} /><p>Nos Offres</p></Link>
                </li>
                <li className='flex center justify-center'>
                  <Link to="/Actualites" className='links flex center' onClick={() => setShowNavbar(false)}><FontAwesomeIcon icon={faNewspaper} /><p>Actualité</p></Link>
                </li>
                <li className='flex center justify-center'>
                  <Link to="/Proshop" className='links flex center' onClick={() => setShowNavbar(false)}><FontAwesomeIcon icon={faShop} /><p>Proshop</p></Link>
                </li>
              </ul>
            </div>
            <Link className='espaceClient flex center justify-center '>
                <FontAwesomeIcon icon={faUser} />
            </Link>
      </div>


    </nav>
  )
}

export default Navbar