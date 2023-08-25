import React, { useState } from 'react'
import '../css/Prozakaz.css'
import Navbar from './Navbar'
import m350 from '../img/m350 1.png'
import qum from '../img/qum.png'
import bilmadim from '../img/183973062b952e05464d21c9f08676f9 1.png'
import kkk from '../img/1548993561_log 1.png'
import logo from '../img/logo (1).png'
import logo1 from '../img/logop.png'
import acardion from '../img/acardion1.png'
import acardion2 from '../img/acardion2.png'
import acardion3 from '../img/ph_drop-fill.png'
import acardion5 from '../img/acardion5.png'
import acardion6 from '../img/acardion6.png'
import canculator from '../img/canculator.png'
import mini from '../img/mini-kamaz.png'
// jk.png
import js from '../img/jk.png'
import standart from '../img/standart.png'
import primi from '../img/primi.png'
import komp from '../img/Laptop.png'
import qol from '../img/Coin In Hand.png'
import card from '../img/Debit Card.png'
import money from '../img/Money With Arrow.png'
import zakazbeton from '../img/Group (15).png'
import zakazbeton1 from '../img/Group (16).png'
import iconbla from '../img/Group 301.png'
import prima from '../img/Group 201.png'
import wal from '../img/Group 100.png'
import mediaicon1 from '../img/497ab60ab79f80d6177faa511e5df442 2 (1).png'
import betonmedia from '../img/logo (2).png'
import betonmedia1 from '../img/logop(1).png'
import betonmedia2 from '../img/Screenshot_7_lmp3jpq1 1.png'
import otkritkartu from '../img/Group 344.png'

