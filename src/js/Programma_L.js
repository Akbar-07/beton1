import React, { useState } from 'react'
import "../css/Programma_l.css"
import Navbar from "../js/Navbar.js"
import IMG1 from "../img/Group 100.png"
import IMG2 from "../img/fire flame-png 1.png"
import IMG3 from "../img/Group 146.png"
import IMG4 from "../img/1 монет.png"
import IMG5 from "../img/./3 монет.png"
import IMG6 from "../img/./2 монет.png"
import IMG7 from "../img/Group 302 (1).png"
import IMG8 from "../img/уровень 1.png"
import IMG9 from "../img/звезда 1.png"
import IMG10 from "../img/ре 1.png"
import IMG11 from "../img/₽.png"
import IMG12 from "../img/Group 201.png"
import IMG13 from "../img/Group 203.png"
import IMG14 from "../img/Group 202.png"
import IMG15 from "../img/Без имени-1 1 (1).png"
import IMG16 from "../img/Без имени-1 2.png"
import IMG17 from "../img/айфон4 1.png"
import IMG18 from "../img/Ellipse 4.png"

import {FiX} from "react-icons/fi"
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Programma_L() {
  const [def, setDef] = useState(1)
  const [def1, setDef1] = useState(1)
  const [def2, setDef2] = useState(1)
  const [def3, setDef3] = useState(1)
  const [def4, setDef4] = useState(1)
  const [def5, setDef5] = useState(1)
  const [def6, setDef6] = useState(1)
  const [def7, setDef7] = useState(1)
  const [def8, setDef8] = useState(1)
  const [def9, setDef9] = useState(1)
  function okey(){
        document.querySelector(".sviper_QTB").style = "height: 440px;"
        // document.querySelector(".sviper_QTB").style = "height:240px;"
   }
   function okey1(){
    // document.querySelector(".sviper_QTB").style = "height: 440px;"
    document.querySelector(".sviper_QTB").style = "height:240px;"
}
  

 

  return (
    <div>
        <Navbar/>

        <div className="otkizish">
          <span className='s_1'><span onClick={()=>window.location="/home"}>Главная</span> | <span className='s_2'>Программа лояльности</span></span>
        </div>

        <div className="program_h1">
        <img className='img___1' src={IMG1} alt="" />
        <h1 className='h_11'>Программа лояльности</h1>
        </div>

        <div className="program_banner">
          <img className='img__1' src={IMG2} alt="" />
          <img className='img__2' src={IMG3} alt="" />
          <div className="program_banner1">
            <div className="pro_ban">
              <img src={IMG4} alt="" />
              <img src={IMG5} alt="" />
            </div>
            <img src={IMG6} alt="" />
          </div>
        </div>

        <div className="program_banner_kopiya">
          <img src={IMG7} alt="" />
        </div>

       
        <div className="primushestva">
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pri_Swip"
      >
        {def === 1 ? <SwiperSlide onClick={()=>{setDef(2)}} className='swip_class_1'><div className="prim_1">
            <img className='prim_img' src={IMG8} alt="" />
            <h2>Повышайте уровень</h2>
          </div>
          </SwiperSlide> : <div className="kazir">
<SwiperSlide className='swip_class_1'><div className="prim_11">
            <div className="volt">
            <img className='prim_img111' src={IMG8} alt="" />
            <FiX onClick={()=>{setDef(1)}} className='fa_icons'/>
            </div>
            <h2>Повышайте уровень</h2>
            <span className='duvay1'>Чем больше вы заказываете бетона - тем выше уровень, а с ним и больше привилегий.</span><br />
            <span className='duvay11'>Каждый месяц уровень пересчитывается. Поэтому если вы перестали заказывать, то уровень может упасть. </span>
            
          </div></SwiperSlide>
</div>}
       {def1 === 1 ?  <SwiperSlide onClick={()=>{setDef1(2)}} className='swip_class_1'><div className="prim_1">
            <img className='prim_img' src={IMG9} alt="" />
            <h2>Приветственные бонусы</h2>
          </div>
          </SwiperSlide> : <div className="kazir">
<SwiperSlide className='swip_class_1'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG9} alt="" />
    <FiX onClick={()=>{setDef1(1)}} className='fa_icons'/>
  </div>
            
            <h2>Приветственные бонусы</h2>
            <span className='duvay1'>При регистрации в приложении (сохраняются если приложение стоит)</span>
          </div>
          </SwiperSlide>
  </div>}
        {def2 === 1 ? <SwiperSlide onClick={()=>{setDef2(2)}} className='swip_class_1'>
        <div className="prim_1">
            <img className='prim_img' src={IMG10} alt="" />
            <h2>Кэшбэк за каждый заказ</h2>         
          </div>
        </SwiperSlide> : <div className="kazir">
<SwiperSlide className='swip_class_1'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG10} alt="" />
    <FiX onClick={()=>{setDef2(1)}} className='fa_icons'/>
  </div>
            
            <h2>Кэшбэк 
за каждый заказ</h2>
            <span className='duvay1'>Получайте кешбэк за заказы через приложение: без ограничения по тарифам и расстоянию. Кешбэк будет приходить в ситибонусах, один ситибонус равен одному рублю.</span><br />            
          </div></SwiperSlide>
</div>}
        {def3 === 1 ?  <SwiperSlide onClick={()=>{setDef3(2)}} className='swip_class_1'>
        <div className="prim_1">
            <img className='prim_img' src={IMG11} alt="" />
            <h2>Оплачивайте бетон и доставку</h2>
          </div>
        </SwiperSlide> : <div className="kazir">
<SwiperSlide className='swip_class_1'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG11} alt="" />
    <FiX onClick={()=>{setDef3(1)}} className='fa_icons'/>
  </div>
            
            <h2>Оплачивайте бетон и доставку</h2>
            <span className='duvay1'>ЧБонусами можно оплатить часть заказа бетона и доставки - чем больше уровень, тем больше эта часть.</span><br />            
          </div></SwiperSlide>
