import React from 'react'
import '../css/Partners_page.css'
import Navbar from './Navbar'
import Footer from './Footer'
import start from "../img/Group 100.png"
import sement from '../img/sement_beton.png'
import white1 from '../img/white.png'
import right_arrow_png from '../img/right-arrow_png.png'
import ekskavator from '../img/media_ekskavator.png'
import {GoArrowDown} from 'react-icons/go'

export default function Partners_page() {
  return (
    <div>
        <Navbar/>
<div className="Partners_page">
<div className="news_page">
                    <img src={start} alt="" />
                    <h2>Стать партнером</h2>
                </div>
                <div className="Yellow_card">
                    <img style={{zIndex:"10"}} src={sement} alt="" />
                    <div className="yellow_p">
                        <div className="left_card"></div>
                        <img className='white_c' style={{display:"none"}} src={white1} alt="" />
                        <h3>Мы ищем партнеров среди поставщиков бетона 
в нашем городе</h3>
                        <p>Стань нашим партнером!</p>
                        <div className="for_e">
                        <img className='media_e' src={ekskavator} alt="" />
                        </div>
                    </div>
                </div>
                <div className="for_orta">
                    <p>Мы готовы к сотрудничеству с крупными поставщиками бетона, 
но для того чтобы мы рассмотрели вашу заявку,</p>
<GoArrowDown className='arrow_pas'/>
<h3>ваше производство должно обладать 
несколькими важными характеристиками:</h3>
                </div>
</div>
        <Footer/>
    </div>
  )
}
