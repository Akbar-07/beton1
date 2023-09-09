
import React from 'react'
import chb from '../pages/Group 100 (1).png'
import chasi from '../pages/ic_round-watch-later.png'
import temp from '../pages/mdi_temperature.png'
import day from '../pages/mdi_day-temperature.png'
import zont from '../pages/mdi_umbrella.png'
import kaplya from '../pages/ph_drop-fill.png'
import noc from '../pages/tabler_moon-filled.png'
import kamen from '../pages/game-icons_flat-platform.png'
import brizg from '../pages/fluent_spray-can-16-filled.png'
import scan from '../pages/ph_corners-out-bold.png'
import tuci from '../pages/bi_cloud-rain-fill.png'
import noga from '../pages/maki_shoe.png'
import warn from '../pages/Alert (1).png'
import '../css/Pamyatka.css'
import Navbar from './Navbar'

export default function Pamatka() {
  return (
    <div>
        <Navbar/>
        <div className="pamat_main">
        <p style={{display:"none"}} className='aa1'><span style={{marginRight:"7px"}} onClick={()=> window.location="/"}>Главная</span>  | <span style={{marginLeft:"7px",color:"red"}} >Памятка</span> </p>
            <div className="pamat_zaliv">
            <div className="news_page">
            <img src={chb} alt="" />
            <h2>Памятка по заливке бетона</h2>
        </div>
                 <div className="pamat_zal1">
                <p>Практические рекомендации по уходу за бетоном 
включают в себя следующие действия:</p></div>
            </div>
            <div className="pami_cardss">
            <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={chasi} alt="" /></div></div>
                   <p> <span>Ухаживать за бетоном лучше сразу же после того, залита стяжка, фундамент или другая конструкция. 
                                </span> Интенсивность и продолжительность ухода будет зависеть от марки материала. 
                                Для стандартных смесей продолжительность ухода составит порядка 14 дней, для конструкций из портландцемента 
                                около 7 дней, а для быстро застывающего бетона – около 3 дней.
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={temp} alt="" /></div></div>
                   <p>  <span>Заливку бетона нужно выполнять при средней
                                 температуре + 20 градусов, а влажность при этом 
                                 должна быть около 90-100%. </span>Если по
                                сле выполненной работы температура на улице опускается ниже 5 градусов, то увлажнять бетон нельзя.
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={day} alt="" /></div></div>
                   <p> <span>В ветреную и сухую погоду</span> после заливки нужно обязательно
                             увлажнять бетонные поверхности;
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={zont} alt="" /></div></div>
                   <p>  <span> Свежий бетон нужно накрыть пленкой, тканью или присыпать опилками,</span>
                       а также защищать его от агрессивных атмосферных воздействий
                       или механических повреждений, которые могут нанести люди и животные.
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={kaplya} alt="" /></div></div>
                   <p> В то время, как бетон набирает прочность, важно <span>обеспечить его постоянное увлажнение</span> 
                         с помощью полива;
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={noc} alt="" /></div></div>
                   <p> <span>В жаркое летнее </span>время поливать бетон рекомендуется каждые 2 часа,
                        <span>в пасмурную погоду</span>  – через каждые 3 часа, а <span> ночью </span>с периодичностью 2-3 часа.
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={kamen} alt="" /></div></div>
                   <p>   <span>После того, как снимается опалубка,</span> места ее установки и крепления <span> также тщательно проливаются водой;</span>
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={brizg} alt="" /></div></div>
                   <p>  Увлажнять бетон нужно не с помощью мощной струи воды, а использовать 
                     для этого <span>распылители, которые не нанесут свежему материалу существенного вреда;</span> 
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={scan} alt="" /></div></div>
                   <p>  Увлажняя бетон,<span> особе внимание стоит уделить краям стяжки или фундамента, а также внутренним и 
                  наружным углам и стыкам,</span> потому что именно эти участки быстрее всего высыхают;
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={tuci} alt="" /></div></div>
                   <p>  <span> В дождливое время все скопления влаги нужно немедленно удалять с бетонной поверхности,</span> чтобы 
не допустить деформации бетона;
                    </p>
                    </div>
                </div>
                <div className="pamit_cardd">
                    <div className="pamit_for_flex">
                        <div className="pamit_images_w">
                        <div className="pamit_images">
                    <img src={noga} alt="" /></div></div>
                   <p>  <span> Категорически запрещается устанавливать на свежий бетон леса и другие массивные конструкции,
                   </span>а также не допускать хождения по поверхности людей и животных.
                    </p>
                    </div>
                </div>
            </div> 
            <div className="pamata_jojo">
                <img src={warn} alt="" />
                <div className="War_stur">
                <h5 className='Jojo_J'>Выполнение наших рекомендаций поможет уберечь бетон во время набора прочности, обеспечит долголетие конструкциям в вашем строительном проекте.</h5>
                <h5 className='kakyoin_K'>Будьте уверенны, ваш дом простоит не один десяток лет!</h5></div>
            </div>
        </div>
       
    </div>
  )
}