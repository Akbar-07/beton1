
import React from 'react'
import '../css/Navbar.css'
import {HiNewspaper} from "react-icons/hi"
import {FaCalculator} from "react-icons/fa"
import {FaHandsHelping} from "react-icons/fa"
import {RiFileCopy2Fill} from "react-icons/ri"
import {MdOutlineLoyalty} from "react-icons/md"
import {BsTelephoneFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {CgMenuLeft} from "react-icons/cg"
import {CgMenuRight} from "react-icons/cg"
import IMG1 from "../img/Слой_x0020_1.png"
import IMG2 from "../img/Group 144.png"
import IMG3 from "../img/Group 298.png"

export default function Navbar() {
    function open_lichka(){
            document.querySelector("#helo").style = "background:#E75858;"
            document.querySelector("#helo1").style = "color:white;"
    }
    
    function open_chap_nav(){
        document.querySelector(".menu_chap").style = "right:0px"
        document.querySelector(".black_chap").style = "display:block"
        document.querySelector(".b23").style = "background-color:#E75858;"
        document.querySelector(".icon_nav1").style = "color:white;"
        document.querySelector("body").style = "overflow: hidden;"
    }
    function block_chap_nav(){
        document.querySelector(".black_chap").style = "display:none"
        document.querySelector(".menu_chap").style = "right:-425px"
        document.querySelector("body").style = "overflow: scroll;"
    }
  return (
    <div>
        <div className="black_chap"></div>
        <div className="navbar">
            
           <div className="navbar1">
           <div className="nav_1">
                <img onClick={()=> window.location="/"} src={IMG1} alt="" />
            </div>
            <div className="nav_1_1">
                <img src={IMG3} alt="" />
            </div>
            <div className="nav_2">
                <div className="nav_2_biri">
                    <div className="nav_2_page1">
                        <HiNewspaper onClick={()=> window.location="/News"} className='icon2'/>
                        <span onClick={()=> window.location="/News"} className='s1'>Новости</span>
                    </div>
                    <div className="nav_2_page2">
                    <FaCalculator onClick={()=> window.location="/Kankulyator"} className='icon11'/>
                        <span onClick={()=> window.location="/Kankulyator"} className='s1'>Калькуляторы</span>
                    </div>
                    <div className="nav_2_page3">
                      <FaHandsHelping className='icon1'/>
                        <span onClick={()=>window.location="/Partner"}  className='s1'>Партнеры</span>
                    </div>
                    <div onClick={()=>window.location="/Partners_page"} className="nav_2_page4">
                  <RiFileCopy2Fill className='icon1'/>
                        <span className='s1'>Стать партнером</span>
                    </div>
                    <div className="nav_2_page5">
                    <MdOutlineLoyalty className='icon1'/>
                        <span onClick={()=>window.location="/Loyalnost"} className='s1'>Программа лояльности</span>
                    </div>
                </div>
                <div className="nav_2_ikki">
                <div className="nav_2_page6">
                    <span onClick={()=>window.location="/Garantiya"}  className='s2'>Гарантия</span>
                </div>
                <div className="nav_2_page7">
                    <span className='s2 s22'>Оставить претензию</span>
                </div>
                <div className="nav_2_page8">
                    <button className='b1'>  <BsTelephoneFill className='icon2'/>    Перезвоните мне</button>
                </div>
                <div className="nav_2_page9">
                    <button className='b2'>  <BiSolidUser className='icon2'/>Личный кабинет</button>
                </div>
                </div>
            </div>
            <div className="nav_3">
                <img src={IMG2} alt="" />

            </div>
            <div className="kot">
            <div className="nav_2_page10">
                    <button onClick={()=>{open_lichka()}} className='b22' id='helo'><BiSolidUser id='helo1' className='icon_nav'/></button>
                </div>
                <div className="nav_menu b22">
                <CgMenuLeft onClick={()=>{open_chap_nav()}} className='icon_nav'/>
            </div>
            </div>
           </div>


<div className="menu_chap">
            <div className="menu_chap1">
            <img onClick={()=> window.location="/"} className='beton_img' src={IMG1} alt="" />
            <button className='b23'> <CgMenuRight onClick={()=>{block_chap_nav()}} className='icon_nav1'/></button>
            </div>
           <div className="nav_2_biri">
                    <div className="n1">
                    <div className="nav_2_page1">
                        <HiNewspaper className='icon1'/>
                        <span onClick={()=> window.location="/News"} className='s1'>Новости</span>
                    </div>
                    </div>
                   <div className="n1">
                   <div className="nav_2_page2">
                    <FaCalculator className='icon11'/>
                        <span onClick={()=> window.location="/kankulyator"} className='s1'>Калькуляторы</span>
                    </div>
                   </div>
                    <div className="n1">
                    <div className="nav_2_page3">
                      <FaHandsHelping className='icon1'/>
                        <span onClick={()=> window.location="/Partner"} className='s1'>Партнеры</span>
                    </div>
                    </div>
                    <div className="n1">
                    <div className="nav_2_page4">
                  <RiFileCopy2Fill className='icon1'/>
                        <span onClick={()=> window.location="/Partners_page"} className='s1'>Стать партнером</span>
                    </div>
                    </div>
                   <div className="n1">
                   <div className="nav_2_page5">
                    <MdOutlineLoyalty className='icon1'/>
                        <span onClick={()=>window.location="/Loyalnost"} className='s1'>Программа лояльности</span>
                    </div>
                   </div>
                </div>
                <div className="nav_2_ikki">
                <div className="n1">
                <div className="nav_2_page6">
                    <span onClick={()=>window.location="/Garantiya"}  className='s2'>Гарантия</span>
                </div>
                </div>
               <div className="n1">
               <div className="nav_2_page7">
                    <span onClick={()=>window.location="/"}  className='s2 s22'>Оставить претензию</span>
                </div>
               </div>
                <div className="nav_but">
                <div className="nav_2_page8">
                  
                  <button className='b1'>  <BsTelephoneFill className='icon2'/>    Перезвоните мне</button>
              </div>
              <div className="nav_2_page9">
                  <button className='b2'>  <BiSolidUser className='icon2'/>Личный кабинет</button>
              </div>
                </div>
                </div>
                <div className="nav_33">
                <img src={IMG2} alt="" />
            </div>
           </div>

        </div>

    </div>
  )
}