</div>}
       {def4 === 1 ? <SwiperSlide onClick={()=>{setDef4(2)}} className='swip_class_1'>
        <div className="prim_1">
          <div className="prim_1_img">
              <div className="prim_1_img1">
              <img className='img_4' src={IMG12} alt="" />
              <img className='img__4' src={IMG13} alt="" />
              </div>
              <img className='img___4' src={IMG14} alt="" />
          </div>
            <h2 className='h__2'>Кешбэк для новых пользователей</h2>
          </div>
        </SwiperSlide> : <div className="kazir">
<SwiperSlide className='swip_class_1'><div className="prim_11">
  <div className="volt">
     <div className="prim_1_img">
              <div className="prim_1_img1">
              <img className='img_4' src={IMG12} alt="" />
              <img className='img__4 Davay' src={IMG13} alt="" />
              </div>
              <img className='img___4' src={IMG14} alt="" />
          </div>
          <FiX onClick={()=>{setDef4(1)}} className='fa_icons'/>
  </div>
 
            <h2>Кешбэк для новых пользователей</h2>
            <span className='duvay1'>Бонусами можно оплатить часть заказа бетона и доставки - чем больше уровень, тем больше эта часть.</span><br />
          </div></SwiperSlide>
  </div>}
        
      </Swiper>
        </div>


        <Swiper pagination={true} modules={[Pagination]} className="mySwiper sviper_QTB">
        {def5 === 1 ? <SwiperSlide onClick={()=>{setDef5(2);okey()}} className='suka'>
          <div className="prim_1">
        <img className='prim_img' src={IMG8} alt="" />
            <h2>Повышайте уровень</h2>
            </div>
        </SwiperSlide> :  <div className="kazir">
<SwiperSlide className='suka'><div className="prim_11">
            <div className="volt">
            <img className='prim_img111' src={IMG8} alt="" />
            <FiX onClick={()=>{setDef5(1);okey1()}} className='fa_icons'/>
            </div>
            <h2>Повышайте уровень</h2>
            <span className='duvay1'>Чем больше вы заказываете бетона - тем выше уровень, а с ним и больше привилегий.</span><br />
            <span className='duvay11'>Каждый месяц уровень пересчитывается. Поэтому если вы перестали заказывать, то уровень может упасть. </span>
            
          </div></SwiperSlide>
</div>}

