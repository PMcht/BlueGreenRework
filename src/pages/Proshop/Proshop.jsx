import React from 'react'
import './Proshop.scss'

const Proshop = () => {
  return (
    <div id="proshop">

      <div className='flex center justify-center flex-h' id="heroNews" >

        <h1>Proshops Connectés</h1>
        <h3>Passez commande et recevez vous produits à votre proshop</h3>

        <input id="search" type="search" placeholder="Rechercher un produit, une marque ..." autoFocus />


      </div>


    </div>
  )
}

export default Proshop