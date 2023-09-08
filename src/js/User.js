import React ,{useState} from 'react'
import Navbar from '../js/Navbar'
import '../css/User.css'
import user from '../img/Vector (13).png'
import qalam from '../img/qalam1.png'
import zalatoy from '../img/Group 164.png'
import biladim from '../img/Group 201 (1).png'
import IMG1 from "../img/m350 1.png"
import IMG2 from "../img/cement 1 (1).png"
import IMG3 from "../img/183973062b952e05464d21c9f08676f9 1.png"
import IMG5 from "../img/Group (5).png"
import IMG6 from "../img/Group (6).png"
import IMG7 from "../img/Group (7).png"
import IMG8 from "../img/Group (8).png"
import IMG9 from "../img/Group (9).png"
import IMG10 from "../img/Laptop.png"
import IMG11 from "../img/Debit Card.png"
import IMG12 from "../img/Coin In Hand.png"
import IMG13 from "../img/Money With Arrow.png"
import IMG14 from "../img/Group (11).png"
import {BsCheckLg} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import data from '../js/Data'
import skachat from '../img/material-symbols_download.png'
import koment from '../img/Group 207.png'
import skachat2 from '../img/Vector (2).png'

function yoqil(id){
    for (let i = 0; i < document.querySelectorAll(".card_ptich_dumaloq_ptich").length; i++) {
      if(id === i){
        document.querySelectorAll(".card_ptich_dumaloq_ptich")[i].style = "display:block;" 
        document.querySelectorAll(".zakaz_kvadrat_map_card")[i].style = "border:1px solid #FFCB13;"
      }
      else{
     document.querySelectorAll(".card_ptich_dumaloq_ptich")[i].style = "display:none;" 
     if(i!==3){
      document.querySelectorAll(".zakaz_kvadrat_map_card")[i].style = "border:1px solid #FFCB13;"
     }
      }
    }
  }
  function global2(){
  
   }

