
import React, {useEffect,useState} from 'react'
import '../css/Login.css'
import log from '../img/log.png'
import ofis from '../img/ofis.png'
import tme from '../img/tme.png'
import beton from '../img/beton.png'
import axios from "axios";

 
export default function Login() {
    const [page ,setPage]= useState(1)
    const [page1,setPage1] =useState(1)
    const [page2,setPage2] =useState(3)
    const [page3,setPage3] =useState(3)
    const [name,setName]=useState([])
    const [sur,setSur]=useState([])
    const [patronymic,setpatronymic]=useState([])
    const [phone,setPhone]=useState([])
    const [email,setEmail]=useState([])

    // vodite
        const [name1,setName1]=useState([])
    const [sur1,setSur1]=useState([])
    const [patronymic1,setpatronymic1]=useState([])
    const [phone1,setPhone1]=useState([])
    const [email1,setEmail1]=useState([])


    // organizatsiya
    const [name2,setName2]=useState([])
    const [sur2,setSur2]=useState([])
    const [patronymic2,setpatronymic2]=useState([])
    const [phone2,setPhone2]=useState([])
    const [email2,setEmail2]=useState([])
    const [inn,setInn]=useState([])
    const [rekvezit,setRekvezit]=useState([])

    function Page(id){
      setPage1(id)
    }
    function Bos(){
    setPage2(page1)
 
    }
  
    function login(){
      var data= new FormData()
      data.append("login",document.querySelector("#login").value)
      data.append("password",document.querySelector("#password").value)
  
      axios.post(`http://siriyuuc.beget.tech/auth/login`,data).then(res=>{
        localStorage.setItem("token",res.data.access);
        localStorage.setItem("position",res.data.position)
          if(localStorage.getItem("position")==1){
            window.location="/user"
          }else(
            window.location="/mentor"
          )
        console.log(res.data.access)
      }).catch(err=>{
      
        alert("ошибка пароля или электронной почты")
      })
    }

    function Reagister(){
      var data= new FormData()
      data.append("username",name)
      data.append("email",email)
      data.append("surname",sur)
      data.append("patronymic",patronymic)
      data.append("phone",phone)
      data.append("login",document.querySelector("#fizika-login").value)
      data.append("password",document.querySelector("#fizika-parol").value)
      data.append("position_id",1)
    
      axios.post(`http://siriyuuc.beget.tech/auth/users`,data).then(res=>{
        localStorage.setItem("token",res.data.access);
        localStorage.setItem("position",res.data.position);
        console.log(res.data.access)
       setPage2(10)
      }).catch(err=>{
        
        alert("ошибка пароля или электронной почты")
      })
    }
function fizikaregistor(){
  setName(document.querySelector("#fizika-username").value)
  setSur(document.querySelector("#fizika-surname").value)
  setpatronymic(document.querySelector("#fizika-patronymic").value)
  setPhone(document.querySelector("#fizika-phone").value)
  setEmail(document.querySelector("#fizika-email").value)
  setPage(8)
}


// voditel 

function voditel(){
  var data= new FormData()
  data.append("username",name1)
  data.append("email",email1)
  data.append("surname",sur1)
  data.append("patronymic",patronymic1)
  data.append("phone",phone1)
  data.append("login",document.querySelector("#voditel-login").value)
  data.append("password",document.querySelector("#voditel-parol").value)
  data.append("position_id",3)

  axios.post(`http://siriyuuc.beget.tech/auth/users`,data).then(res=>{
    localStorage.setItem("token",res.data.access);
    localStorage.setItem("position",res.data.position);
    console.log(res.data.access)
   setPage2(20)
  }).catch(err=>{
    
    alert("ошибка пароля или электронной почты")
  })
}
function voditelkeyin(){
setName1(document.querySelector("#voditel-username").value)
setSur1(document.querySelector("#voditel-surname").value)
setpatronymic1(document.querySelector("#voditel-patronymic").value)
setPhone1(document.querySelector("#voditel-phone").value)
setEmail1(document.querySelector("#voditel-email").value)
setPage(14)
}


function organizatsiyakirish(){
  var data= new FormData()
  data.append("username",name2)
  data.append("email",email2)
  data.append("surname",sur2)
  data.append("patronymic",patronymic2)
  data.append("phone",phone2)
  data.append("inn",inn)
  data.append("rekvezit",rekvezit)
  data.append("login",document.querySelector("#organizatsiya-login").value)
  data.append("password",document.querySelector("#organizatsiya-parol").value)
  data.append("position_id",2)

  axios.post(`http://siriyuuc.beget.tech/auth/users`,data).then(res=>{
    localStorage.setItem("token",res.data.access);
    localStorage.setItem("position",res.data.position);
    console.log(res.data.access)
   setPage2(20)
  }).catch(err=>{
    
    alert("ошибка пароля или электронной почты")
  })
}
function blatorganizatsiya(){
  setName2(document.querySelector("#rekvezir-username").value)
  setSur2(document.querySelector("#rekvezir-surname").value)
  setpatronymic2(document.querySelector("#rekvezir-patronymic").value)
  setPhone2(document.querySelector("#rekvezir-phone").value)
  setEmail2(document.querySelector("#rekvezir-email").value)
  setInn(document.querySelector("#rekvezir-inn").value)
  setRekvezit(document.querySelector("#rekvezir-recvizit").value)
setPage(17)
}


// const [name2,setName2]=useState([])
// const [sur2,setSur2]=useState([])
// const [patronymic2,setpatronymic2]=useState([])
// const [phone2,setPhone2]=useState([])
// const [email2,setEmail2]=useState([])
// const [inn,setInn]=useState([])
// const [rekvezit,setRekvezit]=useState([])

  return (
    <div className='login_page'>
      {page2==5?((page===8?(<>
        <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(3)}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1>Регистрация</h1>
              <p>Физическое лицо</p>
              <br />
              <div className="fizika-inputla1">
              <form action="">
              <input type="text"  placeholder="Логин" required  id='fizika-login' />
              <input type="password"  placeholder="Пароль" required id='fizika-parol' />
              <input type="password"  placeholder="Повторите пароль"  required /> <br />
              <button type='button' onClick={()=>Reagister()} >Зарегестрироваться</button> {/* setpage2(10) */}
              </form>
              </div>
            </div>
            </div>
         </div>
     
      </>):(<div className="login-kotta">
        <div className="teper-login5" id="yoqol">
        <div className="img-x">
          <div className="login-img">
            <img src={log} alt="" />
          </div>
          <div className="login-x" ><box-icon name='x' onClick={()=>setPage2(3)} color="#ACACAC"   size="35px"></box-icon></div>
        </div>
            <div className="fizika-litso">
              <h1>Регистрация</h1>
              <p>Физическое лицо</p>
              <br />
              <div className="fizika-inputla">
                <form action="">
                <input type="text"  placeholder="Имя" required  id='fizika-username' /> <br />
              <input type="text"  placeholder="Фамилия" required id='fizika-surname' /><br />
              <input type="text"  placeholder="Отчество" required  id='fizika-patronymic' /> <br />
              <input type="phone"  placeholder="Телефон" required  id='fizika-phone' /> <br />
              <input type="email"  placeholder="Email"  id='fizika-email'  /> <br />
              <button type='button' onClick={()=>fizikaregistor()} >Далее</button>     {/* page8 */}
                </form>
              </div>
            </div>
            
        
            
        </div>
      </div>))):(<>{page2==6?(page==12?(    
            <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(6)}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1>Регистрация</h1>
              <p>Физическое лицо</p>
              <br />
              <div className="fizika-inputla1">
              <form action="">
              <input type="text"  placeholder="Логин" required />
              <input type="password"  placeholder="Пароль" required />
              <input type="password"  placeholder="Повторите пароль" required /> <br />
              <button type='button' onClick={()=>setPage2(10)} >Зарегестрироваться</button>
              </form>
              </div>
            </div>
            </div>
         </div>


):((page==17?(<div>  <div className="login-kotta">
            
<div className="teper-login1">
  <div className="nazat" >
  <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(6)}  size="35px"></box-icon>
  </div>
  <div className="fizika-litso1">
  <h1>Регистрация</h1>
  <p>Организация</p>
  <br />
  <div className="fizika-inputla1">
  <form action="">
  <input type="text"  placeholder="Логин" required id='organizatsiya-login' />
  <input type="password"  placeholder="Пароль" required id='organizatsiya-parol' />
  <input type="password"  placeholder="Повторите пароль" required /> <br />
  <button type='button' onClick={()=>organizatsiyakirish()} >Зарегестрироваться</button>
  </form>
  </div>
</div>
</div>
</div></div>):(<div id='juda-kotta'>
<div className="login-kotta">
<div className="teper-login6" >
<div className="img-x1">
  <div className="login-img1">
    <img src={ofis} alt="" />
  </div>
  <div className="login-x" ><box-icon name='x' onClick={()=>setPage2(2)} color="#ACACAC"   size="35px"></box-icon></div>
</div>
    <div className="fizika-litso2">
      <h1>Регистрация</h1>
      <p>Организация</p>
      <br />
        <div className="page-6">
            <form action="">
            <input type="text" placeholder='Имя' required  id='rekvezir-username' />
            <input type="text"   placeholder='Фамилия' required  id='rekvezir-surname'/>
            <input type="text"   placeholder='Отчество' required id='rekvezir-patronymic'/>
            <input type="tel" placeholder='Телефон' required id='rekvezir-phone' />
            <input type="email" placeholder='Email' required  id='rekvezir-email'/>
            <input type="text" placeholder='ИНН' required  id='rekvezir-inn'/>
            <input type="text" placeholder='Реквизиты' required   id='rekvezir-recvizit'/>
            </form>
            <div className="rekvezit">
              <div className="rekvezit-img">
              <img src={tme} alt="" />
              </div>
              <div className="rekvezit-text"><p>Прикрепить документы</p></div>
              
            </div>
            <div className="rekvezit-btn"><button onClick={()=>blatorganizatsiya()} >Далее</button></div> {/* onClick={()=>setPage(12)} */}
        </div>

</div>
{/* onClick={()=>organizatsiya()} */}
    
</div>
</div>
</div>)))):(<>{page2==7?((page==14?(          
          <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(0)}  size="35px"></box-icon>
              </div>
              <div className="fizika-litso1">
              <h1>Регистрация</h1>
              <p>Водитель</p>
              <br />
              <div className="fizika-inputla1">
              <form action="">
              <input type="text"  placeholder="Логин" required  id='voditel-login' />
              <input type="password"  placeholder="Пароль" required  id='voditel-parol'  />
              <input type="password"  placeholder="Повторите пароль" required /> <br />
              <button type='button' onClick={()=>voditel()} >Зарегестрироваться</button>{/* onClick={()=>setPage2(10)} */}
              </form>
              </div>
            </div>
            </div>
            
         </div>):(
      <div className="login-kotta">
        <div className="teper-login7">
        <div className="img-x2">
          <div className="login-img2">
            <img src={beton} alt="" />
          </div>
          <div className="login-x" ><box-icon name='x' onClick={()=>setPage2(3)} color="#ACACAC"   size="35px"></box-icon></div>
        </div>
        <div className="voditel">
              <h1>Регистрация</h1>
              <p>Водитель</p>
              <div className="page-7">
                <form action="">
                <input type="text" placeholder='Имя' required id='voditel-username' />
                <input type="text" placeholder='Фамилия' required  id='voditel-surname' />
                <input type="text" placeholder='Отчество' required id='voditel-patronymic' />
                <input type="phone" placeholder='Телефон' required  id='voditel-phone' />
                <input type="email" placeholder='Email' required  id='voditel-email' />
                </form>
</div>
              <div className="rekvezit-kotta">
              <div className="rekvezit">
                      <div className="rekvezit-img">
                      <img src={tme} alt="" />
                      </div>
                      <div className="rekvezit-text"><p>Прикрепить документы на машину</p></div>
                    </div>
                    <div className="rekvezit" id='tepaga'>
                      <div className="rekvezit-img">
                      <img src={tme} alt="" />
                      </div>
                      <div className="rekvezit-text"><p>Прикрепить права</p></div>
                    </div>
                    <div className="rekvezit" id='tepaga1'>
                      <div className="rekvezit-img">
                      <img src={tme} alt="" />
                      </div>
                      <div className="rekvezit-text"><p>Прикрепить фото машины</p></div>
                    </div>
              </div>

                    <div className="rekvezit-btn1"><button  onClick={()=>voditelkeyin()}>Далее</button></div>  {/* setPage(14) */}
                  
        </div>
        </div>
      </div>))):(
      <>
                {page===1?(         <div className="login-kotta">
            <div className="teper-login">
            <div className="login-ichi">
                   <h1>Вход в личный кабинет</h1>
                <div className="login_butoon">
                    <button id='login_but1' onClick={()=>setPage(2)}>Войти</button>
                    <button id='login_but2' onClick={()=>setPage(3)}>Зарегестрироваться</button>
                </div>
                   </div>
            </div>
         </div>):(page===2?(<div>
          <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page-ijiii-media">
              <div className="page2-ichi">
                <h1>Вход в личный кабинет</h1>
                <div className="page2-login-inp">
                  <form action="">
                  <input type="text"  placeholder="Логин"  required id='login' /><br />
                  <input type="password"  placeholder="Пароль"  required id='password' /><br />
                  <div className="page-2-but">
                  <button type='button' onClick={()=>login()} >Войти</button>
                  </div>
                  </form>
                  <div className="page-2-but">
                  <p>Забыли пароль?</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
         </div>
         </div>):(page===3?(
         <div>
          <div className="login-kotta">  
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page-ijiii-media">
                              <div className="page3-ichi">
                <h1>Регистрация</h1>
                <div className="page3-form">
                  <div className="page_form-checboc">
                    <div onClick={()=>Page(5)} className="checboc-block1">
                      <input id='yes'  type="radio" value="#009900"  name="contact"/>
                      <p>Физическое лицо</p>
                    </div>
                  </div>
                  <div  className="page_form-checboc1">
                    <div onClick={()=>Page(6)} className="checboc-block1">
                      <input  id='yes' type="radio"  value="#009900"  name="contact"/>
                      <p>Организация</p>
                    </div>
                  </div>
                  <div className="page_form-checboc1">
                    <div onClick={()=>Page(7)} className="checboc-block1">
                      <input id='yes' type="radio"   value="#009900"  name="contact"/>
                      <p>Водитель</p>
                    </div>
                  </div>
                  <button onClick={()=>Bos()}>Далее</button>
                </div>

              </div>
              </div>

            </div>
         </div>
         </div>):("")))}
      </>)}</>)}</>)}{page2===10?(<div>

{/* <div className="login-kotta">
            
            <div className="teper-login10">
            <div className="nazat" >
              
              </div>
                  <div className="login-10-sozla">
                    <h1>Вы успешно  <br />
зарегистрировались</h1>
<p>Зайдите в сервис используя свой логин и пароль.</p>
<button>Войти в личный кабинет</button>
                  </div>
            </div>
         </div>  */}

                 <div className="login-kotta">
            
            <div className="teper-login122">
            <div className="nazat" >
              
              </div>
                  <div className="login-10-sozla12">
                    <h1>Вы успешно  <br />
зарегистрировались</h1>
<p>Зайдите в сервис используя свой логин и пароль.</p>
<button onClick={()=>window.location='/user'}>Войти в личный кабинет</button>
                  </div>
            </div>
         </div>
      </div>):(page2===20?(<div>
        <div className="login-kotta">
            
            <div className="teper-login122">
            <div className="nazat" >
              
              </div>
                  <div className="login-10-sozla12">
                    <h1>Вы успешно  <br />
зарегистрировались</h1>
<p>Зайдите в сервис используя свой логин и пароль.</p>
<button onClick={()=>window.location='/mentor'}>Войти в личный кабинет</button>
                  </div>
            </div>
         </div>
      </div>):(""))}
      
    </div>
  )
}