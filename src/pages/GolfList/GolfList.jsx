import React, { useState } from 'react'
import './GolfList.scss'
import { GolfAttributes } from '../../utils/Lists/Golfs';
import { Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

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
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
          }} className='golfCard'>
          {children}
        </div>
      )}
    </Transition>
  );

  return (
    <>
        
        <div id="GolfList" className='flex center justify fullWidth flex-h margin'>

            <h1>Nos 46 Golfs</h1>
            <h3>Rechercher un golf prêt de chez vous!</h3>
            <input id="search" type="search" placeholder="Search..." autofocus required onChange={(e) => {onInputChange(e.target)}} />



            <TransitionGroup className='flex center justify-center flex-wrap margin' id="golfContainer">
                {GolfFiltered.map((golf, index) => {
                return (

                    <FadeTransition key={index} >

                            <div className='golfImageContainer flex center'>
                                <img src={golf.img} className='golfImage'/>
                            </div>

                            <div className='golfName'>
                                <p>Golf de {golf.name}</p>
                            </div>

                    </FadeTransition>
                    )
                })}
            </TransitionGroup>

        </div>


    
    </>
  )
}

export default GolfList