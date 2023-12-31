import React ,{ useRef, useState }  from 'react'
import '../css/Obman.css'
import Navbar from './Navbar'
import emoji from '../img/emoji.png'
import aroow from '../img/Arrow 8.png'
import yiglama from '../img/yiglama.png'
import  malatok from '../img/malatok.png'
import  buloq from '../img/bloq.png'
import  kamaz from '../img/kamaz.png'
import  alert from '../img/Alert.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';





export default function Obman() {
  return (
    <div id='obman'>
        <Navbar/>
        <div className="obman-glav">
          <div className="obman-ichi-kettik">
            <div className="obman-img-jo">
              <img src={emoji} alt="" />
            </div>
             <div className="obman-text-joy">
              <p>В современном строительстве, при поставке бетона, <br />
иногда возникают проблемы, связанные <br />
с недобросовестностью поставщиков. </p>
             </div>
          </div>
          <div className="obman-ikki-pas-joy-icon">
            <div className="allayvalay"></div>
            <img src={aroow} alt="" />
          </div>
          <div className="obman-ikki-juda-pas-joy">
            <h1>Как поставщики  <span>обманывают заказчиков </span> <br />
при разовых или регулярных поставках бетонных смесей?</h1>
          </div>
          <div className="pasda-emoji-bor-ekan-ehtoyot-bolila">
  <img src={emoji} alt="" />
</div>
             
             <div className="obmen-pasda-card-xaxa-bla-zaibal-nom-oylab-topuvurib">
              <div className="obmen-card-1-d_f">
                <div className="obmen-card-img">
                       <img src={yiglama} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Недолив</h2>
                  <p>Поставщики могут умышленно поставлять меньше бетона, чем заказано клиентом. Это может привести к проблемам с прочностью и надежностью конструкции. Для предотвращения недолива необходимо установить точные требования к объему поставки и контролировать его исполнение с помощью надежных методов измерения.</p>
                </div>
              </div>
              <div className="obmen-card-1-d_f1" id='tepaga-gomi'>
                <div className="obmen-card-img1">
                       <img src={malatok} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Марка ниже</h2>
                  <p>Если вместо заказанной марки бетона, поставщики привозят на объект марку ниже, то конструкция или сооружение может не соответствовать требуемым техническим характеристикам и не обладать необходимой прочностью. Для избежания этой ситуации, рекомендуется заключать контракты с надежными и проверенными поставщиками, которые имеют хорошую репутацию на рынке.</p>
                </div>
              </div>
              
             </div>
             
             <div className="obmen-pasda-card-xaxa-bla-zaibal-nom-oylab-topuvurib1">
              <div className="obmen-card-1-d_f">
                <div className="obmen-card-img3">
                       <img src={buloq} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Плохие составляющие</h2>
                  <p>Использование низкокачественных компонентов и составляющих при изготовлении бетона может привести к снижению прочности, долговечности и устойчивости конструкции. Для предотвращения подобных ситуаций, клиенту важно убедиться в том, что он имеет дело с предприятием, которое полностью укомплектовано современным производительным оборудованием и придерживается при изготовлении действующих норм и стандартов.</p>
                </div>
              </div>
              <div className="obmen-card-1-d_f1" id='tepaga-gomi'>
                <div className="obmen-card-img4">
                       <img src={kamaz} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Обман при доставке</h2>
                  <p>В последнее время участились случаи, когда заказчик ждал бетон на своем объекте, а поставщик просто не привозил материал и не выходил на связь. Чтобы не срывать работу, заказывать бетон лучше у тех, кто зарекомендовал себя надежным, проверенным и ответственным исполнителем услуг.</p>
                </div>
              </div>
              
             </div>

                          
             <div className="obmen-pasda-card-xaxa-bla-zaibal-nom-oylab-topuvurib3">
              <div className="center-obman-media">
              <div className="obmen-card-1-d_f">
                <div className="obmen-card-img">
                       <img src={yiglama} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Недолив</h2>
                  <p>Поставщики могут умышленно поставлять меньше бетона, чем заказано клиентом. Это может привести к проблемам с прочностью и надежностью конструкции. Для предотвращения недолива необходимо установить точные требования к объему поставки и контролировать его исполнение с помощью надежных методов измерения.</p>
                </div>
              </div>
              <div className="obmen-card-1-d_f1" >
                <div className="obmen-card-img1">
                       <img src={malatok} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Марка ниже</h2>
                  <p>Если вместо заказанной марки бетона, поставщики привозят на объект марку ниже, то конструкция или сооружение может не соответствовать требуемым техническим характеристикам и не обладать необходимой прочностью. Для избежания этой ситуации, рекомендуется заключать контракты с надежными и проверенными поставщиками, которые имеют хорошую репутацию на рынке.</p>
                </div>
              </div>
              
              </div>
             </div>

             <div className="obmen-pasda-card-xaxa-bla-zaibal-nom-oylab-topuvurib3" id='mojit-tepaga'>
              <div className="center-obman-media">
              <div className="obmen-card-1-d_f">
                <div className="obmen-card-img3">
                       <img src={buloq} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Плохие составляющие</h2>
                  <p>Использование низкокачественных компонентов и составляющих при изготовлении бетона может привести к снижению прочности, долговечности и устойчивости конструкции. Для предотвращения подобных ситуаций, клиенту важно убедиться в том, что он имеет дело с предприятием, которое полностью укомплектовано современным производительным оборудованием и придерживается при изготовлении действующих норм и стандартов.</p>
                </div>
              </div>
              <div className="obmen-card-1-d_f1" >
                <div className="obmen-card-img4">
                       <img src={kamaz} alt="" />
                </div>
                <div className="obmen-card-text">
                  <h2>Обман при доставке</h2>
                  <p>В последнее время участились случаи, когда заказчик ждал бетон на своем объекте, а поставщик просто не привозил материал и не выходил на связь. Чтобы не срывать работу, заказывать бетон лучше у тех, кто зарекомендовал себя надежным, проверенным и ответственным исполнителем услуг.</p>
                </div>
              </div>
              
              </div>
             </div>
             
             <div className="pasda-info-belgi-joy-oxirgi-keyn-media">
                    <div className="pasda-alert-img">
                      <img src={alert} alt="" />
                    </div>
                    <div className="pasda-alert-text">
                      <div className="lalalalala1">
                      <h2>Используя эти рекомендации, вы сможете снизить риски обмана при поставке бетона 
и обеспечить выполнение строительных работ с высоким качеством и надежностью. </h2>
                      </div>
                      <div className="lalasdadadasasdd">
                      <p>Обеспечить стабильные поставки высококачественного бетона, без сбоев и задержек сегодня предлагает наш сервис, известный, как надежный поставщик не только в регионе, <br id='br-oc' />
но и далеко за его пределами.</p>
                      </div>
                    </div>
             </div>
        </div>
        <div className="obman-kopiya-men">
          <div className="obman-pasda-media-aaaa">
          <div className="tepadagi-sozla-media-500">
          <h3>Главная | <span>Калькулятор</span></h3>
          </div>
          <div className="tepagadi-sozla-media-h3">
            <h3>В современном строительстве, 
при поставке бетона, иногда возникают проблемы, связанные 
с недобросовестностью поставщиков. </h3>
          </div>
          <div className="tepadigi-sozla-pas-qismi-emoji">
            <div className="img-tepadagi-koroc-d_f">
              <img src={emoji} alt="" />
            </div>
            <div className="img-tepadagi-koroc-d_f2">
              <img src={aroow} alt="" />
            </div>
            <div className="img-tepadagi-koroc-d_f1">
              <img src={emoji} alt="" />
            </div>
          </div>
          <div className="tepadagi-sozla-yana-pasqismi">
            <h2>Как поставщики <span> обманывают заказчиков </span>
при разовых или регулярных поставках бетонных смесей?</h2>
          </div>
           <div className="nmaga-swiper-joy-bor-aa">
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper5"
      >
        <SwiperSlide>
          <div className="nedoliv">
            <div className="nedoliv-text">
              <h2>Недолив</h2>
              <p>Поставщики могут умышленно поставлять меньше бетона, чем заказано клиентом. Это может привести к проблемам с прочностью и надежностью конструкции. Для предотвращения недолива необходимо установить точные требования к объему поставки и контролировать его исполнение с помощью надежных методов измерения.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nedoliv">
            <div className="nedoliv-text">
                  <h2>Марка ниже</h2>
                  <p>Если вместо заказанной марки бетона, поставщики привозят на объект марку ниже, то конструкция или сооружение может не соответствовать требуемым техническим характеристикам и не обладать необходимой прочностью. Для избежания этой ситуации, рекомендуется заключать контракты с надежными и проверенными поставщиками, которые имеют хорошую репутацию на рынке.</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nedoliv">
            <div className="nedoliv-text">
            <h2>Плохие составляющие</h2>
  <p>Использование низкокачественных компонентов и составляющих при изготовлении бетона может привести к снижению прочности, долговечности и устойчивости конструкции. Для предотвращения подобных ситуаций, клиенту важно убедиться в том, что он имеет дело с предприятием, которое полностью укомплектовано современным производительным оборудованием и придерживается при изготовлении действующих норм и стандартов.</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="nedoliv">
            <div className="nedoliv-text">
            <h2>Обман при доставке</h2>
  <p>В последнее время участились случаи, когда заказчик ждал бетон на своем объекте, а поставщик просто не привозил материал и не выходил на связь. Чтобы не срывать работу, заказывать бетон лучше у тех, кто зарекомендовал себя надежным, проверенным и ответственным исполнителем услуг.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
           </div>
           <div className="ana-swiper-pasiga-keldi">
            <div className="oxiri-qoldi-davayyyy">
              <div className="alert-uchun-aloxida-joy">
                <img src={alert} alt="" />
              </div>
              <div className="oxiri--qoldi-text">
                <h4>Используя эти рекомендации, 
вы сможете снизить риски обмана при поставке бетона 
и обеспечить выполнение строительных работ с высоким качеством и надежностью.</h4>
<div className="xiriri-text-pp">
<p>Обеспечить стабильные поставки высококачественного бетона, без сбоев 
и задержек сегодня предлагает наш сервис, известный, как надежный поставщик не только в регионе, 
но и далеко за его пределами.</p></div>
              </div>
            </div>
           </div>
          </div>
        </div>
     
    </div>
  )
}

