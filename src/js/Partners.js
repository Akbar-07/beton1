import React, { useEffect, useState } from 'react'
import '../css/Partners.css'
import start from "../img/Group 100.png"
import Navbar from './Navbar'
import Footer from './Footer'
import fabrika from '../img/fabrika_betona3.png'
import fabrika1 from "../img/Mask group (2).png"
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
import axios from 'axios'
import url from './Host'



export default function Partners() {
    const [partner,setPartner] = useState([])
    const [partner1,setPartner1] = useState([])

    useEffect(() => {
        axios.get(`${url}/api/homeiy`).then(res=>{
            setPartner(res.data)
            setPartner1(res.data)
        })
        }, [])

        function partner2(id) {
            axios.get(`${url}/api/homeiy`).then(res=>{
                const Filter=res.data.filter(item=>item.id==id)
                setPartner1(Filter)
            })
            
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
            {partner.map((item,key)=>{
                return(
                    <SwiperSlide><div onClick={()=>partner2(item.id)} className="partner_card">
                                <img src={item.image} alt="" className='fabrika' />  </div></SwiperSlide>
                )
            })}
                        </Swiper>
                       
                    </div></div>
                    {partner1.map((item,key)=>{
                        if(key<1){
                            return(
                            <div className="Header_cards">
                    <div className="for_flex">
                        <div className="heders_img">
                        <img className='headerimg'  src={item.image} alt="" />
                        </div>
                        <div className="Header_card">
                            <p>{item.description}</p>
                            <div className="header_flex">
                               <a style={{textDecoration:"none"}} href={`tel:${item.phone}`}><h3>{item.phone}</h3></a> 
                                <a style={{textDecoration:"none"}} href={`mailto:${item.email}`}><h4>{item.email}</h4></a>
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
                        )
                        }
                                
                        
                        
                    })}
                

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
                        <div style={{cursor:"pointer"}} onClick={()=>window.location="/Partners_page"} className="right_card"><img src={right_arrow_png} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
