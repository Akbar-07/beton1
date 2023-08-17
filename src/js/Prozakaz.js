import React from 'react'
import '../css/Prozakaz.css'
import Navbar from './Navbar'
import m350 from '../img/m350 1.png'
import qum from '../img/qum.png'
import bilmadim from '../img/183973062b952e05464d21c9f08676f9 1.png'
import kkk from '../img/1548993561_log 1.png'
import logo from '../img/logo (1).png'
import logo1 from '../img/logop.png'

function sariqyon(){
    document.querySelector(".beton-blcok").style=`border:1.5px solid  #FFCB13`
    document.querySelector(".sariqblaaa").style=`background: #FFCB13;`

    document.querySelector(".beton-blcok2").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa1").style=`background: white;`

    
    document.querySelector(".beton-blcok3").style=`border:1.5px solid  white`
    document.querySelector(".sariqblaaa2").style=`background: white;`
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

export default function Prozakaz() {
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


                        <div className="eng-kottade-scrol">
                        <div className="yebat-boshim-bla-ax-suka-qotib-qoldi">
                            <div className="qaytatan-yozvomman-bla-bu-tepa">
                                <div className="pasqismi-uji-img-joy">
                                <p>Производитель</p>
                                </div>
                                <div className="pasqismi-text-mmm">
                                <p>Марка</p>
                                </div>
                                <div className="pasqismi-opessaniya">
                                     <p>Опции</p>
                                </div>
                               
                                <div className="pasqismi-narx-joy-zz">
                                <p >Цена</p>
                                </div>
                            </div>
                        </div>
                        <div className="pasqismi-beton-info-joy">
                            <div className="pasqismi-uji-nom-yo">
                                <div className="pasqismi-uji-img-joy">
                                    <img src={kkk} alt="" />
                                </div>
                                <div className="pasqismi-text-mmm">
                                    <p>М200</p>
                                </div>
                                <div className="pasqismi-opessaniya">
                                    <p>Наименование опции</p>
                                </div>
                                <div className="pasqismi-narx-joy-zz">
                                    <p>2 000 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="pasqismi-beton-info-joy1">
                            <div className="pasqismi-uji-nom-yo">
                                <div className="pasqismi-uji-img-joy">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="pasqismi-text-mmm">
                                    <p>М200</p>
                                </div>
                                <div className="pasqismi-opessaniya">
                                    <p>Наименование опции</p>
                                </div>
                                <div className="pasqismi-narx-joy-zz">
                                    <p>2 000 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="pasqismi-beton-info-joy2">
                            <div className="pasqismi-uji-nom-yo">
                                <div className="pasqismi-uji-img-joy">
                                    <img src={logo1} alt="" />
                                </div>
                                <div className="pasqismi-text-mmm">
                                    <p>М200</p>
                                </div>
                                <div className="pasqismi-opessaniya">
                                    <p>Наименование опции</p>
                                </div>
                                <div className="pasqismi-narx-joy-zz">
                                    <p>2 000 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
