import React from 'react'
import '../css/Obman.css'
import Navbar from './Navbar'
import emoji from '../img/emoji.png'
import aroow from '../img/Arrow 8.png'
import yiglama from '../img/yiglama.png'
import  malatok from '../img/malatok.png'
import  buloq from '../img/bloq.png'
import  kamaz from '../img/kamaz.png'

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
        </div>
    </div>
  )
}
