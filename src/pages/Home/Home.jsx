import React from 'react'
import './Home.scss'
import FadeIn from '../../Hooks/FadeIn'
import { Link } from 'react-router-dom'

const Home = () => {

  FadeIn('.scrollTriggered')

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

        <section id ="prices" className='flex center flex-h'>

            <h2 className='text-large'>Le Golf pour tous</h2>
            <p className='text-small gray'>Des tarifs accessibles sur l'ensemble de nos golfs</p>

            <div className='' id="cardPrices">

              <div className='card flex flex-h justify'>
                <div className='illustration' style={{backgroundImage: "url('/public/pages/pricing/2.jpg')"}} />
                <div className='cardText'>
                  <p className='text-small gray'>Invité</p>
                  <h2 className='text-medium'>GreenFee</h2>
                  <Link>Découvrir les offres</Link>
                </div>

              </div>

              <div className='card flex flex-h justify'>
                <div className='cardText'>
                    <p className='text-small gray'>+26 ans</p>
                    <h2 className='text-medium'>Adultes</h2>
                    <Link>--</Link>
                  </div>
                  <div className='illustration' style={{backgroundImage: "url('/public/pages/pricing/1.jpg')"}}/>
              </div>

              <div className='card flex flex-h justify'>
                  <div className='cardText'>
                    <p className='text-small gray'>-26 ans</p>
                    <h2 className='text-medium'>Jeunes</h2>
                    <Link>--</Link>
                  </div>
                  <div className='illustration' style={{backgroundImage: "url('/public/pages/pricing/3.jpg')"}} />
              </div>

              <div className='card flex flex-h justify'>
                  <div className='cardText'>
                    <p className='text-small gray'>-18 ans</p>
                    <h2 className='text-medium'>Juniors</h2>
                    <Link>--</Link>
                  </div>
                  <div className='illustration' style={{backgroundImage: "url('/public/pages/pricing/4.jpeg')"}} />
              </div>

            </div>

            <Link>
                <div className='button text-smaller'>
                  Toutes nos offres
                </div>
            </Link>


        </section>
      </>
  )
}

export default Home