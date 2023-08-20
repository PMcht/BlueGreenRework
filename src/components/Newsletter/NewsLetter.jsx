import React from 'react'
import './NewsLetterStyle.scss'
import GolfNewsLetter from '../../utils/svg/GolfNewsLetter'

const NewsLetter = () => {
  return (
    <div className='margin widthControl newsLetter flex center justify'>

        <GolfNewsLetter />

        <div className=''>
          <p>Suivez nous pour des offres spéciales et évènements!</p>
          <input type="text" placeholder="S'inscrire à la neweletter!" />
        </div>

        <div className='Social'>
          <p>Nos réseaux sociaux</p>
        </div>
        

    </div>
  )
}

export default NewsLetter