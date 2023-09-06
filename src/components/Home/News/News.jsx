import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <section id ="news" className='flex center flex-h'>
        <h2 className='text-large'>Dernières actus</h2>
        <p className='text-small gray'>Les dernières infos du groupe BlueGreen</p>

        <div id="cardNews">

            <Link className='card flex flex-h justify shadow'>
              <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/1.webp')"}} />
              <div className='cardText'>
                <p className='text-smaller gray'>30 Août 2023</p>
                <h2 className='text-medium'>Les abonnements Grand Paris et Paris Sud s’agrandissent</h2>
                <p className='text-smaller gray'>Le golf UGolf Paris Val d’Europe (77) s’ajoute aux golfs compris dans les abonnements Paris Sud et Grand Paris […]</p>
              </div>
            </Link>

            <Link className='card flex flex-h justify shadow'>
              <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/2.webp')"}} />
              <div className='cardText'>
                <p className='text-smaller gray'>29 Août 2023</p>
                <h2 className='text-medium'>La promo de la rentrée chez Bluegreen</h2>
                <p className='text-smaller gray'>C’est la rentrée dans les boutiques Bluegreen et UGolf ! Pour vous faire encore plus plaisir en cette période de […]</p>
              </div>
            </Link>

        </div>

        <Link to="Actualites">
        <div className='button text-smaller'>
          Toutes les actus
        </div>
    </Link>

    </section>
  )
}

export default News