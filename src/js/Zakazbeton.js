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
import wal from '../img/Group 100.png'
import prima from '../img/Group 201.png'
import iconbla from '../img/Group 301.png'
import zakazbeton from '../img/Group (15).png'
import zakazbeton1 from '../img/Group (16).png'

import {BsCheckLg} from "react-icons/bs"
import {FaCalculator} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import wal1 from '../img/Group 100.png'
import mediaicon1 from '../img/497ab60ab79f80d6177faa511e5df442 2 (1).png'
import betonmedia from '../img/logo (2).png'
import betonmedia1 from '../img/logop(1).png'
import betonmedia2 from '../img/Screenshot_7_lmp3jpq1 1.png'
import otkritkartu from '../img/Group 344.png'
import money1 from '../img/Coin In Hand.png'
import nout from '../img/Laptop.png'
import moneyy from '../img/Money With Arrow.png'
import karta from '../img/Debit Card (1).png'
import alert from '../img/Alert.png'
import nazad from '../img/Group 200.png'
import qum from '../img/qum.png'
import bilmadim from '../img/183973062b952e05464d21c9f08676f9 1.png'
import canculator from '../img/canculator.png'
import standart from '../img/standart.png'
import primi from '../img/primi.png'
import komp from '../img/Laptop.png'
import mini from '../img/mini-kamaz.png'
import m350 from '../img/m350 1.png'
import { useEffect } from 'react'
import axios from 'axios'
import url from './Host'



function mediayon(){
  document.querySelector(".beton-blcok-media").style=`border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media").style=`background: #FFCB13;`

  document.querySelector(".beton-blcok-media2").style=`border: 1px solid white;`
  document.querySelector(".sariqblaaa-media2").style=`background: white;`

  document.querySelector(".beton-blcok-media3").style=`border: 1px solid white;`
  document.querySelector(".sariqblaaa-media3").style=`background: white;`
}
function mediayon1(){
  document.querySelector(".beton-blcok-media2").style=`border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media2").style=`background: #FFCB13;`

  document.querySelector(".beton-blcok-media").style=`border: 1px solid white;`
  document.querySelector(".sariqblaaa-media").style=`background: white;`

  document.querySelector(".beton-blcok-media3").style=`border: 1px solid white;`
  document.querySelector(".sariqblaaa-media3").style=`background: white;`
}

function mediayon2(){

  document.querySelector(".beton-blcok-media").style=`border: 1px solid  white;`
  document.querySelector(".sariqblaaa-media").style=`background: white;`

  document.querySelector(".beton-blcok-media3").style=`border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media3").style=`background: #FFCB13;`


  document.querySelector(".beton-blcok-media2").style=`border: 1px solid white;`
  document.querySelector(".sariqblaaa-media2").style=`background: white;`

}
function tex(){
  var y= document.querySelector(".akardon-pasdia-chiqadi-but-media").style.display;
  if(y=="none"){
  document.querySelector(".akardon-pasdia-chiqadi-but-media").style.display="block";
  }else{
     document.querySelector(".akardon-pasdia-chiqadi-but-media").style.display="none";
  }
}
function tex1(){
  var y= document.querySelector(".alalalalallaalalalal-media").style.display;
  if(y=="none"){
  document.querySelector(".alalalalallaalalalal-media").style.display="block";
  }else{
     document.querySelector(".alalalalallaalalalal-media").style.display="none";
  }
}
function tex2(){
  var y= document.querySelector(".alalalalallaalalalal12").style.display;
  if(y=="none"){
  document.querySelector(".alalalalallaalalalal12").style.display="block";
  }else{
     document.querySelector(".alalalalallaalalalal12").style.display="none";
  }
}
function tex3(){
  var y= document.querySelector(".axaxaxsaxasxasxasxasxs2-media").style.display;
  if(y=="none"){
  document.querySelector(".axaxaxsaxasxasxasxasxs2-media").style.display="block";
  }else{
     document.querySelector(".axaxaxsaxasxasxasxasxs2-media").style.display="none";
  }
}
function kompaniya(){
  document.querySelector(".beton-blcok-media-kom").style=`border: 1.5px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media-kom").style=`background:#FFCB13;`

  document.querySelector(".beton-blcok-media-kom1").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom1").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom2").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom2").style=`background:white;`

      document.querySelector(".beton-blcok-media-kom3").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom3").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom4").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom4").style=`background:white;`
}
function kompaniya1(){
  document.querySelector(".beton-blcok-media-kom1").style=`border: 1.5px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media-kom1").style=`background:#FFCB13;`

  document.querySelector(".beton-blcok-media-kom").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom").style=`background:white;`

      document.querySelector(".beton-blcok-media-kom2").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom2").style=`background:white;`

      document.querySelector(".beton-blcok-media-kom3").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom3").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom4").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom4").style=`background:white;`
}

function kompaniya2(){
  document.querySelector(".beton-blcok-media-kom2").style=`border: 1.5px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media-kom2").style=`background:#FFCB13;`

  document.querySelector(".beton-blcok-media-kom1").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom1").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom").style=`background:white;`
  
  document.querySelector(".beton-blcok-media-kom3").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom3").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom4").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom4").style=`background:white;`

}
function kompaniya3(){
  document.querySelector(".beton-blcok-media-kom2").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom2").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom1").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom1").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom3").style=`border: 1.5px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media-kom3").style=`background:#FFCB13;`

  document.querySelector(".beton-blcok-media-kom4").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom4").style=`background:white;`
}
function kompaniya4(){
  document.querySelector(".beton-blcok-media-kom2").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom2").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom1").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom1").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom3").style=`border: 1.5px solid white;`
  document.querySelector(".sariqblaaa-media-kom3").style=`background:white;`

  document.querySelector(".beton-blcok-media-kom4").style=`border: 1.5px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media-kom4").style=`background:#FFCB13;`
}

