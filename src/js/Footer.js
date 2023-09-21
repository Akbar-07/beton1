import React from 'react'
import footerimg from "../img/Group 144.png"
import '../css/Footer.css'
import {BiSolidUser} from "react-icons/bi"
import {BsTelephoneFill} from "react-icons/bs"
import Footerimg from "../img/footer_img.png"
import transform from '../img/transform.png'
import mediafooter from '../img/media_img.png'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



export default function Footer() {
  const [company1, setCompany1] = useState([{}])
useEffect(()=>{
  axios.get('http://siriyuuc.beget.tech/api/compony').then(res=>{
    setCompany1(res.data)
  }).catch(err=>{
    
  })
},[])

  return (
    <div className='media_help'>
      <div className="footer_cards10"> 
        <div id='futer1' className="footer_cards">
          <img className='footer_img' src={Footerimg} alt="" />
            <div className="footer_card">
                <img src={footerimg} alt="" />
                <div className="footers_image"></div>
                <h2>{company1[0].email}</h2>
                <button className='butt1' onClick={()=>window.location="/login"}>  <BiSolidUser style={{fontSize:"22px"}} className='iconss'/>Личный кабинет</button>
                <button className='butt2'>  <BsTelephoneFill  className='iconss'/> <a  href="tel:998997185110"> Перезвоните мне</a></button>
            </div>
            <div className="footer_card1">
                <h3 onClick={()=>window.location="/News"}>Новости</h3>
                <h3 onClick={()=>window.location="/Kankulyator"}>Калькуляторы</h3>
                <h3 onClick={()=>window.location="/Partner"}>Партнеры</h3>
                <h3 onClick={()=>window.location="/Partners_page"}>Стать партнером</h3>
                <h3 onClick={()=>window.location="/Loyalnost"}>Программа лояльности</h3>
                </div>
                <div className="footer_card4">
                  <h4 onClick={()=>window.location="/Garantiya"}>Гарантия</h4>
                  <h4>Оставить претензию</h4>
                </div>
            <div className="footer_card2">
            <a className='ahref_1' href={company1[0].telegram}><div className="iconss1"><i class='bx bxl-telegram' ></i></div></a>
            <a className='ahref_1' href={company1[0].whatsapp}> <div className="iconss1"><i class='bx bxl-whatsapp'></i></div></a>
            </div>
           
        </div></div>
        <div className="footer_cards10"> 
        <img id='mediafuter1' className='footer_img' src={Footerimg} alt="" />
        <img id='mediafuter2' className='footer_img' src={mediafooter} alt="" />
        <div id='futer2' className="footer_cards">
       
          <div className="mediaa_help">
            <div  className="footer_card">
                <img src={footerimg} alt="" />
                <h2>{company1[0].email}</h2>
                <button className='butt1' onClick={()=>window.location="/login"}>  <BiSolidUser style={{fontSize:"22px"}} className='iconss' />Личный кабинет</button>
                <button className='butt2'>  <BsTelephoneFill  className='iconss'/>     <a  href="tel:998997185110"> Перезвоните мне</a></button>
            </div></div>
            <div className="media_futer">
            <div className="footer_card1">
                <h3 onClick={()=>window.location="/News"}>Новости</h3>
                <h3 onClick={()=>window.location="/Kankulyator"}>Калькуляторы</h3>
                <h3 onClick={()=>window.location="/Partner"}>Партнеры</h3>
                <h3 onClick={()=>window.location="/Partners_page"}>Стать партнером</h3>
                <h3>Программа лояльности</h3>
                </div>
                <div className="footerss">
                <div className="footer_card4">
                  <h4 onClick={()=>window.location="/Garantiya"}>Гарантия</h4>
                  <h4 onClick={()=>window.location="/Loyalnost"}>Оставить претензию</h4>
                </div>
            <div className="footer_card2">
              <a className='ahref_1' href={company1[0].telegram}><div className="iconss1"><i class='bx bxl-telegram' ></i></div></a>
           
             <a className='ahref_1' href={company1[0].whatsapp}> <div className="iconss1"><i class='bx bxl-whatsapp'></i></div></a>
            </div>
            </div>
            </div>
            <div className="Footer_footer">
              <h3>Политика конфиденциальности</h3>
              <h3>© 2020–2023 Сервис «Бетон такси»</h3>
              <h3>Соглашение по использованию сервиса</h3>
            </div>
        </div></div>
    </div>
  )
}