function sariqyon(){  
      document.querySelector(".beton-blcok2").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa1").style=`background: white;`

        
    document.querySelector(".beton-blcok3").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa2").style=`background: white;`

    document.querySelector(".beton-blcok").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa").style=`background: #FFCB13;`

}
function sariqyon1(){
    document.querySelector(".beton-blcok").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa").style=`background: white;`

    
    document.querySelector(".beton-blcok3").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa2").style=`background: white;`

    document.querySelector(".beton-blcok2").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa1").style=`background: #FFCB13;`

}
function sariqyon2(){
    document.querySelector(".beton-blcok").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa").style=`background: white;`

    document.querySelector(".beton-blcok2").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa1").style=`background: white;`

    document.querySelector(".beton-blcok2").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa1").style=`background: white;`
    

    document.querySelector(".beton-blcok3").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa2").style=`background: #FFCB13;`
    
}
function chiqaqol(){
    var y= document.querySelector(".akardon-pasdia-chiqadi-but").style.display;
    if(y=="none"){
    document.querySelector(".akardon-pasdia-chiqadi-but").style.display="block";
    }else{
       document.querySelector(".akardon-pasdia-chiqadi-but").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda p").style.color;
    if(a=="black"){
    document.querySelector(".akardon-text-joyda p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda p").style.color="black";
    }
    document.querySelector(".zakaz-beton-glav").style=`    height: 2500px;`
}
function chiqaqol1(){
    var y= document.querySelector(".alalalalallaalalalal").style.display;
    if(y=="none"){
    document.querySelector(".alalalalallaalalalal").style.display="block";
    }else{
       document.querySelector(".alalalalallaalalalal").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda1 p").style.color;
    if(a=="black"){
    document.querySelector(".akardon-text-joyda1 p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda1 p").style.color="black";
    }

}
function chiqaqol2(){
    var y= document.querySelector(".alalalalallaalalalal1").style.display;
    if(y=="none"){
    document.querySelector(".alalalalallaalalalal1").style.display="block";
    }else{
       document.querySelector(".alalalalallaalalalal1").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda2 p").style.color;
    if(a=="black"){
    document.querySelector(".akardon-text-joyda2 p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda2 p").style.color="black";
    }
    document.querySelector(".zakaz-beton-glav").style=`    height: 2550px;`
}
function chiqaqol3(){
    var y= document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display;
    if(y=="none"){
    document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="block";
    }else{
       document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="none";
    }

    var a= document.querySelector(".akardon-text-joyda3 p").style.color;
    if(a=="black"){
    document.querySelector(".akardon-text-joyda3 p").style.color="#E93333";
    }else{
       document.querySelector(".akardon-text-joyda3 p").style.color="black";
    }
    document.querySelector(".zakaz-beton-glav").style=`    height: 2680px;`
}
function pastarap(){
    document.querySelector(".beton-blcok5").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa5").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok6").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa6").style=`background: white;`

    document.querySelector(".beton-blcok7").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa7").style=`background: white;`
}
function pastarap1(){
    document.querySelector(".beton-blcok5").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa5").style=`background: white;`

    document.querySelector(".beton-blcok6").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa6").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok7").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa7").style=`background: white;`
}
function pastarap2(){
    document.querySelector(".beton-blcok5").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa5").style=`background: white;`
    
    document.querySelector(".beton-blcok6").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa6").style=`background: white;`

    document.querySelector(".beton-blcok7").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa7").style=`background: #FFCB13;`
}
function buton(){
    document.querySelector(".btn-kogda1").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);color:white`

    document.querySelector(".btn-kogda2").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda3").style=`background:none;border: 1px solid black;color:black`

    document.querySelector(".salom1-tezroq").style=`display:block`
    document.querySelector(".salom1-bugun").style=`display:none`
    document.querySelector(".salom1-keyin").style=`display:none`

    document.querySelector(".kalendar-joy-justify-end").style=`    position: relative;
    top: -90px;`
}
function buton1(){
    document.querySelector(".btn-kogda1").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda3").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda2").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);color:white`

    document.querySelector(".salom1-tezroq").style=`display:none`
    document.querySelector(".salom1-bugun").style=`display:block`
    document.querySelector(".salom1-keyin").style=`display:none`

        document.querySelector(".kalendar-joy-justify-end").style=`    position: relative;
    top: -90px;`
}
function buton2(){
    document.querySelector(".btn-kogda1").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda2").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda3").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);color:white`

    document.querySelector(".salom1-bugun").style=`display:none`
    document.querySelector(".salom1-keyin").style=`display:block`
    document.querySelector(".salom1-tezroq").style=`display:none`

    document.querySelector(".kalendar-joy-justify-end").style=`    position: relative;
    top: -90px;`
}
function pastarapOP(){
    document.querySelector(".beton-blcok8").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa10").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok9").style=`border:1.5px solid  #white`
    document.querySelector(".sariqblaaa11").style=`background: white;`

    document.querySelector(".beton-blcok10").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa12").style=`background: white;`

        document.querySelector(".beton-blco11").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa13").style=`background: white;`
}
function pastarapOP2(){
    document.querySelector(".beton-blcok9").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa11").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok8").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa10").style=`background: white;`
    
    document.querySelector(".beton-blcok10").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa12").style=`background: white;`

    document.querySelector(".beton-blco11").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa13").style=`background: white;`
}
function pastarapOP3(){
    document.querySelector(".beton-blcok10").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa12").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok9").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa11").style=`background: white;`

    document.querySelector(".beton-blcok8").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa10").style=`background: white;`

    document.querySelector(".beton-blco11").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa13").style=`background: white;`
}
function pastarapOP4(){
    document.querySelector(".beton-blco11").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa13").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok10").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa12").style=`background: white;`

        document.querySelector(".beton-blcok8").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa10").style=`background: white;`

    document.querySelector(".beton-blcok9").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa11").style=`background: white;`

    document.querySelector(".beton-blcok10").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa12").style=`background: white;`


}
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
export default function Prozakaz() {
const [data,setData] =useState(0)
const [data1,setData1] =useState(0)
const [data2,setData2] =useState(0)
const [data3,setData3] =useState(0)
const [data4,setData4] =useState(0)
const [data5,setData5] =useState(0)
const [page,setPage] = useState(1)
  return (
<div>
    <Navbar/>
<div id="zakaz-bt">
        <div className="zakaz-beton-glav">
            <div className="zakaz-beton-ichi" >
                <div className="stage-1-zakaz">
                    <h2>Что необходимо?</h2>
                    <div className="beton-korishma-but-joy">
                        <div className="beton-blcok" onClick={()=>sariqyon()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={m350} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Бетон</span></div>
                            </div>
                        </div>

                        <div className="beton-blcok2" onClick={()=>sariqyon1()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa1"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={qum} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Пескобетон</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok3" onClick={()=>sariqyon2()}>
                            <div className="sasriq-narsa-yonadi1">
                                <div className="sariqblaaa2"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={bilmadim} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Строительный <br />
раствор</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok1"><p>Специальный бетон</p></div>
                    </div>
                    <div className="biton-prizvoditel">
                        <h2>Производитель</h2>
                        <div className="beton-range-value">
                            <div className="tepa-qismi-metr">
                                <p>М50</p>
                                <p>М200</p>
                                <p>М400</p>
                            </div>
                            <div className="ana-beton-range-input">
                                <input type="range" name="" id="" />
                            </div>
                        </div>
                        <div className="eng-kottade-ulani-ushab-turadi">
                        <div className="eng-kottade-scrol">
                        <table>
                            <thead>
                            <tr>
                            <th className='ana-atble-qildik-p'>Производитель</th>
                            <th className='ana-atble-qildik-p'>Марка</th>
                            <th className='ana-atble-qildik-p'>Опции</th>
                            <th className='ana-atble-qildik-p'>Цена</th>
                            </tr>
                            </thead>

          <tbody>
            <tr>
              <th><img src={kkk} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr>
              <th><img src={logo} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>
            <tr>
              <th><img src={logo1} alt="" /></th>
              <th className='pasqismi-narx-joy-zz'>М200</th>
              <th className='pasqismi-opessaniya'>Наименование опции</th>
              <th className='pasqismi-narx-joy-zz'>2 000 ₽</th>
            </tr>

          </tbody>
        </table>

                        </div>
                        <div className="eng-kotta-ong-tarap-acardion">
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
                                    <p onClick={()=>chiqaqol3()}>Противоморозная  <br />
добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol3()} />
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
                        <div className="ana-tepaniyam-tugaim-oldim-xaxa">
                        <div className="eng-kotta-ong-tarap-acardion" id='hashasddd'>
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
                                    <p onClick={()=>chiqaqol3()}>Противоморозная  <br />
добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol3()} />
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
                            <div className="ana-kamentariya-joyiborekan">
                                <div className="ichi-zaib-boldim-nomtopishga">
                                    <h2>Требуются специализированные добавки?</h2>
                                    <p>Добавьте в поле ниже необходимые комментарии для технолога</p>
                                    <textarea  cols="30" rows="10" placeholder='Введите комментарий'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="pasqismi-kankulator">
                            <h2>Количество</h2>
                            <div className="tak-pasda-koroc-kankularorbor">
                            <div className="beton-range-value1">
                            <div className="tepa-qismi-metr1">
                                <p>{data}м3</p>
                            </div>
                            <div className="ana-beton-range-input">
                            <input type="range"  min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)} />
                            </div>
                        </div>
                                <div className="iyana-kankulator-boshqa-nom-yo">
                                    <div className="iyana-ichigakirdeik">
                                    <h3>Не знаете количество?</h3>
                                    <p>Рассчитайте онлайн в калькуляторе</p>
                                    <div className="tipa-kankularorde">
                                        <img src={canculator} alt="" />Калькулятор
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hop-tepasini-bitirdim-endi-uana-pasga">
                            <h2>Куда привезти</h2>
                            <div className="kettik-pasga-juda-qziq">
                                <div className="input-joyi-borkande-nmagaaaa">
                                    <input type="text" placeholder='Введите адрес' /><button><box-icon name='search' color='#6a6a6a' ></box-icon></button>
                                    <div className="karta-joyi-bor-ekand">
                                        <img src={js} alt="" onClick={()=>window.location="https://www.google.com/maps?output=classic"} /><span onClick={()=>window.location="https://www.google.com/maps?output=classic"}>Открыть карту</span>
                                    </div>
                                </div>
                            </div>
                            <div className="kilometr-joy-hop">
                                <div className="kilomert-ichidagi-text">
                                    <p>В скольки километрах от дороги 