function mediayon3(){
  document.querySelector(".beton-blcok-media4").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media4").style=` background: #FFCB13;`

      document.querySelector(".beton-blcok-media5").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media5").style=` background: white;`

  
  document.querySelector(".beton-blcok-media6").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media6").style=` background: white;`
}
function mediayon4(){
  document.querySelector(".beton-blcok-media4").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media4").style=` background: white;`

  document.querySelector(".beton-blcok-media5").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media5").style=` background: #FFCB13;`

  document.querySelector(".beton-blcok-media6").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media6").style=` background: white;`
}

function mediayon5(){
  document.querySelector(".beton-blcok-media4").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media4").style=` background: white;`

  document.querySelector(".beton-blcok-media5").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media5").style=` background: white;`

  document.querySelector(".beton-blcok-media6").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media6").style=` background: #FFCB13;`
}
function qoraaaaa(){
  document.querySelector(".btn-btn1-qachon").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%); color:white`;

  document.querySelector(".btn-btn1-qachon1").style=`background:none; color:black`;
  document.querySelector(".btn-btn1-qachon2").style=`background:none; color:black`;

  document.querySelector(".tez-bosa-boldi-nx").style=`display:block`
  document.querySelector(".bugun-bosa-boldi-nx").style=`display:none`
  document.querySelector(".keyn-bosa-boldi-nx").style=`display:none`
}
function qoraaaaa1(){
  document.querySelector(".btn-btn1-qachon1").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%); color:white`;

  document.querySelector(".btn-btn1-qachon").style=`background:none; color:black`;
  document.querySelector(".btn-btn1-qachon2").style=`background:none; color:black`;

  document.querySelector(".bugun-bosa-boldi-nx").style=`display:block`
      document.querySelector(".tez-bosa-boldi-nx").style=`display:none`
  document.querySelector(".keyn-bosa-boldi-nx").style=`display:none`

}
function qoraaaaa2(){
  document.querySelector(".btn-btn1-qachon2").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%); color:white`;
  document.querySelector(".btn-btn1-qachon").style=`background:none; color:black`;
  document.querySelector(".btn-btn1-qachon1").style=`background:none; color:black`;

  document.querySelector(".keyn-bosa-boldi-nx").style=`display:block`
  document.querySelector(".bugun-bosa-boldi-nx").style=`display:none`
  document.querySelector(".tez-bosa-boldi-nx").style=`display:none`
}
// axaxaxsaxasxasxasxasxs2

function eeeeee(){
  document.querySelector(".beton-blcok-media9").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media9").style=` background:#FFCB13;`

  document.querySelector(".beton-blcok-media10").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media10").style=` background:white;`

    document.querySelector(".beton-blcok-media11").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media11").style=` background:white;`

        document.querySelector(".beton-blcok-media12").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media12").style=` background:white;`
}
function eeeeee1(){
  document.querySelector(".beton-blcok-media10").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media10").style=` background:#FFCB13;`

  document.querySelector(".beton-blcok-media9").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media9").style=` background:white;`

  document.querySelector(".beton-blcok-media11").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media11").style=` background:white;`

  document.querySelector(".beton-blcok-media12").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media12").style=` background:white;`
}
function eeeeee2(){
  document.querySelector(".beton-blcok-media11").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media11").style=` background:#FFCB13;`

  
  document.querySelector(".beton-blcok-media12").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media12").style=` background:white;`
  
  document.querySelector(".beton-blcok-media9").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media9").style=` background:white;`

     
  document.querySelector(".beton-blcok-media10").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media10").style=` background:white;`
}
function eeeeee3(){
  document.querySelector(".beton-blcok-media9").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media9").style=` background:white;`

  document.querySelector(".beton-blcok-media12").style=` border: 1px solid #FFCB13;`
  document.querySelector(".sariqblaaa-media12").style=` background:#FFCB13;`

  document.querySelector(".beton-blcok-media10").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media10").style=` background:white;`

  document.querySelector(".beton-blcok-media11").style=` border: 1px solid white;`
  document.querySelector(".sariqblaaa-media11").style=` background:white;`
}

export default function Zakazbeton() {

  const [startDate, setStartDate] = useState(new Date());
  
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
const [data,setData] =useState(0)
const [data1,setData1] =useState(0)
const [data2,setData2] =useState(0)
const [data3,setData3] =useState(0)
const [data4,setData4] =useState(0)
const [data5,setData5] =useState(0)
  const [zol, setZol] = useState([{}])
  useEffect(()=>{
    axios.get(`${url}/api/category`).then(res=>{
        setZol(res.data)
    }).catch(err=>{
    
    })
  },[])
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
        document.querySelectorAll(".zakaz_kvadrat_map_card")[i].style = "border:none;"
     document.querySelectorAll(".card_ptich_dumaloq_ptich")[i].style = "display:none;" 
      }
    }
  }
 
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

