import React from 'react'
import '../css/User.css'
import Navbar from '../js/Navbar'
import odamcha from '../img/Vector (12).png'
import qalam from '../img/qalam.png'
import meloch from '../img/Group 164.png'
import prima from '../img/Group 201.png'


function modaloyna(){
document.querySelector(".user-modal").style=`display: block;`
document.querySelector("body").style = "overflow: hidden;"
}
function modalyopil(){
    document.querySelector(".user-modal").style=`display: none;`
document.querySelector("body").style = "overflow: scroll;"
}
function yon(){
    document.querySelector("#wone-winner").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);
color:white    `
document.querySelector("#two-winner").style=`background:white;
color:black    `
}
function yon1(){
    document.querySelector("#two-winner").style=`background: linear-gradient(98.15deg, #000000 0.07%, #606060 120.91%);
    color:white    `
    document.querySelector("#wone-winner").style=`background:white;
color:black    `
}
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
                            <img  onClick={()=>modaloyna()} src={qalam} alt="" />
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
        <div className="user-modal">
            <div className="user-modal-ichi">
            <div className="login-kotta">
            
            <div className="teper-login11">
              <div className="nazat" >
              <box-icon name='x' onClick={()=>modalyopil()}  color="#ACACAC" size="35px"></box-icon>
              </div>
              <div className="fizika-litso10">
                <h2>Изменить данные</h2>
                <div className="fizaika-litso-left">
                    <form>
                        <label htmlFor="">ФИО</label><br />
                        <input type="text"  placeholder='Имя Фио' required/><br />
                        <label htmlFor="">Телефон</label><br />
                        <input type="number"  placeholder='Телефон' required/><br />
                        <label htmlFor="">Email</label><br />
                        <input type="email"  placeholder='Email' required/><br />
                        <div className="button-joy-user">
                            <button>Сохранить изменения</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
         </div>
            </div>
        </div>
        <div className="user-malumot-la-alshadi-but">
            <div className="btn-user-selec">
                <button  id='wone-winner' onClick={()=>yon()}>Существующие заказы</button>
                <button id='two-winner' onClick={()=>yon1()}>Сделать новый заказ</button>
            </div>
        </div>
        <div className="user-media-mod">
            <div className="user-media-ichi-mod">
                
            <div className="user-malot-keladi">
            <h3>Главная |<span> Личный кабинет</span></h3>
            <div className="user-malumot-paptika-2">
                <div className="user-kottaaaadas">
                <div className="user-test-tepa-qismi">
                <div className="user-ichi-odamcha">
                    <div className="user-ichi-odamcha1">
                        <img src={odamcha} alt="" />
                    </div>
                    <div className="user-ichi-odamcha2"></div>
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
