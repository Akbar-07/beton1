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
import IMG4 from "../img/5285548 2.png"
import IMG5 from "../img/Vector 20.png"
import IMG6 from "../img/Vector 22.png"
import IMG7 from "../img/Group 369.png"
import IMG8 from "../img/Mask group (7).png"
import IMG9 from "../img/2 1548993563 (1).png"
import IMG10 from "../img/Group (3).png"
import IMG11 from "../img/Group (16).png"
import IMG12 from "../img/Group 376.png"
import IMG13 from "../img/Mask group (8).png"

export default function Partners_page() {
  function radio_bol(id){
    for (let i = 0; i < document.querySelectorAll(".radio_part_inp").length; i++) {
      if(id === i){
        document.querySelectorAll(".radio_part_inp")[i].style = "background: #FFCB13;"
      }else{
        document.querySelectorAll(".radio_part_inp")[i].style = "background: white;"
      }
      
    }
  }
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
                        <p className='kujyhtgrfedwertyui'>Стань нашим партнером!</p>
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

<div className="kelishuv_card">
  <div className="kel_card1">
  <div className="kel_card11_kopiya">
    <img className='kel_card1_dumaloq_img_2' src={IMG6} alt="" />
    <div className="kel_card1_dumaloq">
      <img className='kel_card1_dumaloq_img' src={IMG4} alt="" />
    </div>
    </div>
    <span>Если вы полностью <br /> соответствуете нашим запросам,</span>
    <h1>пожалуйста оставьте заявку:</h1>
    <div className="kel_card11">
    <div className="kel_card1_dumaloq">
      <img className='kel_card1_dumaloq_img' src={IMG4} alt="" />
    </div>
    <img className='kel_card1_dumaloq_img_2' src={IMG5} alt="" />
    </div>
  </div>
  <div className="kel_card2">
    <input className='kel_card2_inp' id='1z' type="text" placeholder='Наименование организации'/><br />
    <input className='kel_card2_inp' id='2z' type="text" placeholder='ИНН'/><br />
    <input className='kel_card2_inp' id='3z' type="text" placeholder='Контактное лицо'/><br />
    <input className='kel_card2_inp' id='4z' type="number" placeholder='Телефон'/><br />
    <input className='kel_card2_inp' id='5z' type="text" placeholder='Сайт'/><br />
    <input className='kel_card2_inp' id='6z' type="email" placeholder='Email'/><br />
    <button className='kel_card2_but'>Отправить запрос</button>
  </div>
</div>

<div className="voditel_text">
  <div className="koller_s">
  <span className='voditel_text_span'>В связи с большим количеством заявок</span>
  </div>
  <h1>нам требуются водители,</h1>
 <div className="koller_s">
 <span className='voditel_text_span'>как со своим транспортом так и в наш автопарк.</span>
 </div>
  <div className="lopi_nax_xil">
  <img className='voditel_text_img' src={IMG7} alt="" />
  </div>
  
  <div className="rasmga_style">
    <span>Мы готовы к сотрудничеству <br /> 
с отдельными людьми <br /> владеющими миксерами  <br />
и швингами, так и с <br /> компаниями предоставляющие <br /> свои услуги в этой сфере.</span>
      <img className='voditel_text_img1' src={IMG8} alt="" />
  </div>

 <div className="voditel_div_Span">
 <span className='voditel_text_span voditel_text_span1'>Для того, чтобы мы расмотрели вашу заявку:</span>
 </div>
  <div className="voditel_text1">
    <div className="vod_text_1">
      <div className="vod_text_1_kvad">
        <h2>01</h2>
      </div>
   <div className="suka_zaybal_bol_endi">
   <span className='vod_text_1_span_bu'>Быть пунктуальным, все делать вовремя.</span>
   </div>
    </div>
    <div className="vod_text_1">
      <div className="vod_text_1_kvad">
        <h2>02</h2>
      </div>
      <div className="suka_zaybal_bol_endi">
 <span className='vod_text_1_span_bu'>Если уметь <br /> Быть вежливым</span>
      </div>
     
    </div>
    <div className="vod_text_1">
      <div className="vod_text_1_kvad">
        <h2>03</h2>
      </div>
      <div className="suka_zaybal_bol_endi">
      <span className='vod_text_1_span_bu'>Отдыхать  <br />
в нерабочее время</span>
      </div>

    </div>

    <div className="vod_text_1">
      <div className="vod_text_1_kvad">
        <h2>04</h2>
      </div>
      <div className="suka_zaybal_bol_endi">
      <span className='vod_text_1_span_bu'>Четко соблюдать инструкции</span>
      </div>

    </div>
    <div className="vod_text_1">
      <div className="vod_text_1_kvad">
        <h2>05</h2>
      </div>
      <div className="suka_zaybal_bol_endi">
        <span className='vod_text_1_span_bu'>Уметь пользоваться современным телефоном</span>
      </div>
      
    </div>
  </div>
</div>

<div className="kelishuv_card">
  <div className="kel_card1">
  <div className="kel_card11_kopiya">
    <img className='kel_card1_dumaloq_img_2' src={IMG6} alt="" />
    <div className="kel_card1_dumaloq">
      <img className='kel_card1_dumaloq_img' src={IMG9} alt="" />
    </div>
    </div>
    <span>Если вы полностью <br /> соответствуете нашим запросам,</span>
    <h1>пожалуйста оставьте заявку:</h1>
    <div className="kel_card11">
    <div className="kel_card1_dumaloq">
      <img className='kel_card1_dumaloq_img' src={IMG9} alt="" />
    </div>
    <img className='kel_card1_dumaloq_img_2' src={IMG5} alt="" />
    </div>
  </div>
  <div className="kel_card2">
    <div className="kel_card2_radio">
      <div className="kel_card2_radio_1">
        <input onClick={()=>{radio_bol(0)}} className='radio_part_inp' type="radio" name="" id="" />
        <span>Компания</span>
      </div>
      <div className="kel_card2_radio_1">
      <input onClick={()=>{radio_bol(1)}} className='radio_part_inp' type="radio" name="" id="" />
        <span className='kel_card2_radio_1_span'>Физ.лицо</span>
      </div>
    </div>
    <input className='kel_card2_inp' id='1z' type="text" placeholder='Наименование организации'/><br />
    <input className='kel_card2_inp' id='2z' type="text" placeholder='ИНН'/><br />
    <input className='kel_card2_inp' id='3z' type="text" placeholder='Контактное лицо'/><br />
    <input className='kel_card2_inp' id='4z' type="number" placeholder='Телефон'/><br />
    <input className='kel_card2_inp' id='5z' type="text" placeholder='Сайт'/><br />
    <input className='kel_card2_inp' id='6z' type="email" placeholder='Email'/><br />
    <div className="vash_trans">
      <span className='vash_trans_span'>Ваш транспорт:</span>
      <div className="vash_trans1">
        <span className='vash_trans1_span'>Машины:</span><br />
        <div className="vash_trans1_patok1">
          <div className="lnnk">
          <button className='vash_trans1_patok1_but'>2,5м3 <img className='lnnk11_img' src={IMG10} alt="" /></button>
          <button className='vash_trans1_patok1_but'>3м3 <img className='lnnk11_img' src={IMG10} alt="" /></button>
          <button className='vash_trans1_patok1_but'>5м3 <img className='lnnk11_img' src={IMG10} alt="" /></button>
          </div>
          <div className="lnnk1">
          <button className='vash_trans1_patok1_but'>7м3 <img className='lnnk11_img' src={IMG10} alt="" /></button>
          <button className='vash_trans1_patok1_but'>9м3 <img className='lnnk11_img' src={IMG10} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="vash_trans1">
        <span className='vash_trans1_span'>Швинги:</span><br />
        <div className="vash_trans1_patok1">
          <div className="lnnk11">
          <button className='vash_trans1_patok1_but1'>2,5м3 <img className='lnnk11_img' src={IMG11} alt="" /></button>
          <button className='vash_trans1_patok1_but1'>3м3 <img className='lnnk11_img' src={IMG11} alt="" /></button>
          <button className='vash_trans1_patok1_but1'>5м3 <img className='lnnk11_img' src={IMG11} alt="" /></button>
          </div>
          <div className="lnnk111">
          <button className='vash_trans1_patok1_but1'>7м3 <img className='lnnk11_img' src={IMG11} alt="" /></button>
          <button className='vash_trans1_patok1_but1'>9м3 <img className='lnnk11_img' src={IMG11} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
    <button className='kel_card2_but'>Отправить запрос</button>
  </div>
</div>

<div className="tugashga_rasm">
  <img className='tugashga_rasm_img' src={IMG12} alt="" />
  <div className="tugashga_rasm_div">
    <div className="asdfghjkl">
    <h2>Наш сервис работает не только в Иркутске!</h2>
    <span className='tugashga_rasm_div_span'>В ближайший месяц запускаемся 
в Красноярске и в Улан-Удэ! </span><br />
<div className="qwertyuiop">
<span className='tugashga_rasm_div_span1'>Ждем партнеров для создания <span className='zxcvbnm'>уникального сервиса 
по доставке бетона в России!</span></span>
</div>
    </div>
    <img className='duvay_pj' src={IMG13} alt="" />
  </div>
</div>

</div>
        <Footer/>
    </div>
  )
  }
