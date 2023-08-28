import React from 'react'
import '../css/User.css'
import Navbar from '../js/Navbar'
import odamcha from '../img/Vector (12).png'
import qalam from '../img/qalam.png'
import meloch from '../img/Group 164.png'
import prima from '../img/Group 201.png'
export default function User() {
  return (
    <div>
        <Navbar/>
        <div className="user">
            <div className="user-ichi">
            <div className="user-ichi-odamcha">
                    <div className="user-ichi-odamcha1">
                        <img src={odamcha} alt="" />
                    </div>
                    <div className="user-ichi-odamcha2"></div>
                </div>
                <div className="user-ong-tarap-malumotla">
                    <div className="user-ism">
                        <div className="img-user">
                            <h3>Иванов Петр  <br /> Михайлович</h3>
                        </div>
                        <div className="img-karandash">
                            <img src={qalam} alt="" />
                        </div>
                    </div>
                    <div className="user-status">
                        <div className="user-malumotla-kotta">
                        <div className="user-status-block">
                            <h4>Статус:</h4>
                            <p>Пользователь</p>
                        </div>
                        <div className="user-status-block">
                            <h4>Телефон:</h4>
                            <p>8 900 800 90 80</p>
                        </div>
                        <div className="user-status-block">
                            <h4>Email:</h4>
                            <p>pochtabeton.ru</p>
                        </div>
                        <div className="zalaztoy-parknoy">
                            <div className="dumoloni-ischida-zakaztiy">
                                <img src={meloch} alt="" />
                            </div>
                            <span>Золотой партнер</span>
                        </div>

                            <div className="zalaztoy-parknoy1">
                                <div className="zalaztoy-manetaa">
                                    <img src={prima} alt="" /><span>12 000 бонусов</span>
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
