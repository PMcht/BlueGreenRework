import React, { useEffect } from 'react'
import './Feed.scss'
import axios from 'axios'

const Feed = () => {
  
  return (
    <section id="feed" className='flex center flex-h'>
        <h2 className='text-large'>Feed Instagram</h2>
        <p className='text-small gray'>@GolfsBluegreen</p>

        <div id="instaGrid">

            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/1.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/2.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/3.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/4.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/5.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/6.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/7.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/8.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/9.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/10.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/11.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/12.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/13.jpg' className='instaIMG' /></div>
            <div className="square fullImg"><img src='/BlueGreenRework/pages/Insta/14.jpg' className='instaIMG' /></div>

        </div>



    </section>
  )
}

export default Feed