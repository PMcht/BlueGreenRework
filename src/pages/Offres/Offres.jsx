import React, { useEffect, useState } from 'react'
import './Offres.scss'
import { Link } from 'react-router-dom'
import { AgeAttributes } from '../../utils/Lists/Prices';

const Offres = () => {

  const [Age, setAge] = useState("adulte");
  const ageForJson = [Age];

  useEffect(() => {
    const switchInputs = document.querySelectorAll(".switch-wrapper input");
    const prices = document.querySelectorAll(".price");
    const toggleClass = "hide";

    for (const switchInput of switchInputs) {
      switchInput.addEventListener("input", function () {
        for (const price of prices) {
          price.classList.add(toggleClass);
        }
        const activePrices = document.querySelectorAll(
          `.price.${switchInput.id}`
        );
        for (const activePrice of activePrices) {
          activePrice.classList.remove(toggleClass);
        }
      });
    }
  })


  return (
    <div id="offres">

      <div className='flex center justify-center flex-h' id="heroPrice" >

        <h1>Nos Offres et Abonnements</h1>
        <h3>Des prix adaptés pour tous</h3>
  
        <div className="inputs">
          <label className="card">
            <input name="plan" className="radio" type="radio" onChange={() => {setAge("junior")}} />
            <span className="plan-details">
              <span className="plan-type">Junior</span>
              <span className="plan-cost">-18 ans</span>
            </span>
          </label>
          <label className="card">
            <input name="plan" className="radio" type="radio" onChange={() => {setAge("jeune")}} />
            <span className="plan-details" aria-hidden="true">
              <span className="plan-type">Jeune</span>
              <span className="plan-cost">-26 ans</span>
            </span>
          </label>
          <label className="card">
            <input name="plan" className="radio" type="radio" defaultChecked onChange={() => {setAge("adulte")}} />
            <span className="plan-details" aria-hidden="true">
              <span className="plan-type">Adulte</span>
              <span className="plan-cost">-40 ans</span>
            </span>
          </label>
          <label className="card">
            <input name="plan" className="radio" type="radio" onChange={() => {setAge("adulte5")}} />
            <span className="plan-details">
              <span className="plan-type">Adulte</span>
              <span className="plan-cost">5j/7</span>
            </span>
          </label>
          <label className="card">
            <input name="plan" className="radio" type="radio" onChange={() => {setAge("adulte7")}} />
            <span className="plan-details">
              <span className="plan-type">Adulte</span>
              <span className="plan-cost">7j/7</span>
            </span>
          </label>
        </div>

        <Link>
          <div className='button text-smaller'>
            Réserver un parcours
          </div>
        </Link>

      </div>
    


      <div className='priceSection'>
        <div className='switch'>
          <div className="switch-wrapper">
            <input id="monthly" type="radio" name="switch" defaultChecked />
            <input id="yearly" type="radio" name="switch" />
            <label htmlFor="monthly">Mensuel</label>
            <label htmlFor="yearly">Annuel</label>
            <span className="highlighter"></span>
          </div>
        </div>

        <h2 className='text-large'>Abonnements</h2>
        <p className='thin'>Des abonnements variés pour correspondre à chacun</p>
      
        <div className='gridPrice'>

          <div className='card'>
            <p className='text-medium bold'>Monde</p>
            <p>L'abonnement sur la totalité de nos golfs</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.monde[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.monde[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>National</p>
            <p>Abonnement en France métropolitaine</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.national[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.national[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Ouest</p>
            <p>Abonnement sur les golfs du Grand Ouest</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.Ouest[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.Ouest[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Grand Est</p>
            <p>Abonnement sur les golfs du Grand Est</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.GrandEst[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.GrandEst[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Sud Est</p>
            <p>Abonnement sur les golfs du Sud Est</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.SudEst[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.SudEst[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Sud Ouest</p>
            <p>Abonnement sur les golfs du Sud Ouest</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.SudOuest[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.SudOuest[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Azur</p>
            <p>Abonnement sur les golfs de la Côte d'Azur</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.Azur[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.Azur[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Grand Paris</p>
            <p>Abonnement sur les golfs de Paris</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>{AgeAttributes[0].mensual.Paris[ageForJson]}€</p>
              <p className='period thin'>par mois</p>
            </div>
            <div className='price hide yearly'>
              <div className='flex center'>
                <p className='prices text-medium bold'>{AgeAttributes[0].annual.Paris[ageForJson]}€</p>
                <p className='period thin'>par ans</p>
              </div>
              
            </div>
          </div>


        </div>

      </div>


      <div className='priceSection'>
        <h2 className='text-large'>Green Fees & Forfaits</h2>
        <p className='thin'>Les tarifs de nos green fees sont variables avec les golfs</p>

        <div className='gridPrice'>

            <div className='card'>
              <p className='text-medium bold'>GreenFees</p>
              <p>Prix moyen par Green Fee (18t)</p>
              <div className='flex center price'>
                <p className='prices text-medium bold'>22-75€</p>
                <p className='period thin'>par mois</p>
              </div>
            </div>

            <div className='card'>
              <p className='text-medium bold'>Forfait Littoral</p>
              <p>5 Green Fees sur 15 golfs</p>
              <div className='flex center price'>
                <p className='prices text-medium bold'>229€</p>
                <p className='period thin'>sur une semaine</p>
              </div>
            </div>

            <div className='card'>
              <p className='text-medium bold'>Forfait Azur</p>
              <p>2 Green Fees utilisables sur 2 golfs</p>
              <div className='flex center price'>
                <p className='prices text-medium bold'>100€</p>
                <p className='period thin'>sur une semaine</p>
              </div>
            </div>

        </div>

      </div>


      <div className='priceSection'>
        <h2 className='text-large'>Abonnement Monogolf</h2>
        <p className='thin'>Des abonnements sur site unique sont disponibles, contactez votre golf pour en savoir plus</p>

      </div>



      <div className='priceSection'>
        <h2 className='text-large'>Offres</h2>
        <p className='thin'>De nouvelles offres toute l'année</p>

        <div className='gridPrice'>

          <div className='card'>
            <p className='text-medium bold'>Ecole de Golf</p>
            <p>Pour le premier swing (enfant)</p>
            <div className='flex center price monthly'>
              <p className='prices text-medium bold'>180€</p>
              <p className='period thin'>par ans</p>
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Initiations</p>
            <p>Découvrez le golf durant l'été</p>
            <div className='flex center price'>
              <p className='prices text-medium bold'>Gratuit</p>
              <p className='period thin'>par mois</p>
            </div>
          </div>

          <div className='card'>
            <p className='text-medium bold'>Nouveaux</p>
            <p>Réductions sur le premier abonnement</p>
            <div className='flex center price'>
              <p className='prices text-medium bold'>-20%</p>
              <p className='period thin'>sur abonnement</p>
            </div>
          </div>

          </div>

      </div>

    </div>
  )
}

export default Offres