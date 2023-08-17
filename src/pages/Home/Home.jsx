import React from 'react'
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../utils/SearchBar/SearchBar'

const Home = () => {
  return (
      <>
        <Navbar />

        <div className='fullWidth flex flex-h flex-align flex-h-spacing' id="HeroIMG">

          <div className='SeventyWidth'>
            <h1>Bienvenue chez Bluegreen</h1>
            <h1>N°1 du golf en France</h1>
            <p>Toutes les infos à portée de click</p>
            
          </div>

            <SearchBar />

        </div>  

        <div className='fullWidth flex center justify'>
          <h2>46 Golfs partout en France</h2>
          <img src="home/map.webp" alt="Carte des Golfs France" id="map" />
        </div>

      </>
  )
}

export default Home