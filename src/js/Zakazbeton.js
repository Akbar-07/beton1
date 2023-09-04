import React from 'react'
import "../css/Zakazbeton.css"
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import { useState } from 'react'
import IMG1 from "../img/m350 1.png"
import IMG2 from "../img/cement 1 (1).png"
import IMG3 from "../img/183973062b952e05464d21c9f08676f9 1.png"
import kkk from '../img/1548993561_log 1.png'
import logo from '../img/logo (1).png'
import logo1 from '../img/logop.png'
import acardion from '../img/acardion1.png'
import acardion2 from '../img/acardion2.png'
import acardion3 from '../img/ph_drop-fill.png'
import acardion5 from '../img/acardion5.png'
import acardion6 from '../img/acardion6.png'
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
import {FaCalculator} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"

export default function Zakazbeton() {
  function chiqaqol(){
    var y= document.querySelector(".akardon-pasdia-chiqadi-but").style.display;
    if(y==="none"){
    document.querySelector(".akardon-pasdia-chiqadi-but").style.display="block";
    }else{
       document.querySelector(".akardon-pasdia-chiqadi-but").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda p").style.color;
    if(a==="black"){
    document.querySelector(".akardon-text-joyda p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda p").style.color="black";
    }
}
function chiqaqol1(){
    var y= document.querySelector(".alalalalallaalalalal").style.display;
    if(y==="none"){
    document.querySelector(".alalalalallaalalalal").style.display="block";
    }else{
       document.querySelector(".alalalalallaalalalal").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda1 p").style.color;
    if(a==="black"){
    document.querySelector(".akardon-text-joyda1 p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda1 p").style.color="black";
    }


}
function chiqaqol2(){
  var y= document.querySelector(".alalalalallaalalalal1").style.display;
  if(y==="none"){
  document.querySelector(".alalalalallaalalalal1").style.display="block";
  }else{
     document.querySelector(".alalalalallaalalalal1").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda2 p").style.color;
  if(a==="black"){
  document.querySelector(".akardon-text-joyda2 p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda2 p").style.color="black";
  }
}
function chiqaqol33(){
  var y= document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display;
  if(y==="none"){
  document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="block";
  }else{
     document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda3 p").style.color;
  if(a==="black"){
  document.querySelector(".akardon-text-joyda3 p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda3 p").style.color="black";
  }
}
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
  const [zag, setZag] = useState(1)

  function global2(){
    document.querySelector(".zakaz_kvadrat_zagruska").style = "margin-top: 180px;"
    setZag(2) 
   }
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
  const [kamaz, setKamaz] = useState([
    {
      img : IMG6,
      name : "Эконом"
    },
    {
      img : IMG7,
      name : "Стандарт"
    },
    {
      img : IMG8,
      name : "Экспресс"
    },
  ])
function bosilganda(id){
for (let i = 0; i < document.querySelectorAll(".kvad_map_karoch_card1_dumaloq").length; i++) {
  if(id === i ){
    document.querySelectorAll(".iconchek")[i].style = "display:block;"
    document.querySelectorAll(".kvad_map_karoch_card")[i].style = "border:1px solid #FFCB13;"
  }
  else{
    document.querySelectorAll(".iconchek")[i].style = "display:none;"
    document.querySelectorAll(".kvad_map_karoch_card")[i].style = "border:none;"
  }
}
}
const [num, setNum] = useState(0)
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [num3, setNum3] = useState(0)

function check_ochil(id){
  for (let i = 0; i < document.querySelectorAll(".oplata_map_card_dumaloq").length; i++) {
    if(id === i){
      document.querySelectorAll(".oplata_map_card_dumaloq_chek")[i].style = "display:block"
      document.querySelectorAll(".oplata_map_card")[i].style = "border:1px solid #FFCB13"
    }
    else{
      document.querySelectorAll(".oplata_map_card_dumaloq_chek")[i].style = "display:none"
      document.querySelectorAll(".oplata_map_card")[i].style = "border:none"
    }
  }
}

  return (
    <div>
      {zag === 1 ? <div className="zakaz_kvadrat">
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
        </div> : ""}
      {zag === 2 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Производитель</span>
        </div>
        <div className="zagrus_1">
          <div className="zagrus_1_sozi">
            <span>М50</span>
            <span>М200</span>
            <span>М400</span>
          </div>
          <input min={1} max={3} className='range1' type="range" name="" id="" />
        </div>
        <div className="eng-kottade-ulani-ushab-turadi da_boladi">
                        <div className="eng-kottade-scrol eng-kottade-scrol1">
                        <table className='tab_1'>
                            <thead>
                            <tr>
                            <th className='ana-atble-qildik-p'>Производитель</th>
                            <th className='ana-atble-qildik-p'>Марка</th>
                            <th className='ana-atble-qildik-p'>Опции</th>
                            <th className='ana-atble-qildik-p'>Цена</th>
                            </tr>
                            </thead>

          <tbody>
            <tr className='tr_1'>
              <th><img src={kkk} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr className='tr_1'>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
          </tbody>
        </table>
            </div>
            <div className="eng-kotta-ong-tarap-acardion eng-kotta-ong-tarap-acardion1">
                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion} alt="" />
                                </div>
                                <div className="akardon-text-joyda" >
                                    <p onClick={()=>chiqaqol()}>Подвижность</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="akardon-pasdia-chiqadi-but">
                                    <button>П3</button>
                                    <button>П4</button>
                                </div>
                            </div>
                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion3} alt="" />
                                </div>
                                <div className="akardon-text-joyda1"  >
                                    <p onClick={()=>chiqaqol1()}>Гидрофобная добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol1()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="alalalalallaalalalal">
                                <div className="akardon-pasdia-chiqadi-but1">
                                    <div className="ana-pachti-tugadi-inpu-radio">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Да</span>
                                        </div>
                                        <div className="ana-pachti-tugadi-inpu-radio1">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Нет</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion5} alt="" id='nmagaaaa-unaqa' />
                                </div>
                                <div className="akardon-text-joyda2"  >
                                    <p onClick={()=>chiqaqol2()}>Фиброволокно</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt=""   onClick={()=>chiqaqol2()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="alalalalallaalalalal1">
                                <div className="akardon-pasdia-chiqadi-but1">
                                    <div className="ana-pachti-tugadi-inpu-radio">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Да</span>
                                        </div>
                                        <div className="ana-pachti-tugadi-inpu-radio1">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Нет</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion6} alt="" id='nmagaaaa-unaqa' />
                                </div>
                                <div className="akardon-text-joyda3"  >
                                    <p onClick={()=>chiqaqol33()}>Противоморозная  <br />
добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol33()} />
                                </div>
                            </div>

                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="axaxaxsaxasxasxasxasxs2">
                                <div className="akardon-pasdia-chiqadi-but4">
                                    <button>-5°C</button>
                                    <button>-10°C</button>
                                    <button>--15°C</button>
                                    <button>-20°C</button>
                                    <button>-25°C</button>
                                </div>
                                </div>
                            </div>
                        </div>
             </div>
        <div className="zakaz_kvadrat_zagruska">
          <span>2/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(1)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(3)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""}
      {zag === 3 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Количество</span>
        </div>
       <div className="kan_div">
        <div className="kan_div1">
          <span className='kan_div1_span'>{num}<span className='kan_div1_span2'>м3</span></span><br />
          <input min={1} max={150} onChange={(e)=>setNum(e.target.value)} className='range_2' type="range" name="" id="" />
        </div>
        <div className="kan_div2">
          <h2>Не знаете количество?</h2>
          <span className='kan_div1_span3'>Рассчитайте онлайн в калькуляторе</span><br />
          <button onClick={()=>window.location="/kankulyator"} className='kan_div1_but'><FaCalculator/> Калькулятор</button>
        </div>
       </div>
        <div className="zakaz_kvadrat_zagruska">
          <span>3/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(2)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(4)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""}
      {zag === 4 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Куда?</span>
        </div>
        <div className="kuda_div">
          <div className="kuda_div1">
            <input maxLength={100} className='kuda_div1_input' type="text" placeholder='Введите адрес'/><br />
            <BiSearch className='search_icon'/>
            <div className="kuda_div11">
            <img src={IMG5} alt="" />
            <span className='kuda_div11_span'>Открыть карту</span>
            </div>
          </div>
          <div className="kuda_div1">
            <div className="kuda_div1_inp">
              <div className="kuda_div2">
              <span>В скольки километрах от дороги <br /> находится Ваш участок?</span><br />
              </div>
              <span className='kuda_span_0'>{num1}</span><br />
              <input max={10000} min={1} onChange={(e)=>setNum1(e.target.value)} className='range_3' type="range" />
            </div>
            <div className="kuda_div1_inp kuda_div1_inp_kop">
              <input className='checkbox_inp' type="checkbox" name="" id="" />
              <div className="zzzzzzzzzzzzzzzzzzzzzzzzz">
              <span>Имеются ли препятствия для большой машины  на пути подъезда к вашему участку?</span>
              </div>
            </div>
            <div className="kuda_div1_inp">
              <div className="kuda_div2">
              <span>Ширина проезда (м)</span><br />
              </div>
              <span className='kuda_span_0'>{num2}</span><br />
              <input min={1} max={150} onChange={(e)=>setNum2(e.target.value)} className='range_3' type="range" />
            </div>
            <div className="kuda_div1_inp">
              <div className="kuda_div2">
              <span>Ограничения по высоте (м)</span><br />
              </div>
              <span className='kuda_span_0'>{num3}</span><br />
              <input  min={1} max={150} onChange={(e)=>setNum3(e.target.value)} className='range_3' type="range" />
            </div>
          </div>
        </div>
        <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop">
          <span>4/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(3)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(5)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""}  
      {zag === 5 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Тариф</span>
        </div>
        <div className="kvad_map_karoch">
        {kamaz.map((item,key)=>{
          return <div key={key} className="kvad_map_karoch_card">
            <div className="kvad_map_karoch_card1">
              <img src={IMG9} alt="" />
              <div onClick={()=>{bosilganda(key)}} className="kvad_map_karoch_card1_dumaloq">
              <BsCheckLg className='iconchek'/>
              </div>
            </div>
            <img src={item.img} alt="" /><br />
           <div className="lllllllllllllllllllllllll">
           <span className='kvad_map_karoch_card_span'>{item.name}</span>
           </div>
          </div>
        })}
        </div>
        <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop">
          <span>5/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(4)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(6)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""} 
      {zag === 6 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Когда?</span>
        </div>


        <div className="kogda_div">
          <div className="kogda_div1">
            <button className='kogda_div1_but1'>Как можно быстрее</button>
            <button className='kogda_div1_but2'>Сегодня</button>
            <button className='kogda_div1_but3'>Предварительный заказ</button>
            <div className="kogda_div1_check">
              <input className='checkbox_3' type="checkbox" name="" id="" />
              <span>Разбить заказ на части</span>
            </div>
          </div>
          <div className="kogda_div2">
            <div className="kogda_div2_1">
              <div className="kogda_div2_1_voht"><span>9:00 - 12:00</span></div>
              <div className="kogda_div2_1_voht"><span>12:00 - 15:00</span></div>
              <div className="kogda_div2_1_voht"><span>12:00 - 15:00</span></div>
              <div className="kogda_div2_1_voht"><span>18:00 - 21:00</span></div>
            </div>
            <div className="kogda_div2_2">
             <div className="oplkjnm">
             <div className="kogda_div2_2_sanasi">
                <div className="kogda_div2_2_sanasi_vohti">
                  <span>06.07.23</span>
                </div>
                <select className='select_kal'>
                  <option value="">20м3</option>
                  <option value="">30м3</option>
                  <option value="">40м3</option>
                  <option value="">50м3</option>
                  <option value="">60м3</option>
                </select>
              </div>
              <div className="kogda_div2_2_sanasi">
                <div className="kogda_div2_2_sanasi_vohti">
                  <span>06.07.23</span>
                </div>
                <select className='select_kal'>
                  <option value="">20м3</option>
                  <option value="">30м3</option>
                  <option value="">40м3</option>
                  <option value="">50м3</option>
                  <option value="">60м3</option>
                </select>
              </div>
             </div>
              <div className="kogda_div2_2_calendari">
              <div class="calendar"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop">
          <span>6/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(5)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(7)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""}  
        {zag === 7 ? <div className="zakaz_kvadrat">
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Способ оплаты</span>
        </div>

        <div className="oplata_div">
          <div className="oplata_map">
          {zol1.map((item,key)=>{
            return <div key={key} className="oplata_map_card">
              <div className="oplata_map_card_img">
                <img src={IMG14} alt="" />
                <div onClick={()=>{check_ochil(key)}} className="oplata_map_card_dumaloq">
                  <BsCheckLg className='oplata_map_card_dumaloq_chek'/>
                </div>
              </div>
              <div className="oplata_map_card_img_rasm">
                <img src={item.img} alt="" />
              </div>
              <div className="oplata_map_card_img_span">
                <span>{item.name}</span>
              </div>
            </div>
          })}
          </div>
          <div className="oplata_div_sozi">
            <div className="oplata_div_sozi111111">
            <span className='oplata_div_sozispan1'>С какой купюры потребуется сдача?</span><br />
            </div>
            <div className="oplata_div_input">
            <input className='kuda_div1_input' type="text"  placeholder='Поле для ввода'/><br />
            </div>
            <span className='oplata_div_sozispan2'>Если сумма заказа <span className='oplata_div_sozispan3'>превышает 150000</span> может потребоваться <span className='oplata_div_sozispan3'>предоплата в 5000 рублей.</span></span>
          </div>


        </div>
      
        <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop">
          <span>7/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(6)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(8)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""}   
      </div>
   
  )
}
