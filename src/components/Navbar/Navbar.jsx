import React from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'
import Account from '../../utils/svg/Account'

const Navbar = () => {
  return (
    <nav id="navbar" className='flex justify margin center white-Color'>

        <Link to='/BlueGreenRework'>
            <img src="navbar\logo-bw.svg" alt="Bluegreen Logo" />
        </Link>
        

        <ul className='flex'>
            <li><Link to="/Nos-Golfs">Nos Golfs</Link></li>
            <li><Link to="/Nos-Offres">Nos Offres</Link></li>
            <li><Link to="/Enseignements">Enseignements</Link></li>
            <li><Link to="/Actualites">Actualités</Link></li>
            <li>        
              <Link to="/Mon-Espace" className='flex center justif-center' id="AccountIcons">
                <Account />
                Espace Client
              </Link>
            </li>
        </ul>
        


    </nav>
  )
}

export default Navbar