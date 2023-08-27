import React from 'react'
import './Home.scss'
import RegionList from '../../components/RegionList/RegionList'
import HowTo from '../../components/HowTo/HowTo'
import RecentArticles from '../../components/RecentArticles/RecentArticles'
import Separator from '../../components/Separator/Separator'
import DownloadSection from '../../components/DownloadSection/DownloadSection'
import Numbers from '../../components/Numbers/Numbers'
import FadeIn from '../../Hooks/FadeIn'

const Home = () => {

  FadeIn('.scrollTriggered')

  return (
      <>

        <div className='fullWidth flex flex-h flex-align flex-h-spacing margin' id="HeroIMG">

          <div className='SeventyWidth'>
            <img src="/navbar/Logo.svg" className='onlyMobile' />
            <h1>Bienvenue chez Bluegreen</h1>
            <h1>N°1 du golf en France</h1>
            <p>Toutes les infos à portée de click</p>
            
          </div>

        </div>  

        <RegionList />

        <Separator />

        <RecentArticles />

        <HowTo />

        <Numbers />

        <Separator />

        <DownloadSection />

      </>
  )
}

export default Home