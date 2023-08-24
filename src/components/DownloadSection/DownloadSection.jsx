import React from 'react'
import './DownloadSectionStyle.scss'

const DownloadSection = () => {
  return (
    <div className='widthControl margin flex center justify-center' id="App">

      <div className='textApp'>
        <h2>Une app pour tout vos besoins</h2>
        <p>Scores, Proshops, Réservations de parcours et Entrainements</p>
        <p className='thin'>Version Pro inclue avec nos abonnements</p>
        <img src="/app/download.png" id="download" />
      </div>

        <img src="/app/appMock.jpg" id="appMock" />

    </div>
  )
}

export default DownloadSection