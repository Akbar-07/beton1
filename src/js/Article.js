import React from 'react'
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

export default function Article() {
  return (
    <div>
        <Navbar/>
        <div className="bid_header">
<div className="Article_header">
        <p className='aa1'><span onClick={()=> window.location="/"}>Главная</span>  | <span onClick={()=> window.location="/News"}>Новости</span>  | <span className='span1'>Статья</span>  </p>
        </div>
        <div className="news_page">
            <img src={start} alt="" />
            <h2>Новости</h2>
        </div>
        <div className="Article_cards">
          <div className="Article_card1">
          <div className="Article_card">
          <img className='media_mask' src={mediamask} alt="" />
                <img className='media_mask1' src={mask} alt="" />
            <div className="article_card">
              <h3>Новая марка бетона уже доступна</h3>
              <p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
              <h4>23.01.2023</h4>           
            </div>
          </div></div>
          <div className="articles_p">
          <p className='Article_bottom_p'>Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании форм развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации.
Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Равным образом новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития.
<br /><br />

Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании форм развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации.
Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Равным образом новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития.</p>
       </div>
        </div>
        <div className="circle_div">
        <div onClick={()=> window.location="/News"} className="circle"><BsArrowLeftShort/></div>
        <h3 onClick={()=> window.location="/News"}>Вернуться к новостям</h3>
        </div>
        <div style={{display:"flex",justifyContent:"center"}} className="div_news_2"><div className="news_page_2">
            {/* <h2>Смотри, что у нас нового!</h2> */}
            <div className="news_page_2_card">
                <div className="rasm1_div">
                    <h2>Новая марка бетона уже доступна на сайте</h2>
                    <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img src={rasm1} alt="" />
                </div>
                <div className="rasm1_div">
                <h2>Новая марка бетона уже доступна на сайте</h2>
                <div className="arrow_div"><HiArrowRight className='arrow_left'/></div>
                    <img className='news_page_2_card_img' src={rasm2} alt="" />
                </div>
            </div>
        </div></div>
        </div>
        
        <Footer/>
    </div>
  )
}
