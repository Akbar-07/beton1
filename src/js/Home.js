
import Navbar from './Navbar'
import "../css/Home.css"
import fabrika from '../img/fabrika_betona3.png'
import betonshik1 from '../img/betonshik1.png'
import sibavisastroy from '../img/sibavisastroy.png'
import more_betona1 from '../img/more_betona1.png'
import noviy_beton1 from '../img/noviy_beton1.png'
import IMGG1 from "../img/Ellipse 10.png"
import IMGG2 from "../img/7911246 1.png"
import IMGG3 from "../img/5285548 1.png"
import IMGG4 from "../img/lentochnyy_glubokogo_zaleg 2.png"
import IMGG5 from "../img/stickers-camion-malaxeur-a-beton 1.png"
import IMGG6 from "../img/5285565 1 (1).png"
import IMGG7 from "../img/7911367 1.png"
import IMGG8 from "../img/8640498 1.png"
import IMGG9 from "../img/Vector (14).png"
import IMGG10 from "../img/Group 225.png"
import IMGG11 from "../img/Rectangle 68.png"
import IMGG12 from "../img/white_stone_text_effect2 1.png"
import IMGG13 from "../img/white_stone_text_effect2 2.png"
import IMGG14 from "../img/8640498 1 (1).png"
import IMGG15 from "../img/Rectangle 68 (1).png"
import IMG1 from "../img/баннер.png"
import IMG2 from "../img/Group 100.png"
import IMG3 from "../img/Group 62.png"
import IMG4 from "../img/Group 259.png"
import IMG5 from "../img/Group 261.png"
import IMG6 from "../img/Group 258.png"
import IMG7 from "../img/Group 260.png"
import IMG8 from "../img/Group 262.png"
import IMG9 from "../img/2 1548993563.png"
import IMG10 from "../img/Mask group (2).png"
import IMG11 from "../img/Mask group (3).png"
import IMG12 from "../img/497ab60ab79f80d6177faa511e5df442 2.png"
import IMG13 from "../img/Mask group (4).png"
import IMG14 from "../img/Mask group (5).png"
import IMG15 from "../img/2GIS_logo 1.png"
import IMG16 from "../img/Слой_x0020_1.png"
import {BsStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import IMG17 from "../img/101 1.png"
import IMG18 from "../img/Phone Location.png"
import IMG19 from "../img/AdobeStock_70069013 1.png"
import IMG20 from "../img/QR Code.png"
import IMG21 from "../img/айфон3 1.png"
import IMG22 from "../img/Vector 4.png"
import IMG23 from "../img/appgallery.png"
import IMG24 from "../img/appstore.png"
import IMG25 from "../img/galaxystore.png"
import IMG26 from "../img/getapps.png"
import IMG27 from "../img/googleplay.png"
import IMG28 from "../img/rustore.png"
import IMG29 from "../img/TGN_4 1.png"
import IMG30 from "../img/Star Badge.png"
import IMG31 from "../img/Businessman signing contract.png"
import IMG32 from "../img/Computer.png"
import IMG33 from "../img/Vectary texture.png"
import IMG34 from "../img/Alarm Clock.png"
import IMG35 from "../img/айфон5 1.png"
import IMG36 from "../img/Business person enjoying break time.png"
import IMG37 from "../img/AdobeStock_70069013 1 (1).png"
import IMG38 from "../img/Computer (1).png"
import IMG39 from "../img/Group 322.png"
import IMG40 from "../img/Star Badge.png"
import IMG41 from "../img/orig 1.png"
import IMG42 from "../img/2 189.png"
import IMG43 from "../img/5285565 1.png"
import IMG44 from "../img/User Account.png"
import IMG45 from "../img/Question Mark Magnifying Glass.png"
import IMG46 from "../img/concrete-mixer-1 1.png"
import IMG47 from "../img/Group 302.png"
import IMG48 from "../img/21548993561_log 1.png"
import IMG49 from "../img/logo 1.png"
import IMG50 from "../img/logop 1.png"
import IMG51 from "../img/497ab60ab79f80d6177faa511e5df442 2 (1).png"
import IMG52 from "../img/Screenshot_7_lmp3jpq12 1.png"
import IMG53 from "../img/Frame 274.png"
import IMG54 from "../img/Frame 275.png"
import IMG55 from "../img/Frame 276.png"
import IMG56 from "../img/m011t0344_a_pizza_21jun22 2.png"
import IMG57 from "../img/m011t0344_a_pizza_21jun22 1.png"
import IMG58 from "../img/Vector 7.png"
import IMG59 from "../img/айфон3 1 (1).png"
import IMGG17 from "../img/2 1548993562.png"
import IMGG20promax from "../img/valentin3 1.png"
import IMGGmonet1 from "../img/1 монет.png"
import IMGGmonet2 from "../img/3 монет.png"
import IMGGmonet3 from "../img/2 монет.png"


import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {BsChevronUp} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"
import Fade from 'react-reveal/Fade';       
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Footer from './Footer'
import Zakazbeton from  "./Zakazbeton"
import axios from "axios"
import url from './Host'

export default function Home() {

const [bir, setBir] = useState(1)
const [mashina,setMashina] = useState(1)
function sariq1(){
    document.querySelector(".b4").style = "background-color:#FFCB13;"
    document.querySelector(".b3").style = "background-color:#EBEBEB;"
}
function sariq2(){
    document.querySelector("#al1").style = "background-color:#FFCB13;"
    document.querySelector("#al2").style = "background-color:#EBEBEB;"
}
function fabrika2() {
    document.querySelector(".sibavisastroyimg").style="display:none"
    document.querySelector(".sibavisastroyimg1").style="display:flex"
    document.querySelector(".fabrikaimg").style="display:none"
    document.querySelector(".fabrikaimg1").style="display:flex"
    document.querySelector(".betonshikimg1").style="display:none"
    document.querySelector(".betonshikimg").style="display:flex"
    document.querySelector(".more_betonimg1").style="display:none"
    document.querySelector(".more_betonimg").style="display:flex"
    document.querySelector(".noviy_betonimg1").style="display:none"
    document.querySelector(".noviy_betonimg").style="display:flex"
}
function betonshik2() {
    document.querySelector(".sibavisastroyimg").style="display:none"
    document.querySelector(".sibavisastroyimg1").style="display:flex"
    document.querySelector(".betonshikimg").style="display:none"
    document.querySelector(".betonshikimg1").style="display:flex"
    document.querySelector(".fabrikaimg1").style="display:none"
    document.querySelector(".fabrikaimg").style="display:flex"
    document.querySelector(".more_betonimg1").style="display:none"
    document.querySelector(".more_betonimg").style="display:flex"
    document.querySelector(".noviy_betonimg1").style="display:none"
    document.querySelector(".noviy_betonimg").style="display:flex"
}
function sibavisastroy2() {
    document.querySelector(".sibavisastroyimg1").style="display:none"
    document.querySelector(".sibavisastroyimg").style="display:flex"
    document.querySelector(".betonshikimg1").style="display:none"
    document.querySelector(".betonshikimg").style="display:flex"
    document.querySelector(".fabrikaimg1").style="display:none"
    document.querySelector(".fabrikaimg").style="display:flex"
    document.querySelector(".more_betonimg1").style="display:none"
    document.querySelector(".more_betonimg").style="display:flex"
    document.querySelector(".noviy_betonimg1").style="display:none"
    document.querySelector(".noviy_betonimg").style="display:flex"
}
function more_betona2() {
    document.querySelector(".more_betonimg").style="display:none"
    document.querySelector(".more_betonimg1").style="display:flex"
    document.querySelector(".sibavisastroyimg").style="display:none"
    document.querySelector(".sibavisastroyimg1").style="display:flex"
    document.querySelector(".betonshikimg1").style="display:none"
    document.querySelector(".betonshikimg").style="display:flex"
    document.querySelector(".fabrikaimg1").style="display:none"
    document.querySelector(".fabrikaimg").style="display:flex"
    document.querySelector(".noviy_betonimg1").style="display:none"
    document.querySelector(".noviy_betonimg").style="display:flex"
}
function noviy_beton2() {
    document.querySelector(".noviy_betonimg").style="display:none"
    document.querySelector(".noviy_betonimg1").style="display:flex"
    document.querySelector(".more_betonimg1").style="display:none"
    document.querySelector(".more_betonimg").style="display:flex"
    document.querySelector(".sibavisastroyimg").style="display:none"
    document.querySelector(".sibavisastroyimg1").style="display:flex"
    document.querySelector(".betonshikimg1").style="display:none"
    document.querySelector(".betonshikimg").style="display:flex"
    document.querySelector(".fabrikaimg1").style="display:none"
    document.querySelector(".fabrikaimg").style="display:flex"
}
const [data11, setData11] = useState([])
const [data111, setData111] = useState([])
useEffect(()=>{
    axios.get(`${url}/api/homeiy`).then(res=>{
        setData11(res.data)
        setData111(res.data)
    })
    
    
},[])

function partner2(id) {
    axios.get(`${url}/api/homeiy`).then(res=>{
        const Filter=res.data.filter(item=>item.id==id)
        setData111(Filter)
    })
}

const [sliv, setSliv] = useState(1)
  return (
    <div>
        <div className="seriy">
        <Navbar />
{sliv === 1 ?  <div className="rek rek_orig">
           <div className="rek_h111">
           <h1 className='h1111111111111111111'><span className='rek_h1_kop'>Купить бетон</span> также просто, <br className='br_11'/> как заказать пиццу</h1>
            <span className='rek_h111_span'>Скачивай наше приложение!</span>
            <div className="rek_rasm_div">
           <div className="rek_rasm_div1">
           <img className='rek_img_s1' src={IMG23} alt="" />
           <img className='rek_img_s1' src={IMG24} alt="" />
           <img className='rek_img_s1' src={IMG25} alt="" />
           </div>
            <div className="rek_rasm_div2">
            <img className='rek_img_s1' src={IMG26} alt="" />
            <img className='rek_img_s1' src={IMG27} alt="" />
            <img className='rek_img_s1' src={IMG28} alt="" />
            </div>
            </div>
           </div>
            <div className="rek_dumaloq1">
                <div className="rek_dumaloq1_kichik"></div>
            </div>
            <div className="rek_dumaloq1_tel">
                <img className='rek_dumaloq1_kichik_img' src={IMG59} alt="" />
            </div>
            <div className="rek_dumaloq2">
            <img className='rek_dumaloq2_img1' src={IMG58} alt="" />
                <img className='rek_dumaloq2_img2' src={IMG57} alt="" />
                <img className='rek_dumaloq2_img3' src={IMG56} alt="" />
            </div>
            <div onClick={()=>{setSliv(2)}} className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div> : ""}
      {sliv === 2 ? <div className="rek rek_orig">
          <div className="dumaloq_12343">

          </div>
          <img className='beton_taksi1' src={IMGG17} alt="" />
          <div className="beton_taksi1_sozi">
            <h1 className='beton_taksi1_sozi1'>
            Только <span className='beton_taksi1_sozi2'>проверенные</span> поставщики бетона в одном месте!
            </h1>
          </div>
            <div onClick={()=>{setSliv(3)}} className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div> : ""} 
        {sliv === 3 ? <div className="rek rek_orig">
        <div className="rek_dumaloq_keyin_1">
                </div>
                <img className='rek_dumaloq_keyin_1_img1 rek_dumaloq_keyin_1_img1_ochir' src={IMGG8} alt="" />
            <img className='rek_dumaloq_keyin_1_img1 rek_dumaloq_keyin_1_img1_ochir1' src={IMGG14} alt="" />
            <div className="rek_dumaloq_keyin_2">
            </div>
            <img className='img_qilomagan_1 img_qilomagan_1_kopiy' src={IMGG11} alt="" />
            <img className='img_qilomagan_1 img_qilomagan_2' src={IMGG15} alt="" />
            <div className="ertyuioylgkjhgfszhyjg">
            <img className='galati_rasm1' src={IMGG12} alt="" />
            <img className='galati_rasm2 galati_rasm_gnjiogggf' src={IMGG13} alt="" />
            <img className='galati_rasm2 galati_rasm2_kop' src={IMGG12} alt="" />
            </div>
            <span className='rotate1'>мне срочно нужен бетон!</span>
            
            <div className="rek_gapi_5">
                <h2>Все просто! Звони!</h2>
                <div className="rek_gapi_5_tegi">
                 <img className='phone_1' src={IMGG9} alt="" />
                 <img className='phone_2' src={IMGG10} alt="" />
                </div>
            </div>
        <div onClick={()=>{setSliv(4)}} className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div> : ""} 
        {sliv === 4 ? <div className="rek rek_orig">
        <div className="rek_ohirgi_baneer">
            <h1 className='rek_ohirgi_baneer_sozi'><span className='beton_taksi1_sozi2'>1000 бонусов</span> за регистрацию и первый заказ по промокоду <span className='beton_taksi1_sozi2'>“START”</span></h1>
        </div>
       <div className="rek_dumaloq_zay_nab11"></div>
       <div className="rek_dumaloq_zay_nab1"></div>
       <div className="rek_dumaloq_zay_nab1_1"></div>
       <img className='promax_onas' src={IMGG20promax} alt="" />
       <div className="monet_z">
        <div className="monet_z1">
            <img src={IMGGmonet1} alt="" />
            <img src={IMGGmonet2} alt="" />
        </div>
        <img src={IMGGmonet3} alt="" />
       </div>
            <div onClick={()=>{setSliv(1)}} className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div> : ""} 
    
        
        <div className="rek1">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper sviperS">
        <SwiperSlide className='azx'>  <div className="rek">
           <div className="rek_h111">
           <h1 className='h1111111111111111111'><span className='rek_h1_kop'>Купить бетон</span> также просто, <br className='br_11'/> как заказать пиццу</h1>
            <span className='rek_h111_span'>Скачивай наше приложение!</span>
            <div className="rek_rasm_div">
           <div className="rek_rasm_div1">
           <img className='rek_img_s1' src={IMG23} alt="" />
           <img className='rek_img_s1' src={IMG24} alt="" />
           <img className='rek_img_s1' src={IMG25} alt="" />
           </div>
            <div className="rek_rasm_div2">
            <img className='rek_img_s1' src={IMG26} alt="" />
            <img className='rek_img_s1' src={IMG27} alt="" />
            <img className='rek_img_s1' src={IMG28} alt="" />
            </div>
            </div>
           </div>
            <div className="rek_dumaloq1">
                <div className="rek_dumaloq1_kichik"></div>
            </div>
            <div className="rek_dumaloq1_tel">
                <img className='rek_dumaloq1_kichik_img' src={IMG59} alt="" />
            </div>
            <div className="rek_dumaloq2">
            <img className='rek_dumaloq2_img1' src={IMG58} alt="" />
                <img className='rek_dumaloq2_img2' src={IMG57} alt="" />
                <img className='rek_dumaloq2_img3' src={IMG56} alt="" />
            </div>
            <div className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div></SwiperSlide>
        <SwiperSlide className='azx'>  <div className="rek">
        <div className="rek_dumaloq_keyin_1">
                </div>
                <img className='rek_dumaloq_keyin_1_img1 rek_dumaloq_keyin_1_img1_ochir' src={IMGG8} alt="" />
            <img className='rek_dumaloq_keyin_1_img1 rek_dumaloq_keyin_1_img1_ochir1' src={IMGG14} alt="" />
            <div className="rek_dumaloq_keyin_2">
            </div>
            <img className='img_qilomagan_1 img_qilomagan_1_kopiy' src={IMGG11} alt="" />
            <img className='img_qilomagan_1 img_qilomagan_2' src={IMGG15} alt="" />
            <div className="ertyuioylgkjhgfszhyjg">
            <img className='galati_rasm1' src={IMGG12} alt="" />
            <img className='galati_rasm2 galati_rasm_gnjiogggf' src={IMGG13} alt="" />
            <img className='galati_rasm2 galati_rasm2_kop' src={IMGG12} alt="" />
            </div>
            <span className='rotate1'>мне срочно нужен бетон!</span>
            
            <div className="rek_gapi_5">
                <h2>Все просто! Звони!</h2>
                <div className="rek_gapi_5_tegi">
                 <img className='phone_1' src={IMGG9} alt="" />
                 <img className='phone_2' src={IMGG10} alt="" />
                </div>
            </div>
        <div className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div></SwiperSlide>
        <SwiperSlide className='azx'>  <div className="rek">
          <div className="dumaloq_12343">

          </div>
          <img className='beton_taksi1' src={IMGG17} alt="" />
          <div className="beton_taksi1_sozi">
            <h1 className='beton_taksi1_sozi1'>
            Только <span className='beton_taksi1_sozi2'>проверенные</span> поставщики бетона в одном месте!
            </h1>
          </div>
            <div className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div></SwiperSlide>
        <SwiperSlide className='azx'>  <div className="rek">
        <div className="rek_ohirgi_baneer">
            <h1 className='rek_ohirgi_baneer_sozi'><span className='beton_taksi1_sozi2'>1000 бонусов</span> за регистрацию и первый заказ по промокоду <span className='beton_taksi1_sozi2'>“START”</span></h1>
        </div>
       <div className="rek_dumaloq_zay_nab11"></div>
       <div className="rek_dumaloq_zay_nab1"></div>
       <div className="rek_dumaloq_zay_nab1_1"></div>
       <img className='promax_onas' src={IMGG20promax} alt="" />
       <div className="monet_z">
        <div className="monet_z1">
            <img src={IMGGmonet1} alt="" />
            <img src={IMGGmonet2} alt="" />
        </div>
        <img src={IMGGmonet3} alt="" />
       </div>
            <div className="rek_dumaloq3">
                <HiOutlineArrowNarrowRight className='icon_z'/>
            </div>
        </div></SwiperSlide>
      </Swiper>
        </div>
        <div className="beton_sar">
                <img className='img1' src={IMG2} alt="" />
                <span>Заказ бетона</span>
            </div>
            <Zakazbeton/>
            
        <div className="beton_z">
            <div className=" beton_sar1">
                <img className='img1' src={IMG2} alt="" />
                <span>О сервисе в  цифрах</span>
            </div>
        </div>
        <div className="beton_z_span">
            <span>Убедительные факты и цифры говорят сами за себя. 
                    Вот лишь несколько примеров:</span>
        </div>

        <div className="biton_hed">
            <div className="bit_hed1">
             <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG2} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'><span className='bit_hed1_com1_h22'>5 проверенных <br /> поставщиков</span> бетона – ваша надежность и уверенность в качестве</h2>
                <span className='bit_hed1_con_span'>Сотрудничаем только с ведущими поставщиками бетона, имеющими автоматизированное производство и собственные аттестованные лаборатории для контроля качества. Не работаем с ненадежными заводами, поскольку применение бетона без технологического и лабораторного контроля чревато непредсказуемыми последствиями.</span>
             </div>
             <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG3} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более <span className='bit_hed1_com1_h22'>3500 клиентов </span>уже выбрали нас</h2>
                <span className='bit_hed1_con_span'>Именно столько человек уже воспользовались преимуществами нашего сервиса доставки бетона. Постоянное расширение клиентской базы позволяет нам гордиться, что нас выбирает большое количество людей. Мы благодарны за оказываемое доверие и непрерывно развиваемся для того, чтобы выполнять все поставки на самом высоком уровне.</span>
             </div>
             <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG4} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более<span className='bit_hed1_com1_h22'> 500 м3 бетона </span>доставляем в день</h2>
                <span className='bit_hed1_con_span'>Ежедневно доставляем не менее 500 м3 бетона, что служит показателем оптимизации и высокой производительности нашего сервиса.Поэтому, вне зависимости от масштабов реализуемого проекта, вы можете положиться на нас при заказе нужного количества бетона.</span>
             </div>
            </div>
            <div className="bit_hed2">
            <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi dumaloq_tochka_ichi1' src={IMGG5} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Мощный автопарк: <br /><span className='bit_hed1_com1_h22'> 180+ миксеров <br />  <span className='bit_hed1_com1_h2'>и</span> 27+ бетононасосов</span></h2>
                <span className='bit_hed1_con_span'>Собственный автопарк – это наше преимущество и гарантия оперативной доставки бетона на вашу строительную площадку. Имеющиеся в наличии миксеры (свыше 180 ед.) вмещают различный объем бетона – от 2.5 до 12 м3. Более 27 ед. наших бетононасосов доставляют бетон на высоту от 21 до 76 метров. Все это обеспечивает надежность и своевременность каждой доставки.</span>
             </div>
              <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG6} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Надежность и удовлетворенность: более <span className='bit_hed1_com1_h22'>98% клиентов</span> полностью довольны нашим сервисом!</h2>
                <span className='bit_hed1_con_span'>Мы гордимся тем, что наш сервис поставки бетона отличается в высшей степени надежностью и качеством. Подтверждение этому – отзывы 98% благодарных клиентов. Наша цель заключается в доверии заказчиков и поддержке наивысшего стандарта обслуживания, поэтому мы оперативно реагируем на каждое пожелание заказчиков.</span>
             </div>
             <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG7} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более сотни<span className='bit_hed1_com1_h22'> 25-этажных </span>домов можно построить из проданного через наш сервис бетона</h2>
                <span className='bit_hed1_con_span'>Мы гордимся тем, что продали свыше 40.000 м3 бетона за последний год. Его достаточно для заливки 14,2 футбольных полей или постройки более сотни 25-этажных домов. Быстрая доставка, надежный и качественный материал от ключевых поставщиков нашего города позволяют реализовывать самые амбициозные строительные проекты в кратчайшие сроки.</span>
             </div>
            </div>
        </div>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper mySvip1">
        <SwiperSlide className='slide1'>   <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG2} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'><span className='bit_hed1_com1_h22'>5 проверенных <br /> поставщиков</span> бетона – ваша надежность и уверенность в качестве</h2>
                <span className='bit_hed1_con_span'>Сотрудничаем только с ведущими поставщиками бетона, имеющими автоматизированное производство и собственные аттестованные лаборатории для контроля качества. Не работаем с ненадежными заводами, поскольку применение бетона без технологического и лабораторного контроля чревато непредсказуемыми последствиями.</span>
             </div></SwiperSlide>
        <SwiperSlide className='slide1'><div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG3} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более <span className='bit_hed1_com1_h22'>3500 клиентов </span>уже выбрали нас</h2>
                <span className='bit_hed1_con_span'>Именно столько человек уже воспользовались преимуществами нашего сервиса доставки бетона. Постоянное расширение клиентской базы позволяет нам гордиться, что нас выбирает большое количество людей. Мы благодарны за оказываемое доверие и непрерывно развиваемся для того, чтобы выполнять все поставки на самом высоком уровне.</span>
             </div></SwiperSlide>
        <SwiperSlide className='slide1'> <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG4} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более<span className='bit_hed1_com1_h22'> 500 м3 бетона </span>доставляем в день</h2>
                <span className='bit_hed1_con_span'>Ежедневно доставляем не менее 500 м3 бетона, что служит показателем оптимизации и высокой производительности нашего сервиса.Поэтому, вне зависимости от масштабов реализуемого проекта, вы можете положиться на нас при заказе нужного количества бетона.</span>
             </div></SwiperSlide>
        <SwiperSlide className='slide1'>  <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi dumaloq_tochka_ichi1' src={IMGG5} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Мощный автопарк: <br /><span className='bit_hed1_com1_h22'> 180+ миксеров <br />  <span className='bit_hed1_com1_h2'>и</span> 27+ бетононасосов</span></h2>
                <span className='bit_hed1_con_span'>Собственный автопарк – это наше преимущество и гарантия оперативной доставки бетона на вашу строительную площадку. Имеющиеся в наличии миксеры (свыше 180 ед.) вмещают различный объем бетона – от 2.5 до 12 м3. Более 27 ед. наших бетононасосов доставляют бетон на высоту от 21 до 76 метров. Все это обеспечивает надежность и своевременность каждой доставки.</span>
             </div></SwiperSlide>
        <SwiperSlide className='slide1'> <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG6} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Надежность и удовлетворенность: более <span className='bit_hed1_com1_h22'>98% клиентов</span> полностью довольны нашим сервисом!</h2>
                <span className='bit_hed1_con_span'>Мы гордимся тем, что наш сервис поставки бетона отличается в высшей степени надежностью и качеством. Подтверждение этому – отзывы 98% благодарных клиентов. Наша цель заключается в доверии заказчиков и поддержке наивысшего стандарта обслуживания, поэтому мы оперативно реагируем на каждое пожелание заказчиков.</span>
             </div></SwiperSlide>
        <SwiperSlide className='slide1'> <div className="bit_hed1_com1">
                <img className='dumaloq_tochka_ichi' src={IMGG7} alt="" />
                <img className='dumaloq_tochka' src={IMGG1} alt="" />
                <h2 className='bit_hed1_com1_h2'>Более сотни<span className='bit_hed1_com1_h22'> 25-этажных </span>домов можно построить из проданного через наш сервис бетона</h2>
                <span className='bit_hed1_con_span'>Мы гордимся тем, что продали свыше 40.000 м3 бетона за последний год. Его достаточно для заливки 14,2 футбольных полей или постройки более сотни 25-этажных домов. Быстрая доставка, надежный и качественный материал от ключевых поставщиков нашего города позволяют реализовывать самые амбициозные строительные проекты в кратчайшие сроки.</span>
             </div></SwiperSlide>
      </Swiper>

        </div>

        {mashina === 1 ? <div className="beton_mashina">
            <div className="bet_mashina1">
                <div className="bet_mash1">
                    <div className="bet_mash11">
                    <h1>Немного 
                        о нас</h1>
                    </div>
                </div>
                <div className="bet_mash2">
                    <h3 className='p'>О сервисе</h3>
                    <p className='p1'>Сервис «БЕТОН ТАКСИ» предоставляет вам ряд уникальных преимуществ. Во-первых, это обеспечение оперативной поставки бетона, позволяющей сэкономить время и деньги без отставания от графика строительства. Во-вторых, это гарантия высокого качества бетона, поскольку поставки осуществляются только с заводов проверенных поставщиков.</p>
                    <p onClick={()=>{setMashina(2)}} className='p2'>Читать полностью <BsChevronRight className='pp2'/></p>
                </div>
            </div>
            <div className="bet_mash3">
            <img className='img3' src={IMG9} alt="" />

            </div>
        </div> : <div className="beton_mashina_kopiya">
            <div className="bet_mashina1_kopiya">
                <div className="bet_mash1_kopiya">
                    <div className="bet_mash11_kopiya">
                    <h1>Немного 
                        о нас</h1>
                    </div>
                </div>
                <div className="bet_mash2_kopiya">
                    <h3 className='p'>О сервисе </h3>
                    <p className='p1 pink2'>Сервис «БЕТОН ТАКСИ» предоставляет вам ряд уникальных преимуществ. Во-первых, это обеспечение оперативной поставки бетона, позволяющей сэкономить время и деньги без отставания от графика строительства. Во-вторых, это гарантия высокого качества бетона, поскольку поставки осуществляются только с заводов проверенных поставщиков.
Что делает наш сервис более удобным? Это, прежде всего, простой и интуитивно понятный процесс заказа, который можно осуществить через мобильное приложение или интернет-браузер. При оформлении достаточно выбрать нужный объем бетона и время доставки, а об остальном позаботимся мы. 
Если нет электронного устройства, то и это не проблема – свяжитесь с нами по телефону 505-505, и оператор примет ваш заказ.
Наша задача – сделать ваш процесс строительства проще 
и эффективнее. Мы берем на себя ответственность за поставку и качество бетона, а вы можете сосредоточиться на главных задачах своего строительного проекта.
Мы гарантируем стабильное и безупречное исполнение каждой поставки, поскольку ценим ваше время и спокойствие!</p>
                    <p onClick={()=>{setMashina(1)}} className='t2'>Свернуть <BsChevronUp className='pp2'/></p>
                </div>
            </div>
        </div>}
        
        
        
       <div className="seriy1">
       <div className="beton_homiy">
            <h1>Наши партнеры</h1>
        </div>

        {/* <div className="beton_homiy1">
           <div className="beton_homiy1_img">
           <div className="img5"><img onClick={()=>fabrika2()} className='fabrikaimg' src={IMG10} alt="" /><img style={{display:"none"}} className='fabrikaimg1' src={fabrika} alt="" /></div>
           </div>
           <div className="beton_homiy1_img">
            <img src={IMG11} alt="" className='betonshikimg' onClick={()=>betonshik2()} /><img src={betonshik1} style={{display:"none"}} className='betonshikimg1' alt="" />
           </div>
           <div className="beton_homiy1_img">
             <img className='sibavisastroyimg' src={IMG12} alt="" /><img onClick={()=>sibavisastroy2()} className='sibavisastroyimg1' style={{display:"none"}} src={sibavisastroy} alt="" />
           </div>
           <div className="beton_homiy1_img">
            <img onClick={()=>more_betona2()} src={IMG13} className='more_betonimg' alt="" /><img style={{display:"none"}} className='more_betonimg1' src={more_betona1} alt="" />
           </div>
           <div className="beton_homiy1_img">
             <div className="img4"><img className='noviy_betonimg' onClick={()=>noviy_beton2()} src={IMG14} alt="" /> <img style={{display:"none"}} className='noviy_betonimg1' src={noviy_beton1} alt="" /></div>
           </div>
        </div> */}

        <div className="beton_homiy1_kopiya">
            {data11.map(item=>{
                return (
                <div className="beton_homiy1_img">
                    <img onClick={()=>partner2(item.id)} src={item.image} alt="" />
                </div>)
            })}
           {/* <div className="beton_homiy1_img">
          <img src={IMG48} alt="" />
           </div> */}

           {/* <div className="beton_homiy1_img">
            <img src={IMG49} alt="" />
           </div>
           <div className="beton_homiy1_img">
             <img src={IMG50} alt="" />
           </div>
           <div className="beton_homiy1_img">
            <img src={IMG51} alt="" />
           </div>
           <div className="beton_homiy1_img">
             <div className="img4"><img src={IMG52} alt="" /></div>
           </div> */}
        </div>

            {data111.map((item,key)=>{
                if(key<1){
                    return(
<div className="beton_analiz">
            <div className="bet_ana1">
                <div className="bet_ana11">
                    <img src={IMG15} alt="" />


<div className="bet_ana_1">
                        <span className='s3'>{item.gis_mark}</span>
                        {item.gis_mark==1?(<><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.gis_mark==2?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.gis_mark==3?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.gis_mark==4?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/></>):(item.gis_mark==5?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/></>):(<><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>)))))}
                    </div>

                </div>
                <div className="bet_ana11">
                    <img src={IMG16} alt="" />

                    <div className="bet_ana_1">
                        <span className='s3'>{item.betomtaxi_mark}</span>
                        {item.betomtaxi_mark==1?(<><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.betomtaxi_mark==2?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.betomtaxi_mark==3?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>):(item.betomtaxi_mark==4?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className='white_stat'/></>):(item.betomtaxi_mark==5?(<><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/><BsStarFill className="yellow_star"/></>):(<><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/><BsStarFill className='white_stat'/></>)))))}
                    </div>

                </div>
                
            </div>
            <div className="bet_ana2">
                <span className='s4'>{item.description}</span>

               <div className="bet_ana22">
                <span>#245 заводов</span>
                <span className='s5'>#своя аттестованная лаборатория</span><br className='br2'/>
                <span className='s6'>#свой транспорт</span><br className='br1'/>
                <span>#свои швинги</span>
                </div>         
            </div>
        </div>
                )
                }
                
            })}
        
       </div>
        <div className="seriy">

            {bir === 1 ? <div className="biton_klent">
                <div className="bit_kent1">
                    <img className='img6' src={IMG17} alt="" />
                </div>
                <div className="bit_kent2">
                    <div className="bit_kent_1">
                        <h1>Наши приемущества</h1>
                        <div className="bit_kent_but">
                            <button className='b3'>Для физических лиц</button>
                            <button onClick={()=>{sariq1(); setBir(2)}} className='b4'>Для юридических лиц</button>
                        </div>
                    </div>
                    <Fade bottom>
                    <div className="bit_kent_2">
                        <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq11">
                            <img src={IMG18} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                           <div className="bit_kent_ideya">
                           <img src={IMG18} alt="" />
                           <h3>Заказ без забот.</h3>
                           </div>
                            <span>Наш сервис доставки бетона предлагает ту же простоту и удобство взаимодействия, как и заказ пиццы по телефону. Это максимально легкий и быстрый процесс.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img  src={IMG19} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <div className="bit_kent_ideya">
                            <img  src={IMG19} alt="" />
                            <h3>Полный контроль.</h3>
                            </div>
                            <span>Полностью контролируем процесс выполнения заказа по поставке бетона. Вы можете следить за поставкой в режиме онлайн, ходом работ, включая заливку, и быть уверены в том, что заказ будет выполнен в полном объеме.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG20} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG20} alt="" />
                            <h3>Все в одном месте.</h3>
                        </div>
                            <span>У нас вы найдете все, что вам нужно – бетон, строительный раствор, пескобетон. Если вам требуется особый состав, то мы сделаем запрос у наших поставщиков.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                  <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq ">
                            <img src={IMG29} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                       <div className="bit_kent_ideya">
                       <img src={IMG29} alt="" />
                            <h3>Гибкая оплата.</h3>
                       </div>
                            <span>Предлагаем различные варианты оплаты, включая оплату через приложение. Гибкость – наш приоритет.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img src={IMG30} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya bit_kent_ideya2132354">
                        <img src={IMG30} alt="" />
                            <h3>Гарантированное качество.</h3>
                        </div>
                            <span>Работаем только с известными и надежными поставщиками, контролируем каждую поставку бетона. Ваши отзывы имеют для нас особое значение, поэтому даже проверенный поставщик, в случае нарушения качества поставляемого бетона, может быть заблокирован в нашем сервисе.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG31} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG31} alt="" />
                            <h3>Индивидуальный подход.</h3>
                        </div>
                            <span>Наши специалисты рассчитают необходимый объем бетона и проконсультируют по интересующим вас вопросам. При оформлении заявки учитываются все требования и пожелания клиента.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img src={IMG32} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG32} alt="" />
                            <h3>Редактирование в реальном времени.</h3>
                        </div>
                            <span>При необходимости внесения изменений в заказ, их можно сделать в реальном времени. В зависимости от статуса заказа, часть пунктов может быть недоступна для редактирования. К примеру, если заказ находится на стадии выполнения, то изменить можно только интервал между машинами или увеличить объем бетона.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG33} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG33} alt="" />
                            <h3>Срочная доставка.</h3>
                        </div>
                            <span>Если клиент нуждается в экспресс-доставке, то, при большой загруженности машин, возможна доплата за заказ в виде премии водителю, совершившему внеплановый рейс. </span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG34} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                      <div className="bit_kent_ideya">
                      <img src={IMG34} alt="" />
                            <h3>Круглосуточная работа.</h3>
                      </div>
                            <span>Доступность сервиса 24/7 позволяет сделать заказ в любое удобное время. Консультации, расчеты и обработка заказов производятся ежедневно с 8-00 до 19-00 ч. по местному времени. </span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG35} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                           <div className="bit_kent_ideya">     
                           <img src={IMG35} alt="" /> 
                            <h3>Прямая связь с оператором и водителем через мобильное приложение.</h3>
                           </div>
                            <span>Клиент может задать оператору актуальный вопрос, подсказать водителю оптимальный маршрут или спросить у него о местонахождении. </span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <div className="bit_kent_tegi">
                        <p>Мы понимаем, что многие люди считают бетон одинаковым везде. Но с нашим сервисом вы увидите разницу. Доверьтесь нам, и мы сделаем вашу покупку бетона <span className='bet_tegi_span'>простой, надежной и выгодной!</span></p>
                    </div>
                </div>


            </div> : <div className="biton_klent">
                <div className="bit_kent1">
                    <img className='img6' src={IMG36} alt="" />
                </div>
                <div className="bit_kent2">
                    <div className="bit_kent_1">
                        <h1>Наши приемущества</h1>
                        <div className="bit_kent_but">
                            <button onClick={()=>{sariq2(); setBir(1)}} id="al1">Для физических лиц</button>
                            <button id="al2">Для юридических лиц</button>
                        </div>
                    </div>
                    
                    <Fade bottom>
                    <div className="bit_kent_2">
                        <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq11">
                            <img src={IMG37} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG37} alt="" />
                            <h3>Заказ без забот.</h3>
                        </div>
                            <span>Наш сервис доставки бетона предлагает ту же простоту и удобство взаимодействия, как и заказ пиццы по телефону. Это максимально легкий и быстрый процесс.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img  src={IMG38} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img  src={IMG38} alt="" />
                            <h3>Полный контроль.</h3>
                        </div>
                            <span>Полностью контролируем процесс выполнения заказа по поставке бетона. Вы можете следить за поставкой в режиме онлайн, ходом работ, включая заливку, и быть уверены в том, что заказ будет выполнен в полном объеме.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG39} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG39} alt="" />
                        <h3>Полный контроль.</h3>
                        </div>
                            
                            <span>При больших объемах заливки и одновременной подаче нескольких десятков машин у вас есть возможность точно регулировать время доставки бетона. Мы предоставляем гибкость и адаптируемся к вашим требованиям.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq ">
                            <img src={IMG40} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG40} alt="" />
                        <h3>Удобство заказа и дозаказа.</h3>
                        </div>
                            
                            <span>Если вам потребуется дополнительный объем бетона в ближайшее время, вы всегда можете осуществить дозаказ и быть уверены в своевременной доставке.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img src={IMG41} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG41} alt="" />
                        <h3>Полная документация.</h3>
                        </div>
                            
                            <span>Мы предоставляем вам онлайн доступ к паспортам качества и сертификацию на каждую партию отгруженного бетона. Вы можете быть уверены в качестве поставляемой продукции и иметь все необходимые документы для отчетности в личном кабинете. Если нужны оригиналы документов, то вы можете их заказать.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG42} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG42} alt="" />
                        <h3>Гарантия качества.</h3>
                        </div>
                            
                            <span>Вся наша продукция проходит строгие проверки в аттестованных лабораториях. Мы гарантируем высокое качество поставляемого бетона, чтобы вы могли быть уверены в долговечности и надежности ваших строительных конструкций.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq dumaloq1">
                            <img src={IMG43} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG43} alt="" />
                        <h3>Работа с определенными производителями.</h3>
                        </div>
                           <span>Мы предлагаем вам возможность работать с выбранными производителями бетона через наш сервис. Это дает вам дополнительные преимущества, такие как особые условия цен, высокий уровень качества и удобства при использовании нашего сервиса.</span>
                        </div>
                           
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG44} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                        <div className="bit_kent_ideya">
                        <img src={IMG44} alt="" />
                        <h3>Доставка специальных составов с различными опциями.</h3>
                        </div>
                            
                            <span>Мы готовы предложить вам разнообразные варианты составов бетона и по запросу внести необходимые дополнения. </span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG45} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <div className="bit_kent_ideya">
                            <img src={IMG45} alt="" />
                                   <h3>Приоритетная обработка заказов.</h3>
                            </div>
                         
                            <span>Все ваши заказы выполняются приоритетно и в согласованные сроки. Мы понимаем, как важно для вас время, поэтому наш сервис обеспечивает полный контроль и оперативность при каждой поставке бетона. </span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="bit_kent_2">
                    <div className="bit_kent_22">
                        <div className="bit_kent_dumaloq">
                            <img src={IMG46} alt="" />
                        </div>
                        <div className="bit_kent2_sozi">
                            <div className="bit_kent_ideya">
                            <img src={IMG46} alt="" />
                                 <h3>Индивидуальный менеджер.</h3>
                            </div>
                           
                            <span>Рассчитывать на личного менеджера, который всегда готов предоставить индивидуальную консультацию и оказать помощь, подготовить сопроводительные документы, акт сверки и другие важные документы.</span>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <div className="bit_kent_tegi">
                        <p>Мы понимаем, что многие люди считают бетон одинаковым везде. Но с нашим сервисом вы увидите разницу. Доверьтесь нам, и мы сделаем вашу покупку бетона <span className='bet_tegi_span'>простой, надежной и выгодной!</span></p>
                    </div>
                </div>


            </div>}
            
            


            <div className="click">
                <h1>Чего же еще не хватает, все учтено и вы сейчас можете воспользоваться <span className='s7'>лучшим сервисом в городе!</span></h1>
            </div>

            <div className="header_1">
               <div className="hed_1">
               <div className="hed_11">
                    <img src={IMG21} alt="" />
                    </div>
               </div>
                <div className="hed_2">
                    <div className="hed_2_div">
                        <span>Доступно 24/7</span>
                    </div>
                    <div className="hed_2_span">
                    <span>В любое время в приложении можно сделать заказ на поставку бетона, задать вопрос консультанту, посмотреть историю заказов, оставить отзыв и многое другое.</span>
                    </div>
                    <div className="hed_2_div1 hed_2_div1_kopiya">
                        <span>Большой выбор опций и услуг при оформлении заказа</span>
                    </div>
                   <div className="hed_2_span">
                   <span>Возможность выбора всех необходимых параметров для заказа бетона онлайн (марка бетона, объем поставки, специальные добавки и др.).</span>
                   </div>
                    <div className="hed_2_div">
                        <span>Оплата через приложение</span>
                         </div>
                    <div className="hed_2_span">
                        <span>Выбор любого удобного способа оплаты – банковская карта, наличный, безналичный расчет или по частям, а также оплата через различные платежные системы.</span>
                    </div>
                    <div className="hed_2_div1 hed_2_div11">
                        <span>Оплата бонусами</span>
                    </div>
                    <div className="hed_2_span"> 
                        <span> На каждую отгруженную поставку начисляются бонусы, которые можно использовать для оплаты последующих заказов, получая тем самым прекрасную возможность для экономии.</span>
                    </div>
                </div>
            </div>

           <div className="strelka">
           <img className='img7' src={IMG22} alt="" />
           </div>
            <div className="prilosheniya">
                <h1 style={{cursor:"pointer"}}>Скачать приложение</h1>
            </div>
            <div className="hom_img">
                <img src={IMG23} alt="" />
                <img src={IMG24} alt="" />
                <img src={IMG25} alt="" />
                <img src={IMG26} alt="" />
                <img src={IMG27} alt="" />
                <img src={IMG28} alt="" />
            </div>

<Footer/>
        </div>
                   
        </div>
  )
}
