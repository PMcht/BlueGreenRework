import React from 'react'
import './Benefits.scss'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Benefits = () => {
  return (
    <div id="benefits">
        <div className='left notOnMobile' />
        <div className='right notOnMobile' />
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
                <SwiperSlide className='SwiperSlide'>
                  <p className='backgroundName'>APP MOBILE</p>
                  <div className='flex center justify-center'>
                    
                    <img src='./pages/Slider/AppMock.webp' className='slideIMG' />
                    <div className='textSlide'>
                      <p className='text-small gray notOnMobile'>Notre application mobile</p>
                      <h2 className='text-large'>Application Bluegreen pour mobiles</h2>
                      <p className='text-small'>Réservez votre départ, comptez vos coups, controlez vos distances et plus encore avec l'application Bluegreen</p>
                      <Link>
                          <div className='button text-smaller'>
                            Télécharger l'App
                          </div>
                      </Link>
                    </div>
                  </div>
                  
                </SwiperSlide>
                
                <SwiperSlide className='SwiperSlide'>
                  
                  <div className='flex center justify-center'>        
                    <div className='textSlide'>
                      <h2 className='text-large'>46 Golfs partout en France</h2>
                      <p className='text-small'>Où que vous soyez, il y a un golf Bluegreen à proximité car notre réseau inclu un total de 46 golfs en France</p>
                      <Link to="Nos-Golfs">
                          <div className='button text-smaller'>
                            Découvrez nos Golfs
                          </div>
                      </Link>
                    </div>
                    <img src='./pages/Slider/svg-map.svg' className='slideIMG' />
                  </div>
                  <p className='backgroundName'>PARTOUT FRANCE</p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlide'>
                  <p className='backgroundName'>PROSHOP CONNECTES</p>
                  <div className='flex center justify-center'>
                    
                    <img src='./pages/Slider/Proshop.webp' className='slideIMG' />
                    <div className='textSlide'>
                      <p className='text-small gray notOnMobile'></p>
                      <h2 className='text-large'>Découvrez nos Proshops connectés</h2>
                      <p className='text-small'>Profitez d'un large choix d'équipements pour vos parties ; clubs et vêtements livrés à votre proshop</p>
                      <Link to="Proshop">
                          <div className='button text-smaller'>
                            Boutique en Ligne
                          </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlide'>
                  
                  <div className='flex center justify-center'>
                    
                    <div className='textSlide'>
                      <h2 className='text-large'>Des compétitions régulières</h2>
                      <p className='text-small'>Afin de tracker votre évolution et de toujours chercher à s'améliorer, nos golfs accueillent les compétitions FFGolf</p>
                      <Link>
                          <div className='button text-smaller'>
                            Calendrier des Tournois
                          </div>
                      </Link>
                    </div>
                    <img src='./pages/Slider/ffg.svg' className='slideIMG' />
                  </div>
                  <p className='backgroundName'>TOURNOIS REGULIERS</p>
                </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Benefits