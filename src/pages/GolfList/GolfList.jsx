import React, { useState } from 'react'
import './GolfList.scss'
import { GolfAttributes } from '../../utils/Lists/Golfs';
import { Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee } from '@fortawesome/free-solid-svg-icons';

const GolfList = () => {


  const [searchName, setSearchName] = useState("");

  function onInputChange(e){
    setSearchName(e.value);
    }


  const GolfFiltered = GolfAttributes.filter(search => search.region.toLowerCase().includes(searchName.toLowerCase()) || search.name.toLowerCase().includes(searchName.toLowerCase()))

  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles = {
    entering: { opacity: 0, transform: "translateY(50px)" },
    entered:  { opacity: 1, transform: "translateY(0px)"},
  };


  const FadeTransition = ({ children, in: inProp }) => (
    <Transition
      in={inProp}
      timeout={duration}
      unmountOnExit={true}
      mountOnEnter={true}
      >
      {(state) => (
        <Link style={{
          ...defaultStyle,
          ...transitionStyles[state]
          }} className='golfCard'>
          {children}
        </Link>
      )}
    </Transition>
  );

  let isResults = GolfFiltered == 0

  return (
    <>
        
        <div id="GolfList" className='flex center justify flex-h margin'>

          <div className='topBanner flex flex-h center justify-center'>
            <h1>Nos 46 Golfs</h1>
            <h3>Trouvez un golf près de chez vous!</h3>
            <input id="search" type="search" placeholder="Rechercher..." autoFocus onChange={(e) => {onInputChange(e.target)}} />
          </div>


            {isResults ? (

              <p>Aucun résultat, essayez de rechercher par région</p>

            ) : (
                
                <TransitionGroup className='margin' id="golfContainer">
                {GolfFiltered.map((golf) => {
                return (

                    <FadeTransition key={golf.id} className='golfCard'>

                            <div className='golfImage' style={{backgroundImage:`url(${golf.img})`}} />

                            <div className='golfDescription'>
                                <p className='bold text-small'>Golf de {golf.name}</p>
                                <p>Baden, Bretagne</p>
                                <div className='icons flex center'>
                                    <div className='icon flex center justify-center'>
                                      <FontAwesomeIcon icon={faGolfBallTee} /><p>18</p>
                                    </div>
                                    <div className='icon flex center justify-center'>
                                      <FontAwesomeIcon icon={faGolfBallTee} /><p>9</p>
                                    </div>
                                </div>
                                <p className='thin'>Restaurant, Practice couvert, Proshop ...</p>
                            </div>

                    </FadeTransition>
                    )
                })}
                </TransitionGroup>
            )}


        </div>


    
    </>
  )
}

export default GolfList