import React, { useState } from 'react'
import "../css/Kankulyator.css"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"

import IMG1 from "../img/Group 100.png"
import IMG2 from "../img/8138748 1.png"
import IMG3 from "../img/2a0ebe8113a93493e6f1a60826688129 1.png"
import IMG4 from "../img/0bf106c90a0533d17ae2a41ec2bcd5b7 1.png"
import IMG5 from "../img/2 4.png"
import IMG6 from "../img/Group (2).png"
import IMG7 from "../img/Group 381.png"

import Fade from 'react-reveal/Fade';

import {BsCheckLg} from "react-icons/bs" 
import {BiChevronDown} from "react-icons/bi"
import {BiRightArrowAlt} from "react-icons/bi"

export default function Kankulyator() {
    function acordion(){
        document.querySelector(".kal_inp1_div1").style = "display:block"
        document.querySelector(".kal_inp1_div11").style = "display:block"
        document.querySelector(".kal_header2_1").style = " align-items: start;"
        // document.querySelector(".div_icons1").style = "transform: rotate(180deg);"
    }
    function acordion1(){
        var as = document.querySelector(".acar_span").innerHTML
        document.querySelector(".kal_inp1_div").innerHTML = as 
        document.querySelector(".kal_inp1_div1").style = "display:none"
        document.querySelector(".kal_inp1_div11").style = "display:none"
    }
    function acordion2(){
        var as = document.querySelector(".acar_span1").innerHTML
        document.querySelector(".kal_inp1_div").innerHTML = as
        document.querySelector(".kal_inp1_div1").style = "display:none"
        document.querySelector(".kal_inp1_div11").style = "display:none"
    }
    function bolid(){
        document.querySelector(".kal_inp1_div1_kop_rig").style = "display:block"
        document.querySelector(".kal_inp1_div11_kop_rig").style = "display:block"
        document.querySelector(".kal_header2_1").style = " align-items: start;"
        // document.querySelector(".div_icons1").style = "transform: rotate(180deg);"
    }
    function bolid1(){
        var as = document.querySelector(".lobi_span").innerHTML
        document.querySelector(".kal_inp1_div_kopiya_rig").innerHTML = as 
        document.querySelector(".kal_inp1_div1_kop_rig").style = "display:none"
        document.querySelector(".kal_inp1_div11_kop_rig").style = "display:none"
    }
    function bolid2(){
        var as = document.querySelector(".lobi_span1").innerHTML
        document.querySelector(".kal_inp1_div_kopiya_rig").innerHTML = as
        document.querySelector(".kal_inp1_div1_kop_rig").style = "display:none"
        document.querySelector(".kal_inp1_div11_kop_rig").style = "display:none"
    }
    const [kanmap, setKanmap] = useState([
        {
            img : IMG2,
            name : "Фундамент по своим размерам"
        },
        {
            img : IMG3,
            name : "Пескобетон на стяжку"
        },
        {
            img : IMG4,
            name : "Ленточный фундамент"
        },
        {
            img : IMG5,
            name : "Монолитная плита фундамента"
        }
    ])
    const [id1, setId1] = useState(1)

    let ozgar = (key)=>{
        if(key === 1){
            setId1(2)
            document.querySelector(".kal_header2").style ="width:900px"
        }
        else if(key === 2){
            setId1(3)
            document.querySelector(".kal_header2").style ="width:900px"
        }
        else{
            setId1(1)
            document.querySelector(".kal_header2").style ="width:740px"
        }
    }
    function ruxsat(id){
        for(let i = 0; i < document.querySelectorAll(".kal_header_card_dumaloq").length; i++){
            if(id === i){
                document.querySelectorAll(".chek_dumaloq")[i].style = "display:block"
                document.querySelectorAll(".kal_header_card")[i].style = "border:1px solid #FFCB13"
            }
            else{
                document.querySelectorAll(".chek_dumaloq")[i].style = "display:none"
                document.querySelectorAll(".kal_header_card")[i].style = "border:1px solid #E9E9E9"
            }
        }
        
    }
    
    function radio_och(id){
        for (let i = 0; i <document.querySelectorAll(".radio_inp").length; i++) {
            if(id === i){
                console.log("asad")
                document.querySelectorAll(".radio_inp")[i].style = "background-color: #FFCB13 !important;"
            }else{
                console.log("muz")
                document.querySelectorAll(".radio_inp")[i].style = "background-color: none !important;"
            }
            
        }
    }
    function glavaga(){
        window.location="/home"
    }
  return (
    <div>
        <Navbar/>
        <div className="kan_glava1">
            <span className='kan_glava1_span'><span onClick={()=>{glavaga()}}>Главная</span> | <span className='kan_glava1_span1'>Калькулятор</span></span>
        </div>

        <div className="kankulyator_h1">
            <img src={IMG1} alt="" />
            <h1>Калькуляторы</h1>
        </div>
        <div className="kan_span">
        С другой стороны постоянный количественный рост и сфера нашей активности требуют от нас анализа соответствующий условий активизации. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Равным образом укрепление и развитие структуры представляет...
        </div>
        <div className="kan_span1">
            <span>С другой стороны постоянный количественный рост и сфера нашей активности требуют от нас анализа соответствующий условий активизации. Повседневная практика показывает, что постоянный количественный </span>
        </div>

        <div className="kal_header">
            <div className="kal_header1">
                {kanmap.map((item,key)=>{
                    return <div onClick={()=>{ruxsat(key);ozgar(key)}} key={key} className="kal_header_card" >
                        {console.log(key)}
                        <div className="kal_header_card1">
                            <img className='chek_info' src={IMG6} alt="" />
                            <div className="kal_header_card_dumaloq">
                                <BsCheckLg className='chek_dumaloq'/>
                            </div>
                        </div>
                        <div className="kal_header_card_img">
                                <img src={item.img} alt="" />
                            </div>
                           <div className="kal_header_card_span">
                           <span className='kal_header_card_span1'>{item.name}</span>
                           </div>
                    </div>
                })}
            </div>
            <div className="kal_header2">
                {id1 === 1 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <div onClick={()=>{acordion()}} className="kal_inp1_div">
                            <span className='kal_inp1_div_span1'>Наименование</span> <BiChevronDown className='div_icons1'/>
                        </div>
                         <Fade bottom cascade>
                         <div onClick={()=>{acordion1()}} className="kal_inp1_div1">
                            <span className='acar_span'>salom</span>
                        </div>
                        <div onClick={()=>{acordion2()}} className="kal_inp1_div11">
                            <span className='acar_span1'>salom1234567</span>
                        </div>
                         </Fade>
                       
                    </div>
                </div> : ""}
                {id1 === 2 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,см:</span><br />
                    <input type="number" className='inp1_1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,см:</span><br />
                    <input type="number" className='inp1_1' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Толщина,см:</span><br />
                    <input type="number" className='inp1_1' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Пескобетон,кг:</span><br />
                        <div onClick={()=>{bolid()}} className="kal_inp1_div_kopiya_rig">
                            <span className='kal_inp1_div_span1_kopiya_rig'>40</span> <BiChevronDown className='div_icons1'/>
                        </div>
                         <Fade bottom cascade>
                         <div onClick={()=>{bolid1()}} className="kal_inp1_div1_kop_rig">
                            <span className='lobi_span'>salom</span>
                        </div>
                        <div onClick={()=>{bolid2()}} className="kal_inp1_div11_kop_rig">
                            <span className='lobi_span1'>salom1234567</span>
                        </div>
                         </Fade>
                       
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <div onClick={()=>{acordion()}} className="kal_inp1_div">
                            <span className='kal_inp1_div_span1'>Наименование</span> <BiChevronDown className='div_icons1'/>
                        </div>
                         <Fade bottom cascade>
                         <div onClick={()=>{acordion1()}} className="kal_inp1_div1">
                            <span className='acar_span'>salom</span>
                        </div>
                        <div onClick={()=>{acordion2()}} className="kal_inp1_div11">
                            <span className='acar_span1'>salom1234567</span>
                        </div>
                         </Fade>
                       
                    </div>
                </div> : ""}
                {id1 === 3 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Подошва ленты,м:</span><br />
                    <input type="number" className='inp1_1' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1' id="inp5" placeholder='2'/>
                    </div>
                    <div className="lobila">
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <div onClick={()=>{acordion()}}  className="kal_inp1_div">
                            <span className='kal_inp1_div_span1'>Наименование</span> <BiChevronDown className='div_icons1'/>
                        </div>
                         <Fade bottom cascade>
                         <div onClick={()=>{acordion1()}} className="kal_inp1_div1">
                            <span className='acar_span'>salom</span>
                        </div>
                        <div onClick={()=>{acordion2()}} className="kal_inp1_div11">
                            <span className='acar_span1'>salom1234567</span>
                        </div>
                         </Fade>
                       
                    </div>
                    <div className="kal_inp1 kal_inp2_2">
                        <span>Внутренние перегородки</span><br />
                    <input type="number" className='inp1_1_yengisi' id="inp9" placeholder='2'/>
                    </div>
                    </div>
                </div> : ""}
                {id1 === 4 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <div onClick={()=>{acordion()}} className="kal_inp1_div">
                            <span className='kal_inp1_div_span1'>Наименование</span> <BiChevronDown className='div_icons1'/>
                        </div>
                         <Fade bottom cascade>
                         <div onClick={()=>{acordion1()}} className="kal_inp1_div1">
                            <span className='acar_span'>salom</span>
                        </div>
                        <div onClick={()=>{acordion2()}} className="kal_inp1_div11">
                            <span className='acar_span1'>salom1234567</span>
                        </div>
                         </Fade>
                       
                    </div>
                </div> : ""}
            </div>
            <div className="kal_header3">
                <img src={IMG7} alt="" />
            </div>
            <div className="kal_header4">
                <div className="kal_header4_sar">
                    <span>Заложить потери:</span><img className='kal_header4_sar_img' src={IMG6} alt="" />
                </div>
                <div className="kal_header4_sar1">
                    <input onClick={()=>{radio_och(0)}} className='radio_inp' type="radio" name="" id="" />
                    <span>Не закладывать потери</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(1)}} className='radio_inp' type="radio" name="" id="" />
                    <span>Потери 3%</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(2)}} className='radio_inp' type="radio" name="" id="" />
                    <span>Потери 4%</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(3)}} className='radio_inp' type="radio" name="" id="" />
                    <span>Потери 5%</span>
                </div>
            </div>
            <div className="kal_header_chiziq">

            </div>
            <div className="kal_header5">
                <div className="kal_header_but">
                <button>Рассчитать стоимость</button>
                </div>
                <div className="kal_header_span">
                    <span className='span707'>Кол-во м3:</span><br />
                    <span className='span440'>20 000 м3</span>
                </div>
                <div className="kal_header_vid">
                    <span className='span707'>Вид бетона:</span><br />
                    <span className='span441'>Гравийный бетон <br /> М150 B12,5 F100 W4</span>
                </div>
                <div className="kal_header_narxi">
                    <span className='span707'>Стоимость:</span>
                    <h2>5 000 ₽</h2>
                    <div className="kal_header_zakaz">
                        <span className='span442'>Добавить в заказ</span>
                        <div className="kal_header_dumaloq">
                            <BiRightArrowAlt className='icon_fifty'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<Footer/>



    </div>
  )
}
