import React from 'react'
import footerimg from "../img/Group 144.png"
import '../css/Footer.css'
import {BiSolidUser} from "react-icons/bi"
import {BsTelephoneFill} from "react-icons/bs"
import Footerimg from "../img/footer_img.png"
import transform from '../img/transform.png'
import mediafooter from '../img/media_img.png'

export default function Footer() {
  return (
    <div className='media_help'>
      <div className="footer_cards10"> 
        <div id='futer1' className="footer_cards">
          <img className='footer_img' src={Footerimg} alt="" />
            <div className="footer_card">
                <img src={footerimg} alt="" />
                <div className="footers_image"></div>
                <h2>zakaz@beton-taxi.ru</h2>
                <button className='butt1'>  <BiSolidUser style={{fontSize:"22px"}} className='iconss'/>Личный кабинет</button>
                <button className='butt2'>  <BsTelephoneFill  className='iconss'/>    Перезвоните мне</button>
            </div>
            <div className="footer_card1">
                <h3>Новости</h3>
                <h3>Калькуляторы</h3>
                <h3>Партнеры</h3>
                <h3>Стать партнером</h3>
                <h3>Программа лояльности</h3>
                </div>
                <div className="footer_card4">
                  <h4>Гарантия</h4>
                  <h4>Оставить претензию</h4>
                </div>
            <div className="footer_card2">
              <div className="iconss1"><i class='bx bxl-telegram' ></i></div>
              <div className="iconss1"><i class='bx bxl-whatsapp'></i></div>
            </div>
           
        </div></div>
        <div className="footer_cards10"> 
        <img id='mediafuter1' className='footer_img' src={Footerimg} alt="" />
        <img id='mediafuter2' className='footer_img' src={mediafooter} alt="" />
        <div id='futer2' className="footer_cards">
       
          <div className="mediaa_help">
            <div className="footer_card">
                <img src={footerimg} alt="" />
                <h2>zakaz@beton-taxi.ru</h2>
                <button className='butt1'>  <BiSolidUser style={{fontSize:"22px"}} className='iconss'/>Личный кабинет</button>
                <button className='butt2'>  <BsTelephoneFill  className='iconss'/>    Перезвоните мне</button>
            </div></div>
            <div className="media_futer">
            <div className="footer_card1">
                <h3>Новости</h3>
                <h3>Калькуляторы</h3>
                <h3>Партнеры</h3>
                <h3>Стать партнером</h3>
                <h3>Программа лояльности</h3>
                </div>
                <div className="footerss">
                <div className="footer_card4">
                  <h4>Гарантия</h4>
                  <h4>Оставить претензию</h4>
                </div>
            <div className="footer_card2">
              <div className="iconss1"><i class='bx bxl-telegram' ></i></div>
              <div className="iconss1"><i class='bx bxl-whatsapp'></i></div>
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
