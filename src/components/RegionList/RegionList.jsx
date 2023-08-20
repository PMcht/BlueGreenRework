import React from 'react'
import './RegionListStyle.scss'


const RegionAttributes = [
    {
        id: 0,
        title: 'Auvergne-Rhône-Alpes',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 1,
        title: 'Bourgagne-France-Comté',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 2,
        title: 'Bretagne',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 3,
        title: 'Centre-Val-de-Loire',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 4,
        title: 'Hauts-de-France',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 5,
        title: 'Ile de France',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 6,
        title: 'Normandie',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 7,
        title: 'Nouvelle-Aquitaine',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 8,
        title: 'Occitanie',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 9,
        title: 'Pays de la Loire',
        img: "images/cases/case-1-img.png",
    },
    {
        id: 10,
        title: 'Provence Alpes-Côte d\'Azur',
        img: "images/cases/case-1-img.png",
    },
];


const RegionList = () => {


    const listRegion = RegionAttributes.map( (region, index) => (

        <div className='CaseContainer' key={region.id}>

            
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>{region.title}</p>
            </a>

        </div>
  ));


  return (
    
    <div id="RegionList" className='widthControl'>

        <h2>46 Golfs partout en France</h2>
        <p>Découvrez les golfs Bluegreen par région</p>

        <div className='flex justify List'>
            <div className='Arrow Left' />
            <div className='Arrow Right' />
            {listRegion}
            {/* <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a>
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a>
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a>
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a>
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a>
            <a href="" className='card flex flex-h center justify'>
                <div className='border' />
                <p>Bretagne</p>
            </a> */}
        </div>

    </div>

  )
}

export default RegionList