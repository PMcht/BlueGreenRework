import React from 'react'
import './HowToStyle.scss'

const HowTo = () => {
  return (
    <div id="howTo" className='fullWidth flex center justify margin'>

      <div className='halfLeft flex center justify-center'>
          <div className='aboutContent'>
            <h2>Nous rejoindre, c'est :</h2>
            <ul>
              <li className='flex center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-flag smallIcons"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                <p>La priorité sur plus de 40 golfs en France</p>
              </li>
              <li className='flex center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle smallIcons"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>L'assurance d'infrastructures de qualités</p>
              </li>
              <li className='flex center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award smallIcons"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <p>La disponibilité de professionnels du milieu</p>
              </li>
              <li className='flex center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone smallIcons"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                <p>L'accès à notre application dédiée</p>
              </li>
              <li className='flex center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-percent smallIcons"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
                <p>Des offres promos fréquentes pour nos membres</p>
              </li>
            </ul>
          </div>
      </div>

      <div className='halfRight' />

    </div>
  )
}

export default HowTo