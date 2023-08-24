import React, { useEffect } from 'react'
import './RegionListStyle.scss'
import { carousel } from '../../utils/Carousel/Carousel';
import { RegionAttributes } from '../../utils/Lists/Regions';



const RegionList = () => {


    const listRegion = RegionAttributes.map( (region, index) => (


        <a key={region.id} href="" className='carousel-slide card flex flex-h center justify'>
            <div className='border' >
                <div className="borderRelative" style={{backgroundImage: `url(${region.img})`}} />
            </div>
            <p>{region.title}</p>
        </a>


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