{def6 === 1 ? <SwiperSlide onClick={()=>{setDef6(2);okey()}} className='suka'>
        <div className="prim_1">
            <img className='prim_img' src={IMG9} alt="" />
            <h2>Приветственные бонусы</h2>
            
          </div>
        </SwiperSlide>:<div className="kazir">
<SwiperSlide className='suka'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG9} alt="" />
    <FiX onClick={()=>{setDef6(1);okey1()}} className='fa_icons'/>
  </div>
            <h2>Приветственные бонусы</h2>
            <span className='duvay1'>При регистрации в приложении (сохраняются если приложение стоит)</span>
          </div>
          </SwiperSlide>
  </div>}
        {def7 === 1 ? <SwiperSlide onClick={()=>{setDef7(2);okey()}} className='suka'>
        <div className="prim_1">
            <img className='prim_img' src={IMG10} alt="" />
            <h2>Кэшбэк за каждый заказ</h2>         
          </div>
        </SwiperSlide >:  <div className="kazir">
<SwiperSlide className='suka'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG10} alt="" />
    <FiX onClick={()=>{setDef7(1);okey1()}} className='fa_icons'/>
  </div>
            
            <h2>Кэшбэк 
за каждый заказ</h2>
            <span className='duvay1'>Получайте кешбэк за заказы через приложение: без ограничения по тарифам и расстоянию. Кешбэк будет приходить в ситибонусах, один ситибонус равен одному рублю.</span><br />            
          </div></SwiperSlide>
</div>}
{def8 === 1 ?  <SwiperSlide  onClick={()=>{setDef8(2);okey()}}  className='suka'>
        <div className="prim_1">
            <img className='prim_img' src={IMG11} alt="" />
            <h2>Оплачивайте бетон и доставку</h2>    
          </div>
        </SwiperSlide>:  <div className="kazir">
<SwiperSlide className='suka'><div className="prim_11">
  <div className="volt">
    <img className='prim_img111' src={IMG11} alt="" />
    <FiX onClick={()=>{setDef8(1);okey1()}} className='fa_icons'/>
  </div>
            
            <h2>Оплачивайте бетон и доставку</h2>
            <span className='duvay1'>ЧБонусами можно оплатить часть заказа бетона и доставки - чем больше уровень, тем больше эта часть.</span><br />            
          </div></SwiperSlide>
</div>}
{def9 === 1 ? <SwiperSlide onClick={()=>{setDef9(2);okey()}}  className='suka'>
        <div className="prim_1">
          <div className="prim_1_img">
              <div className="prim_1_img1">
              <img className='img_4' src={IMG12} alt="" />
              <img className='img__4' src={IMG13} alt="" />
              </div>
              <img className='img___4' src={IMG14} alt="" />
          </div>
          
            <h2 className='h__2'>Кешбэк для новых пользователей</h2>
            
          </div>
        </SwiperSlide>:  <div className="kazir">
<SwiperSlide className='suka'><div className="prim_11">
  <div className="volt">
     <div className="prim_1_img">
              <div className="prim_1_img1">
              <img className='img_4' src={IMG12} alt="" />
              <img className='img__4 Davay' src={IMG13} alt="" />
              </div>
              <img className='img___4' src={IMG14} alt="" />
          </div>
          <FiX onClick={()=>{setDef9(1);okey1()}} className='fa_icons'/>
  </div>
 
            <h2>Кешбэк для новых пользователей</h2>
            <span className='duvay1'>Бонусами можно оплатить часть заказа бетона и доставки - чем больше уровень, тем больше эта часть.</span><br />
          </div></SwiperSlide>
  </div>}
 
      </Swiper>



      <div className="rahmat">
        <div className="rahmat1">
          <div className="allo_poka">
          <span>Купил строительные блоки или бетон <br />
            на ФБ -</span>
          </div>
            <h1>получай 
            двойные 
            бонусы.</h1>
            <div className="rahmat_1_img">
            <img className='rahmat_1_img_1' src={IMG15} alt="" />
            <img className='rahmat_1_img_2' src={IMG16} alt="" />
            </div>
        </div>
        <div className="rahmat2">
          <div className="rahmat_2">
<div className="rahmat_22">
<h1>А что если вы делаете заказ 
по телефону?</h1>
        <div className="karochi_span">
        <span>Узнать свой статус в программе лояльности, оплатить поездку бонусами или поинтересоваться, сколько единиц осталось на счету — можно прямо во время заказа у оператора.</span>
        </div>
</div>
          <img className='rahmat_22_img' src={IMG17} alt="" />
          </div>
          <img className='rahmat_2_posit' src={IMG18} alt="" />
        </div>
      </div>
<Footer/>

          </div>
          )
}
