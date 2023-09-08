
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
            <div className="pamat_zaliv">
               <div className="pamat_zaliv2">
                <img src={chb} alt="" />
                <h1>Памятка по заливке бетона</h1></div>
                 <div className="pamat_zal1">
                <p>Практические рекомендации по уходу за бетоном 
включают в себя следующие действия:</p></div>
            </div>
            <div className="pamat_options">
                <div className="main_opt1">
                <div className="op_1">
                    <div className="op1_df">
                        <div className='op1_yt'>
                    <div className="op1_img">
                        <img src={chasi} alt="" />
                    </div></div>
                    <div className="op1_text">
                        <h5>
                            <span>Ухаживать за бетоном лучше сразу же после того, залита стяжка, фундамент или другая конструкция. 
                                </span> Интенсивность и продолжительность ухода будет зависеть от марки материала. 
                                Для стандартных смесей продолжительность ухода составит порядка 14 дней, для конструкций из портландцемента 
                                около 7 дней, а для быстро застывающего бетона – около 3 дней.
                                
                        </h5>
                    </div>
                    </div>
                </div>
                <div className="op_2">
                    <div className="op2_df">
                    <div className='op2_yt'>
                    <div className="op2_img">
                        <img src={temp} alt="" />
                    </div></div>
                    <div className="op2_text">
                        <h5>
                            <span>Заливку бетона нужно выполнять при средней
                                 температуре + 20 градусов, а влажность при этом 
                                 должна быть около 90-100%. </span>Если по
                                сле выполненной работы температура на улице опускается ниже 5 градусов, то увлажнять бетон нельзя.


</h5>
                    </div>
                    </div>
                </div></div>
                <div className="main_opt2">
                <div className="op_3">
                    <div className="op3_df"><div className='op3_yt'>
                    <div className="op3_img">
                        <img src={day} alt="" />
                    </div></div>
                    <div className="op3_text">
                        <h5> <span>В ветреную и сухую погоду</span> после заливки нужно обязательно
                             увлажнять бетонные поверхности;</h5>
                    </div>
                    </div>
                </div>
                <div className="op_4">
                    <div className="op4_df"><div className='op4_yt'>
                    <div className="op4_img">
                        <img src={zont} alt="" />
                    </div></div>
                    <div className="op4_text">
                      <h5>
                     <span> Свежий бетон нужно накрыть пленкой, тканью или присыпать опилками,</span>
                       а также защищать его от агрессивных атмосферных воздействий
                       или механических повреждений, которые могут нанести люди и животные.
                      </h5>
                    </div>
                    </div>
                </div></div>
                <div className="main_opt3">
                <div className="op_5">
                    <div className="op5_df"><div className='op5_yt'>
                    <div className="op5_img">
                        <img src={kaplya} alt="" />
                    </div></div>
                    <div className="op5_text">
                    <h5>В то время, как бетон набирает прочность, важно <span>обеспечить его постоянное увлажнение</span> 
                         с помощью полива;</h5>
                    </div>
                    </div>
                </div>
                <div className="op_6">
                    <div className="op6_df"><div className='op6_yt'>
                    <div className="op6_img">
                        <img src={noc} alt="" />
                    </div></div>
                    <div className="op6_text">
                      <h5> <span>В жаркое летнее </span>время поливать бетон рекомендуется каждые 2 часа,
                        <span>в пасмурную погоду</span>  – через каждые 3 часа, а <span> ночью </span>с периодичностью 2-3 часа.</h5>
                    </div>
                    </div>
                </div></div>
                <div className="main_opt4">
                <div className="op_7">
                    <div className="op7_df"><div className='op7_yt'>
                    <div className="op7_img">
                        <img src={kamen} alt="" />
                    </div></div>
                    <div className="op7_text">
                   <h5>
                   <span>После того, как снимается опалубка,</span> места ее установки и крепления <span> также тщательно проливаются водой;</span>
                   </h5>
                    </div>
                    </div>
                </div>
                <div className="op_8">
                    <div className="op8_df"><div className='op8_yt'>
                    <div className="op8_img">
                        <img src={brizg} alt="" />
                    </div></div>
                    <div className="op8_text">
                     <h5>
                     Увлажнять бетон нужно не с помощью мощной струи воды, а использовать 
                     для этого <span>распылители, которые не нанесут свежему материалу существенного вреда;</span> 
                     </h5>
                    </div>
                    </div>
                </div></div>
                <div className="main_opt5">
                <div className="op_9">
                    <div className="op9_df"><div className='op9_yt'>
                    <div className="op9_img">
                        <img src={scan} alt="" />


</div></div>
                    <div className="op9_text">
                  <h5>
                  Увлажняя бетон,<span> особе внимание стоит уделить краям стяжки или фундамента, а также внутренним и 
                  наружным углам и стыкам,</span> потому что именно эти участки быстрее всего высыхают;
                  </h5>
                    </div>
                    </div>
                </div>
                <div className="op_10">
                    <div className="op10_df"><div className='op10_yt'>
                    <div className="op10_img">
                        <img src={tuci} alt="" />
                    </div></div>
                    <div className="op10_text">
                     <h5>
                    <span> В дождливое время все скопления влаги нужно немедленно удалять с бетонной поверхности,</span> чтобы 
не допустить деформации бетона;
                     </h5>
                    </div>
                    </div>
                </div></div>
                <div className="main_opt6">
                <div className="op_11">
                    <div className="op11_df"><div className='op11_yt'>
                    <div className="op11_img">
                        <img src={noga} alt="" />
                    </div></div>
                    <div className="op1_text">
                  <h5>
                 <span> Категорически запрещается устанавливать на свежий бетон леса и другие массивные конструкции,
                   </span>а также не допускать хождения по поверхности людей и животных.
                  </h5>
                    </div>
                    </div>
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