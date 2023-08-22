import React, { useEffect } from 'react'
import './RegionListStyle.scss'
import { carousel } from '../../utils/Carousel/Carousel';


const RegionAttributes = [
    {
        id: 0,
        title: 'Auvergne-Rhône-Alpes',
        img: "Bluegreen/Regions/0.jpg",
    },
    {
        id: 1,
        title: 'Bourgogne-France-Comté',
        img: "Bluegreen/Regions/1.jpg",
    },
    {
        id: 2,
        title: 'Bretagne',
        img: "Bluegreen/Regions/2.jpeg",
    },
    {
        id: 3,
        title: 'Centre-Val-de-Loire',
        img: "Bluegreen/Regions/3.jpg",
    },
    {
        id: 4,
        title: 'Hauts-de-France',
        img: "Bluegreen/Regions/4.png",
    },
    {
        id: 5,
        title: 'Ile de France',
        img: "Bluegreen/Regions/5.jpeg",
    },
    {
        id: 6,
        title: 'Normandie',
        img: "Bluegreen/Regions/6.jpeg",
    },
    {
        id: 7,
        title: 'Nouvelle-Aquitaine',
        img: "Bluegreen/Regions/7.jpeg",
    },
    {
        id: 8,
        title: 'Occitanie',
        img: "Bluegreen/Regions/8.jpg",
    },
    {
        id: 9,
        title: 'Pays de la Loire',
        img: "Bluegreen/Regions/9.jpg",
    },
    {
        id: 10,
        title: 'Provence Alpes-Côte d\'Azur',
        img: "Bluegreen/Regions/10.jpg",
    },
];


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