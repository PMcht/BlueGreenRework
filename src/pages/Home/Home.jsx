import React from 'react'
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../utils/SearchBar/SearchBar'
import RegionList from '../../components/RegionList/RegionList'
import HowTo from '../../components/HowTo/HowTo'
import RecentArticles from '../../components/RecentArticles/RecentArticles'
import Separator from '../../components/Separator/Separator'
import DownloadSection from '../../components/DownloadSection/DownloadSection'
import Numbers from '../../components/Numbers/Numbers'

const Home = () => {
  return (
      <>
        <Navbar />

        <div className='fullWidth flex flex-h flex-align flex-h-spacing margin' id="HeroIMG">

          <div className='SeventyWidth'>
            <h1>Bienvenue chez Bluegreen</h1>
            <h1>N°1 du golf en France</h1>
            <p>Toutes les infos à portée de click</p>
            
          </div>

        </div>  

        <RegionList />

        <Separator />

        <RecentArticles />

        <HowTo />

        <Separator />

        <Numbers />

        <Separator />

        <DownloadSection />

      </>
  )
}

export default Home