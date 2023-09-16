import React from 'react'
import '../css/Dobblock.css'
import Navbar from '../js/Navbar'
import start from "../img/Group 100.png"
import dobblock from '../img/dobblock.png'
import block1 from '../img/block-pas1.png'
import block3 from '../img/block-pas3.png'
import block2 from '../img/block-pas2.png'
import block4 from '../img/block-pas4.png'
import lala from '../img/Group 406.png'

import rasm1 from '../img/dob1.png'
import rasm2 from '../img/Group 405.png'
import rasm3 from '../img/Contract.png'
import rasm4 from '../img/sheld27 1.png'
import rasm5 from '../img/man_worker_12 1.png'
import rasm6 from '../img/Contract.png'
import rasm7 from '../img/sheld27 2.png'
import rasm9 from '../img/m001t0309_b_5_star_rating_30aug22 1.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Footer from '../js/Footer'

export default function Dobblock() {
  return (
    <div>
        <Navbar/>
        <div className="dobblock-glav">
            <div className="dobblock-mini-kotta">
            <div className="dobblock-h1">
            <img src={start} alt="" />
            <h1>Все включено</h1>
            </div>
            <div className="dobblock-pas-qsmi">
                <div className="dobblock-kotta-tape-qismi-img">
                    <div className="bla-zaibal-div-ochuvurib">
                    <div className="suka-ramsadasdasdasas">
                    <div className="blockasjkdfbhsdvdsjhvsdfhk">
                        <img src={rasm9} alt="" />
                    </div>
                    </div>
                    <div className="dobblock-text-img-tepa-qismi">
                        <p >Заказывая бетон через наш сервис, <br />
каждый клиент может рассчитывать <br />
на получение услуг в формате</p>
<h1>«все включено»</h1>
<span>*за дополнительную плату</span>
                    </div>
                    </div>
                </div>
                <div className="eng-kottatorta-div">
                <div className="dobblcok-img-pasda-kop" id='pasggaaaaasas'>
                    <div className="doblock-qaytatan-yozib-chvq-bloc1">
                        <div className="dodcdcd-igm">
                            <img src={rasm1} alt="" />
                        </div>
                        <div className="dodcdcd-text">
                            <h3>Выезд специалиста</h3>
                            <p>Специалист со строительным образованием будет приезжать на объект, где нужно выполнить работы. Наш сотрудник поможет выбрать оптимальную марку бетона для вашего строительного проекта. Он также произведет расчет необходимого количества бетона и составит подробную смету, чтобы избежать излишков или недостатков.</p>
                        </div>
                    </div>
                    <div className="doblock-qaytatan-yozib-chvq-bloc2">
                        <div className="kottqorasdasdas">
                        <div className="tepa-sozla-img-boruas">
                            <div className="iamsdasfasfad">
                                <img src={rasm2} alt="" />
                            </div>
                            <div className="doblock-text-jou-keca-nmaa">
                                <h3>Услуга "все включено" предоставляется 
по стоимости всего 5000 рублей.</h3>
                            </div>
                        </div>
                        <div className="pasqismi-text-doblock-block2">
                            <p>При этом вы получаете гарантию того, что ваш объект сопровождается специалистом с большим опытом в заливке тысяч фундаментов. Даже если наши услуги заказывают небольшие компании или физические лица, каждый клиент может быть уверен, что уровень заливки фундаментов и других бетонных конструкций, будет таким же, как на государственных ответственных объектах.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="dobblcok-img-pasda-kop">
                    <div className="doblock-qaytatan-yozib-chvq-bloc1">
                        <div className="dodcdcd-igm1">
                            <img src={rasm3} alt="" />
                        </div>
                        <div className="dodcdcd-text">
                            <h3>Проверка качества</h3>
                            <p>При заливке бетона на объекте, наши сотрудники предоставят все необходимые паспорта и сертификаты качества и возьмут дополнительные образцы для лаборатории, аналогично требованиям для государственных объектов. Это гарантирует, что на объекте используется высококачественный бетон, который обладает необходимыми характеристиками.</p>
                        </div>
                    </div>
                    <div className="doblock-qaytatan-yozib-chvq-bloc3">
                    <div className="dodcdcd-igm2">
                            <img src={rasm4} alt="" />
                        </div>
                        <div className="dodcdcd-text">
                            <h3>Контроль набора прочности</h3>
                            <p>Специалисты с большим опытом в заливке фундаментов проконсультируют и могут проконтролировать процесс набора прочности, чтобы обеспечить долговечность и надежность вашего объекта. Через 28 дней после заливки бетона проведем проверку его качества методом неразрушающего контроля, что позволит убедиться в правильности выполненных работ и соответствии бетона требуемым стандартам.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>



            
            <div className="rasmla-media-bobde">
                <div className="blockkkkk-imggg">
                    <img src={block1} alt="" />
                    <img src={block2} alt="" id="asdddaasddsd" />
                    <img src={block3} alt="" id="asdasdasdasd" />
                    <img src={block4} alt="" id="asdasdasdasd" />
                </div>
            </div>
            </div>
        </div>
        <div className="dobblock-glav-media">
            <div className="doblock-media-center">
                <h3>Главная | <span>Все включено</span></h3>
                <div className="pasda-qanqadir-img-dobblock">
                    <img src={start} alt="" /><span>Все включено</span>
                </div>
                <div className="pas-rasm-joy-media-dobblock">
                    <div className="pas-raasm-koroc-ichi">
                        <h4>Заказывая бетон через наш сервис, <br />
каждый клиент может рассчитывать <br />
на получение услуг в формате</h4>

<h2>«все включено»</h2>
<p>*за дополнительную плату</p>
                    </div>
                </div>
            </div>
            <div className="doblock-pas-oziy-sozla-joy">
                <h3>Что именно <br />
мы предоставляем <br /> заказчикам?</h3>
            </div>
            <div className="dobblock-swiper-joy">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper7"
      >
        <SwiperSlide>
            <div className="bu-swiper-joy-media-dobblock">
                <div className="bu-swiper-joy-mmm-sds">
                    <div className="text-bu-swiper-joy-sw">
                        <h3>Выезд специалиста.</h3>
                    </div>
                    <div className="img-bu-swiper-joy-sw">
                        <img src={rasm5} alt="" />
                    </div>
                </div>
                <div className="pas-qismi-text-swiper-slice">
                    <p>Специалист со строительным образованием будет приезжать на объект, где нужно выполнить работы. Наш сотрудник поможет выбрать оптимальную марку бетона для вашего строительного проекта. Он также произведет расчет необходимого количества бетона и составит подробную смету, чтобы избежать излишков или недостатков.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bu-swiper-joy-media-dobblock">
                <div className="bu-swiper-joy-mmm-sds">
                    <div className="text-bu-swiper-joy-sw">
                        <h3>Проверка качества.</h3>
                    </div>
                    <div className="img-bu-swiper-joy-sw">
                        <img src={rasm6} alt="" />
                    </div>
                </div>
                <div className="pas-qismi-text-swiper-slice">
                    <p>При заливке бетона на объекте, наши сотрудники предоставят все необходимые паспорта и сертификаты качества и возьмут дополнительные образцы для лаборатории, аналогично требованиям для государственных объектов. Это гарантирует, что на объекте используется высококачественный бетон, который обладает необходимыми характеристиками.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bu-swiper-joy-media-dobblock">
                <div className="bu-swiper-joy-mmm-sds">
                    <div className="text-bu-swiper-joy-sw">
                        <h3>Контроль набора 
прочности.</h3>
                    </div>
                    <div className="img-bu-swiper-joy-sw1">
                        <img src={rasm7} alt="" />
                    </div>
                </div>
                <div className="pas-qismi-text-swiper-slice1">
                    <p>Специалисты с большим опытом в заливке фундаментов проконсультируют и могут проконтролировать процесс набора прочности, чтобы обеспечить долговечность и надежность вашего объекта. Через 28 дней после заливки бетона проведем проверку его качества методом неразрушающего контроля, что позволит убедиться в правильности выполненных работ и соответствии бетона требуемым стандартам.</p>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
            </div>

            <div className="ana-swiper-pasiga-keldi">
            <div className="oxiri-qoldi-davayyyy">
                <div className="oxiri-qolid-ichi-width">
                    <div className="iimgggmggmgmgm-joy">
                        <img src={lala} alt="" />
                    </div>
                    <div className="tetx-ozi-boru-img-vashekaneee">
                        <h3>Услуга "все включено" предоставляется по стоимости всего 5000 рублей. </h3>
                        <p>При этом вы получаете гарантию того, 
что ваш объект сопровождается специалистом с большим опытом в заливке тысяч фундаментов. Даже если наши услуги заказывают небольшие компании или физические лица, каждый клиент может быть уверен, что уровень заливки фундаментов и других бетонных конструкций, будет таким же, как на государственных ответственных объектах.</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
       <Footer/>
    </div>
    
  )
}
