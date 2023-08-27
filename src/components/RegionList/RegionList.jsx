import React, { useEffect } from 'react'
import './RegionListStyle.scss'
import { carousel } from '../../utils/Carousel/Carousel';
import { GolfAttributes } from '../../utils/Lists/Golfs';
import { Link } from 'react-router-dom';



const RegionList = () => {

        let fileteredRegion = GolfAttributes.filter(
            (golf, index) =>
              GolfAttributes.findIndex((item) => item.region === golf.region) === index
          );

        const listRegion = fileteredRegion

            .map( (region, index) => (
                <Link key={region.id} className='carousel-slide card flex flex-h center justify'>
                    <div className='border' >
                        <div className="borderRelative" style={{backgroundImage: `url(${region.img})`}} />
                    </div>
                    <p>{region.region}</p>
                </Link>

        ));

        useEffect(() => {
          
            // Allows to use multiple carousels on the same page:
            document.querySelectorAll(".carousel").forEach(carousel);

        })

     

  return (
    
    <div id="RegionList" className='widthControl margin'>

        <h2>46 Golfs partout en France</h2>
        <p>Découvrez les golfs Bluegreen par région</p>
        
        <div className='test'>
            <div className='Arrow Left flex center justify-center'>&#x2039;</div>
            <div className='Arrow Right flex center justify-center'>&#x203A;</div>
            <div className="carousel">
                <div className="carousel-slider">

                        {listRegion}    
                </div>
            </div>
        </div>



    </div>

  )
}

export default RegionList