import React from 'react'
import './RecentArticlesStyle.scss'
import { ArticlesAttributes } from '../../utils/Lists/Articles';



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

        <h2 className='toShow scrollTriggered'>Actualités Bluegreen</h2>
        <p className='toShow scrollTriggered'>Nos derniers articles</p>

        <div className='flex center justify articleContainer toShow scrollTriggered'>
            {listArticles}
        </div>

    </div>
  )
}

export default RecentArticles