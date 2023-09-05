import React from 'react'
import './Pricing.scss'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section id ="prices" className='flex center flex-h'>

    <h2 className='text-large'>Le Golf pour tous</h2>
    <p className='text-small gray'>Des tarifs accessibles sur l'ensemble de nos golfs</p>

    <div className='' id="cardPrices">

      <Link to="/Nos-Offres" className='card flex flex-h justify shadow'>
        <div className='illustration' style={{backgroundImage: "url('/pages/pricing/2.jpg')"}} />
        <div className='cardText'>
          <p className='text-small gray'>Invité</p>
          <h2 className='text-medium'>GreenFee</h2>
          <p className='text-smaller gray'>à partir de </p>
        </div>

      </Link>

      <Link to="/Nos-Offres" className='card flex flex-h justify shadow'>
        <div className='cardText'>
            <p className='text-small gray'>+26 ans</p>
            <h2 className='text-medium'>Adultes</h2>
            <p className='text-smaller gray'>à partir de </p>
          </div>
          <div className='illustration' style={{backgroundImage: "url('/pages/pricing/1.jpg')"}}/>
      </Link>

      <Link to="/Nos-Offres" className='card flex flex-h justify shadow'>
          <div className='cardText'>
            <p className='text-small gray'>-26 ans</p>
            <h2 className='text-medium'>Jeunes</h2>
            <p className='text-smaller gray'>à partir de </p>
          </div>
          <div className='illustration' style={{backgroundImage: "url('/pages/pricing/3.jpg')"}} />
      </Link>

      <Link to="/Nos-Offres" className='card flex flex-h justify shadow'>
          <div className='cardText'>
            <p className='text-small gray'>-18 ans</p>
            <h2 className='text-medium'>Juniors</h2>
            <p className='text-smaller gray'>à partir de </p>
          </div>
          <div className='illustration' style={{backgroundImage: "url('/pages/pricing/4.jpeg')"}} />
      </Link>

    </div>

    <Link to="/Nos-Offres">
        <div className='button text-smaller shadow'>
          Toutes nos offres
        </div>
    </Link>


</section>
  )
}

export default Pricing