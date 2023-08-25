import React from 'react'
import '../css/Garantiya.css'
import Navbar from '../js/Navbar'
import img from '../img/Group 100.png'
import img1 from '../img/Group 399.png'


export default function Garantiya() {
  return (
    <div>
        <Navbar/>
       <div className="garantiya-page">
        <div className="garantiya-ichi">
        <div className="garantiya-icon">
            <img src={img} alt="" /><span>Гарантия</span>
        </div>
        <div className="garantiya-oqta-page">
            <div className="garantiya-oldi-img">
                <img src={img1} alt="" />
            </div>
            <div className="garantiya-oldi-text">
                <h4>Наш сервис доставки бетона «Бетон такси», 
предлагает клиентам не только удобство и надежность, 
но и  <br /> <span className='oyaoya'>дополнительную гарантию качества, </span> </h4>

<p>а также полную уверенность в будущем строительного проекта. Мы заключили соглашение со страховой компанией <span className='garantiya-sapn'>РЕСО-гарантия,</span> чтобы обеспечить страхование заказанного в нашем сервисе бетона. В случае выявления бетона низкого качества или дефектов в конструкции после его заливки, страховая компания возместит все убытки и возьмет все расходы на себя!</p>
            </div>
        </div>
        <div className="garant-pas-block-page-card">
            <h3>Что это означает для вас?</h3>
            <div className="garant-pas-block-kotta-ushabturadi">
                <div className="garand-block">
                    <div className="bla-zabil-koota-div-qoyish">
                    <div className="yashil-garand">
                        1
                    </div>
                    <div className="yashil-text-garand"><p><span>Если вам доставлен низкокачественный бетон,</span> в котором появились трещины, деформации или рассыпание, мы проведем экспертизу для установления причин и, если обнаружится, что проблема действительно связана с плохим качеством бетона, поставленного с использованием нашего сервиса, страховая компания РЕСО-гарантия возьмет на себя ответственность за урегулирование этой ситуации.</p></div>
                    </div>
                </div>
                <div className="garand-block">
                    <div className="bla-zabil-koota-div-qoyish">
                    <div className="yashil-garand">
                        2
                    </div>
                    <div className="yashil-text-garand"><p>Дополнительная страховка от сервиса доставки бетона «Бетон такси» демонстрирует нашу <span>полную ответственность, связанную с качеством продукции. </span> Мы понимаем, что для вас важно иметь уверенность в том, что каждая поставка бетона будет выполнена с максимальной ответственностью и соответствием установленным стандартам и требованиям заказчика.</p></div>
                    </div>
                </div>
                <div className="garand-block" id='korqaq-botton'>
                    <div className="bla-zabil-koota-div-qoyish">
                    <div className="yashil-garand">
                        3
                    </div>
                    <div className="yashil-text-garand"><p>Наше сотрудничество со страховой компанией РЕСО-гарантия подчеркивает, что мы  <span>не просто "сервис по доставке бетона", 
а надежный сервис, который заботится о своих клиентах</span> и готов взять на себя ответственность за качество поставленного материала. Мы уверены, что это дополнительное преимущество поможет вам принять решение в пользу нашего сервиса и даст вам полную уверенность в безопасности и надежности каждой поставки.</p></div>
                    </div>
                </div>
                <div className="sms-kotta-yashil-xa-df">
                <div className="sms-yashil-pasda-sms">
                    <div className="sms-triugolnik"></div>
                    <div className="buni-ichi-kirdik-sms-kotta">
                        <div className="garant-ax-oxiri">
                            <div className="gardn-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="gardn-text">
                                <p>Выбирая наш сервис доставки бетона, вы получаете 
не только удобство и экономию времени, 
но и  <span>дополнительную гарантию качества, 
подкрепленную страховкой от РЕСО-гарантия.</span></p>
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
