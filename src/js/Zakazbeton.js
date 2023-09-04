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











// function CalendarControl() {
//     const calendar = new Date();
//     const calendarControl = {
//       localDate: new Date(),
//       prevMonthLastDate: null,
//       calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       calMonthName: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec"
//       ],
//       daysInMonth: function (month, year) {
//         return new Date(year, month, 0).getDate();
//       },
//       firstDay: function () {
//         return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
//       },
//       lastDay: function () {
//         return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
//       },
//       firstDayNumber: function () {
//         return calendarControl.firstDay().getDay() + 1;
//       },
//       lastDayNumber: function () {
//         return calendarControl.lastDay().getDay() + 1;
//       },
//       getPreviousMonthLastDate: function () {
//         let lastDate = new Date(
//           calendar.getFullYear(),
//           calendar.getMonth(),
//           0
//         ).getDate();
//         return lastDate;
//       },
//       navigateToPreviousMonth: function () {
//         calendar.setMonth(calendar.getMonth() - 1);
//         calendarControl.attachEventsOnNextPrev();
//       },
//       navigateToNextMonth: function () {
//         calendar.setMonth(calendar.getMonth() + 1);
//         calendarControl.attachEventsOnNextPrev();
//       },
//       navigateToCurrentMonth: function () {
//         let currentMonth = calendarControl.localDate.getMonth();
//         let currentYear = calendarControl.localDate.getFullYear();
//         calendar.setMonth(currentMonth);
//         calendar.setYear(currentYear);
//         calendarControl.attachEventsOnNextPrev();
//       },
//       displayYear: function () {
//         let yearLabel = document.querySelector(".calendar .calendar-year-label");
//         yearLabel.innerHTML = calendar.getFullYear();
//       },
//       displayMonth: function () {
//         let monthLabel = document.querySelector(
//           ".calendar .calendar-month-label"
//         );
//         monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
//       },
//       selectDate: function (e) {
//         console.log(
//           `${e.target.textContent} ${
//             calendarControl.calMonthName[calendar.getMonth()]
//           } ${calendar.getFullYear()}`
//         );
//       },
//       plotSelectors: function () {
//         document.querySelector(
//           ".calendar"
//         ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
//           <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
//           <div class="calendar-year-month">
//           <div class="calendar-month-label"></div>
//           <div>-</div>
//           <div class="calendar-year-label"></div>
//           </div>
//           <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
//           </div>
//           <div class="calendar-today-date">Today: 
//             ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
//             ${calendarControl.localDate.getDate()}, 
//             ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
//             ${calendarControl.localDate.getFullYear()}
//           </div>
//           <div class="calendar-body"></div></div>`;
//       },
//       plotDayNames: function () {
//         for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
//           document.querySelector(
//             ".calendar .calendar-body"
//           ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
//         }
//       },
//       plotDates: function () {
//         document.querySelector(".calendar .calendar-body").innerHTML = "";
//         calendarControl.plotDayNames();
//         calendarControl.displayMonth();
//         calendarControl.displayYear();
//         let count = 1;
//         let prevDateCount = 0;
  
//         calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
//         let prevMonthDatesArray = [];
//         let calendarDays = calendarControl.daysInMonth(
//           calendar.getMonth() + 1,
//           calendar.getFullYear()
//         );
//         // dates of current month
//         for (let i = 1; i < calendarDays; i++) {
//           if (i < calendarControl.firstDayNumber()) {
//             prevDateCount += 1;
//             document.querySelector(
//               ".calendar .calendar-body"
//             ).innerHTML += `<div class="prev-dates"></div>`;
//             prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
//           } else {
//             document.querySelector(
//               ".calendar .calendar-body"
//             ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
//           }
//         }
//         //remaining dates after month dates
//         for (let j = 0; j < prevDateCount + 1; j++) {
//           document.querySelector(
//             ".calendar .calendar-body"
//           ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
//         }
//         calendarControl.highlightToday();
//         calendarControl.plotPrevMonthDates(prevMonthDatesArray);
//         calendarControl.plotNextMonthDates();
//       },
//       attachEvents: function () {
//         let prevBtn = document.querySelector(".calendar .calendar-prev a");
//         let nextBtn = document.querySelector(".calendar .calendar-next a");
//         let todayDate = document.querySelector(".calendar .calendar-today-date");
//         let dateNumber = document.querySelectorAll(".calendar .dateNumber");
//         prevBtn.addEventListener(
//           "click",
//           calendarControl.navigateToPreviousMonth
//         );
//         nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
//         todayDate.addEventListener(
//           "click",
//           calendarControl.navigateToCurrentMonth
//         );
//         for (var i = 0; i < dateNumber.length; i++) {
//             dateNumber[i].addEventListener(
//               "click",
//               calendarControl.selectDate,
//               false
//             );
//         }
//       },
//       highlightToday: function () {
//         let currentMonth = calendarControl.localDate.getMonth() + 1;
//         let changedMonth = calendar.getMonth() + 1;
//         let currentYear = calendarControl.localDate.getFullYear();
//         let changedYear = calendar.getFullYear();
//         if (
//           currentYear === changedYear &&
//           currentMonth === changedMonth &&
//           document.querySelectorAll(".number-item")
//         ) {
//           document
//             .querySelectorAll(".number-item")
//             [calendar.getDate() - 1].classList.add("calendar-today");
//         }
//       },
//       plotPrevMonthDates: function(dates){
//         dates.reverse();
//         for(let i=0;i<dates.length;i++) {
//             if(document.querySelectorAll(".prev-dates")) {
//                 document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
//             }
//         }
//       },
//       plotNextMonthDates: function(){
//        let childElemCount = document.querySelector('.calendar-body').childElementCount;
//        //7 lines
//        if(childElemCount > 42 ) {
//            let diff = 49 - childElemCount;
//            calendarControl.loopThroughNextDays(diff);
//        }

//        //6 lines
//        if(childElemCount > 35 && childElemCount <= 42 ) {
//         let diff = 42 - childElemCount;
//         calendarControl.loopThroughNextDays(42 - childElemCount);
//        }

//       },
//       loopThroughNextDays: function(count) {
//         if(count > 0) {
//             for(let i=1;i<=count;i++) {
//                 document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
//             }
//         }
//       },
//       attachEventsOnNextPrev: function () {
//         calendarControl.plotDates();
//         calendarControl.attachEvents();
//       },
//       init: function () {
//         calendarControl.plotSelectors();
//         calendarControl.plotDates();
//         calendarControl.attachEvents();
//       }
//     };
//     calendarControl.init();
//   }
  
//   const calendarControl = new CalendarControl();









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
          <input className='range1' type="range" name="" id="" />
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
              <input onChange={(e)=>setNum3(e.target.value)} className='range_3' type="range" />
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
        {/* <div class="calendar"><div class="calendar-body"></div></div> */}
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
      </div>

  )
}
