import React from 'react'
import './RecentArticlesStyle.scss'

const ArticlesAttributes = [
    {
        id: 0,
        title: 'Auvergne-Rhône-Alpes',
        img: "Bluegreen/Regions/0.jpg",
    },
    {
        id: 1,
        title: 'Auvergne-Rhône-Alpes',
        img: "Bluegreen/Regions/0.jpg",
    },
    {
        id: 2,
        title: 'Auvergne-Rhône-Alpes',
        img: "Bluegreen/Regions/0.jpg",
    }

];

const RecentArticles = () => {


    const listArticles = ArticlesAttributes.map( (article, index) => (


        <a key={article.id} href="" className='flex flex-h justify article'>
            <div className="articleIMG" style={{backgroundImage: `url(${article.img})`}} />
            <p className='articleTitle'>{article.title}</p>
            <div className='smallBorder' />
            <p className='articleTitle'>Lire la suite</p>
        </a>


        ));


  return (
    <div id="recentArticles" className='widthControl margin flex flex-h center'>

        <h2>Actualités Bluegreen</h2>
        <p>Nos derniers articles</p>

        <div className='flex center justify articleContainer'>
            {listArticles}
        </div>

    </div>
  )
}

export default RecentArticles