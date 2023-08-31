import React from 'react'
import Navbar from '../js/Navbar'
import '../css/User.css'
import user from '../img/Vector (13).png'
import qalam from '../img/qalam1.png'
import zalatoy from '../img/Group 164.png'
import biladim from '../img/Group 201 (1).png'

function modalochil(){
    document.querySelector(".user-modal").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function modalyopil(){
    document.querySelector(".user-modal").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`
}


export default function User() {
  return (
    <div className='user'>
        <Navbar/>
        <div className="user-kotta">
            
            <div className="user-ichi">
                <div className='bir_div1'></div>
                <div className='ikki_div2'></div>
                <img className='user--img' src={user} alt="" />
{/* <div className="kattas">
<div className="user-tepa">
<h1>Иванов Петр <br /> Михайлович</h1>
<img src={qalam} alt="" />
</div>

<div className="cards_header">
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="card_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
</div>
</div> */}
<div className="user-tepa-qismi">
    <div className="user-tepa-kotta">
    <div className="user-name"><h2>Иванов Петр <br /> Михайлович</h2></div>
    <div className="user-qalam"><img onClick={()=>modalochil()} src={qalam} alt="" /></div>
    </div>
</div>
<div className="user-pas-qismi">
<div className="user_header">
    <p>Статус:</p>
    <h3>Пользователь</h3>
</div>
<div className="user_header">
    <p>Телефон:</p>
    <h3>8 900 800 90 80</h3>
</div>
<div className="user_header">
    <p>Email:</p>
    <h3>pochtabeton.ru</h3>
</div>
<div className="user-zalatoy" id='lalaalsyebalsa'>
<div className="yashokalatni-zayets">
    <img src={zalatoy} alt="" />
</div><span>Золотой партнер</span>
</div>
<div className="user-zalatoy">
<div className="yashokalatni-zayets1">
    <img src={biladim} alt="" /><span>12 000 бонусов</span>
</div>
</div>
</div>
<div className="user-media">
    <div className="user-media-tepa">
        <div className="user-media-name">
            <h2>Иванов Петр <br />
Михайлович</h2>
        </div>
        <div className="user-media-qalam">
            <img onClick={()=>modalochil()} src={qalam} alt="" />
        </div>
    </div>
    <div className="user-media-line"></div>
    <div className="user-media-malumotla">
        <div className="user-status-media">
            <p>Статус:</p> <span>Пользователь</span>
        </div>
                <div className="user-status-media">
            <p>Телефон:</p> <span>8 900 800 90 80</span>
        </div>
        <div className="user-status-media">
            <p>Email:</p> <span>pochtabeton.ru</span>
        </div>
    </div>
        <div className="user-media-line"></div>
        <div className="user-media-malumotla">
        <div className="user-zalatoy" >
<div className="yashokalatni-zayets">
    <img src={zalatoy} alt="" />
</div><span>Золотой партнер</span>
</div>
<div className="user-zalatoy">
<div className="yashokalatni-zayets1">
    <img src={biladim} alt="" /><span>12 000 бонусов</span>
</div>
</div>
        </div>
</div>
            </div>




        </div>
        <div className="user-modal">
        <div className="login-kotta">
            
            <div className="teper-login33">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>modalyopil()}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1 className='ashdaislhdashfhsdaifp'>Изменить данные</h1>
              <br />
              <div className="input-user-form">
                <form action="">
                    <label>ФИО</label> <br />
                    <input type="text" placeholder='Имя' required /> <br />
                    <label>Телефон</label>
                    <input type="number" placeholder='Телефон' required /> <br />
                    <label>Email</label>
                    <input type="email" placeholder='Email' required /> <br />
                    <button>Сохранить изменения</button>
                </form>
              </div>
            </div>
            </div>
         </div>
        </div>
    </div>
  )
}
