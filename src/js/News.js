
import React, { useEffect, useState } from 'react'
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
import url from './Host'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios'

export default function News() {
    const [news,setNews] = useState([])
    const [aksiya,setAksiya] = useState([])

    useEffect(() => {
    axios.get(`${url}/api/news`).then(res=>{
        setNews(res.data)
    })
    axios.get(`${url}/api/aksiya`).then(res=>{
        setAksiya(res.data)
    })
    }, [])
    
  return (
    <>
    <Navbar/>
    <div className='News'>
        
        <div>
        <p style={{display:"none",marginLeft:"15px"}} className='aa1'><span style={{marginRight:"7px"}} onClick={()=> window.location="/"}>Главная</span>  | <span style={{marginLeft:"7px",color:"red"}} onClick={()=> window.location="/News"}>Новости</span> </p>
            <div style={{display:"flex",justifyContent:"center",width:"92vw",margin:"auto"}} className="div_news">
            
       <div> <div className="news_page">
            <img src={start} alt="" />
            <h2>Новости</h2>
        </div>
        <div className="news_cards">
            <div className="news_card">
                {news.map((item,key)=>{
                    if(key<1){
                      return(
                        <>
                        <div className="fort_new_img">
                <img className='media_mask1' src={item.image} alt="" />
                </div>
                        </>
                    )  
                    }
                    
                })}
            
                <div className="news_card_p">
                    
                
                {news.map((item,key)=>{
                        if(key<1){
                    return(<>
                        <h3>{item.title}</h3>
                            <p>{item.min_description}</p>
                            <h2 onClick={()=>{window.location="Article";localStorage.setItem("NewsId",item.id)}}>Читать новость</h2></>
                        )
                        }
                        
                    })}
                
                </div>
            </div>
        </div></div></div><h2 className='swiph2'>Смотри, что у нас нового!</h2>
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
        <div id='div1' style={{display:"flex",justifyContent:"center"}} className="div_news_3"><div className="news_page_3">
            <div style={{display:"flex",alignItems:"center"}} className="news_page_3_cards">
                
                {news.map((item,key)=>{
                    
                    if(key<1){
                       return(
                        <div className="news_page_3_card">
                            <div style={{cursor:"pointer",zIndex:"100000"}} className="arrow_div" onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                <h2>{item.title}</h2>
                <p>{item.min_description}</p>
            <div className="forN_image"><img src={item.image} alt="" /></div>
            </div>
                    ) 
                    }
                    
                })}
                
            </div>
            <div style={{height:"650px",overflow:"hidden",overflowY:"scroll",paddingRight:"10px"}} className="news_page_3_cards">
                {news.map((item,key)=>{
                    
return(
                      <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>{item.title}</h3>
                    <p>{item.min_description}</p>
                </div>
                <img style={{cursor:"pointer"}} onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}} src={arrow} className='news_icon' alt="" />
                </div>  
                    )
                    
                    
                })}
            </div>
        </div>
        </div>


<div id='div2' style={{display:"flex",justifyContent:"center"}} className="div_news_3"><div className="news_page_3">

            <div style={{height:"480px",overflow:"hidden",overflowY:"scroll",paddingRight:"10px"}} className="news_page_3_cards">
                {news.map(item=>{
                    return(
                        <div className="news_page_3_card1">
                    <div className="newss">
                    <h3>{item.title}</h3>
                    <p>{item.min_description}</p>
                </div>
                    <img src={arrow} className='news_icon' alt="" />
                </div>
                    )
                })}
            </div>
            <div style={{display:"flex",alignItems:"center",borderRadius:"40px",marginTop:"50px"}} className="news_page_3_cards">
                {news.map((item,key)=>{
                    if(key<1){
                       return(
                        
                        <div className="news_page_3_card">
                            <div className="arrow_div" onClick={()=>{window.location="/Article";localStorage.setItem("NewsId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                <h2>{item.title}</h2>
                <p>{item.min_description}</p>
            <div className="forN_image"><img src={item.image} alt="" /></div>
            </div>
                    ) 
                    }
                    
                })}
                
            </div>
        </div>
        </div>
        <div id='news_page' className="news_page">
            <img src={start} alt="" />
            <h2>Наши акции</h2>
            
        </div>
        <div className="for_swip1"><Swiper id='myswip' style={{width:"1200px"}}  slidesPerView={2}  modules={[Navigation]} className="mySwiper">
        {aksiya.map(item=>{
            return(
                <SwiperSlide><div className="rasm1_div">
                <h3 style={{zIndex:"11",color:"black"}}>2+1</h3>
                    <h2 style={{zIndex:"11",color:"black"}} onClick={()=>{window.location="/Aksiya";localStorage.setItem("AksiyaId",item.id)}}>{item.title}</h2>
                    <div style={{zIndex:"12"}} className="arrow_div" onClick={()=>{window.location="/Aksiya";localStorage.setItem("AksiyaId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                    <img style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={item.image} alt="" />
                </div></SwiperSlide>
            )
        })}
      </Swiper></div>
        
      <div className="for_swip2" style={{display:"none"}}>
      <Swiper  id='myswip' style={{width:"1200px"}} slidesPerView={1} navigation={true}  modules={[Navigation]} className="mySwiper">
      {aksiya.map(item=>{
            return(
                <SwiperSlide><div className="rasm1_div">
                    <h2 style={{zIndex:"11",color:"black"}} onClick={()=>{window.location="/Aksiya";localStorage.setItem("AksiyaId",item.id)}}>{item.title}</h2>
                    <div style={{zIndex:"12"}} className="arrow_div" onClick={()=>{window.location="/Aksiya";localStorage.setItem("AksiyaId",item.id)}}><HiArrowRight className='arrow_left'/></div>
                    <img className='mediafor1' style={{zIndex:'10',height:"auto",margin:"auto",marginBottom:"0px"}} src={rasmm1} alt="" />
                    <img id='rasm5' style={{position:'absolute'}} src={item.image} alt="" />
                </div></SwiperSlide>
            )
        })}
      </Swiper>
      </div>
      
        </div>
    </div>
    <Footer/>
    </>
  )
}