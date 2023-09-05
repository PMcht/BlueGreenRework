import React from 'react'
import './Actus.scss'
import { Link } from 'react-router-dom'

const Actus = () => {
  return (
    <div id="news">

        <div className='flex center justify-center flex-h' id="heroNews" >

        <h1>Actualités</h1>
        <h3>Les actualités et bons plans BlueGreen</h3>

        <div id="cardNews">

            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/1.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>30 Août 2023</p>
                <h2 className='text-medium'>Les abonnements Grand Paris et Paris Sud s’agrandissent</h2>
                <p className='text-smaller gray'>Le golf UGolf Paris Val d’Europe (77) s’ajoute aux golfs compris dans les abonnements Paris Sud et Grand Paris […]</p>
            </div>
            </Link>

            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/2.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>29 Août 2023</p>
                <h2 className='text-medium'>La promo de la rentrée chez Bluegreen</h2>
                <p className='text-smaller gray'>C’est la rentrée dans les boutiques Bluegreen et UGolf ! Pour vous faire encore plus plaisir en cette période de […]</p>
            </div>
            </Link>

            
            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/3.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>22 Août 2023</p>
                <h2 className='text-medium'>Offre nouveaux abonnés</h2>
                <p className='text-smaller gray'>Abonnez-vous au plaisir infini du golf avec Bluegreen et UGolf ! Du 1er au 30 septembre 2023, nous vous proposons […]</p>
            </div>
            </Link>

            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/4.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>14 Août 2023</p>
                <h2 className='text-medium'>Découvrez les sélectionnés pour Miami</h2>
                <p className='text-smaller gray'>Ils étaient 11, mais seulement 3 pouvaient espérer aller à Miami ! ⛳ 🌴 Pour rappel, l’objectif de la sélection […]</p>
            </div>
            </Link>

            
            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/5.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>19 Juillet 2023</p>
                <h2 className='text-medium'>Parlons de la sécheresse des sols !</h2>
                <p className='text-smaller gray'>Cette année encore, nous faisons face à un contexte très préoccupant en raison de la sécheresse des sols. En effet, […]</p>
            </div>
            </Link>

            <Link className='card flex flex-h justify shadow'>
            <div className='illustration' style={{backgroundImage: "url('/BlueGreenRework/articles/6.jpg')"}} />
            <div className='cardText'>
                <p className='text-smaller gray'>28 Juin 2023</p>
                <h2 className='text-medium'>C’est les soldes d’été chez Bluegreen et UGolf ! [Offre terminée]</h2>
                <p className='text-smaller gray'>Du mercredi 28 juin au mardi 1er août, ce sont les soldes chez Bluegreen et UGolf ! Bénéficiez d’offres allant […]</p>
            </div>
            </Link>

        </div>

        <Link>
            <div className='button text-smaller'>
            Charger plus d'actus
            </div>
        </Link>

        </div>
    </div>
  )
}

export default Actus