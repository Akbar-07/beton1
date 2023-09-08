// import React, { useRef, useState } from "react";
import '../css/Partners.css'
import start from "../img/Group 100.png"
import Navbar from './Navbar'
import Footer from './Footer'
import fabrika from '../img/fabrika_betona3.png'
import betonshik from '../img/betonshik.png'
import betonshik1 from '../img/betonshik1.png'
import sibavisastroy from '../img/sibavisastroy.png'
import sibavisastroy1 from '../img/sibavisastroy1.png'
import more_betona from '../img/more_betona.png'
import more_betona1 from '../img/more_betona1.png'
import noviy_beton from '../img/noviy_beton.png'
import noviy_beton1 from '../img/noviy_beton1.png'
import mask6 from '../img/mask6.png'
import sement from '../img/sement_beton.png'
import right_arrow_png from '../img/right-arrow_png.png'
import ekskavator from '../img/media_ekskavator.png'
import c from '../img/for_c.png'
import white1 from '../img/white.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



export default function Partners() {
    function betonshik2() {
        document.querySelector(".headerimg").src = betonshik1
        document.querySelector(".betonshik1").style = "display:flex"
        document.querySelector(".betonshik").style = "display:none"
        document.querySelector(".sibavisastroy").style = "display:flex"
        document.querySelector(".sibavisastroy1").style = "display:none"
        document.querySelector(".more_betona").style = "display:flex"
        document.querySelector(".more_betona1").style = "display:none"
        document.querySelector(".noviy_beton").style = "display:flex"
        document.querySelector(".noviy_beton1").style = "display:none"
    }
    function sibavisastroy2() {
        document.querySelector(".headerimg").src = sibavisastroy1
        document.querySelector(".betonshik").style = "display:flex"
        document.querySelector(".betonshik1").style = "display:none"
        document.querySelector(".sibavisastroy1").style = "display:flex !important"
        document.querySelector(".sibavisastroy").style = "display:none"
        document.querySelector(".more_betona").style = "display:flex"
        document.querySelector(".more_betona1").style = "display:none"
        document.querySelector(".noviy_beton").style = "display:flex"
        document.querySelector(".noviy_beton1").style = "display:none"
    }
    function more_betona2() {
        document.querySelector(".headerimg").src = more_betona1
        document.querySelector(".more_betona1").style = "display:flex"
        document.querySelector(".more_betona").style = "display:none"
        document.querySelector(".betonshik").style = "display:flex"
        document.querySelector(".betonshik1").style = "display:none"
        document.querySelector(".sibavisastroy").style = "display:flex"
        document.querySelector(".sibavisastroy1").style = "display:none"
        document.querySelector(".noviy_beton").style = "display:flex"
        document.querySelector(".noviy_beton1").style = "display:none"
    }
    function noviy_beton2() {
        document.querySelector(".headerimg").src = noviy_beton1
        document.querySelector(".noviy_beton1").style = "display:flex"
        document.querySelector(".noviy_beton").style = "display:none"
        document.querySelector(".more_betona").style = "display:flex"
        document.querySelector(".more_betona1").style = "display:none"
        document.querySelector(".betonshik").style = "display:flex"
        document.querySelector(".betonshik1").style = "display:none"
        document.querySelector(".sibavisastroy").style = "display:flex"
        document.querySelector(".sibavisastroy1").style = "display:none"
    }
    function fabrika2() {
        document.querySelector(".headerimg").src = fabrika
        document.querySelector(".noviy_beton").style = "display:flex"
        document.querySelector(".noviy_beton1").style = "display:none"
        document.querySelector(".more_betona").style = "display:flex"
        document.querySelector(".more_betona1").style = "display:none"
        document.querySelector(".betonshik").style = "display:flex"
        document.querySelector(".betonshik1").style = "display:none"
        document.querySelector(".sibavisastroy").style = "display:flex"
        document.querySelector(".sibavisastroy1").style = "display:none"
    }
    return (

        <div>
            <Navbar />
            <div className="Partners">
            <p style={{display:"none"}} className='aa1'><span style={{marginRight:"7px"}} onClick={()=> window.location="/"}>Главная</span>  | <span style={{marginLeft:"7px"}} onClick={()=> window.location="/News"}>Партнеры</span> </p>
                <div className="news_page">
                    <img src={start} alt="" />
                    <h2>Партнеры</h2>
                </div>
                <div className="for_hidden">
                    <div className="header_images">
                        <Swiper slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]} breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 2,
            },
            580: {
                slidesPerView: 3,
              },
            800: {
                slidesPerView: 4,
              },
            // when window width is >= 768px
            1000: {
              slidesPerView: 5,
            },
          }} className="mySwiper" id="swipers">
                            <SwiperSlide><div className="partner_card">
                                <img onClick={() => fabrika2()} src={fabrika} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="partner_card">
                                <img onClick={() => betonshik2()} className='betonshik' src={betonshik} alt="" /><img style={{ display: "none" }} className='betonshik1' src={betonshik1} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="partner_card">
                                <img onClick={() => sibavisastroy2()} className='sibavisastroy' src={sibavisastroy} alt="" /><img className='sibavisastroy1' style={{ display: "none" }} src={sibavisastroy1} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="partner_card">
                                <img onClick={() => more_betona2()} className='more_betona' src={more_betona} alt="" /><img className='more_betona1' style={{ display: "none" }} src={more_betona1} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="partner_card">
                                <img onClick={() => noviy_beton2()} className='noviy_beton' src={noviy_beton} alt="" /><img style={{ display: "none" }} className='noviy_beton1' src={noviy_beton1} alt="" /></div></SwiperSlide>
                        </Swiper>
                       
                    </div></div>
                <div className="Header_cards">
                    <div className="for_flex">
                        <div className="heders_img">
                        <img className='headerimg' src={fabrika} alt="" />
                        </div>
                        <div className="Header_card">
                            <p>С другой стороны постоянный количественный рост и сфера нашей активности требуют от нас анализа соответствующий условий активизации. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Равным образом укрепление и развитие структуры представляет...</p>
                            <div className="header_flex">
                                <h3>8 800 900 80 90</h3>
                                <h4>pochtabeton.ru</h4>
                            </div>
                            <div className="header_flex1">
                                <h3>#своя_лаборатория</h3>
                                <h3>#автоматизированный_завод</h3>
                                <h3>#несколько_заводов</h3>
                            </div>
                            <div className="mask6">
                        <Swiper slidesPerView={3}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                  },
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                800: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                  },
                              }}navigation={true} modules={[Navigation]}
                            
                            className="mySwiper" id="swipers">
                            <SwiperSlide><div className="mask_img"><img src={mask6} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="mask_img"><img src={mask6} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="mask_img"><img src={mask6} alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="mask_img"><img src={mask6} alt="" /></div></SwiperSlide>
                        </Swiper>
                    </div>
                            </div>
                            </div>
                    

                </div>

                <div className="Yellow_card">
                    <img style={{zIndex:"10"}} src={sement} alt="" />
                    <div className="yellow_p">
                        <div className="left_card"></div>
                        <img className='white_c' style={{display:"none"}} src={white1} alt="" />
                        <h3>С нами работают только супер крутые и самые самые, бетоны
                            с подворотни не возим</h3>
                        <p>Стань нашим партнером!</p>
                        <div className="for_e">
                        <img className='media_e' src={ekskavator} alt="" />
                        </div>
                        <div className="right_card"><img src={right_arrow_png} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
