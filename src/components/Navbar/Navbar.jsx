import React from 'react'
import './NavbarStyle.scss'

const Navbar = () => {
  return (
    <div id="navbar" className='flex justify widthControl margin center'>

    <img src="navbar\Logo.svg" alt="Bluegreen Logo" />

    <ul className='flex'>
        <li><a>Nos Golfs</a></li>
        <li><a>Nos Offres</a></li>
        <li><a>Enseignements</a></li>
        <li><a>Actualités</a></li>
    </ul>
    
    <a>Espace Client</a>

</div>
  )
}

export default Navbar