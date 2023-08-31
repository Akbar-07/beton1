import React from 'react'
import "../css/Zakazbeton.css"
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import { useState } from 'react'
import IMG1 from "../img/m350 1.png"
import IMG2 from "../img/cement 1 (1).png"
import IMG3 from "../img/183973062b952e05464d21c9f08676f9 1.png"

import {BsCheckLg} from "react-icons/bs"




export default function Zakazbeton() {
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
  return (
    <div>
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
          <button className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>

        </div>
      </div>
    </div>
  )
}
