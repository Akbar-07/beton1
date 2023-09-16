import React, { useEffect, useState } from 'react'
import start from "../img/Group 100.png"
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Article.css'
import mask from "../img/Mask group.png"
import {BsArrowLeftShort} from 'react-icons/bs'
import group_80 from '../img/Group 80.png'
import group_81 from '../img/Group 81.png'
import mediamask from '../img/media_mask.png'
import rasm1 from '../img/rasm1.png'
import rasm2 from '../img/rasm2.png'
import {HiArrowRight} from 'react-icons/hi'
import url from './Host'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Article() {
  const [news,setNews] = useState([])
  const [aksiya,setAksiya] = useState([])

  useEffect(() => {
    axios.get(`${url}/api/aksiya`).then(res=>{
        setAksiya(res.data)
    })
    axios.get(`${url}/api/news`).then(res=>{
        setNews(res.data)
    })
    }, [])
  return (
    <div>
        <Navbar/>
        <div className="bid_header">
<div className="Article_header">
        <p className='aa1'><span onClick={()=> window.location="/"}>Главная</span>  | <span className='span1' onClick={()=> window.location="/Aksiya"}>акция</span> </p>
        </div>
        <div className="news_page">
            <img src={start} alt="" />
            <h2>Акция</h2>
        </div>
        {aksiya.map(item=>{
          if(item.id==localStorage.getItem("AksiyaId")){
            return(
            <div className="Article_cards">
          <div className="Article_card1">
          <div className="Article_card">
                      <div className="fort_new_img">
                <img className='media_mask1' src={item.image} alt="" />
                </div>
          {/* <img className='media_mask' src={mediamask} alt="" />
                <img className='media_mask1' src={mask} alt="" /> */}
            <div className="article_card">
                    <h3>{item.title}</h3>
                    <p>{item.min_description}</p>
                    <h4>{item.time_create.slice(0,10)}</h4> 
            </div>
          </div></div>
          <div className="articles_p">
                    <p className='Article_bottom_p'>{item.description}</p>
       </div>
        </div>
          )
          }
          
        })}
        <div className="circle_div">
        <div onClick={()=> window.location="/News"} className="circle"><BsArrowLeftShort/></div>
        <h3 onClick={()=> window.location="/News"}>Вернуться к новостям</h3>
        </div>
        <h2 className='swiph2'>Смотри, что у нас нового!</h2>
        <div className="for_swip3">
        <Swiper id='myes' style={{width:"92vw",maxWidth:"1200px"}} slidesPerView={2} modules={[Navigation]} className="mySwiper">
          {news.map(item=>{
            return(
              <SwiperSlide><div className="rasm1_div">
                    <h2 onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}>{item.title}</h2>
                    <div className="arrow_div" onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                    <img src={item.image} alt="" />
                </div></SwiperSlide>
            )
          })}
      </Swiper></div>
      <div className="for_swip4" style={{display:"none"}}>
        <Swiper id='myes' style={{width:"92vw",maxWidth:"1200px"}} slidesPerView={1} navigation={true} spaceBetween={30} modules={[Navigation]} className="mySwiper">
        
        {news.map(item=>{
            return(
              <SwiperSlide><div className="rasm1_div">
                    <h2 onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}>{item.title}</h2>
                    <div className="arrow_div" onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                    <img src={item.image} alt="" />
                </div></SwiperSlide>
            )
          })}
      </Swiper></div>
        </div>
        
        <Footer/>
    </div>
  )
}
