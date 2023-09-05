import React, {useEffect , useState} from 'react'
import Navbar from '../js/Navbar'
import '../css/Mentor.css'
import user from '../img/Vector (13).png'
import qalam from '../img/qalam1.png'
import zalatoy from '../img/Group 164.png'
import biladim from '../img/Group 201 (1).png'
import { BiChevronDown } from 'react-icons/bi'






function modalochil(){
    document.querySelector(".user-modal").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function modalyopil(){
    document.querySelector(".user-modal").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`
}
function bonusmodal(){
    document.querySelector(".user-modal-bonus").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function modalbonusyopil(){
    document.querySelector(".user-modal-bonus").style=`display:nonoe`
    document.querySelector("body").style=`overflow: scroll;`
}
function mentorzakaz(){
    document.querySelector(".bupas-qismi-table-qolda").style=`display:block`
    document.querySelector(".uiver1").style=`  border-bottom-left-radius: 0px;`
    document.querySelector(".uiver2").style=`border-bottom-right-radius: 0px;`
}

export default function User() {
const [countries, setCountries] = useState(null)
const [selected, setSelected] = useState("")

    useEffect(()=>{
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res)=> res.json())
        .then((data)=> {
            setCountries(data)
        })
    },[])
    
  return (
    <div className='user'>
        <Navbar/>
        <div className="user-kotta">
            
            <div className="user-ichi">
                <div className='bir_div1'></div>
                <div className='ikki_div2'></div>
                <img className='user--img' src={user} alt="" />
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
<div className="yashokalatni-zayets1" onClick={()=>bonusmodal()}>
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
<div className="yashokalatni-zayets1"  onClick={()=>bonusmodal()}>
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
        <div className="user-modal-bonus">
        <div className="login-kotta">
            
            <div className="teper-login34">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>modalbonusyopil()}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1 className='ashdaislhdashfhsdaifp'>Начисление/списание <br />
бонусов</h1>
              <br />
              <div className="input-user-form1">
                <div className="mini-bonus-box">
                    <img src={biladim} alt="" /> <span>12 000 </span>
                    
                </div>
                <div className="mini-bonus-pasiga">
                <p>Накоплено бонусов</p>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span className='red-span-aksiya'> +20 бонусов</span>
                    </div>
                 </div>
                 <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
                <div className="bonusla-aksiya-box">
                    <div className="blok-name-sana-joyi">
                        <div className="blockasdasdsaasdfsad">
                        <span>21.02.23</span>
                        <h4>Заказ № 123456 78965</h4>
                        </div>
                    </div>
                    <div className="blok-name-sana-aksiya">
                        <span>+20 бонусов</span>
                    </div>
                </div>
              </div>
            </div>
            </div>
         </div>
        </div>
        <div className="mentor-kankulator">
            <div className="mentor-ichi-kotta">
                <div className="mentor-ichi-ichi">
                    <div className="mentor-filter-select">
                        {/* <select >
                            <option value="1">
                            <p >Марка бетона</p>
                            </option>
                            <option value="2">
                            <p>Марка бетона2</p>
                            </option>
                            <option value="2">
                            <p>Марка бетона3</p>
                            </option>
                        </select> */}
                        <div className='w-72 font-medium h-80'>
                            <div className='bg-white w-full p-2 flex items-center justify-between  rounded'>
                                select country
                                <BiChevronDown size={20} />
                            </div>
                            <ul className='bg-white mt-2 overflow-y-auto max-h-60'>
                                {countries?.map(country=>(
                                     <li key={country?.name} className='p-2 text-sm hover:bg-sky-600 hover:text-white' >{country?.name}</li>
                                ))
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
