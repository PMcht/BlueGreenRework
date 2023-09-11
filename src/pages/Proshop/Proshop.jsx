import React from 'react'
import './Proshop.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLocation, faPhone, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const Proshop = () => {
  return (
    <div id="proshop" className='flex center justify-center flex-h'>


        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          pauseOnMouseEnter: true,
        }
        }
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        >

          <SwiperSlide className='SwiperSlide' style={{backgroundImage:"url('/pages/Proshop/Slider1.webp')"}} />
          <SwiperSlide className='SwiperSlide' style={{backgroundImage:"url('/pages/Proshop/Slider2.webp')"}} />
          <SwiperSlide className='SwiperSlide' style={{backgroundImage:"url('/pages/Proshop/Slider3.webp')"}} />
                  
        </Swiper>

          <div className='flex center flex-wrap justify-center' id="categories">
            
              <Link className='category flex center justify-center'>
                  <img src="./pages/Proshop/Categ1.png" className='categIMG' />
                  <p className='bold'>Clubs</p>
              </Link>

              <Link className='category flex center justify-center'>
              <img src="./pages/Proshop/Categ2.png" className='categIMG' />
                  <p className='bold'>Balles</p>
              </Link>

              <Link className='category flex center justify-center'>
              <img src="./pages/Proshop/Categ3.png" className='categIMG' />
                  <p className='bold'>Chaussures</p>
              </Link>

              <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/Categ4.png" className='categIMG' />
                  <p className='bold'>Sacs</p>
              </Link>

              <Link className='category flex center justify-center'>
              <img src="./pages/Proshop/Categ5.png" className='categIMG' />
                  <p className='bold'>Vêtements</p>
              </Link>

          </div>

          <h2 className=''>Nouveautés</h2>
          <p className='thin'>Nos derniers produits</p>
          <div className='flex center flex-wrap justify-center margin'>
              <img src="./pages/Proshop/clubs/1.webp" className='clubs' />
              <img src="./pages/Proshop/clubs/2.webp" className='clubs' />
              <img src="./pages/Proshop/clubs/3.webp" className='clubs' />
              <img src="./pages/Proshop/clubs/4.webp" className='clubs' />
          </div>

          <div className='flex center flex-wrap justify' id="brands">
            
            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/2.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/3.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/4.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/5.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/6.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/7.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/8.webp" className='categIMG' />
            </Link>

            <Link className='category flex center justify-center'>
                <img src="./pages/Proshop/brands/9.webp" className='categIMG' />
            </Link>

        </div>

        <div className='flex center justify flex-wrap' id="proOpinion">

            <img src="./pages/Proshop/pro.jpg" />
            <div id="textOpinion">
              <p className='bold text-medium'>Nos experts vous conseillent</p>
              <p className='text-smaller'>Nos experts vous épaullent lors de vos achats avec Bluegreen, n'hésitez pas à les contacter en cas de doutes lors d'un achat.</p>
              
              <div className='flex center'>
                <FontAwesomeIcon icon={faStopwatch} />
                <p className='bold text-smaller'>du Lundi au Vendredi de 9h30 à 18h</p>
              </div>
              
              <div className='flex center'>
                <FontAwesomeIcon icon={faPhone} />
                <p className='bold text-smaller'>0123456789</p>
              </div>

              <div className='flex center'> 
                <FontAwesomeIcon icon={faAt} />
                <p className='bold text-smaller'>contact@bluegreen.com</p>

              </div>

              <div className='flex center'>
                <FontAwesomeIcon icon={faLocation} />
                <p className='text-smaller'><span className='bold'>En boutique</span> dans l'un de nos golfs Bluegreen</p>

              </div>
              
            </div>

        </div>


    </div>
  )
}

export default Proshop