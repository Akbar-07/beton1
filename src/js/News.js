
import React from 'react'
import '../css/News.css'
import start from "../img/Group 100.png"
import mask from "../img/Mask group.png"
import group_80 from '../img/Group 80.png'
import group_81 from '../img/Group 81.png'
import mask1 from "../img/Mask group (1).png"
import arrow from '../img/Arrow 3.png'
import group101 from '../img/Group 101.png'
import Navbar from './Navbar'
import Footer from './Footer'
import rasm1 from '../img/rasm1.png'
import rasm2 from '../img/rasm2.png'
import {HiArrowRight} from 'react-icons/hi'
import rasmm1 from "../img/Rectangle 32.png"
import qiz1 from "../img/qiz1.png"
import mediamask from '../img/media_mask.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function News() {
  return (
    <>
    <Navbar/>
    <div className='News'>
        
        <div>
            <div style={{display:"flex",justifyContent:"center",width:"92vw",margin:"auto"}} className="div_news">
            <div className="kan_glava1">
            <span className='kan_glava1_span'><span onClick={()=>{window.location="/"}}>Главная</span> | <span className='kan_glava1_span1'>Новости</span></span>
        </div>
       <div> <div className="news_page">
            <img src={start} alt="" />
            <h2>Новости</h2>
        </div>
        <div className="news_cards">
            <div className="news_card">
            <img className='media_mask' src={mediamask} alt="" />
                <img className='media_mask1' src={mask} alt="" />
                <div className="news_card_p">
                <h3>Новая марка бетона уже доступна</h3>
                <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
                <h2 onClick={()=>window.location="Article"}>Читать новость</h2>
                </div>
            </div>
        </div></div></div><h2 className='swiph2'>Смотри, что у нас нового!</h2>
        <div className="for_swip3">
        <Swiper id='myes' style={{width:"92vw",maxWidth:"1200px"}} slidesPerView={2} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="rasm1_div">
                    <h2>Новая марка бетона уже доступна на сайте</h2>
                    <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img src={rasm1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h2>Новая марка бетона уже доступна на сайте</h2>
                <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='news_page_2_card_img' src={rasm2} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="rasm1_div">
                    <h2>Новая марка бетона уже доступна на сайте</h2>
                    <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img src={rasm1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h2>Новая марка бетона уже доступна на сайте</h2>
                <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='news_page_2_card_img' src={rasm2} alt="" />
                </div></SwiperSlide>
      </Swiper></div>
      <div className="for_swip4" style={{display:"none"}}>
        <Swiper id='myes' style={{width:"92vw",maxWidth:"1200px"}} slidesPerView={1} navigation={true} spaceBetween={30} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="rasm1_div">
                    <h2>Новая марка бетона уже доступна на сайте</h2>
                    <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img src={rasm1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h2>Новая марка бетона уже доступна на сайте</h2>
                <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='news_page_2_card_img' src={rasm2} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="rasm1_div">
                    <h2>Новая марка бетона уже доступна на сайте</h2>
                    <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img src={rasm1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h2>Новая марка бетона уже доступна на сайте</h2>
                <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='news_page_2_card_img' src={rasm2} alt="" />
                </div></SwiperSlide>
      </Swiper></div>
        <div id='div1' style={{display:"flex",justifyContent:"center"}} className="div_news_3"><div className="news_page_3">
            <div className="news_page_3_cards">
                <div className="news_page_3_card">
                <h2>Новая марка бетона уже доступна</h2>
                <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
            <img src={mask1} alt="" />
            </div>
            </div>
            <div className="news_page_3_cards">
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                <img src={arrow} className='news_icon' alt="" />
                </div>
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
            </div>
        </div>
        </div>


<div id='div2' style={{display:"flex",justifyContent:"center"}} className="div_news_3"><div className="news_page_3">
            <div id='cards2' className="news_page_3_cards">
                <div className="news_page_3_card">
                <h2>Новая марка бетона уже доступна</h2>
                <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
            
            </div>
            <div className="for_image"><img src={mask1} alt="" /></div>
            
            </div>
            <div  className="news_page_3_cards">
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
                <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>Новая марка бетона уже доступна на сайте</h3>
                    <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
            </div>
        </div>
        </div>
        <div id='news_page' className="news_page">
            <img src={start} alt="" />
            <h2>Наши акции</h2>
            
        </div>
        <div className="for_swip1"><Swiper id='myswip' style={{width:"1200px"}}  slidesPerView={2}  modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
      </Swiper></div>
        
      <div className="for_swip2" style={{display:"none"}}>
      <Swiper  id='myswip' style={{width:"1200px"}} slidesPerView={1} navigation={true}  modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='for_swip_r' style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='for_swip_r' style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='for_swip_r' style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute',height:"100%"}} src={qiz1} alt="" />
                </div></SwiperSlide>
        <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}}>Новая акция партии бетона</h2>
                    <div style={{zIndex:"12"}} className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='for_swip_r' style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute',height:"100%"}} src={qiz1} alt="" />
                </div></SwiperSlide>
      </Swiper>
      </div>
      
        </div>
    </div>
    <Footer/>
    </>
  )
}