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
        <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Что необходимо?</span>
        </div>
        <div className="zakaz_kvadrat_map">
          {zol.map((item,key)=>{
            return <div key={key} className="zakaz_kvadrat_map_card">
              <div className="card_ptich">
                <div onClick={()=>{yoqil(key)}} className="card_ptich_dumaloq">
                  <BsCheckLg className='card_ptich_dumaloq_ptich'/>
                </div>
              </div>
              <img src={item.img} alt="" /><br />
            <div className="wwse">
            <span className='map_span'>{item.name}</span>
            </div>
            </div>
          })}
         <div className="zakaz_kvadrat_map_card1">
              <div className="card_ptich">
                <div onClick={()=>{yoqil(3)}} className="card_ptich_dumaloq">
                  <BsCheckLg className='card_ptich_dumaloq_ptich'/>
                </div>
              </div>
             <div className="jklo">
             <span className='map_span1'>Специальный бетон</span><br />
             </div>
              <span className='map_span11'>Отправим ваш запрос <br /> на все заводы</span>
            </div>
        </div>
        <div className="zakaz_kvadrat_zagruska">
          <span>1/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>window.location="/home"} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{global2()}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div>
    </div>
  )
}
