import React from 'react'
import start from "../img/Group 100.png"
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Article.css'
import mask from "../img/Mask group.png"

export default function Article() {
  return (
    <div>
        <Navbar/>
        <div className="bid_header">
<div className="Article_header">
        <p className='aa1'>Главная | Новости | <span className='spanga_class_berrr'>Статья</span>  </p>
        </div>
        <div className="news_page">
            <img src={start} alt="" />
            <h2>Новости</h2>
        </div>
        <div className="Article_cards">
          <div className="Article_card">
            <img src={mask} alt="" />
            <div className="article_card">
              <h3>Новая марка бетона уже доступна</h3>
              <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
              <h4>23.01.2023</h4>           
            </div>
          </div>
        </div>
        </div>
        
        <Footer/>
    </div>
  )
}
