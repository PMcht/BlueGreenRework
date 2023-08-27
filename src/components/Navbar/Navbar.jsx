import React from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar" className='flex justify widthControl margin center'>

        <Link to=''>
            <img src="navbar\Logo.svg" alt="Bluegreen Logo" />
        </Link>
        

        <ul className='flex'>
            <li><Link to="/Nos-Golfs">Nos Golfs</Link></li>
            <li><Link to="/Nos-Offres">Nos Offres</Link></li>
            <li><Link to="/Enseignements">Enseignements</Link></li>
            <li><Link to="/Actualites">Actualités</Link></li>
        </ul>
        
        <Link to="/Mon-Espace">Espace Client</Link>

    </nav>
  )
}

export default Navbar