находится Ваш участок?</p>
                                </div>
                                <div className="kilometr-ichi-input-ran">
                                    <div className="laslasdldlflflfaawadsda">
                                    <p>{data1}м</p>
                                    <p>10км</p>
                                    </div>
                                    <div className="kikmoletr-test-page-input">
                                    <input type="range"  min="0" max="10000" step="10" value={data1} onChange={(e)=>setData1(e.target.value)} />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="kilometr-joy-hop1">
                                <div className="kilomert-ichidagi-text">
                                    <input type="checkbox" /> <span>Имеются ли препятствия для большой машины  на пути подъезда к вашему участку?</span>
                                </div>
                            </div>
                            <div className="kilometr-joy-hop">
                                <div className="kilomert-ichidagi-text1">
                                    <p>Ширина проезда (м)</p>
                                </div>
                                <div className="kilometr-ichi-input-ran">
                                    <div className="laslasdldlflflfaawadsda">
                                    <p>{data2}м</p>
                                    <p>20м</p>
                                    </div>
                                    <div className="kikmoletr-test-page-input">
                                    <input type="range"  min="0" max="20" step="1" value={data2} onChange={(e)=>setData2(e.target.value)} />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="kilometr-joy-hop">
                                <div className="kilomert-ichidagi-text1">
                                    <p>Ограничения по высоте (м)</p>
                                </div>
                                <div className="kilometr-ichi-input-ran">
                                    <div className="laslasdldlflflfaawadsda">
                                    <p>{data3}м</p>
                                    <p>7м</p>
                                    </div>
                                    <div className="kikmoletr-test-page-input">
                                    <input type="range"  min="0" max="7" step="1" value={data3} onChange={(e)=>setData3(e.target.value)} />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="tarif-joyi-ekan-tez-ql">
                                <h2>Тариф</h2>
                                <div className="all-tarif-btn-joy">
                                <div className="beton-blcok5" onClick={()=>pastarap()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa5"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={mini} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Эконом</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok6" onClick={()=>pastarap1()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa6"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={standart} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Стандарт</span></div>
                            </div>
                        </div>

                        <div className="beton-blcok7" onClick={()=>pastarap2()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa7"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size">
                                    <img src={primi} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Эконом</span></div>
                            </div>
                        </div>
                        
                                </div>
                            </div>
                            <div className="kogda-tois-datatime-joy">
                                <h2>Когда?</h2>
                                <div className="kogda-ichi-buton-vibr">
                                    <button className='btn-kogda1' onClick={()=>buton()}>Как можно быстрее</button>
                                    <button className='btn-kogda2' onClick={()=>buton1()}>Сегодня</button>
                                    <button className='btn-kogda3' onClick={()=>buton2()}>Предварительный заказ</button>
                                    <div className="razbit-zakaz-na-chasti">
                                        <input type="checkbox"  /><span>Разбить заказ <br id='yematbla' /> на части</span>
                                    </div>
                                </div>
                                <div className="bugun-erta-kichkina-joyla">
                                    <div className="salom1-tezroq">
                                    <div className="dasdasdddsaderwrew">
                                        <button>9:00 - 16:00</button>
                                        <button>12:00-15:00</button>
                                        <button>13:00-18:00</button>
                                        <button>18:00-21:00</button>
                                        </div>
                                    </div>
                                    <div className="salom1-bugun">
                                        <div className="dasdasdddsaderwrew">
                                        <button>9:00 - 12:00</button>
                                        <button>12:00-15:00</button>
                                        <button>15:00-18:00</button>
                                        <button>18:00-21:00</button>
                                        </div>
                                    </div>
                                    <div className="salom1-keyin">
                                    <div className="dasdasdddsaderwrew">
                                        <button>10:00 - 12:00</button>
                                        <button>12:00-15:00</button>
                                        <button>20:00-22:00</button>
                                        <button>19:00-21:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kalendar-joy-justify-end">
                                <input type="date" name="" id="" />
                            </div>
                            <div className="sposib-oplati-prozakaz">
                            <div className="tarif-joyi-ekan-tez-ql1">
                                <h2>Способ оплаты</h2>
                                <div className="all-tarif-btn-joy">

                                <div className="beton-blcok8" onClick={()=>pastarapOP()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa10"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size1">
                                    <img src={komp} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Онлайн</span></div>
                            </div>
                        </div>
                        <div className="beton-blcok9" onClick={()=>pastarapOP2()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa11"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size1">
                                    <img src={card} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Перевод на карту</span></div>
                            </div>
                        </div>

                        <div className="beton-blcok10" onClick={()=>pastarapOP3()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa12"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size1">
                                    <img src={qol} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Наличные</span></div>
                            </div>
                        </div>
                        
                        <div className="beton-blco11" onClick={()=>pastarapOP4()}>
                            <div className="sasriq-narsa-yonadi">
                                <div className="sariqblaaa13"></div>
                            </div>
                            <div className="beton-rasm-patom-text">
                                <div className="beton-rasm-img-size1">
                                    <img src={money} alt="" />
                                </div>
                                <div className="beton-rasm-img-text"><span>Предоплата</span></div>
                            </div>
                        </div>
                                </div>
                            </div>  
                            </div>
                            <div className="sdacha-na-zakaz">
                                <h4>С какой купюры потребуется сдача?</h4>
                                <div className="sdacha-input-text">
                                    <div className="sdacha-input">
                                        <input type="text" placeholder='Поле для ввода' />
                                    </div>
                                    <div className="sdacha-text">
                                        <p>Если сумма заказа <span>превышает 150000</span>  <br id='syebalsa' />
может потребоваться  <span>предоплата в 5000 рублей.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="jelaniya-pozakazu">
                                <h2>Пожелания к заказу</h2>
                                <br />
                                <br />
                                <p>Увеличение стоимости</p>
                                <br />
                                <div className="sdacha-input">
                                        <input type="text" placeholder='Поле для ввода' />
                                    </div>
                                    <div className="jalab-kamazlani-turi-bor-ekan">
                                        <div className="lalala-nom-yo-bunga-prosta-p">
                                        <p>Если вам требуется доставка <br id='syebalsa'  /> определенными машинами, <br id='syebalsa' /> укажите какими:</p>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi">
                                            <button><span>2,5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>3м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>7м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>9м3</span><img src={zakazbeton} alt="" /></button>
                                        </div>
                                        
                                    </div>
                                    <div className="kamazla-media-suka-blat">
                                            <button><span>2,5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>3м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>5м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>7м3</span><img src={zakazbeton} alt="" /></button>
                                            <button><span>9м3</span><img src={zakazbeton} alt="" /></button>
                                    </div>
                                    <div className="jalab-kamazlani-turi-bor-ekan1">
                                        <div className="lalala-nom-yo-bunga-prosta-p">
                                            <p>Швинг</p>
                                        </div>
                                        <div className="kamazlaga-keldi-endi-shu-qoldi">
                                            <button><span>15м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>21м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>30м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>40м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>57м</span><img src={zakazbeton1} alt="" /></button>
                                        </div>
                                    </div>
                                    <div className="kamazla-media-suka-blat">
                                            <button><span>15м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>21м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>30м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>40м</span><img src={zakazbeton1} alt="" /></button>
                                            <button><span>57м</span><img src={zakazbeton1} alt="" /></button>
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
                        </div>
                    </div>
                    <div className="onasini-emsin-shu-mediani">
                        <h2>Производитель</h2>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
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
                            <p>М50</p>
                            <p>М200</p>
                            <p>М400</p>
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
                        <div className="exxxxxxxxxx-inputttt-ichi">
                            <div className="bu-chap-tarap-sana"> 
                            <div className="bu-chap-1">1</div>
                            <div className="bu-chap-2">2</div>
                            <div className="bu-chap-3">3</div>
                            <div className="bu-chap-4">4</div>
                            <div className="bu-chap-5">5</div>
                            <div className="bu-chap-6">6</div>
                            <div className="bu-chap-7">7</div>
                            <div className="bu-chap-8">8</div>
                            <div className="bu-chap-9">9</div>
                            <div className="bu-chap-10">10</div>
                            <div className="bu-chap-11">11</div>
                            <div className="bu-chap-12">12</div>
                            <div className="bu-chap-13">13</div>
                            <div className="bu-chap-14">14</div>
                            <div className="bu-chap-15">15</div>
                            <div className="bu-chap-16">16</div>
                            <div className="bu-chap-17">17</div>
                            <div className="bu-chap-18">18</div>
                            <div className="bu-chap-19">19</div>
                            <div className="bu-chap-20">20</div>
                            <div className="bu-chap-21">21</div>
                            <div className="bu-chap-22">22</div>
                            <div className="bu-chap-23">23</div>
                            <div className="bu-chap-24">24</div>
                            <div className="bu-chap-25">25</div>
                            <div className="bu-chap-26">26</div>
                            <div className="bu-chap-27">27</div>
                            <div className="bu-chap-28">28</div>
                            <div className="bu-chap-29">29</div>
                            <div className="bu-chap-30">30</div>
                            <div className="bu-chap-31">31</div>
                            </div>
                            <div className="bu-orta-tarap-oy"></div>
                            <div className="ong-orta-tarap-yil"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   {/* <div className="samiy-pasledniy-joy-oplata">
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
    </div>
   </div> */}
</div>
  )
}