const [gradus, setGradus] = useState([{}])
useEffect(()=>{
    axios.get('https://dastafka-back.onrender.com/api/sovuqlik').then(res=>{
    setGradus(res.data)
}).catch(err=>{
    alert("xato")
})
},[])
const [shving, senShving] = useState([{}])
useEffect(()=>{
    axios.get('https://dastafka-back.onrender.com/api/shving').then(res=>{
        senShving(res.data)
    }).catch(err=>{
        alert(".xatolar")
    })
})
const [marka1, setMarka1] = useState([])
useEffect(()=>{
    axios.get(`${url}/api/marka`).then(res=>{
        setMarka1(res.data)
    }).catch(err=>{
        alert("vbnm")
    })
},[])
const [mashina3, setMashina3] = useState([])
useEffect(()=>{
    axios.get(`${url}/api/mashina`).then(res=>{
        setMashina3(res.data)
    }).catch(err=>{
        alert("popi")
    })
})
const [kamaz, setKamaz] = useState([

  ])
useEffect(()=>{
    axios.get(`${url}/api/tarif`).then(res=>{
        setKamaz(res.data)
    }).catch(err=>{
        alert("salommm")
    })
})
  return (
    <div>
      {zag === 1 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd1'>
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
              <img className='dsfghjklikujyht' src={item.image} alt="" /><br />
            <div className="wwse">
            <span className='map_span'>{item.title}</span>
         
            </div>
           <div className="poklmn">
           <span className='map_span11'>{item.description}</span>
           </div>
            </div>
          })}
         {/* <div className="zakaz_kvadrat_map_card1">
              <div className="card_ptich">
                <div onClick={()=>{yoqil(3)}} className="card_ptich_dumaloq">
                  <BsCheckLg className='card_ptich_dumaloq_ptich'/>
                </div>
              </div>
             <div className="jklo">
             <span className='map_span1'>Специальный бетон</span><br />
             </div>
             
            </div> */}
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
      {zag === 2 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd2'>
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Производитель</span>
        </div>
        <div className="zagrus_1">
          <div className="zagrus_1_sozi">
            {marka1.map(item=>{
                return(
                    <div>
                        <span>{item.title}</span> 
                    </div>
                )
            })}
           
            {/* <span>М200</span>
            <span>М400</span> */}
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
                                {gradus.map((item,key)=>{
                                        return (<div>
                                             <button key={key}>-{item.gradus}C</button>
                                        </div>
                                            
                                             ) 
                                    })}
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
      {zag === 3 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd3'>
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
      {zag === 4 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd4'>
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
      {zag === 5 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd5'>
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
            <img className='lpplmn' src={item.image} alt="" /><br />
           <div className="lllllllllllllllllllllllll">
           <span className='kvad_map_karoch_card_span'>{item.title}</span>
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
      {zag === 6 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd6'>
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
              <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
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
        {zag === 7 ? <div className="zakaz_kvadrat" id='suasjdasdsajjsnd7'>
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
      {zag === 8 ? <div className="zakaz_kvadrat1" id='suasjdasdsajjsnd8' >
        <div className="zakaz_kvadrat_div">
        <span className='zakaz_kvadrat_span'>Пожелания к заказу</span>
        </div>
        <div className="jelaniya-pozakazu">
        <div className="lalala-nom-yo-bunga-prosta-p1">
                                            <div className="lalala-nom-zaibal">
                                            <input type="checkbox" /><span>Услуга: Все включено</span>
                                            </div>
                                        </div>
          <br />
                                <div className="sdacha-input">
                                        <input type="text" placeholder='Поле для ввода' />
                                    </div>
                                    <div className="jalab-kamazlani-turi-bor-ekan">
                                        <div className="lalala-nom-yo-bunga-prosta-p">
                                        <p>Если вам требуется доставка <br id='syebalsa'  /> определенными машинами, <br id='syebalsa' /> укажите какими:</p>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi">
                                            {mashina3.map((item,key)=>{
                                                return(
                                                    <div>
                                                     <button key={key}><span>{item.m3}м3</span><img src={item.image} alt="" /></button>   
                                                    </div>
                                                )
                                            })}
                                            
                                            {/* <button><span>3м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>7м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>9м3</span><img src={zakazbeton} alt="" /></button> */}
                                        </div>
                                        
                                    </div>
                                    <div className="kamazla-media-suka-blat">
                                    {mashina3.map((item,key)=>{
                                                return(
                                                    <div>
                                                     <button><span>{item.m3}м3</span><img src={item.image} alt="" /></button>   
                                                    </div>
                                                )
                                            })}
                                            {/* <button><span>2,5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>3м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>7м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>9м3</span><img src={zakazbeton} alt="" /></button> */}
                                    </div>
                                    <div className="jalab-kamazlani-turi-bor-ekan1">
                                        <div className="lalala-nom-yo-bunga-prosta-p">
                                            <p>Швинг</p>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi">
                                        {shving.map((item,key)=>{
                                            return <div>
                                                 <button><span>{item.m}м</span><img src={item.image} alt="" /></button>
                                            </div>
                                        })}
                                          
                                        </div>
                                    </div>
                                    <div className="kamazla-media-suka-blat">
                                    {shving.map((item,key)=>{
                                            return <div>
                                                 <button><span>{item.m}м</span><img src={item.image} alt="" /></button>
                                            </div>
                                        })}
                                    </div>
                                    <div className="jalab-kamazlani-turi-bor-ekan2">
                                        <div className="lalala-nom-yo-bunga-prosta-p1">
                                            <p>Время работы швинга</p><br />
                                            <div className="lalala-nom-zaibal">
                                            <input type="checkbox" /><span>Пусковая смесь</span>
                                            </div>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi1">
                                            <input type="number" />
                                            <p>Минимальное время работы - 3ч</p>
                                        </div>
                                    </div>

                                    <div className="jalab-kamazlani-turi-bor-ekan6">
                                        <div className="lalala-nom-yo-bunga-prosta-p1">
                                            <p>Интервал подачи машин:</p>
                                            <br />
                                            <div className="lalala-nom-zaibal">
                                            <input type="checkbox" /><span>Требуется подвоз воды на участок</span>
                                            </div>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi">
                                            <button><span>30мин</span></button>
                                            <button><span>1 час</span></button>
                                            <button><span>1.5 часа</span></button>
                                            <button><span>2 часа</span></button>
                                        </div>
                                    </div>
                            </div>
      
        <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop">
          <span>8/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>
        <div className="zakaz_kvadrat_tegi">
          <button onClick={()=>{setZag(7)}} className='zakaz_kvadrat_tegi_but1'><BsArrowLeft/>Назад</button>
          <button onClick={()=>{setZag(9)}} className='zakaz_kvadrat_tegi_but2'>Далее <BsArrowRight/></button>
          </div>
        </div> : ""} 
      {zag === 9 ?    <div className="samiy-pasledniy-joy-oplata1">
    <div className="letsgo-oplata-ye1">
        <div className="bla-arrowe-ichi-endi">
            <h2>Заказ</h2>
            <div className="zakaz-img-info-joi">
                <div className="zakaz-img-info-img">
                    <img src={iconbla} alt="" />
                </div>
                <div className="zakaz-img-info-text">
                    <h4>Гравийный бетон М150 B12,5 F100 W4</h4>
                    <p>Наименование опции, наименование опции, наименование опции </p>
                </div>
            </div>
            <div className="zakaz-line-info"></div>
            <div className="stoimas-betona">
                <div className="buyagaona-nax">
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                </div>
                <div className="stoimas-bet-block2">
                    <h5>Итого:</h5>
                    <p>5 000 ₽</p>
                    <h5 id='sitr'>Итого с учетом бонусов/скидки:</h5>
                    <p id='sitr2'>5 000 ₽</p>
                </div>
            </div>
            <div className="bonus-i-oplata-joy-ga-keldi">
                <div className="binusinput-block1">
                    <div className="sika_f">
                    <p>Бонусы:</p>
                    <p>Списать бонусов: </p>
                    </div>
                    <div className="binus-block-inp-g_l">
                        <div className="blc_ino">
                            <button><img src={prima} alt="" />12 000 бонусов</button>
                        </div>
                        <div className="blc_ino1">
                        <input type="number" />
                        </div>
                    </div>
                    <div className="pasroda-oplt-ino">
                        <button>Списать бонусы</button>
                    </div>
                    <div className="pasroda-oplt-ino">
                        <input type="number" placeholder='Код из смс' />
                    </div>
                    <div className="pasroda-oplt-ino">
                        <p>Отправлен на номер <span>+7 800 900 80 90</span></p>
                        <p><a href="#">Отправить повторно</a></p>
                    </div>
                    <div className="lalalala-nom-oylab-topishi-ozi-azobbbb">
                    <div className="sika_f1">
                    <p>Промокод</p>
                    </div>
                    <div className="yana-inp-bla-zaib0suk">
                        <input type="number"  placeholder='Поле для ввода'/>
                    </div>
                    
                    <div className="oxiri-qoldi-bla-nu-tugadi">
                        <div className="alsdasdsadasdsadsadsa">
                        <img src={prima} alt="" /><span>будет начислено бонусов: <br />
(2% от суммы)</span>
                        </div>
<div className="bla-pasda-sotvolish-btn">
                        <button>Заказать</button>
                    </div>
                    </div>
                
                    </div>
                    
                </div>
                <div className="binus-davam-left-tarap">
                <div className="sika_f1">
                    <p>Промокод</p>
                    </div>
                    <div className="yana-inp-bla-zaib0suk">
                        <input type="number"  placeholder='Поле для ввода'/>
                    </div>
                </div>
                <div className="binus-davam-left-tarap">
                    <div className="oxiri-qoldi-bla-nu-tugadi">
                        <img src={prima} alt="" /><span>будет начислено бонусов: <br />
(2% от суммы)</span>
                    </div>
                    <div className="bla-pasda-sotvolish-btn">
                        <button>Заказать</button>
                    </div>
                </div>
                
            </div>
                <div className="zakaz_kvadrat_zagruska zakaz_kvadrat_zagruska_kop" id='iasdasdasd'>
          <span>9/9</span>
          <div className="zakaz_kvadrat_zagruska_ril">
            <div className="zakaz_kvadrat_zagruska_ril1"></div>
          </div>
        </div>

        </div>
        <div className="zakaz-futer-mobil-versia">
            <div className="zakaz-futer-ichi">
                <div className="zakaz-nazadd">
                    <img src={nazad} alt="" /><span>Назад</span>
                </div>
                <h4>Заказ</h4>
                <div className="zakaz-futer-info-block1">
                    <div className="zakaz-img-foter">
                        <img src={iconbla} alt="" />
                    </div>
                    <div className="zaazk-text-foter">
                    <p>Гравийный бетон  <br /> М150 B12,5 F100 W4</p>
                    </div>
                </div>
                <div className="neroshiltalsao">
                    <p>Наименование опции, наименование опции</p>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="zaakz-narxla-joy-xz">
                    <div className="zakaz-blockkk-1-pitaniya">
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                    </div>
                    <div className="zakaz-blockkk-2-pitaniya">
                    <div className="narxla-bilan-tanishib-cqasmi1">
                            <p>Итого:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="qanqadir-bonus-bor-elan-zakaz">
                    <div className="qanasdsdsds-img">
                        <img src={prima} alt="" />
                    </div>
                    <div className="qanqqdqqwwq-text">
                        <p>будет начислено бонусов: <br />
<span>(2% от суммы)</span></p>
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="zakaz-promakod">
                    <h3>Промокод</h3>
                    <div className="zakaz-promakod-inpu">
                        <input type="number" placeholder='Поле для ввода' />
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="yana-qanaqadir-skitkalabor">
                    <div className="bu-tepa-qismi-skitkala">
                        <p>Бонусы</p>
                        <div className="asmdalmfalkmfkldfl">
                            <img src={prima} alt="" /><span>12 000 <br />
бонусов</span>
                        </div>
                    </div>
                    <div className="bonus-yechsa-bolarkan-vay">
                        <p>Списать бонусов: </p>
                        <div className="dsadasdasdasdasdasd">
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <div className="yangi-batton-btn1">
                    <button>Списать бонусы</button>
                </div>
                <div className="pasroda-oplt-ino">
                        <input type="number" placeholder='Код из смс' />
                    </div>
                    <div className="pasroda-oplt-ino">
                        <p>Отправлен на номер <span>+7 800 900 80 90</span></p>
                        <p><a href="#">Отправить повторно</a></p>
                    </div>
                    <div className="zakaz-line-info" id='laadassadsadsa'></div>
                    <div className="oxirrriirirri">
                        <p>Итого с учетом бонусов/скидки:</p>
                        <h4>5 000 ₽</h4>

                        <button>Заказать</button>
                    </div>
            </div>
        </div>
    </div>

   </div> : ""} 
   <div className="zakaz-btn-media">
        <div className="zakaz-btn-media-ichi">
            <div className="zakaz-btn-naz">
                <img src={wal} alt="" /><span>Заказ бетона</span>
            </div>
            <div className="chto-neobhadimo-eto-media">
                <div className="hmmmmmm-block-holat">
                    <h3>Что необходимо?</h3>
                <div className="buni-ichidan-ochish-kerak-media">
                <div className="beton-blcok-media"  onClick={()=>mediayon()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={m350} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Бетон</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media2" onClick={()=>mediayon1()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media2"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={qum} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Пескобетон</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media3" onClick={()=>mediayon2()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media3"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={bilmadim} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Строительный раствор</span></div>
                            </div>
                        </div>
                        <div className="bir-button-aralash-bla">
                        Специальный бетон
                        </div>
                </div>
                
                </div>
            </div>
            <div className="proizvaditel-media">
                <div className="va-yanabiz-90">
                    <h4>Производитель</h4>
                    <div className="metr-kub-sm-inp">
                        <div className="nom-oylab-sm-topish-kere">
                            <div className="kakakakakakakaakkk">
                            {marka1.map(item=>{
                return(
                    <div>
                        <p>{item.title}</p> 
                    </div>
                )
            })}
                            {/* <p>М50</p>
                            <p>М200</p>
                            <p>М400</p> */}
                            </div>
                            <div className="nom-kooc-inp-range">
                                <input type="range"  />
                            </div>
                            <div className="media-select-bossa-chiqadi">
                                <div className="select-opticon-med-block1">
                                    <div className="select-opticon-med-ich" >
                                        <div className="select-opc-img" ><img src={acardion} alt="" /> <span  onClick={()=>tex()}>Подвижность</span> </div>
                                        <div className="select-opc-text"><img src={acardion2} alt=""  onClick={()=>tex()}/></div>
                                    </div>
                                    <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="akardon-pasdia-chiqadi-but-media">
                                    <button>П3</button>
                                    <button id='sysysy'>П4</button>
                                </div>
                            </div>
                                </div>
                                <div className="select-opticon-med-block1">
                                    <div className="select-opticon-med-ich" >
                                        <div className="select-opc-img1" ><img src={acardion3} alt="" /> <span  onClick={()=>tex1()}>Гидрофобная добавка</span> </div>
                                        <div className="select-opc-text"><img src={acardion2} alt=""  onClick={()=>tex1()}/></div>
                                    </div>
                                    <div className="akardion-pasida-chiqadi-bosilganda">
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="alalalalallaalalalal-media">
                                <div className="akardon-pasdia-chiqadi-but12">
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
                            </div>
                                </div>
                                <div className="select-opticon-med-block1">
                                    <div className="select-opticon-med-ich" >
                                        <div className="select-opc-img1" ><img src={acardion5} alt="" /> <span  onClick={()=>tex2()}>Фиброволокно</span> </div>
                                        <div className="select-opc-text"><img src={acardion2} alt=""  onClick={()=>tex2()}/></div>
                                    </div>
                                    <div className="akardion-pasida-chiqadi-bosilganda">
                                    <div className="alalalalallaalalalal12">
                                    <div className="akardon-pasdia-chiqadi-but12">
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
                                </div>
                                <div className="select-opticon-med-block1">
                                    <div className="select-opticon-med-ich" >
                                        <div className="select-opc-img1" ><img src={acardion6} alt="" /> <span  onClick={()=>tex3()}>Противоморозная добавка</span> </div>
                                        <div className="select-opc-text"><img src={acardion2} alt=""  onClick={()=>tex3()}/></div>
                                    </div>
                                    <div className="akardion-pasida-chiqadi-bosilganda">
                                    <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="axaxaxsaxasxasxasxasxs2-media">
                                <div className="akardon-pasdia-chiqadi-but4">
                                {gradus.map((item,key)=>{
                                        return (<div>
                                             <button key={key}>-{item.gradus}C</button>
                                        </div>
                                            
                                             ) 
                                    })}
                                </div>
                                </div>
                            </div>
                            </div>
                                </div>
                            </div>
                            <div className="kampaniya-cardla-prozaakz">
                            <div className="beton-blcok-media-kom" onClick={()=>kompaniya()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media-kom"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size1">
                                    <img src={kkk} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"></div>
                            </div>
                            <div className="marxi-prozakaz-kom"><h3>2 000 ₽</h3></div>
                        </div>
                        <div className="beton-blcok-media-kom1" onClick={()=>kompaniya1()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media-kom1"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size2">
                                    <img src={mediaicon1} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"></div>
                            </div>
                            <div className="marxi-prozakaz-kom"><h3>2 000 ₽</h3></div>
                        </div>
                        <div className="beton-blcok-media-kom2" onClick={()=>kompaniya2()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media-kom2"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size2">
                                    <img src={betonmedia} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"></div>
                            </div>
                             <div className="marxi-prozakaz-kom"><h3>2 000 ₽</h3></div>
                        </div>
                        <div className="beton-blcok-media-kom3" onClick={()=>kompaniya3()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media-kom3"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size2">
                                    <img src={betonmedia1} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"></div>
                            </div>
                             <div className="marxi-prozakaz-kom"><h3>2 000 ₽</h3></div>
                        </div>
                        <div className="beton-blcok-media-kom4" onClick={()=>kompaniya4()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media-kom4"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size2">
                                    <img src={betonmedia2} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"></div>
                            </div>
                             <div className="marxi-prozakaz-kom"><h3>2 000 ₽</h3></div>
                        </div>
                            </div>
                            <div className="kampaniya-tepadagiselect-boldi-endi-pasga-texg">
                                <h4>Требуются <br />
специализированные добавки?</h4>
<button>Добавить комментарий для технолога</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className="kampaniya-kolichestvo-sm">
                <div className="kampashka-ichidan-oldik-kolicestvo">
                    <h4>Количество</h4>
                    <div className="kankulator-kampashka">
                        <h3><span>{data}</span>м3</h3>
                        <div className="kankulator-kampashka-inp">
                        <input type="range"  min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)} />
                        </div>
                    </div>
                    <div className="kampashka-kankulator-xm">
                        <div className="kammpash">
                            <div className="kammmpash-ves">
                            <h2>Не знаете количество?</h2>
                            <p>Рассчитайте онлайн в калькуляторе</p>
                            <button><img src={canculator} alt="" /><span>Калькулятор</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qatga-yetkazib-berish-media-kompashka">
                <div className="qatga-yetkazib-berish-media-ichi">
                    <h4>Куда привезти</h4>
                    <div className="qatga-inputga-kompashka">
                        <input type="text"  placeholder='Введите адрес'/><button><box-icon name='search' color="#939393"></box-icon></button>
                    </div>
                    <div className="ski-karta-kompashka">
                    <img src={otkritkartu} alt="" />
                    </div>
                    <div className="nechikm-joy-kompashka">
                        <h3>В скольки километрах от дороги  <br />
находится Ваш участок?</h3>
                    </div>
                    <div className="zaibal-nom-oylab-topuvurib-inp-kompashka">
                        <div className="tepa-qsmi-zaib-kampashka">
                            <p>{data1}км</p>
                            <p>10км</p>
                        </div>
                        <div className="bu-pasqismi-inp-joy-kompashka-d_f">
                        <input type="range"  min="0" max="10" step="1" value={data1} onChange={(e)=>setData1(e.target.value)} />
                        </div>
                        <div className="buyam-pasqismi-inp-kompashak-check">
                            <div className="chdbsdnajhjsjdsjdnaaa">
                                <input type="checkbox"  />
                            </div>
                            <div className="buyma-zaiba-text-opaa">
                                <p>Имеются ли препятствия для <br /> большой машины  на пути подъезда <br /> к вашему участку?</p>
                            </div>
                        </div>
                        <h4 id='paspaspasaps'>Ширина проезда (м)</h4>
                        <div className="tepa-qsmi-zaib-kampashka" id='syebalsaaxx'>
                            <p>{data4}м</p>
                            <p>10км</p>
                        </div>
                        <div className="bu-pasqismi-inp-joy-kompashka-d_f">
                        <input type="range"  min="0" max="10000" step="1" value={data4} onChange={(e)=>setData4(e.target.value)} />
                        </div>

                        <h4 id='paspaspasaps'>Ограничения по высоте (м)</h4>
                        <div className="tepa-qsmi-zaib-kampashka" id='syebalsaaxx'>
                            <p>{data5}м</p>
                            <p>7км</p>
                        </div>
                        <div className="bu-pasqismi-inp-joy-kompashka-d_f">
                        <input type="range"  min="0" max="7000" step="1" value={data5} onChange={(e)=>setData5(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tarif-media-kamzla">
                <div className="tarif-media-kamzla-ichi">
                    <h4>Тариф</h4>
                    <div className="kamzala-block-pitaniya-media">
                    <div className="buni-ichidan-ochish-kerak-media">
                <div className="beton-blcok-media4"  onClick={()=>mediayon3()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media4"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={mini} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Эконом</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media5" onClick={()=>mediayon4()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media5"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={standart} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Стандарт</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media6" onClick={()=>mediayon5()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media6"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={primi} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Экспресс</span></div>
                            </div>
                        </div>
                </div>
                    </div>
                </div>
            </div>
            <div className="qachon-media-kamzla">
                <div className="qachon-media-ka-zl-ichi">
                    <h4>Когда?</h4>
                    <div className="qachon-media-ka-zl">
                        <div className="all-button-qachon-ka">
                            <div className="btn-btn1-qachon" onClick={()=>qoraaaaa()}>
                                <p>Как можно быстрее</p>
                            </div>
                            <div className="btn-btn1-qachon1" onClick={()=>qoraaaaa1()}>
                                <p>Сегодня</p>
                            </div>
                            <div className="btn-btn1-qachon2" onClick={()=>qoraaaaa2()}>
                                <p>Предварительный заказ</p>
                            </div>
                        </div>
                    </div>
                    <div className="page1-bosa-bubosin-naxuy">
                        <div className="tez-bosa-boldi-nx">
                            <button>9:00 - 12:00</button>
                            <button>9:00 - 12:00</button>
                            <button>9:00 - 12:00</button>
                            <button>9:00 - 12:00</button>
                        </div>
                        <div className="bugun-bosa-boldi-nx">
                            <button>9:00 - 12:00</button>
                            <button>8:00 - 17:00</button>
                            <button>9:00 - 13:00</button>
                            <button>9:00 - 12:00</button>
                        </div>
                        <div className="keyn-bosa-boldi-nx">
                            <button>9:00 - 12:00</button>
                            <button>11:00 - 12:00</button>
                            <button>9:00 - 12:00</button>
                            <button>9:00 - 15:00</button>
                        </div>
                    </div>
                    <div className="nmagaaaaaaa-input-data-qolda">
       
                    </div>
                </div>
            </div>
            <div className="tarif-media-kamzla1">
                <div className="tarif-media-kamzla-ichi">
                    <h4>Способ оплаты</h4>
                    <div className="kamzala-block-pitaniya-media">
                    <div className="buni-ichidan-ochish-kerak-media1">
                <div className="beton-blcok-media9"  onClick={()=>eeeeee()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa-media9"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={nout} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Онлайн</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media10" onClick={()=>eeeeee1()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media10"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={karta} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Перевод на карту</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok-media11" onClick={()=>eeeeee2()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media11"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={money1} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Наличные</span></div>
                            </div>
                        </div>
                            <div className="beton-blcok-media12" onClick={()=>eeeeee3()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa-media12"></div>
                            </div>
                            <div className="beton-rasm-patom-text-media">
                                <div className="beton-rasm-img-size">
                                    <img src={moneyy} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Предоплата</span></div>
                            </div>
                        </div>
                </div>
                <div className="bittaa-divda-ekanuuu-bula">
                <h4 className='buni-qora-qilsih-kerer'>С какой купюры потребуется сдача?</h4>
                <input type="number" placeholder='Поле для ввода' />
                </div>
                    <div className="error-aler-div">
                        <div className="eerrror-aler-kottasi">
                            <div className="error-alert-img">
                                <img src={alert} alt="" />
                            </div>
                            <div className="error-alert-text">
                                <p>Если сумма заказа <span>превышает 150000 </span>
может потребоваться <span>предоплата 
в 5000 рублей.</span></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="tarif-media-kamzla2">
                <div className="tarif-media-kamzla-ichi">
                    <h4>Опции</h4>
                    <div className="uslugi-nax-nujni">
                        <input type="checkbox"  /> <span>Услуга: Все включено</span>
                    </div>
                    <p>Если вам требуется доставка определенными машинами,
укажите какими:</p> 
                    <div className="slect-joyi-media-ddd">
                        <div className="img-select-qoyilmadi">
                            <img src={zakazbeton} alt="" />
                        </div>
                    <select id="singleSelection" data-te-select-init>
                        {mashina3.map(item=>{
                            return <option className='opticonn' value="1">{item.m3}м3</option>  
                        })}
                   
  {/* <option className='opticonn'  value="2">3м3</option>
  <option className='opticonn' value="3">5м3</option>
  <option className='opticonn' value="4">7м3</option>
  <option className='opticonn' value="5">9м3</option> */}
                   </select>
                    </div>

                    <p className='xajonivorxaa'>Швинг</p> 
                    <div className="slect-joyi-media-ddd" >
                        <div className="img-select-qoyilmadi">
                            <img src={zakazbeton1} alt="" />
                        </div>
                    <select id="singleSelection" data-te-select-init>
                    {shving.map((item,key)=>{
                             return <option className='opticonn' value="1">{item.m}м </option>
                            })}
                    {/* <option className='opticonn' value="1">15м </option>
  <option className='opticonn'  value="2">21м</option>
  <option className='opticonn' value="3">30м</option>
  <option className='opticonn' value="4">40м</option>
  <option className='opticonn' value="5">57м</option> */}
                   </select>
                    </div>
                    <div className="ana-tugabam-qoldi-xaxa-yebo">
                        <p>Время работы швинга</p>
                        <div className="kamazlaga-keldi-endi-shu-qoldi2">
                            <input type="number" />
                            <p>Минимальное время работы  - 3ч</p>
                        </div>
                    </div>
                    <div className="uslugi-nax-nujni">
                        <input type="checkbox"  /> <span>Пусковая смесь</span>
                    </div>
                    <div className="qanqadir-interval-padacha-ma">
                            <div className="btn-qanaqard">
                                <button>30мин</button>
                                <button>1 час</button>
                                <button>1.5 часа</button>
                                <button>2 часа</button>
                                <button>2.5 часа</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="samiy-pasledniy-joy-oplata" id='gigigigi'>
    <div className="letsgo-oplata-ye">
        <div className="bla-arrowe-ichi-endi">
            <h2>Заказ</h2>
            <div className="zakaz-img-info-joi">
                <div className="zakaz-img-info-img">
                    <img src={iconbla} alt="" />
                </div>
                <div className="zakaz-img-info-text">
                    <h4>Гравийный бетон М150 B12,5 F100 W4</h4>
                    <p>Наименование опции, наименование опции, наименование опции </p>
                </div>
            </div>
            <div className="zakaz-line-info"></div>
            <div className="stoimas-betona">
                <div className="buyagaona-nax">
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                <div className="stoimas-bet-block1">
                    <h5>Стоимость бетона:</h5>
                    <p>5 000 ₽</p>
                </div>
                </div>
                <div className="stoimas-bet-block2">
                    <h5>Итого:</h5>
                    <p>5 000 ₽</p>
                    <h5 id='sitr'>Итого с учетом бонусов/скидки:</h5>
                    <p id='sitr2'>5 000 ₽</p>
                </div>
            </div>
            <div className="bonus-i-oplata-joy-ga-keldi">
                <div className="binusinput-block1">
                    <div className="sika_f">
                    <p>Бонусы:</p>
                    <p>Списать бонусов: </p>
                    </div>
                    <div className="binus-block-inp-g_l">
                        <div className="blc_ino">
                            <button><img src={prima} alt="" />12 000 бонусов</button>
                        </div>
                        <div className="blc_ino1">
                        <input type="number" />
                        </div>
                    </div>
                    <div className="pasroda-oplt-ino">
                        <button>Списать бонусы</button>
                    </div>
                    <div className="pasroda-oplt-ino">
                        <input type="number" placeholder='Код из смс' />
                    </div>
                    <div className="pasroda-oplt-ino">
                        <p>Отправлен на номер <span>+7 800 900 80 90</span></p>
                        <p><a href="#">Отправить повторно</a></p>
                    </div>
                    <div className="lalalala-nom-oylab-topishi-ozi-azobbbb">
                    <div className="sika_f1">
                    <p>Промокод</p>
                    </div>
                    <div className="yana-inp-bla-zaib0suk">
                        <input type="number"  placeholder='Поле для ввода'/>
                    </div>
                    
                    <div className="oxiri-qoldi-bla-nu-tugadi">
                        <div className="alsdasdsadasdsadsadsa">
                        <img src={prima} alt="" /><span>будет начислено бонусов: <br />
(2% от суммы)</span>
                        </div>
<div className="bla-pasda-sotvolish-btn">
                        <button>Заказать</button>
                    </div>
                    </div>
                
                    </div>
                    
                </div>
                <div className="binus-davam-left-tarap">
                <div className="sika_f1">
                    <p>Промокод</p>
                    </div>
                    <div className="yana-inp-bla-zaib0suk">
                        <input type="number"  placeholder='Поле для ввода'/>
                    </div>
                </div>
                <div className="binus-davam-left-tarap">
                    <div className="oxiri-qoldi-bla-nu-tugadi">
                        <img src={prima} alt="" /><span>будет начислено бонусов: <br />
(2% от суммы)</span>
                    </div>
                    <div className="bla-pasda-sotvolish-btn">
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="zakaz-futer-mobil-versia">
            <div className="zakaz-futer-ichi">
                <div className="zakaz-nazadd">
                    <img src={nazad} alt="" /><span>Назад</span>
                </div>
                <h4>Заказ</h4>
                <div className="zakaz-futer-info-block1">
                    <div className="zakaz-img-foter">
                        <img src={iconbla} alt="" />
                    </div>
                    <div className="zaazk-text-foter">
                    <p>Гравийный бетон  <br /> М150 B12,5 F100 W4</p>
                    </div>
                </div>
                <div className="neroshiltalsao">
                    <p>Наименование опции, наименование опции</p>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="zaakz-narxla-joy-xz">
                    <div className="zakaz-blockkk-1-pitaniya">
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                        <div className="narxla-bilan-tanishib-cqasmi">
                            <p>Стоимость бетона:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                    </div>
                    <div className="zakaz-blockkk-2-pitaniya">
                    <div className="narxla-bilan-tanishib-cqasmi1">
                            <p>Итого:</p>
                            <h3>5 000 ₽</h3>
                        </div>
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="qanqadir-bonus-bor-elan-zakaz">
                    <div className="qanasdsdsds-img">
                        <img src={prima} alt="" />
                    </div>
                    <div className="qanqqdqqwwq-text">
                        <p>будет начислено бонусов: <br />
<span>(2% от суммы)</span></p>
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="zakaz-promakod">
                    <h3>Промокод</h3>
                    <div className="zakaz-promakod-inpu">
                        <input type="number" placeholder='Поле для ввода' />
                    </div>
                </div>
                <div className="zakaz-line-info"></div>
                <div className="yana-qanaqadir-skitkalabor">
                    <div className="bu-tepa-qismi-skitkala">
                        <p>Бонусы</p>
                        <div className="asmdalmfalkmfkldfl">
                            <img src={prima} alt="" /><span>12 000 <br />
бонусов</span>
                        </div>
                    </div>
                    <div className="bonus-yechsa-bolarkan-vay">
                        <p>Списать бонусов: </p>
                        <div className="dsadasdasdasdasdasd">
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <div className="yangi-batton-btn1">
                    <button>Списать бонусы</button>
                </div>
                <div className="pasroda-oplt-ino">
                        <input type="number" placeholder='Код из смс' />
                    </div>
                    <div className="pasroda-oplt-ino">
                        <p>Отправлен на номер <span>+7 800 900 80 90</span></p>
                        <p><a href="#">Отправить повторно</a></p>
                    </div>
                    <div className="zakaz-line-info" id='laadassadsadsa'></div>
                    <div className="oxirrriirirri">
                        <p>Итого с учетом бонусов/скидки:</p>
                        <h4>5 000 ₽</h4>

                        <button>Заказать</button>
                    </div>
            </div>
        </div>
    </div>
   </div> */}
      </div>
   
  )
}
