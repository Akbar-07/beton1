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
import { useEffect } from 'react'
import axios, { all } from 'axios'
import url from './Host'

export default function Kankulyator() {
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

    var ozgar = (key)=>{
        if(key === 1){
            setId1(2)
            document.querySelector(".kal_header2").style ="width:900px"
        }
        else if(key === 2){
            setId1(3)
            document.querySelector(".kal_header2").style ="width:900px"   
        }
        else if(key === 3){
            setId1(1)
            document.querySelector(".kal_header2").style ="width:740px" 
        }
        else{
            setId1(1)
            document.querySelector(".kal_header2").style ="width:740px"
        }
    }
    function ruxsat(id){
        for(let i = 0; i < document.querySelectorAll(".kal_header_card_dumaloq").length; i++){
            if(id === i){
                console.log(id,"bosh_key_id");
                document.querySelectorAll(".chek_dumaloq")[i].style = "display:block"
                document.querySelectorAll(".kal_header_card")[i].style = "border:1px solid #FFCB13"
            }
            else{
                document.querySelectorAll(".chek_dumaloq")[i].style = "display:none"
                document.querySelectorAll(".kal_header_card")[i].style = "border:1px solid #E9E9E9"
            }
        }
        
    }
    function glavaga(){
        window.location="/home"
    }
    const [sel, setSel] = useState([
       
    ])
    useEffect(()=>{
        axios.get(`${url}/api/product`).then(res=>{
            setSel(res.data)
        })
    },[])
    const [sel1, setSel1] = useState([
        {
            title : 20,
        },
        {
            title : 30,
        },
        {
            title : 50,
        },
        {
            title : 75,
        },
        {
            title : 100,
        },
        {
            title : 120,
        },
        {
            title : 150,
        },
        {
            title : 250,
        }
    ])
    const [capitan2, setCapitan2] = useState([{id1:2}])
    var otash1 = ()=>{
        var a = capitan2
        a.push({id1})
        console.log(id1, "id2");
        setCapitan2(a)
    }
    const [capitan1, setCapitan1] = useState([{id1:1}])
    var otash = ()=>{
        var a = capitan1
        a.push({id1})
        setCapitan1(a)
        console.log(id1,"id1");
    } 
    const [capitan3, setCapitan3] = useState([{id1:3}])
    var otash3 = ()=>{
        var a = capitan3
        a.push({id1})
        setCapitan3(a)
        console.log(id1,"id3");

    }
    const [senabbas, setSenabbas] = useState(0)
    const [capitan4, setCapitan4] = useState([{id1:4}])
    var otash4 = ()=>{
        var a = capitan4
        a.push({id1})
        setCapitan4(a)
        console.log(id1,"id4");

    } 
    function radio_och(id){
        for (let i = 0; i <document.querySelectorAll(".radio_inp").length; i++) {
            if(id === i){
                console.log(i,"asad")
                document.querySelectorAll(".radio_inp")[i].style = "background-color: #FFCB13 !important;"
            }else{
                console.log("muz")
                document.querySelectorAll(".radio_inp")[i].style = "background-color: none !important;"
            }
            
        }
    }
    const[kalib, setKalib] = useState(0)
    const [hisob_masiv,setHisob_massiv] = useState(0)
    var kan_hisob = ()=>{
        document.querySelector(".yoq_bol_span1").style = "display:none"
        var b = hisob_masiv
        var hisob=0
        for (let i=0; i < document.querySelectorAll(".mlp1").length; i++) {
        var inp1 = document.querySelectorAll(".mlp1")[i].value
        var inp2 = document.querySelectorAll(".mlp2")[i].value
        var inp3 = document.querySelectorAll(".mlp3")[i].value
          hisob=hisob+(inp1 * inp2 * inp3)
        } 
        b=[{}] 
        var foiz =  (hisob * kalib) / 100
          b.push({hisob})
        setHisob_massiv(hisob + foiz)
    }
    var kan_hisob2 = ()=>{
        document.querySelector(".yoq_bol_span1").style = "display:none"
        var b = hisob_masiv
        var hisob=0
        for (let i=0; i < document.querySelectorAll(".mlp1").length; i++) {
        var inp1 = document.querySelectorAll(".mlp1")[i].value
        var inp2 = document.querySelectorAll(".mlp2")[i].value
        var inp3 = document.querySelectorAll(".mlp3")[i].value
        var pes = sessionStorage.getItem("pesbeton")
        console.log(pes,"pes");
          hisob=hisob+(inp1 * inp2 * inp3 * pes)
        } 
        b=[{}] 
        var foiz =  (hisob * kalib) / 100
          b.push({hisob})
        setHisob_massiv(hisob + foiz)
    }
    var kan_hisob3 = ()=>{
        document.querySelector(".yoq_bol_span1").style = "display:none"
        var b = hisob_masiv
        var hisob=0
        for (let i=0; i < document.querySelectorAll(".mlp1").length; i++) {
        var inp1 = document.querySelectorAll(".mlp1")[i].value
        var inp2 = document.querySelectorAll(".mlp2")[i].value
        var inp3 = document.querySelectorAll(".mlp3")[i].value
        var inp4 = document.querySelectorAll(".mlp4")[i].value
          hisob=hisob+(inp1 * inp2 * inp3 * inp4)
        } 
        b=[{}] 
        var foiz =  (hisob * kalib) / 100
          b.push({hisob})
        setHisob_massiv(hisob + foiz)
    }
    var kan_hisob4 = ()=>{
        document.querySelector(".yoq_bol_span1").style = "display:none"
        var b = hisob_masiv
        var hisob=0
        for (let i=0; i < document.querySelectorAll(".mlp1").length; i++) {
        var inp1 = document.querySelectorAll(".mlp1")[i].value
        var inp2 = document.querySelectorAll(".mlp2")[i].value
        var inp3 = document.querySelectorAll(".mlp3")[i].value
          hisob=hisob+(inp1 * inp2 * inp3)
        } 
        b=[{}] 
        var foiz =  (hisob * kalib) / 100
          b.push({hisob})
        setHisob_massiv(hisob + foiz)
    }
    
        const [key1,setKey1] = useState()
        var kod = key1
        const [pesbeton,setPes] = useState([{}])
        const [s3_sena_ham,setS3]= useState([])
        
        useEffect(()=>{
            axios.get(`${url}/api/product`).then(res=>{
                setS3(res.data)
            }).catch(err=>{

            })
        },[])
        console.log(s3_sena_ham);
        var sum = s3_sena_ham 
        var summa = hisob_masiv * sum
        const [ses, setSes] = useState([])

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
                    return <div onClick={()=>{ruxsat(key);ozgar(key); setKey1(key)}} key={key} className="kal_header_card" >
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
               {id1 === 1 ?<div className="kal_header2_map1">
                
                {capitan1.map(item=>{
                    return <>
                    {id1 === item.id1 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1 mlp1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1 mlp2' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1 mlp3' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <select  className='select_yangi' >
                            {sel.map((item,key)=>{
                                return <option className='option1234' onClick={()=>{setSes([item.allmarka.title,item.allhomeiy.title,"П3"]);setSenabbas(item.s3_sena)}} key={key} value={JSON.stringify(item)}>{item.allmarka.title}, {item.allhomeiy.title}(П3)</option>
                              
                            })}
                              {sel.map((item,key)=>{
                                return <option className='option1234' onClick={()=>{setSes([item.allmarka.title,item.allhomeiy.title,"П4"]);setSenabbas(item.s4_sena)}} key={key} value={JSON.stringify(item)}>{item.allmarka.title}, {item.allhomeiy.title}(П4)</option>
                              
                            })}
                        </select>
                       
                    </div>
                     </div>: ""}
                    </>
                })}
                 <div className="kal_header3">
                <img onClick={()=>{otash()}} src={IMG7} alt="" />
            </div>
                </div> : ""}
               {id1 === 2 ? <div className="kal_header2_map1">
               {capitan2.map(item=>{
                    return <>
                    {id1 === item.id1 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,см:</span><br />
                    <input type="number" className='inp1_1 mlp1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,см:</span><br />
                    <input type="number" className='inp1_1 mlp2' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Толщина,см:</span><br />
                    <input type="number" className='inp1_1 mlp3' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Пескобетон,кг:</span><br />
                        <select onChange={(e)=>{sessionStorage.setItem("pesbeton",e.target.value)}} className='select_yangi1'>
                            {sel1.map((item,key)=>{
                                return <option key={key} value={item.title}>{item.title} кг</option>
                                
                            })}
                        </select>
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <select onChange={(e)=>{sessionStorage.setItem("mas",e.target.value)}} className='select_yangi'>
                            {sel.map((item,key)=>{
                                return <option key={key} value={item.name}>{item.title}</option>
                             
                            })}
                        </select>
                    </div>
                    </div> : ""}
                    </>
                })}
                 <div className="kal_header3">
                <img onClick={()=>{otash1()}} src={IMG7} alt="" />
            </div>
               </div> : ''}
              {id1 === 3 ?  <div className="kal_header2_map1">
               {capitan3.map(item=>{
                    return <>
                    {id1 === item.id1 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1 mlp1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1 mlp2' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Подошва ленты,м:</span><br />
                    <input type="number" className='inp1_1 mlp3' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1 mlp4' id="inp5" placeholder='2'/>
                    </div>
                    <div className="lobila">
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <select onChange={(e)=>{sessionStorage.setItem("mas",e.target.value)}} className='select_yangi'>
                            {sel.map((item,key)=>{
                                return <option key={key} value={item.name}>{item.title}</option>
                           
                            })}
                        </select>
                    </div>
                    <div className="kal_inp1 kal_inp2_2">
                        <span>Внутренние перегородки</span><br />
                    <input type="number" className='inp1_1_yengisi' id="inp9" placeholder='2'/>
                    </div>
                    </div>
                </div> : ""}
                    </>
                })}
                 <div className="kal_header3 kal_header3_kop_1">
                <img onClick={()=>{otash3()}} src={IMG7} alt="" />
            </div>
               </div> : ""}
             {id1 === 4 ?  <div className="kal_header2_map1">
              {capitan4.map(item=>{
                    return <>
                    {id1 === item.id1 ? <div className="kal_header2_1">
                    <div className="kal_inp1">
                        <span>Ширина,м:</span><br />
                    <input type="number" className='inp1_1 mlp1' id="inp1" placeholder='6'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Длина,м:</span><br />
                    <input type="number" className='inp1_1 mlp2' id="inp2" placeholder='8'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Высота ленты,м:</span><br />
                    <input type="number" className='inp1_1 mlp3' id="inp3" placeholder='2'/>
                    </div>
                    <div className="kal_inp1">
                        <span>Марка бетона:</span><br />
                        <select  onChange={(e)=>{sessionStorage.setItem("mas",e.target.value)}} className='select_yangi'>
                            {sel.map((item,key)=>{
                                return <option  key={key} value={item.name}>{item.title}</option>
                                
                            })}
                        </select>
                       
                    </div>
                </div> : ""}
                    </>
                })}
                 <div className="kal_header3">
                <img onClick={()=>{otash4()}} src={IMG7} alt="" />
            </div>
              </div> : ""}
                
            </div>
           
            <div className="kal_header4">
                <div className="kal_header4_sar">
                    <span>Заложить потери:</span><img className='kal_header4_sar_img' src={IMG6} alt="" />
                </div>
                <div className="kal_header4_sar1">
                    <input onClick={()=>{radio_och(0);setKalib(0)}} className='radio_inp' type="radio" name="" id="poter1" />
                    <span>Не закладывать потери</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(1);setKalib(3)}} className='radio_inp' type="radio" name="" id="poter2" />
                    <span>Потери 3%</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(2);setKalib(4)}} className='radio_inp' type="radio" name="" id="poter3" />
                    <span>Потери 4%</span>
                </div>
                <div className="kal_header4_sar2">
                    <input onClick={()=>{radio_och(3);setKalib(5)}} className='radio_inp' type="radio" name="" id="poter4" />
                    <span>Потери 5%</span>
                </div>
            </div>
            <div className="kal_header_chiziq">

            </div>
            <div className="kal_header5">
                <div className="kal_header_but">
                <button onClick={()=>{id1 === 1 ? kan_hisob() : id1 ===2 ? kan_hisob2() : id1 === 3 ? kan_hisob3() : id1 === 4 ? kan_hisob4():<></>}}>Рассчитать стоимость</button>
                </div>
                <div className="kal_header_span">
                    <span className='span707'>Кол-во м3:</span><br />
                    <span className='span440'><span className='yoq_bol_span1'> </span>
                        {hisob_masiv}
                          <span> м3</span>
                    </span>
                </div>
                <div className="kal_header_vid">
                    <span className='span707'>Вид бетона:</span><br />
                    <span className='span441'>{ses[0]} <br />{ses[1]}({ses[2]})</span>
                </div>
                <div className="kal_header_narxi">
                    <span className='span707'>Стоимость:</span>
                    <h2>{hisob_masiv*senabbas} ₽</h2>
                    <div onClick={()=>{window.location="/zakazbeton"}} className="kal_header_zakaz">
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