function modalochil(){
    document.querySelector(".user-modal").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function modalyopil(){
    document.querySelector(".user-modal").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`
}
function bonusmodal(){
    document.querySelector(".user-modal-bonus").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function modalbonusyopil(){
    document.querySelector(".user-modal-bonus").style=`display:nonoe`
    document.querySelector("body").style=`overflow: scroll;`
}

function buoyna1(){

}
function buoyna2(){

}
function pasgatext(){
  document.querySelector(".kotta-ichi-iassdk-asdd").style=`display:block;`
  document.querySelector(".bitta-krug-qlilife").style=`display:none`
}

function textyopil(){
  document.querySelector(".kotta-ichi-iassdk-asdd").style=`display:none;`
  document.querySelector(".bitta-krug-qlilife").style=`display:block`
}

function jonibek(params) {
  for (let i = 0; i < document.querySelectorAll('.ddd').length; i++) {
     if(i==params){
      document.querySelectorAll('.ddd')[i].style="display:block; transition: 2s !important;"
     }else{
      document.querySelectorAll('.ddd')[i].style="display:none; transition: 2s !important;"
     }
      
  }
}
function galochka(){
  var y= document.querySelector(".gakochka-och").style.display;
  if(y=="none"){
  document.querySelector(".gakochka-och").style.display="block";
  }else{
     document.querySelector(".gakochka-och").style.display="none";
  }
}

export default function User() {
    const [zag, setZag] = useState(1)
    const [zol, setZol] = useState([
        {
          img : IMG1,
          name : "Бетон"
        },
        {
          img : IMG2,
          name : "Пескобетон"
        },
        {
          img : IMG3,
          name : "Строительный раствор"
        },
      ])
      const [zol1, setZol1] = useState([
        {
          img : IMG10,
          name : "Онлайн"
        },
        {
          img : IMG11,
          name : "Перевод на карту"
        },
        {
          img : IMG12,
          name : "Наличные"
        },
        {
          img : IMG13,
          name : "Предоплата"
        },
      ])
  return (
    <div className='user'>
        <Navbar/>
        <div className="user-kotta">
            
            <div className="user-ichi">
                <div className='bir_div1'></div>
                <div className='ikki_div2'></div>
                <img className='user--img' src={user} alt="" />
{/* <div className="kattas">
<div className="user-tepa">
<h1>Иванов Петр <br /> Михайлович</h1>
<img src={qalam} alt="" />
</div>

<div className="cards_header">
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
</div>
</div> */}
<div className="user-tepa-qismi">
    <div className="user-tepa-kotta">
    <div className="user-name"><h2>Иванов Петр <br /> Михайлович</h2></div>
    <div className="user-qalam"><img onClick={()=>modalochil()} src={qalam} alt="" /></div>
    </div>
</div>
<div className="user-pas-qismi">
<div className="user_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="user_header">
    <p>Телефон:</p>
    <h3>8 900 800 90 80</h3>
</div>
<div className="user_header">
    <p>Email:</p>
    <h3>pochtabeton.ru</h3>
</div>
<div className="user-zalatoy" id='lalaalsyebalsa'>
<div className="yashokalatni-zayets">
    <img src={zalatoy} alt="" />
</div><span>Золотой партнер</span>
</div>
<div className="user-zalatoy">
<div className="yashokalatni-zayets1" onClick={()=>bonusmodal()}>
    <img src={biladim} alt="" /><span>12 000 бонусов</span>
</div>
</div>
</div>
<div className="user-media">
    <div className="user-media-tepa">
        <div className="user-media-name">
            <h2>Иванов Петр <br />
Михайлович</h2>
        </div>
        <div className="user-media-qalam">
            <img onClick={()=>modalochil()} src={qalam} alt="" />
        </div>
    </div>
    <div className="user-media-line"></div>
    <div className="user-media-malumotla">
        <div className="user-status-media">
            <p>Статус:</p> <span>Пользователь</span>
        </div>
                <div className="user-status-media">
            <p>Телефон:</p> <span>8 900 800 90 80</span>
        </div>
        <div className="user-status-media">
            <p>Email:</p> <span>pochtabeton.ru</span>
        </div>
    </div>
        <div className="user-media-line"></div>
        <div className="user-media-malumotla">
        <div className="user-zalatoy" >
<div className="yashokalatni-zayets">
    <img src={zalatoy} alt="" />
</div><span>Золотой партнер</span>
</div>
<div className="user-zalatoy">
<div className="yashokalatni-zayets1"  onClick={()=>bonusmodal()}>
    <img src={biladim} alt="" /><span>12 000 бонусов</span>
</div>
</div>
        </div>
</div>
            </div>




        </div>
        <div className="user-modal">
        <div className="login-kotta">
            
            <div className="teper-login33">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>modalyopil()}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1 className='ashdaislhdashfhsdaifp'>Изменить данные</h1>
              <br />
              <div className="input-user-form">
                <form action="">
                    <label>ФИО</label> <br />
                    <input type="text" placeholder='Имя' required /> <br />
                    <label>Телефон</label>
                    <input type="number" placeholder='Телефон' required /> <br />
                    <label>Email</label>
                    <input type="email" placeholder='Email' required /> <br />
                    <button>Сохранить изменения</button>
                </form>
              </div>
            </div>
            </div>
         </div>
        </div>
        <div className="user-modal-bonus">
        <div className="login-kotta">
            
            <div className="teper-login34">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>modalbonusyopil()}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1 className='ashdaislhdashfhsdaifp'>Начисление/списание <br />
бонусов</h1>
              <br />
              <div className="input-user-form1">
                <div className="mini-bonus-box">
                    <img src={biladim} alt="" /> <span>12 000 </span>
                    
                </div>
                <div className="mini-bonus-pasiga">
                <p>Накоплено бонусов</p>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span className='red-span-aksiya'> +20 бонусов</span>
                    </div>
                 </div>
                 <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
              </div>
            </div>
            </div>
         </div>
        </div>
        <div className="user-vutton-btn">
            <div className="udser-vtn-kotta">
                <button  onClick={()=>buoyna1()}>Существующие заказы</button>
                <button onClick={()=>buoyna2()}>Сделать новый заказ</button>
            </div>
            
        </div>
        <div class="table">
            <div className="table-tepa-qismi">
                <p className='datasdaljdad'>Номер заказа</p>
                <p className='adres-left-position'>Адрес</p>
                <p className='data-vreminiya-db'>Дата, время</p>
                <p className='data-marka-dbb'>Марка</p>
                <p className='data-privodsta-amma'>Производитель</p>
                <p className='data-kalitestvo'>Кол-во</p>
                <p className='data-dopoliteer'>Дополнительные опции</p> 
                <p className='data-stoimas'>Стоимость</p>
                <p className='data-status'>Статус</p>
            </div>
{data.productData.map((item,key)=>{
    return(
        
        <div onClick={()=>jonibek(key)} class="tr">
    <div class="tepa_td">
    <div class="td" ><span className='td_data'>230223 230223</span></div>
    <div class="td" ><span className='td_addres'>{item.address}</span></div>
    <div class="td"><span className='td_data1'>{item.date} <br /> {item.date1} </span></div>
    <div class="td">
    <p className='td_beton'>бетон</p>
    <span className='yd_marka'>{item.marka}</span></div>
    <div class="td"><span className='td_beton'>Производитель</span></div>
    <div class="td"><span className='td_beton'>20 м3</span></div>
    <div class="td"><span className='td_beton'>Дополнительная опция</span></div>
    <div class="td"><h4 className='yd_marka'>200 000 ₽</h4></div>
    <div class="td"><p className='td_yoldami'>Выполнен</p></div>
    </div>
    <div class="ddd">
        <div class="past_td">
            <div className="oplata-blocc">
                <p>Оплата:</p>
                <h4>Наличные</h4>
            </div>
            <div className="oplata-blocc">
                <p>Машина:</p>
                <h4>3м3</h4>
            </div>
            <div className="oplata-blocc">
                <p>Швинг:</p>
                <h4>15м</h4>
            </div>
                <div className="oplata-blocc">
                <p>Время работы швинга:</p>
                <h4>3 часа</h4>
            </div>
            <div className="oplata-blocc">
                <p>Интервал подачи машин:</p>
                <h4>3 часа</h4>
            </div>
            <div className="oplata-blocc">
                <p>Доп:</p>
                <p>Пусковая смесь, подвоз на участок</p>
            </div>
            <div className="izmenit-zakaz-but">
                <div className="dumoloadasad">
                   <img src={qalam} alt="" /> 
                </div>
                <p>Изменить <br />
заказ</p>
            </div>
        </div>
        <div class="past_td1">
            <div className="oplata-blocc">
                <p>Стоимость бетона:</p>
                <h4>5 000 ₽</h4>
            </div>
            <div className="oplata-blocc">
                <p>Стоимость доставки:</p>
                <h4>5 000 ₽</h4>
            </div>
            <div className="oplata-blocc">
                <p>Стоимость доп.услуг:</p>
                <h4>5 000 ₽</h4>
            </div>
                <div className="oplata-blocc">
                <p>Итого:</p>
                <h4>5 000 ₽</h4>
            </div>
            <div className="oplata-button-xzxz">
                <img src={biladim} alt="" /><span>12 000 бонусов начисленно</span>
            </div>
            <div className="skachat-cjekk">
                <img src={skachat} alt="" /><span>Скачать чек</span>
            </div>
        </div>
        <div className="button-asdasabjdfsdgsf">
                <button>Отменить заказ</button>
                <button>Оставить претензию</button>
                <button>Связаться с водителем</button>
                <button>Связаться с логистом</button>
                <div className="logogogogogsa">
                    <div className="dumoasdasdsada">
                    <img src={koment} alt="" />
                    </div>
                    <span>Оставить отзыв</span>
                    
                </div>
            </div>
        {/* <div class="past_td">
            <div class="td">
            <p>Стоимость бетона:</p>
            <h1>5 000 ₽</h1></div>
            <div class="td">
            <p>Стоимость доставки:</p>
            <h1>5 000 ₽</h1></div>
            <div class="td">
            <p>Стоимость доп.услуг:</p>
            <h1>5 000 ₽</h1></div>
            <div class="td">
            <p>Итого:</p>
            <h1>5 000 ₽</h1></div>
            <div class="td">
            <h1>12 000 бонусов начисленно</h1></div>
        </div>
        <div class="button_c">
            <button>Отменить заказ</button>
            <button>Оставить претензию</button>
            <button>Связаться с водителем</button>
            <button>Связаться с логистом</button>
           <div style={{display:"flex"}}> <button>Оставить отзыв</button>
            <div ></div></div>
        </div> */}
    </div>
    </div>
        
    )
})}
</div>
<div className="tablemedia-mentor">
    <div className="table-media-ichi">
        <div className="oq-fon-media-bla" >
            <div className="oq-oeoe">
            <div className="oq-ran-chap-tarap-text">
                <p>Номер заказа</p>
                <p>Адрес</p>
                <p>Дата, время</p>
                <p>Марка</p>
                <p>Производитель</p>
                <p>Кол-во</p>
                <p>Доп. опции</p>
                <p>Стоимость</p>
                <p>Статус</p>
                </div>
                <div className="oq-ran-ong-tarap-text">
                <p>230223 230223</p>
                <p>г. Воронеж, ул. Старая, д. 62</p>
                <p>23.02.23 13:00-16:00</p>
                <p>Бетон М300</p>
                <p>Производитель</p>
                <p>20шт.</p>
                <p>Дополнительные опции</p>
                <p>200 000 ₽</p>
                <p className='bajarilddiddi'>Выполнен</p>
                </div>
            </div>
            <div className="pastarapiadta-pasga-koroc">
                <div className="bitta-krug-qlilife" onClick={()=>pasgatext()}>
                <box-icon name='down-arrow-alt' color="white" ></box-icon>
                </div>
            </div>
<div className="kotta-ichi-iassdk-asdd">
                <div className="oq-fon-line"></div>
            <div className="oq-oeoe">
            <div className="oq-ran-chap-tarap-text">
                <p>Оплата</p>
                <p>Тариф</p>
                <p>Машина</p>
                <p>Швинг</p>
                <p>Время шв.</p>
                <p>Интервал</p>
                <p>Доп. опции</p>
                </div>
                <div className="oq-ran-ong-tarap-text">
                <p>Наличные</p>
                <p>Эконом</p>
                <p>3м3</p>
                <p>15м</p>
                <p>3 часа</p>
                <p>3 часа   </p>
                <p>Дополнительные опции</p>
                </div>
                
            </div>
            <div className="izmenit-zakaz-but23">
                <div className="dumoloadasad22">
                   <img src={qalam} alt="" /> 
                </div>
                <p>Изменить 
заказ</p>
            </div>
            <div className="oq-fon-line"></div>
            <div className="mayli-qolda-yozarkanmande-bla">
                <div className="bitta-kotta-mayli-bla">
                    <div className="bitta-block-page">
                        <div className="bblllfla">
                            <p>Стоимость бетона:</p>
                            <h4>5 000 ₽</h4>
                        </div>
                        <div className="bblllfla">
                            <p>Стоимость доставки:</p>
                            <h4>5 000 ₽</h4>
                        </div>
                        <div className="bblllfla">
                            <p>Стоимость доп.услуг:</p>
                            <h4>5 000 ₽</h4>
                        </div>
                    </div>
                    <div className="bitta-block-page2">
                    <div className="bblllfla">
                            <p>Итого:</p>
                            <h4 className='qizilchekkk'>5 000 ₽</h4>
                        </div>
                    </div>
                 
                </div>
                <div className="oplata-button-xzxz11">
                <img src={biladim} alt="" /><p>12 000 бонусов начисленно</p>
            </div>
            <div className="skachat-cjekk">
                <div className="asdasdsaadss"><img src={skachat2} alt="" /></div><p className='asdasajsdsasd'>Скачать чек</p>
            </div>
            </div>
            <div className="oq-fon-line"></div>
            <div className="buttonla-kopde-juda-koppp">
                <button>Оставить претензию</button> <br />
                <button>Связаться с водителем</button> <br />
                <button>Связаться с логистом</button><br />
                <button>Отменить заказ</button><br />
            </div>
            <div className="logogogogogsa">
                    <div className="dumoasdasdsada">
                    <img src={koment} alt="" />
                    </div>
                    <p>Оставить отзыв</p>
                    
                </div>
                <div className="pastarapiadta-pasga-koroc1">
                <div className="bitta-krug-qlilife12" onClick={()=>textyopil()}>
                <box-icon name='down-arrow-alt' rotate='180' color="white" ></box-icon>
                </div>
            </div>
</div>
        </div>
        
    </div>
</div>
    </div>
  )
}
