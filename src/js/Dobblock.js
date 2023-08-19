import React from 'react'
import '../css/Dobblock.css'
import Navbar from '../js/Navbar'
import start from "../img/Group 100.png"
import dobblock from '../img/dobblock.png'
import block1 from '../img/block-pas1.png'
import block3 from '../img/block-pas3.png'
import block2 from '../img/block-pas2.png'
import block4 from '../img/block-pas4.png'

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
    </div>
  )
}
