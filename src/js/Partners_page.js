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
import IMG2 from "../img/Group 365.png"
import IMG3 from "../img/Group 384.png"

export default function Partners_page() {
  return (
    <div>
        <Navbar/>
        
<div className="Partners_page">
<div className="glavaga_ot">
          <span className='glavaga_ot1'><span onClick={()=>window.location="/home"}>Главная</span> | <span className='glavaga_ot2'>Калькулятор</span></span>
        </div>
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
несколькими важными <span className='ssd_fa'>характеристиками:</span></h3>
                </div>
                <div className="for_orta1">
                  <div className="orta_card">
                    <div className="for_tor">01</div>
                    <div className="mini_card">
                      <h2>Быть полностью автоматизированным</h2>
                      <p>Нашим клиентам должен приезжать бетон именно тот который они заказали, сделанный на современном</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">02</div>
                    <div className="mini_card">
                      <h2>Оснащено тензодатчиками для контроля веса или автомобильными весами</h2>
                      <p>Нам важно, чтобы клиентам приезжал именно тот объем который они заказали, не меньше и не больше</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">03</div>
                    <div className="mini_card">
                      <h2>Иметь собственную аттестованную лабораторию, со всем необходимым оборудованием</h2>
                      <p>Нам важно, чтобы с каждой поставки бетона были взяты пробные образцы и проверены в соответствии с ГОСТом.</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">04</div>
                    <div className="mini_card">
                      <h2>В вашем штате должен быть штатный технолог, а не на аутсорсе.</h2>
                      <p>Каждая поставка нашим покупателям должна контролироваться высококвалифицированным технологом.</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">05</div>
                    <div className="mini_card">
                      <h2>Подогрев инертных материалов</h2>
                      <p>Часто в межсезонье возникают проблемы из за холодного бетона, нам очень бы хотелось избежать проблем, поэтому бетон должен отгружаться с заданной температурой.</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">06</div>
                    <div className="mini_card">
                      <h2>Использование современных экологичных присадок</h2>
                      <p>Мы понимаем, что каждый пытается сэкономить на цементе, но этого не стоит делать с помощью нафталинов. Мы крайне против использования губительной для людей химии!</p>
                      </div>
                  </div>
                  <div className="orta_card">
                    <div className="for_tor">07</div>
                    <div className="mini_card">
                      <h2>Обеспечительный взнос в размере 3.000.000 рублей</h2>
                      <p>для покрытия возможных непредвиденных расходов из-за некачественного поставленного бетона, если таковой будет иметь место.</p>
                      </div>
                  </div>
                  <div className="orta_card_img1">
                    <img className='orta_card_img1_2' src={IMG2} alt="" />
                    <img className='orta_card_img1_1' src={IMG3} alt="" />
                  </div>
                </div>



</div>
        <Footer/>
    </div>
  )
}
