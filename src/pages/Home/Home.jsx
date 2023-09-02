import React, { useEffect } from 'react'
import './Home.scss'
import FadeIn from '../../Hooks/FadeIn'
import { Link } from 'react-router-dom'
import Pricing from '../../components/Home/Pricing/Pricing'
import Benefits from '../../components/Home/Benefits/Benefits'
import News from '../../components/Home/News/News'
import Feed from '../../components/Home/Feed/Feed'

const Home = () => {

  FadeIn('.scrollTriggered');

  return (
      <>
        <section id="Hero" className='white-Color flex center fullWidth'>

          <div className='halfWidth'>

              <p className='thin text-small'>Golfs Bluegreen</p>
              <h1 className='bold'>N°1 du Golf en France.</h1>
              <p className='text-smaller'>46 Golfs à découvrir dans toute la France, adaptés à tout niveaux, entourés des meilleurs professionnels et d'infrastructures high-tech.</p>
              <Link>
                <div className='button text-smaller'>
                  Découvrez BlueGreen
                </div>
              </Link>

          </div>

          <div className='flex center' id="cardsHero">

            <div className='cards flex center shadow'>
              <img src='./pages/home/1.png' />
              <div className='full'>
                <p className='gray'>Tous nos golfs</p>
                <p className='bold dark text-smaller'>Réserver un départ</p>
                <p className='dark'>--</p>
              </div>

            </div>

            <div className='cards flex center shadow'>
              <img src='./pages/home/2.jpg' />
              <div className='full'>
                <p className='gray'>Sceaux en ligne</p>
                <p className='bold dark text-smaller'>Recharge de practice</p>
                <p className='dark'>--</p>
              </div>
            </div>

            <div className='cards flex center shadow'>
              <img src='./pages/home/3.png' />
              <div className='full'>
                <p className='gray'>Tout niveaux</p>
                <p className='bold dark text-smaller'>Prendre un cours</p>
                <p className='dark'>--</p>
              </div>
            </div>

          </div>

        </section>

        <Pricing />
      
        <Benefits />

        <News />

        <div className='bandeau flex center justify-center'>
            <div className='left flex center justify-center'> 
              <img src="navbar\logo-bw.svg" alt="Bluegreen Logo" />
            </div>
            <div className='right' />
        </div>

        <Feed />

      </>
  )
}

export default Home