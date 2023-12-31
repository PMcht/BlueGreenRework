import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer  className="footer-basic">
        <ul className='flex justify-center center' id="socials"> 
            <li><Link to='https://www.facebook.com/golfsbluegreen' target="_blank"><FontAwesomeIcon icon={faFacebook} className='Facebook' /></Link> </li>
            <li><Link to='https://www.instagram.com/golfsbluegreen/' target="_blank"><FontAwesomeIcon icon={faInstagram} className='Instagram' /></Link> </li> 
            <li><Link to='https://twitter.com/GolfsBlueGreen' target="_blank"><FontAwesomeIcon icon={faTwitter} className='Twitter' /></Link> </li> 
            <li><Link to='https://www.youtube.com/channel/UCdeO_Rr2xb5J0sXVXhIEMNw' target="_blank"><FontAwesomeIcon icon={faYoutube} className='Youtube' /></Link> </li> 
        </ul>
        <ul className="flex center justify-center">
            <li className="list-inline-item"><Link href="#">Home</Link></li>
            <li className="list-inline-item"><Link href="#">Espace Client</Link></li>
            <li className="list-inline-item"><Link href="#">A Propos</Link></li>
            <li className="list-inline-item"><Link href="#">Termes</Link></li>
            <li className="list-inline-item"><Link href="#">Données</Link></li>
        </ul>
        <p className="copyright">BlueGreen © 2023</p>
    </footer>
  )
}

export default Footer