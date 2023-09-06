import React, { useEffect } from 'react'
import './Home.scss'
import FadeIn from '../../Hooks/FadeIn'
import { Link } from 'react-router-dom'
import Benefits from '../../components/Home/Benefits/Benefits'
import News from '../../components/Home/News/News'
import Feed from '../../components/Home/Feed/Feed'
import About from '../../components/Home/About/About'

const Home = () => {

  FadeIn('.scrollTriggered');

  return (
      <>
        <section id="Hero" className='white-Color flex center'>

          <div className='halfWidth'>

              <p className='thin text-small'>N°1 du Golf en France.</p>
              <h1 className='bold text-large'>Golfs Bluegreen</h1>
              <p className='text-smaller'>46 Golfs à découvrir dans toute la France, adaptés à tout niveaux, entourés des meilleurs professionnels et d'infrastructures high-tech.</p>
              <a href="#About">
                <div className='button text-smaller'>
                  Découvrez BlueGreen
                </div>
              </a>

          </div>

          <div className='flex center notOnMobile' id="cardsHero">

            <div className='cards flex center shadow'>
              <img src='./pages/home/1.webp' />
              <div className='full'>
                <p className='gray'>Tous nos golfs</p>
                <p className='bold dark text-smaller'>Réserver un départ</p>
                <p className='dark'>--</p>
              </div>

            </div>

            <div className='cards flex center shadow'>
              <img src='./pages/home/2.webp' />
              <div className='full'>
                <p className='gray'>Sceaux en ligne</p>
                <p className='bold dark text-smaller'>Recharge de practice</p>
                <p className='dark'>--</p>
              </div>
            </div>

            <div className='cards flex center shadow'>
              <img src='./pages/home/3.webp' />
              <div className='full'>
                <p className='gray'>Tout niveaux</p>
                <p className='bold dark text-smaller'>Prendre un cours</p>
                <p className='dark'>--</p>
              </div>
            </div>

          </div>

        </section>

        <About />
      
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