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
import Footer from '../js/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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
                <div className="dobblock-rasm-kotta">
                    <img src={dobblock} alt="" />
                    <div className="dobblock-img-pas-text">
                        <h2>Что именно <br />
мы предоставляем заказчикам?</h2>
                    </div>
                </div>
                <div className="dobblcok-img-pasda-kop">
                    <div className="db-zaib">
                        <div className="db-zaib1">
                            <img src={block1} alt="" id="bla8" />
                            <img src={block2} alt="" id="bla0" />
                        </div>
                        <div className="db-zaib2">
                            <img src={block3} alt="" id="bla" />
                            <img src={block4} alt="" id="bla4" />
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
            <div className="ozbekiskin-kon-naxuy">
                <div className="ozb-ichi">
                    <h3>Выезд специалиста.</h3>
                    <p>Специалист со строительным образованием будет приезжать на объект, где нужно выполнить работы. Наш сотрудник поможет выбрать оптимальную марку бетона для вашего строительного проекта. Он также произведет расчет необходимого количества бетона и составит подробную смету, чтобы избежать излишков или недостатков.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ozbekiskin-kon-naxuy">
                <div className="ozb-ichi">
                    <h3>Проверка качества</h3>
                    <p>При заливке бетона на объекте, наши сотрудники предоставят все необходимые паспорта и сертификаты качества и возьмут дополнительные образцы для лаборатории, аналогично требованиям для государственных объектов. Это гарантирует, что на объекте используется высококачественный бетон, который обладает необходимыми характеристиками.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ozbekiskin-kon-naxuy">
                <div className="ozb-ichi">
                    <h3>Услуга "все включено" предоставляется 
по стоимости всего 5000 рублей.</h3>
                    <p>При этом вы получаете гарантию того, что ваш объект сопровождается специалистом с большим опытом в заливке тысяч фундаментов. Даже если наши услуги заказывают небольшие компании или физические лица, каждый клиент может быть уверен, что уровень заливки фундаментов и других бетонных конструкций, будет таким же, как на государственных ответственных объектах.</p>
                </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="ozbekiskin-kon-naxuy">
                <div className="ozb-ichi">
                    <h3>Контроль набора прочности</h3>
                    <p>Специалисты с большим опытом в заливке фундаментов проконсультируют и могут проконтролировать процесс набора прочности, чтобы обеспечить долговечность и надежность вашего объекта. Через 28 дней после заливки бетона проведем проверку его качества методом неразрушающего контроля, что позволит убедиться в правильности выполненных работ и соответствии бетона требуемым стандартам.</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>

            <div className="ana-swiper-pasiga-keldi">
            <div className="oxiri-qoldi-davayyyy">
              <div className="alert-uchun-aloxida-joy1">
                <img src={lala} alt="" />
              </div>
              <div className="oxiri--qoldi-text">
                <h4>Услуга "все включено" предоставляется по <br /> стоимости всего 5000 рублей. </h4>
<div className="xiriri-text-pp">
<p>При этом вы получаете гарантию того, 
что ваш объект сопровождается специалистом с большим опытом в заливке тысяч фундаментов. Даже если наши услуги заказывают небольшие компании или физические лица, каждый клиент может быть уверен, что уровень заливки фундаментов и других бетонных конструкций, будет таким же, как на государственных ответственных объектах.</p></div>
              </div>
            </div>
           </div>
        </div>
        <Footer/>
    </div>
    
  )
}
