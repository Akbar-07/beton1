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
}
function buton1(){
    document.querySelector(".btn-kogda1").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda3").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda2").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);color:white`
}

function buton2(){
    document.querySelector(".btn-kogda1").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda2").style=`background:none;border: 1px solid black;color:black`
    document.querySelector(".btn-kogda3").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);color:white`
}


export default function Prozakaz() {
const [data,setData] =useState(0)
const [data1,setData1] =useState(0)
const [data2,setData2] =useState(0)
const [data3,setData3] =useState(0)
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
                                        <img src={js} alt="" /><span>Открыть карту</span>
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
        <div className="zakaz-beton-media-glav-ashibka">
            <div className="tepa-qismi-media-df">
            <div className="media-beton-tepa">
                <h3>Что необходимо?</h3>
                <div className="all-buton-media-tanlidi">
                    
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
                <div className="razmer-joy-pas-media-zaibal-joy">
                    <h2>
                    Производитель
                    </h2>
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
                        <div className="eng-kottade-scrolqw">
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
                        <div className="yana-kotta-scrol-no-mediada">
                        <div className="eng-kottade-ulani-ushab-turadi">
                        <div className="eng-kottade-scrol">
                        <div className="yebat-boshim-bla-ax-suka-qotib-qoldi">
                            <div className="qaytatan-yozvomman-bla-bu-tepa">
                                <div className="pasqismi-uji-img-joy">
                                <p>Производитель</p>
                                </div>
                                <div className="pasqismi-text-mmm1">
                                <p>Марка</p>
                                </div>
                                <div className="pasqismi-opessaniya1">
                                     <p>Опции</p>
                                </div>
                               
                                <div className="pasqismi-narx-joy-zz1">
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
            </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

// <h2 className='numbervalue'>{data}м3</h2>
// <input type="range"  min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)} />
