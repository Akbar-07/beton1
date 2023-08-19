import React, { useState } from 'react'
import '../css/Zakazbeton.css'
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { FaCalculator } from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import beton from '../img/m350 1.png'
import kartaa from '../img/jk.png';
import group from '../img/Group.png';
import group1 from '../img/Group(1).png';
import group2 from '../img/Group(2).png';
import group3 from '../img/Group(3).png';
import kich  from "../img/1548993561_log 1.png";
import logo from "../img/logo.png";
import kema from "../img/logop(1).png";
import yengi from "../img/Screenshot_7_lmp3jpq1 1.png"
import '../css/Zakazbeton.css';
import cement from "../img/cement 1(1).png";
import tosh from "../img/183973062b952e05464d21c9f08676f9 1.png"
import laptop from '../img/Laptop.png';
import debil from '../img/Debit Card.png';
import hand from '../img/Coin In Hand.png';
import money from '../img/Money With Arrow.png'
import  img from '../img/Group (4).png';
import acardion from '../img/fluent_arrow-fit-16-filled.png'
import acardion2 from '../img/Vector 11.png'
import acardion3 from '../img/ph_drop-fill.png'
import acardion5 from '../img/bxs_shield.png'
import acardion6 from '../img/Vector.png'

function chiqaqol(){
  var y= document.querySelector(".akardon-pasdia-chiqadi-but").style.display;
  if(y=="none"){
  document.querySelector(".akardon-pasdia-chiqadi-but").style.display="block";
  }else{
     document.querySelector(".akardon-pasdia-chiqadi-but").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda p").style.color;
  if(a=="black"){
  document.querySelector(".akardon-text-joyda p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda p").style.color="black";
  }
  
}
function chiqaqol1(){
  var y= document.querySelector(".alalalalallaalalalal").style.display;
  if(y=="none"){
  document.querySelector(".alalalalallaalalalal").style.display="block";
  }else{
     document.querySelector(".alalalalallaalalalal").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda1 p").style.color;
  if(a=="black"){
  document.querySelector(".akardon-text-joyda1 p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda1 p").style.color="black";
  }
  
}

function chiqaqol2(){
  var y= document.querySelector(".alalalalallaalalalal1").style.display;
  if(y=="none"){
  document.querySelector(".alalalalallaalalalal1").style.display="block";
  }else{
     document.querySelector(".alalalalallaalalalal1").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda2 p").style.color;
  if(a=="black"){
  document.querySelector(".akardon-text-joyda2 p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda2 p").style.color="black";
  }
  
}
function chiqaqol3(){
  var y= document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display;
  if(y=="none"){
  document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="block";
  }else{
     document.querySelector(".axaxaxsaxasxasxasxasxs2").style.display="none";
  }

  var a= document.querySelector(".akardon-text-joyda3 p").style.color;
  if(a=="black"){
  document.querySelector(".akardon-text-joyda3 p").style.color="#E93333";
  }else{
     document.querySelector(".akardon-text-joyda3 p").style.color="black";
  }
}
export default function Zakazbeton() {
  state={
    page:0,
    first_select:{}
  }
  first_button=()=>{
if(this.state.first_select!=={}){
this.setState({page:1})
}}
    const[page,setPage]=useState(0)
    const [data1,setData1]=useState([
      {
        title:"2,5м35",
        img:'../img/Group (4).png'
      },
      {
        title:" 3м3 ",
        img:'../img/Group (4).png'
      },
      {
        title:"5м3 ",
        img:'../img/Group (4).png'
      },
      {
        title:"7м3",
        img:'../img/Group (4).png'
      },  
        {
        title:"9м3"
      }
    ])
    function redcolor(key) {
        document.querySelectorAll("h4")[key].style="color:red"
        document.querySelectorAll(".aa")[key].style="fill:red"
    }
    return (
        <div>
    <div className='beton1_kotta' >
    <div className='beton_div'  >
             <p className='beton_p1' >Что необходимо?</p>
       <div className="beton_div2">
         <div className="beton_mini">
           <div className="beton_galochka"> 
           <input  type="checkbox" id="reading" className='checkbox-field' />
         <label for="reading" className='checkbox-label' ></label></div>
       <div className="beton_img">
       <img src={beton} alt="" />
       </div>
       <p>Бетон</p>
         </div>
         <div className="beton_mini">   
         <div className="beton_galochka"> 
         <input  type="checkbox" id="writing" className='checkbox-field' />
         <label for="writing" className='checkbox-label' ></label>
         </div>
       <div className="beton_img">
       <img src={cement} alt="" />
       </div>
       <p>Пескобетон</p>
           </div> 
            <div className="beton_mini">
            <div className="beton_galochka"><input  type="checkbox" id="driwing" className='checkbox-field' />
         <label for="driwing" className='checkbox-label' ></label> </div>
            <div className="beton_img">
       <img src={tosh} alt="" />
       </div>
       <p>Строительный <br />раствор</p>
           </div> 
            <div className="beton_mini2">
            <div className="beton_galochka">
            <input  type="checkbox" id="opening" className='checkbox-field' />
         <label for="opening" className='checkbox-label' ></label>
              </div>
       <p className='beton_p' >Специальный бетон</p>
       <p className='beton_wrote' >Отправим ваш запрос <br />на все заводы</p>
           </div>
       </div>
       <div className="beton_line">
       <p>1<span>/9</span></p>
       <div className="beton_lin2">
         <div className="beton_lin3"></div>
       </div>
       </div>
       <div className="beton_but">
           <button className="beton_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
           <button className="beton_button2"> <a onClick={()=>{this.first_button()}} >Далее </a><h3><BsArrowRight/></h3></button>
          </div>
           </div>
    </div>
    <div className='beton2_kotta' >
    <div className='beton_div'  >
             <p className='beton_p1' >Производитель </p>
       <div className="beton2_div2">
      <div className="beton2_range">
        <div className="beton2_range2">
        <p>М50</p><p>М200</p><p>М400</p>
        </div>
        <input id='range' type="range" className={data>50?'heidh1':'heidh1'} min='0' step='50' value={data}  onChange={(e)=>setData(e.target.value)} />
    
      </div>
    <div className="beton2_bir">
    <div className="beton2_table1">
      <table id="customers">
        <tr>
          <th>Производитель</th>
          <th>Марка</th>
          <th>Опции</th>
          <th>Цена</th>
        </tr>
        <tr>
        <img src={kich} alt="" />
        <td className="beton2_td2" >М200</td>
             <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={logo} alt="" />
        <td  >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={kema} alt="" />
          <td  >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={yengi} alt="" />
        <td >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={yengi} alt="" />
        <td >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
         <tr>
        <img src={yengi} alt="" />
        <td >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={kich} alt="" />
        <td className="beton2_td2" >М200</td>
             <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={logo} alt="" />
        <td  >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={kema} alt="" />
          <td  >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={yengi} alt="" />
        <td >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
        <tr>
        <img src={yengi} alt="" />
        <td >М200</td>
          <td className="beton2_td" >Наименование опции</td>
          <td>2 000</td>
        </tr>
      </table>
      </div>
    
     <div className="eng-kottade-ulani-ushab-turadi">
                   
                        <div className="eng-kotta-ong-tarap-acardion">
                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion} alt="" />
                                </div>
                                <div className="akardon-text-joyda" >
<p onClick={()=>chiqaqol()}>Подвижность</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="akardon-pasdia-chiqadi-but">
                                    <button>П3</button>
                                    <button>П4</button>
                                </div>
                            </div>
                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion3} alt="" />
                                </div>
                                <div className="akardon-text-joyda1"  >
                                    <p onClick={()=>chiqaqol1()}>Гидрофобная добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol1()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="alalalalallaalalalal">
                                <div className="akardon-pasdia-chiqadi-but1">
                                    <div className="ana-pachti-tugadi-inpu-radio">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Да</span>
                                        </div>
                                        <div className="ana-pachti-tugadi-inpu-radio1">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Нет</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion5} alt="" id='nmagaaaa-unaqa' />
                                </div>
                                <div className="akardon-text-joyda2"  >
                                    <p onClick={()=>chiqaqol2()}>Фиброволокно</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt=""   onClick={()=>chiqaqol2()} />
                                </div>
                            </div>
                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="alalalalallaalalalal1">
                                <div className="akardon-pasdia-chiqadi-but1">
                                    <div className="ana-pachti-tugadi-inpu-radio">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Да</span>
                                        </div>
                                        <div className="ana-pachti-tugadi-inpu-radio1">
                                        <input  id='yes1' type="radio"  value="#009900"  name="contact"/>
                                        <span>Нет</span>
                                    </div>
                                </div>
                                </div>
                            </div>
<div className="akardion-pro-zakazz">
                                <div className="akardion-img-joyda">
                                    <img src={acardion6} alt="" id='nmagaaaa-unaqa' />
                                </div>
                                <div className="akardon-text-joyda3"  >
                                    <p onClick={()=>chiqaqol3()}>Противоморозная  <br />
добавка</p>
                                </div>
                                <div className="akardion-oxiri-keyin-chop">
                                    <img src={acardion2} alt="" onClick={()=>chiqaqol3()} />
                                </div>
                            </div>

                            <div className="akardion-pasida-chiqadi-bosilganda">
                                <div className="axaxaxsaxasxasxasxasxs2">
                                <div className="akardon-pasdia-chiqadi-but4">
                                    <button>-5°C</button>
                                    <button>-10°C</button>
                                    <button>--15°C</button>
                                    <button>-20°C</button>
                                    <button>-25°C</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        </div> 
    
    </div>
  

    </div>
     
       <div className="beton_line">
       <p>2<span>/9</span></p>
       <div className="beton_lin2">
         <div className="beton_lin3"></div>
       </div>
     </div>
       <div className="beton_but">
           <button className="beton_button1"> <h3><BsArrowLeft/></h3> <a onClick={()=>{this.setState({page:0})}}> Назад</a></button>
           <button className="beton_button2"> <a onClick={()=>{this.first_button()}} >Далее </a><h3><BsArrowRight/></h3></button>
          </div>
             </div>
    </div>  
    <div className='beton3_kotta' >
    <div  className="beton3_div">
    <p className='beton3_p' >Количество</p>
    <div className='beton3_jk' >
     <div className='beton3_jk2' >
    <p>{data}<span>м3</span> </p>
    <input id='range1' type="range" className={data>50?'heidh':'heidh'} min='0' step='1' value={data}  onChange={(e)=>setData(e.target.value)} />
    
     </div>
     <div className='beton3_jk3' >
      <p className='beton3_pl' >Не знаете количество?</p>
      <p className='beton3_pl2' >Рассчитайте онлайн в калькуляторе</p>
     <button className='beton3_butttton' ><h3><FaCalculator/></h3>Калькулятор</button>
     </div>
    </div>
     <div className="beton3_linee"> <p className='beton3_nomer' >3<span>/9</span></p>
      <div className='beton3_line' >
        <div className='beton3_lin3' ></div>
       </div>
       </div>
    
       <div className="beton3_but">
        <button className="beton3_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
        <button className="beton3_button2"> <a >Далее </a><h3><BsArrowRight/></h3></button>
       </div>
    
        </div>
    </div>
    <div className='beton4_kotta' >
    <div className='beton4_div' >
    
    <p className='beton3_p' >Куда?</p>
      <div className="beton_p4">
    <div className="beton_pager">
    <div className="beton_surch">
    <input className='beton4_input' type="text" placeholder='Введите адрес' />
    <h3 className='beton_search' ><BiSearch/></h3>
    </div>
    <div className="beton_karta">
    <img className='beton_rasm' src={kartaa} alt="" />
    <p className='beton_otkrit' >Открыть карту</p>
    </div>
    </div>
    
    <div className="beton_pager2">
    <div className="beton_hkj">
    <p className='beton_xcv' >В скольки километрах от дороги <br /> находится Ваш участок?</p>
    <p className='beton4_p' >{data} </p>
    <input type="range" className={data>50?'heidh':'heidh'} min='0' step='1' value={data}  onChange={(e)=>setData(e.target.value)} />
    
    <p className='beton_xcv' >Имеются ли препятствия для большой машины 
    на пути подъезда к вашему участку?</p>
    
    <p className='beton_xcv' >Ширина проезда (м)</p>
    <p className='beton4_p' >{data} </p>
    <input type="range" className={data>50?'heidh':'heidh'} min='0' step='1' value={data}  onChange={(e)=>setData(e.target.value)} />
    
    <p className='beton_xcv' >Ограничения по высоте (м)</p>
    <p className='beton4_p' >{data} </p>
    <input type="range" className={data>50?'heidh':'heidh'} min='0' step='1' value={data}  onChange={(e)=>setData(e.target.value)} />
    
    </div>
    </div>
      </div>
                
                
      <div className="beton4_linee"> <p className='beton_nomer' >4<span>/9</span></p>
      <div className='beton4_line' >
        <div className='beton4_lin3' ></div>
       </div>
       </div>
    
       <div className="beton4_but">
        <button className="beton4_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
        <button className="beton4_button2"> <a >Далее </a><h3><BsArrowRight/></h3></button>
       </div>
                   </div>
    </div>
    <div className='beton5_kotta' >
      <div className='beton5_div' >
      <p className='beton3_p' >Тариф</p>
     <div className="beton5_phu1">
  
     <div className="beton5_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton5_galochka"> 
       <input  type="checkbox" id="reading1" className='checkbox-field1' />
     <label for="reading1" className='checkbox-label1' ></label>
  </div>
</div>
       <div className="beton5_img">
       <img src={group1} alt="" />
       </div>
       <p>Эконом</p>
         </div>

         <div className="beton5_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton5_galochka"> 
       <input  type="checkbox" id="reading2" className='checkbox-field' />
     <label for="reading2" className='checkbox-label' ></label>
  </div>
</div>
       <div className="beton5_img">
       <img src={group2} alt="" />
       </div>
       <p>Стандарт</p>
         </div>

         <div className="beton5_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton5_galochka"> 
       <input  type="checkbox" id="reading3" className='checkbox-field' />
     <label for="reading3" className='checkbox-label' ></label>
  </div>
</div>
       <div className="beton5_img">
       <img src={group3} alt="" />
       </div>
       <p>Экспресс</p>
         </div>

  
     </div>
     <div className="beton5_linee"> <p className='beton_nomer' >5<span>/9</span></p>
      <div className='beton4_line' >
        <div className='beton4_lin3' ></div>
       </div>
       </div>
    
       <div className="beton4_but">
        <button className="beton4_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
        <button className="beton4_button2"> <a >Далее </a><h3><BsArrowRight/></h3></button>
       </div>
    
      </div>
    
    
    </div>
<div className='beton7_kotta' >
<div className='beton7_div' >
      <p className='beton3_p' >Способ оплаты</p>
      <div className='beton7_dov' >
      <div className="beton_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton_galochka"> 
         <input  type="checkbox" id="writing12" className='checkbox-field' />
         <label for="writing12" className='checkbox-label' ></label>
         </div>
</div>
       <div className="beton7_img">
       <img src={laptop} alt="" />
       </div>
       <p className='beton7_p' >Онлайн</p>
         </div>
         <div className="beton_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton_galochka"> 
         <input  type="checkbox" id="writing123" className='checkbox-field' />
         <label for="writing123" className='checkbox-label' ></label>
         </div>
</div>
       <div className="beton7_img">
       <img src={debil} alt="" />
       </div>
       <p className='beton7_p' >Перевод на карту</p>
         </div>
         <div className="beton_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton_galochka"> 
         <input  type="checkbox" id="writing124" className='checkbox-field' />
         <label for="writing124" className='checkbox-label' ></label>
         </div>
</div>
       <div className="beton7_img">
       <img src={hand} alt="" />
       </div>
       <p className='beton7_p' >Наличные</p>
         </div>
         <div className="beton_mini">
         <div className="beton5_uxshad">
<img src={group} alt="" />
<div className="beton_galochka"> 
         <input  type="checkbox" id="writing125" className='checkbox-field' />
         <label for="writing125" className='checkbox-label' ></label>
         </div>
</div>
       <div className="beton7_img">
       <img src={money} alt="" />
       </div>
       <p className='beton7_p' >Предоплата</p>
         </div>
      </div>
<div className='beton7_lpl' >
  <p>С какой купюры потребуется сдача?</p>
<input type="text" placeholder='Поле для ввода'/>
<p className='beton7_kl' >Если сумма заказа <span>превышает 150000</span> может потребоваться <span>предоплата в 5000 рублей</span>.</p>
</div>


     <div className="beton7_linee"> <p className='beton_nomer' >7<span>/9</span></p>
      <div className='beton4_line' >
        <div className='beton4_lin3' ></div>
       </div>
       </div>
    
       <div className="beton4_but">
        <button className="beton4_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
        <button className="beton4_button2"> <a >Далее </a><h3><BsArrowRight/></h3></button>
       </div>
     </div>
     </div>

<div className='beton8_kotta' >
<div className='beton8_div' >
      <p className='beton3_p' >Пожелания к заказу</p>
<div className='beton8_davay' >
  <div className='beton8_bir' >
    <input type="checkbox"  />
    <p>Услуга: Все включено</p>
  </div>
<div className='beton8_ikki' >
  <p>Если вам требуется доставка <br/> определенными машинами, укажите какими:</p>


{data1.map((item,key)=>{
  return(
    <>
<button onClick={()=>redcolor(key)}><h4>{item.title}</h4> <svg className='aa' xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
  <path d="M11.8129 0.799772C10.5733 4.19998 9.34091 7.58285 8.07696 11.05C6.69009 10.2053 5.33079 9.37633 3.94707 8.53396C3.94707 9.77978 3.94707 11.0382 3.94707 12.314C3.27491 12.314 2.64136 12.314 1.96605 12.314C1.96605 12.1934 1.96605 12.0792 1.96605 11.9657C1.96605 10.3928 1.96289 8.82 1.96999 7.24716C1.97077 7.06277 1.92192 6.94063 1.77062 6.82637C1.44124 6.57815 1.13313 6.30235 0.808479 6.04783C0.680824 5.94775 0.654032 5.85556 0.712344 5.69796C1.3845 3.87453 2.04957 2.04953 2.7107 0.222958C2.76665 0.0677228 2.85097 0.0180789 3.01172 0.0141389C5.07863 -0.0394448 7.13846 0.0574786 9.18725 0.335641C9.965 0.441233 10.7365 0.590952 11.5103 0.722548C11.6056 0.73752 11.697 0.76904 11.8129 0.799772Z" fill="#606060"/>
  <path d="M1.94399 18.2428C1.29231 18.2428 0.656401 18.2428 0 18.2428C0 16.7149 0 15.1972 0 13.6614C6.13692 13.6614 12.2652 13.6614 18.4178 13.6614C18.4178 15.1751 18.4178 16.692 18.4178 18.2562C18.3209 18.2562 18.2185 18.2562 18.1153 18.2562C15.0389 18.2562 11.9626 18.253 8.88545 18.2617C8.62541 18.2625 8.54188 18.201 8.52376 17.9268C8.42053 16.3595 7.07148 15.0821 5.43718 14.9781C3.8407 14.8765 2.36163 16.0025 2.03855 17.5706C1.996 17.7802 1.97866 17.9954 1.94399 18.2428Z" fill="#606060"/>
  <path d="M21.0725 18.2398C20.6352 18.2398 20.2167 18.2398 19.7778 18.2398C19.7778 14.2943 19.7778 10.3583 19.7778 6.38833C19.9473 6.38833 20.1009 6.38676 20.2554 6.38833C21.3065 6.39858 22.3625 6.34657 23.4066 6.43876C24.5066 6.53647 25.2292 7.2173 25.5751 8.25903C25.8194 8.99424 26.0196 9.74441 26.2276 10.4906C26.3269 10.8468 26.5121 11.1273 26.8123 11.3456C27.3284 11.7215 27.8288 12.1186 28.3441 12.4953C28.7917 12.8223 29.0068 13.2455 28.9998 13.8042C28.9864 14.8364 29.0005 15.8687 28.9942 16.9002C28.9903 17.5361 28.6192 18.0357 28.0384 18.2028C27.9297 18.2343 27.813 18.2366 27.6799 18.2548C27.6302 17.176 27.2165 16.3061 26.3844 15.6552C25.7658 15.1713 25.0574 14.9562 24.271 14.9696C22.788 14.9964 21.1671 16.1808 21.0725 18.2398ZM24.9857 10.9855C24.7351 10.1353 24.5121 9.30234 24.241 8.48598C24.0976 8.05494 23.7383 7.77442 23.2915 7.74763C22.5705 7.70429 21.8447 7.7358 21.1095 7.7358C21.1095 8.82482 21.1095 9.90595 21.1095 10.9855C22.4082 10.9855 23.6816 10.9855 24.9857 10.9855Z" fill="#606060"/>
  <path d="M9.93042 11.7633C11.1999 8.26062 12.4607 4.78398 13.7191 1.31128C15.4267 1.55792 17.4054 3.46881 17.8482 5.27963C18.3746 7.43165 17.4164 10.0273 15.6395 11.3433C13.9327 12.608 11.5198 12.4748 9.93042 11.7633Z" fill="#606060"/>
  <path d="M5.21336 20.5628C3.93366 20.5336 2.91399 19.4738 2.9526 18.2153C2.992 16.9309 4.04161 15.9199 5.30319 15.9506C6.57581 15.9822 7.60651 17.0538 7.56711 18.3044C7.52534 19.5928 6.4844 20.5919 5.21336 20.5628Z" fill="#606060"/>
  <path d="M24.3814 20.5644C23.1049 20.5675 22.0765 19.5423 22.0734 18.265C22.071 16.9924 23.1041 15.9522 24.3727 15.9514C25.6383 15.9498 26.6824 16.9908 26.6871 18.2571C26.691 19.525 25.6556 20.5612 24.3814 20.5644Z" fill="#606060"/>
</svg>  </button>  
    </>
  )
})}

</div>

<div className='beton8_uch' >
  <p>Швинг</p>
  <button type="">15м <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
  <path d="M2.9043 0.994873C3.10378 1.00866 3.30327 1.02891 3.50275 1.03494C7.54327 1.15687 11.5834 1.27708 15.6239 1.39815C18.3439 1.47958 21.0638 1.56187 23.7833 1.6446C26.7256 1.73378 29.6679 1.82383 32.6102 1.91431C32.6847 1.91646 32.7588 1.92637 32.8838 1.93671C32.4568 2.1991 32.0018 2.38437 31.957 2.90828C31.926 3.27235 31.8627 3.65667 32.1406 3.97895C32.664 4.58516 33.4982 4.66572 34.0242 4.14698C34.3638 3.81221 34.4577 3.39988 34.3724 2.9393C34.2845 2.46623 33.954 2.1935 33.5301 1.97377C33.8454 1.90483 34.2815 2.14395 34.4392 2.48174C34.5184 2.65107 34.5779 2.85529 34.5645 3.03797C34.5064 3.8316 34.428 4.62436 34.3379 5.41497C34.2233 6.42015 34.0889 7.42274 33.9665 8.42705C33.9506 8.55717 33.9398 8.66359 33.7644 8.66445C32.3719 8.66919 30.9794 8.67953 29.5869 8.68643C29.5309 8.68686 29.4745 8.67307 29.3818 8.66144C29.4361 8.50978 29.4762 8.36889 29.5365 8.23662C29.6446 8.00008 29.6421 7.76699 29.5572 7.52571C29.4766 7.29564 29.4085 7.06126 29.3288 6.83118C29.2827 6.69848 29.2991 6.60025 29.4297 6.52312C29.7623 6.32622 30.0484 6.08323 30.2056 5.70106C30.2142 5.81351 30.2233 5.92596 30.2319 6.03842C30.2552 6.04746 30.2789 6.05608 30.3021 6.06513C30.6774 5.36413 31.0527 4.66271 31.4529 3.91475C31.0208 3.91475 30.6347 3.91475 30.2237 3.91475C30.2237 4.27408 30.2237 4.65582 30.2237 5.07719C30.0746 4.85875 29.9635 4.66917 29.826 4.50157C29.6787 4.32148 29.5106 4.15689 29.3413 3.99661C29.303 3.96042 29.2211 3.96214 29.1591 3.96085C27.9604 3.93672 26.7618 3.89493 25.5632 3.89579C19.0436 3.89967 12.5239 3.91389 6.00427 3.92466C5.94697 3.92466 5.8901 3.92466 5.80824 3.92466C5.78799 4.21549 5.76774 4.49769 5.74619 4.80489C13.0547 4.80489 20.3469 4.80489 27.6653 4.80489C27.6869 5.31976 27.599 5.84195 28.0216 6.28917C22.1509 6.28917 16.3361 6.28917 10.5088 6.28917C10.5088 7.47789 10.5088 8.63774 10.5088 9.8131C11.0551 9.8131 11.5967 9.8131 12.171 9.8131C12.171 9.52702 12.1784 9.23576 12.168 8.94537C12.1633 8.81353 12.2042 8.73856 12.3218 8.67566C12.8147 8.41154 13.3012 8.13451 13.7945 7.87083C13.8845 7.82257 13.9961 7.79284 14.0982 7.79198C14.7661 7.78509 15.4339 7.78552 16.1017 7.79155C16.1973 7.79241 16.3029 7.81697 16.3856 7.86307C16.8609 8.1302 17.3279 8.41111 17.8031 8.67824C17.9139 8.74071 17.9457 8.81439 17.9427 8.93417C17.9354 9.22068 17.9401 9.50806 17.9401 9.81913C19.5442 9.81913 21.1405 9.81913 22.7553 9.81913C22.7553 10.6343 22.7553 11.4258 22.7553 12.2388C18.6812 12.2388 14.6062 12.2388 10.4985 12.2388C10.4985 12.4715 10.4886 12.6847 10.5075 12.8954C10.511 12.9329 10.6329 12.9868 10.7006 12.9872C11.5118 12.9954 12.3231 12.9954 13.1344 12.9967C13.5997 12.9975 14.0646 12.9967 14.536 12.9967C14.5269 13.0337 14.5274 13.0531 14.5205 13.0566C13.6286 13.5003 13.0478 14.2302 12.6545 15.1195C12.5515 15.3521 12.4265 15.4241 12.1758 15.4202C11.1353 15.4047 10.0943 15.4137 9.02842 15.4137C9.02842 15.6559 9.02842 15.8885 9.02842 16.1311C8.95862 16.1419 8.91166 16.1565 8.8647 16.1557C8.10381 16.147 7.33991 16.1763 6.58377 16.1113C6.13568 16.0729 5.69837 15.8928 5.26063 15.7623C5.03486 15.6951 4.82073 15.5878 4.59625 15.515C4.44804 15.4672 4.42477 15.3862 4.4782 15.2578C4.51655 15.1651 4.5536 15.0716 4.59453 14.9803C4.88794 14.3237 4.45364 13.4697 3.74532 13.3116C3.42908 13.241 3.42908 13.241 3.42908 12.9243C3.42908 12.5882 3.42908 12.2522 3.42908 11.8898C4.36144 11.8898 5.27614 11.8898 6.21453 11.8898C6.21453 11.194 6.21453 10.524 6.21453 9.83378C7.15422 9.83378 8.07021 9.83378 9.00041 9.83378C9.00041 8.65325 9.00041 7.4934 9.00041 6.29563C8.92372 6.29563 8.84186 6.29563 8.75957 6.29563C7.12966 6.29563 5.49975 6.29348 3.86984 6.29908C3.71732 6.29951 3.61822 6.25815 3.53119 6.13234C3.30327 5.80403 3.01805 5.53518 2.60012 5.5033C2.37737 5.48607 2.14514 5.52786 1.92325 5.5731C1.61735 5.63557 1.48206 5.55888 1.40666 5.22669C2.1055 5.06082 2.62769 4.6877 2.58676 3.90484C2.54152 3.04443 1.99736 2.64762 1.1167 2.65193C1.40451 2.03322 1.78021 1.52223 2.12877 0.994873C2.38728 0.994873 2.64579 0.994873 2.9043 0.994873Z" fill="#606060"/>
  <path d="M42.6719 14.1358C42.6426 14.3483 42.6155 14.5607 42.584 14.7726C42.544 15.0437 42.3828 15.2237 42.1497 15.3521C42.0438 15.4107 41.9722 15.3892 41.927 15.2793C41.8999 15.2134 41.8774 15.1449 41.8516 15.0781C41.2432 13.5141 40.0416 12.6046 38.4436 12.6822C36.9705 12.7537 35.9455 13.5115 35.3539 14.8592C35.3453 14.8791 35.3337 14.8985 35.3302 14.9191C35.2665 15.3233 34.983 15.3814 34.6391 15.3823C32.593 15.3888 30.5469 15.4038 28.5008 15.4129C27.668 15.4168 26.8351 15.409 26.0023 15.4176C25.8468 15.4194 25.7731 15.3668 25.7192 15.2263C25.375 14.3315 24.786 13.6386 23.97 13.1376C23.9549 13.1285 23.9476 13.1065 23.8959 13.0311C27.6964 12.9609 31.4526 13.007 35.2432 12.9863C35.2432 12.8816 35.2432 12.792 35.2432 12.702C35.2492 10.4404 35.254 8.17847 35.263 5.91693C35.2643 5.5869 35.2803 5.25686 35.2979 4.92726C35.3298 4.3357 35.6749 3.97508 36.2794 3.9264C36.6435 3.8971 37.011 3.88676 37.3763 3.89925C38.1075 3.92424 38.8387 3.9613 39.5685 4.01257C39.9783 4.041 40.3221 4.22842 40.5939 4.54208C41.3729 5.44127 42.0257 6.42619 42.5879 7.4723C42.6258 7.54296 42.6306 7.63646 42.6332 7.72004C42.6491 8.27885 42.6603 8.83767 42.6728 9.39648C42.6719 10.9764 42.6719 12.5559 42.6719 14.1358ZM36.1816 10.1936C37.9761 10.1936 39.7581 10.1936 41.559 10.1936C41.559 9.56452 41.5612 8.94926 41.5556 8.334C41.5552 8.27541 41.5121 8.21466 41.4811 8.15908C40.8796 7.09962 40.2738 6.04231 39.6775 4.97983C39.6026 4.84626 39.5172 4.80706 39.3725 4.80792C38.3824 4.81309 37.3923 4.8105 36.4022 4.81093C36.3324 4.81093 36.2626 4.8174 36.182 4.82127C36.1816 6.61879 36.1816 8.40122 36.1816 10.1936Z" fill="#606060"/>
  <path d="M38.2341 19.0044C37.9178 18.8971 37.5805 18.8299 37.2888 18.6761C36.2349 18.1194 35.6451 16.8906 35.8273 15.7023C35.9984 14.586 36.9467 13.6407 38.1186 13.418C39.5861 13.1392 41.1139 14.2056 41.3702 15.6881C41.6348 17.2181 40.6029 18.7097 39.1087 18.9596C39.0462 18.9699 38.9851 18.9893 38.9234 19.0048C38.6938 19.0044 38.4637 19.0044 38.2341 19.0044ZM40.3496 16.2C40.3659 15.3697 39.7735 14.4498 38.5391 14.4365C37.6684 14.427 36.8791 15.1202 36.8558 16.187C36.836 17.0828 37.6727 17.9182 38.5671 17.9186C39.6098 17.9195 40.3435 17.212 40.3496 16.2Z" fill="#606060"/>
  <path d="M15.916 19.0046C15.6903 18.9701 15.4623 18.9455 15.2391 18.8994C14.0401 18.6521 13.0685 17.313 13.2051 15.9813C13.3391 14.6741 14.1892 13.6995 15.4701 13.4285C17.0707 13.0898 18.7562 14.4406 18.7777 15.9951C18.7937 17.139 18.3727 18.0093 17.4145 18.625C17.094 18.8309 16.7441 18.9443 16.3637 18.9671C16.243 18.9744 16.1228 18.9921 16.0022 19.005C15.9733 19.0046 15.9449 19.0046 15.916 19.0046ZM17.742 16.2148C17.7411 15.3023 17.1052 14.4363 15.972 14.4251C14.991 14.4156 14.2473 15.2019 14.2344 16.179C14.2219 17.1278 15.0112 17.9253 15.9604 17.933C16.9384 17.9417 17.7368 17.1713 17.742 16.2148Z" fill="#606060"/>
  <path d="M0.448486 3.75232C0.579896 3.41108 0.772917 3.13491 1.16198 3.05434C1.63764 2.9561 2.10209 3.22969 2.2335 3.6907C2.36448 4.15042 2.09649 4.64461 1.63031 4.80359C1.17189 4.95999 0.690194 4.73293 0.507513 4.27408C0.489417 4.22884 0.468305 4.18446 0.448917 4.13965C0.448486 4.01083 0.448486 3.88157 0.448486 3.75232Z" fill="#606060"/>
  <path d="M22.3478 18.9798C20.7019 19.047 19.4947 17.4753 19.524 16.1409C19.558 14.6075 20.8109 13.3723 22.3732 13.3645C23.7105 13.3576 25.1927 14.611 25.1466 16.2181C25.1013 17.8001 23.9363 18.9846 22.3478 18.9798ZM24.0707 16.1638C24.1418 15.2271 23.2129 14.4236 22.4033 14.4326C21.4533 14.443 20.5916 15.2676 20.5851 16.2038C20.5787 17.1073 21.3917 17.9165 22.3051 17.929C23.0699 17.9397 24.1078 17.3736 24.0707 16.1638Z" fill="#606060"/>
  <path d="M24.6481 12.2276C24.6481 11.7989 24.6481 11.3852 24.6481 10.9475C24.8139 10.9475 24.9699 10.9475 25.1255 10.9475C25.8652 10.9475 26.6046 10.9428 27.3443 10.951C27.5072 10.9527 27.6265 10.904 27.7476 10.7993C28.2306 10.3809 28.7192 9.96947 29.2116 9.56189C29.2771 9.5076 29.3745 9.46279 29.4572 9.46236C30.836 9.45633 32.2147 9.45805 33.593 9.45891C33.6417 9.45891 33.6903 9.46968 33.7451 9.47615C33.7451 9.96387 33.7451 10.443 33.7451 10.9471C33.661 10.9471 33.5844 10.9471 33.5081 10.9471C32.309 10.9471 31.11 10.9501 29.9109 10.9436C29.7429 10.9428 29.6123 10.9893 29.4796 11.0901C29.0053 11.4503 28.524 11.8014 28.0415 12.1504C27.976 12.1978 27.8885 12.2405 27.811 12.2409C26.7842 12.2465 25.7575 12.2439 24.7308 12.2431C24.7093 12.2435 24.6886 12.2357 24.6481 12.2276Z" fill="#606060"/>
  <path d="M28.6085 12.1534C28.9868 11.8871 29.3642 11.6196 29.7455 11.3576C29.7882 11.3283 29.8537 11.3227 29.9088 11.3227C31.1488 11.321 32.3892 11.3214 33.6292 11.3223C33.6633 11.3223 33.6977 11.3296 33.7421 11.3348C33.7421 11.6342 33.7421 11.925 33.7421 12.2111C32.0342 12.2111 30.3293 12.2111 28.6245 12.2111C28.6193 12.1913 28.6137 12.1724 28.6085 12.1534Z" fill="#606060"/>
  <path d="M20.9842 13.0088C20.6735 13.2208 20.3616 13.3914 20.1027 13.6215C19.8273 13.8662 19.5848 14.1536 19.3603 14.447C19.1669 14.6999 19.1544 14.7063 18.9885 14.4409C18.7067 13.9898 18.303 13.6542 17.8777 13.3453C17.7287 13.2367 17.571 13.1398 17.3745 13.0088C18.6011 13.0088 19.7774 13.0088 20.9842 13.0088Z" fill="#606060"/>
  <path d="M3.33649 6.76697C3.33519 7.24392 2.88883 7.68511 2.40542 7.68727C1.90132 7.68942 1.49718 7.26417 1.49977 6.73466C1.50235 6.23918 1.89227 5.85314 2.39335 5.85012C2.91253 5.84667 3.33778 6.26029 3.33649 6.76697Z" fill="#606060"/>
  <path d="M3.46752 13.6438C4.02332 13.6421 4.37144 13.9769 4.37144 14.5128C4.37144 15.0169 3.96903 15.4568 3.505 15.4607C2.9785 15.465 2.5567 15.0471 2.55713 14.5223C2.55756 14.0126 2.938 13.6455 3.46752 13.6438Z" fill="#606060"/>
  <path d="M28.9045 6.25079C28.4741 6.24863 27.9932 5.79839 27.9864 5.39081C27.9773 4.85526 28.3892 4.44121 28.9282 4.44337C29.4547 4.44552 29.8502 4.85698 29.8403 5.39296C29.8325 5.81778 29.3582 6.25294 28.9045 6.25079Z" fill="#606060"/>
  <path d="M32.2664 3.18313C32.2444 2.6549 32.8002 2.27662 33.1587 2.2904C33.6391 2.30893 34.076 2.7596 34.06 3.23138C34.0423 3.75314 33.6249 4.15728 33.1173 4.14479C32.6124 4.13186 32.2513 3.72385 32.2664 3.18313Z" fill="#606060"/>
</svg></button>
<button type="">30м <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
  <path d="M2.9043 0.994873C3.10378 1.00866 3.30327 1.02891 3.50275 1.03494C7.54327 1.15687 11.5834 1.27708 15.6239 1.39815C18.3439 1.47958 21.0638 1.56187 23.7833 1.6446C26.7256 1.73378 29.6679 1.82383 32.6102 1.91431C32.6847 1.91646 32.7588 1.92637 32.8838 1.93671C32.4568 2.1991 32.0018 2.38437 31.957 2.90828C31.926 3.27235 31.8627 3.65667 32.1406 3.97895C32.664 4.58516 33.4982 4.66572 34.0242 4.14698C34.3638 3.81221 34.4577 3.39988 34.3724 2.9393C34.2845 2.46623 33.954 2.1935 33.5301 1.97377C33.8454 1.90483 34.2815 2.14395 34.4392 2.48174C34.5184 2.65107 34.5779 2.85529 34.5645 3.03797C34.5064 3.8316 34.428 4.62436 34.3379 5.41497C34.2233 6.42015 34.0889 7.42274 33.9665 8.42705C33.9506 8.55717 33.9398 8.66359 33.7644 8.66445C32.3719 8.66919 30.9794 8.67953 29.5869 8.68643C29.5309 8.68686 29.4745 8.67307 29.3818 8.66144C29.4361 8.50978 29.4762 8.36889 29.5365 8.23662C29.6446 8.00008 29.6421 7.76699 29.5572 7.52571C29.4766 7.29564 29.4085 7.06126 29.3288 6.83118C29.2827 6.69848 29.2991 6.60025 29.4297 6.52312C29.7623 6.32622 30.0484 6.08323 30.2056 5.70106C30.2142 5.81351 30.2233 5.92596 30.2319 6.03842C30.2552 6.04746 30.2789 6.05608 30.3021 6.06513C30.6774 5.36413 31.0527 4.66271 31.4529 3.91475C31.0208 3.91475 30.6347 3.91475 30.2237 3.91475C30.2237 4.27408 30.2237 4.65582 30.2237 5.07719C30.0746 4.85875 29.9635 4.66917 29.826 4.50157C29.6787 4.32148 29.5106 4.15689 29.3413 3.99661C29.303 3.96042 29.2211 3.96214 29.1591 3.96085C27.9604 3.93672 26.7618 3.89493 25.5632 3.89579C19.0436 3.89967 12.5239 3.91389 6.00427 3.92466C5.94697 3.92466 5.8901 3.92466 5.80824 3.92466C5.78799 4.21549 5.76774 4.49769 5.74619 4.80489C13.0547 4.80489 20.3469 4.80489 27.6653 4.80489C27.6869 5.31976 27.599 5.84195 28.0216 6.28917C22.1509 6.28917 16.3361 6.28917 10.5088 6.28917C10.5088 7.47789 10.5088 8.63774 10.5088 9.8131C11.0551 9.8131 11.5967 9.8131 12.171 9.8131C12.171 9.52702 12.1784 9.23576 12.168 8.94537C12.1633 8.81353 12.2042 8.73856 12.3218 8.67566C12.8147 8.41154 13.3012 8.13451 13.7945 7.87083C13.8845 7.82257 13.9961 7.79284 14.0982 7.79198C14.7661 7.78509 15.4339 7.78552 16.1017 7.79155C16.1973 7.79241 16.3029 7.81697 16.3856 7.86307C16.8609 8.1302 17.3279 8.41111 17.8031 8.67824C17.9139 8.74071 17.9457 8.81439 17.9427 8.93417C17.9354 9.22068 17.9401 9.50806 17.9401 9.81913C19.5442 9.81913 21.1405 9.81913 22.7553 9.81913C22.7553 10.6343 22.7553 11.4258 22.7553 12.2388C18.6812 12.2388 14.6062 12.2388 10.4985 12.2388C10.4985 12.4715 10.4886 12.6847 10.5075 12.8954C10.511 12.9329 10.6329 12.9868 10.7006 12.9872C11.5118 12.9954 12.3231 12.9954 13.1344 12.9967C13.5997 12.9975 14.0646 12.9967 14.536 12.9967C14.5269 13.0337 14.5274 13.0531 14.5205 13.0566C13.6286 13.5003 13.0478 14.2302 12.6545 15.1195C12.5515 15.3521 12.4265 15.4241 12.1758 15.4202C11.1353 15.4047 10.0943 15.4137 9.02842 15.4137C9.02842 15.6559 9.02842 15.8885 9.02842 16.1311C8.95862 16.1419 8.91166 16.1565 8.8647 16.1557C8.10381 16.147 7.33991 16.1763 6.58377 16.1113C6.13568 16.0729 5.69837 15.8928 5.26063 15.7623C5.03486 15.6951 4.82073 15.5878 4.59625 15.515C4.44804 15.4672 4.42477 15.3862 4.4782 15.2578C4.51655 15.1651 4.5536 15.0716 4.59453 14.9803C4.88794 14.3237 4.45364 13.4697 3.74532 13.3116C3.42908 13.241 3.42908 13.241 3.42908 12.9243C3.42908 12.5882 3.42908 12.2522 3.42908 11.8898C4.36144 11.8898 5.27614 11.8898 6.21453 11.8898C6.21453 11.194 6.21453 10.524 6.21453 9.83378C7.15422 9.83378 8.07021 9.83378 9.00041 9.83378C9.00041 8.65325 9.00041 7.4934 9.00041 6.29563C8.92372 6.29563 8.84186 6.29563 8.75957 6.29563C7.12966 6.29563 5.49975 6.29348 3.86984 6.29908C3.71732 6.29951 3.61822 6.25815 3.53119 6.13234C3.30327 5.80403 3.01805 5.53518 2.60012 5.5033C2.37737 5.48607 2.14514 5.52786 1.92325 5.5731C1.61735 5.63557 1.48206 5.55888 1.40666 5.22669C2.1055 5.06082 2.62769 4.6877 2.58676 3.90484C2.54152 3.04443 1.99736 2.64762 1.1167 2.65193C1.40451 2.03322 1.78021 1.52223 2.12877 0.994873C2.38728 0.994873 2.64579 0.994873 2.9043 0.994873Z" fill="#606060"/>
  <path d="M42.6719 14.1358C42.6426 14.3483 42.6155 14.5607 42.584 14.7726C42.544 15.0437 42.3828 15.2237 42.1497 15.3521C42.0438 15.4107 41.9722 15.3892 41.927 15.2793C41.8999 15.2134 41.8774 15.1449 41.8516 15.0781C41.2432 13.5141 40.0416 12.6046 38.4436 12.6822C36.9705 12.7537 35.9455 13.5115 35.3539 14.8592C35.3453 14.8791 35.3337 14.8985 35.3302 14.9191C35.2665 15.3233 34.983 15.3814 34.6391 15.3823C32.593 15.3888 30.5469 15.4038 28.5008 15.4129C27.668 15.4168 26.8351 15.409 26.0023 15.4176C25.8468 15.4194 25.7731 15.3668 25.7192 15.2263C25.375 14.3315 24.786 13.6386 23.97 13.1376C23.9549 13.1285 23.9476 13.1065 23.8959 13.0311C27.6964 12.9609 31.4526 13.007 35.2432 12.9863C35.2432 12.8816 35.2432 12.792 35.2432 12.702C35.2492 10.4404 35.254 8.17847 35.263 5.91693C35.2643 5.5869 35.2803 5.25686 35.2979 4.92726C35.3298 4.3357 35.6749 3.97508 36.2794 3.9264C36.6435 3.8971 37.011 3.88676 37.3763 3.89925C38.1075 3.92424 38.8387 3.9613 39.5685 4.01257C39.9783 4.041 40.3221 4.22842 40.5939 4.54208C41.3729 5.44127 42.0257 6.42619 42.5879 7.4723C42.6258 7.54296 42.6306 7.63646 42.6332 7.72004C42.6491 8.27885 42.6603 8.83767 42.6728 9.39648C42.6719 10.9764 42.6719 12.5559 42.6719 14.1358ZM36.1816 10.1936C37.9761 10.1936 39.7581 10.1936 41.559 10.1936C41.559 9.56452 41.5612 8.94926 41.5556 8.334C41.5552 8.27541 41.5121 8.21466 41.4811 8.15908C40.8796 7.09962 40.2738 6.04231 39.6775 4.97983C39.6026 4.84626 39.5172 4.80706 39.3725 4.80792C38.3824 4.81309 37.3923 4.8105 36.4022 4.81093C36.3324 4.81093 36.2626 4.8174 36.182 4.82127C36.1816 6.61879 36.1816 8.40122 36.1816 10.1936Z" fill="#606060"/>
  <path d="M38.2341 19.0044C37.9178 18.8971 37.5805 18.8299 37.2888 18.6761C36.2349 18.1194 35.6451 16.8906 35.8273 15.7023C35.9984 14.586 36.9467 13.6407 38.1186 13.418C39.5861 13.1392 41.1139 14.2056 41.3702 15.6881C41.6348 17.2181 40.6029 18.7097 39.1087 18.9596C39.0462 18.9699 38.9851 18.9893 38.9234 19.0048C38.6938 19.0044 38.4637 19.0044 38.2341 19.0044ZM40.3496 16.2C40.3659 15.3697 39.7735 14.4498 38.5391 14.4365C37.6684 14.427 36.8791 15.1202 36.8558 16.187C36.836 17.0828 37.6727 17.9182 38.5671 17.9186C39.6098 17.9195 40.3435 17.212 40.3496 16.2Z" fill="#606060"/>
  <path d="M15.916 19.0046C15.6903 18.9701 15.4623 18.9455 15.2391 18.8994C14.0401 18.6521 13.0685 17.313 13.2051 15.9813C13.3391 14.6741 14.1892 13.6995 15.4701 13.4285C17.0707 13.0898 18.7562 14.4406 18.7777 15.9951C18.7937 17.139 18.3727 18.0093 17.4145 18.625C17.094 18.8309 16.7441 18.9443 16.3637 18.9671C16.243 18.9744 16.1228 18.9921 16.0022 19.005C15.9733 19.0046 15.9449 19.0046 15.916 19.0046ZM17.742 16.2148C17.7411 15.3023 17.1052 14.4363 15.972 14.4251C14.991 14.4156 14.2473 15.2019 14.2344 16.179C14.2219 17.1278 15.0112 17.9253 15.9604 17.933C16.9384 17.9417 17.7368 17.1713 17.742 16.2148Z" fill="#606060"/>
  <path d="M0.448486 3.75232C0.579896 3.41108 0.772917 3.13491 1.16198 3.05434C1.63764 2.9561 2.10209 3.22969 2.2335 3.6907C2.36448 4.15042 2.09649 4.64461 1.63031 4.80359C1.17189 4.95999 0.690194 4.73293 0.507513 4.27408C0.489417 4.22884 0.468305 4.18446 0.448917 4.13965C0.448486 4.01083 0.448486 3.88157 0.448486 3.75232Z" fill="#606060"/>
  <path d="M22.3478 18.9798C20.7019 19.047 19.4947 17.4753 19.524 16.1409C19.558 14.6075 20.8109 13.3723 22.3732 13.3645C23.7105 13.3576 25.1927 14.611 25.1466 16.2181C25.1013 17.8001 23.9363 18.9846 22.3478 18.9798ZM24.0707 16.1638C24.1418 15.2271 23.2129 14.4236 22.4033 14.4326C21.4533 14.443 20.5916 15.2676 20.5851 16.2038C20.5787 17.1073 21.3917 17.9165 22.3051 17.929C23.0699 17.9397 24.1078 17.3736 24.0707 16.1638Z" fill="#606060"/>
  <path d="M24.6481 12.2276C24.6481 11.7989 24.6481 11.3852 24.6481 10.9475C24.8139 10.9475 24.9699 10.9475 25.1255 10.9475C25.8652 10.9475 26.6046 10.9428 27.3443 10.951C27.5072 10.9527 27.6265 10.904 27.7476 10.7993C28.2306 10.3809 28.7192 9.96947 29.2116 9.56189C29.2771 9.5076 29.3745 9.46279 29.4572 9.46236C30.836 9.45633 32.2147 9.45805 33.593 9.45891C33.6417 9.45891 33.6903 9.46968 33.7451 9.47615C33.7451 9.96387 33.7451 10.443 33.7451 10.9471C33.661 10.9471 33.5844 10.9471 33.5081 10.9471C32.309 10.9471 31.11 10.9501 29.9109 10.9436C29.7429 10.9428 29.6123 10.9893 29.4796 11.0901C29.0053 11.4503 28.524 11.8014 28.0415 12.1504C27.976 12.1978 27.8885 12.2405 27.811 12.2409C26.7842 12.2465 25.7575 12.2439 24.7308 12.2431C24.7093 12.2435 24.6886 12.2357 24.6481 12.2276Z" fill="#606060"/>
  <path d="M28.6085 12.1534C28.9868 11.8871 29.3642 11.6196 29.7455 11.3576C29.7882 11.3283 29.8537 11.3227 29.9088 11.3227C31.1488 11.321 32.3892 11.3214 33.6292 11.3223C33.6633 11.3223 33.6977 11.3296 33.7421 11.3348C33.7421 11.6342 33.7421 11.925 33.7421 12.2111C32.0342 12.2111 30.3293 12.2111 28.6245 12.2111C28.6193 12.1913 28.6137 12.1724 28.6085 12.1534Z" fill="#606060"/>
  <path d="M20.9842 13.0088C20.6735 13.2208 20.3616 13.3914 20.1027 13.6215C19.8273 13.8662 19.5848 14.1536 19.3603 14.447C19.1669 14.6999 19.1544 14.7063 18.9885 14.4409C18.7067 13.9898 18.303 13.6542 17.8777 13.3453C17.7287 13.2367 17.571 13.1398 17.3745 13.0088C18.6011 13.0088 19.7774 13.0088 20.9842 13.0088Z" fill="#606060"/>
  <path d="M3.33649 6.76697C3.33519 7.24392 2.88883 7.68511 2.40542 7.68727C1.90132 7.68942 1.49718 7.26417 1.49977 6.73466C1.50235 6.23918 1.89227 5.85314 2.39335 5.85012C2.91253 5.84667 3.33778 6.26029 3.33649 6.76697Z" fill="#606060"/>
  <path d="M3.46752 13.6438C4.02332 13.6421 4.37144 13.9769 4.37144 14.5128C4.37144 15.0169 3.96903 15.4568 3.505 15.4607C2.9785 15.465 2.5567 15.0471 2.55713 14.5223C2.55756 14.0126 2.938 13.6455 3.46752 13.6438Z" fill="#606060"/>
  <path d="M28.9045 6.25079C28.4741 6.24863 27.9932 5.79839 27.9864 5.39081C27.9773 4.85526 28.3892 4.44121 28.9282 4.44337C29.4547 4.44552 29.8502 4.85698 29.8403 5.39296C29.8325 5.81778 29.3582 6.25294 28.9045 6.25079Z" fill="#606060"/>
  <path d="M32.2664 3.18313C32.2444 2.6549 32.8002 2.27662 33.1587 2.2904C33.6391 2.30893 34.076 2.7596 34.06 3.23138C34.0423 3.75314 33.6249 4.15728 33.1173 4.14479C32.6124 4.13186 32.2513 3.72385 32.2664 3.18313Z" fill="#606060"/>
</svg></button>
<button type="">40м <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
  <path d="M2.9043 0.994873C3.10378 1.00866 3.30327 1.02891 3.50275 1.03494C7.54327 1.15687 11.5834 1.27708 15.6239 1.39815C18.3439 1.47958 21.0638 1.56187 23.7833 1.6446C26.7256 1.73378 29.6679 1.82383 32.6102 1.91431C32.6847 1.91646 32.7588 1.92637 32.8838 1.93671C32.4568 2.1991 32.0018 2.38437 31.957 2.90828C31.926 3.27235 31.8627 3.65667 32.1406 3.97895C32.664 4.58516 33.4982 4.66572 34.0242 4.14698C34.3638 3.81221 34.4577 3.39988 34.3724 2.9393C34.2845 2.46623 33.954 2.1935 33.5301 1.97377C33.8454 1.90483 34.2815 2.14395 34.4392 2.48174C34.5184 2.65107 34.5779 2.85529 34.5645 3.03797C34.5064 3.8316 34.428 4.62436 34.3379 5.41497C34.2233 6.42015 34.0889 7.42274 33.9665 8.42705C33.9506 8.55717 33.9398 8.66359 33.7644 8.66445C32.3719 8.66919 30.9794 8.67953 29.5869 8.68643C29.5309 8.68686 29.4745 8.67307 29.3818 8.66144C29.4361 8.50978 29.4762 8.36889 29.5365 8.23662C29.6446 8.00008 29.6421 7.76699 29.5572 7.52571C29.4766 7.29564 29.4085 7.06126 29.3288 6.83118C29.2827 6.69848 29.2991 6.60025 29.4297 6.52312C29.7623 6.32622 30.0484 6.08323 30.2056 5.70106C30.2142 5.81351 30.2233 5.92596 30.2319 6.03842C30.2552 6.04746 30.2789 6.05608 30.3021 6.06513C30.6774 5.36413 31.0527 4.66271 31.4529 3.91475C31.0208 3.91475 30.6347 3.91475 30.2237 3.91475C30.2237 4.27408 30.2237 4.65582 30.2237 5.07719C30.0746 4.85875 29.9635 4.66917 29.826 4.50157C29.6787 4.32148 29.5106 4.15689 29.3413 3.99661C29.303 3.96042 29.2211 3.96214 29.1591 3.96085C27.9604 3.93672 26.7618 3.89493 25.5632 3.89579C19.0436 3.89967 12.5239 3.91389 6.00427 3.92466C5.94697 3.92466 5.8901 3.92466 5.80824 3.92466C5.78799 4.21549 5.76774 4.49769 5.74619 4.80489C13.0547 4.80489 20.3469 4.80489 27.6653 4.80489C27.6869 5.31976 27.599 5.84195 28.0216 6.28917C22.1509 6.28917 16.3361 6.28917 10.5088 6.28917C10.5088 7.47789 10.5088 8.63774 10.5088 9.8131C11.0551 9.8131 11.5967 9.8131 12.171 9.8131C12.171 9.52702 12.1784 9.23576 12.168 8.94537C12.1633 8.81353 12.2042 8.73856 12.3218 8.67566C12.8147 8.41154 13.3012 8.13451 13.7945 7.87083C13.8845 7.82257 13.9961 7.79284 14.0982 7.79198C14.7661 7.78509 15.4339 7.78552 16.1017 7.79155C16.1973 7.79241 16.3029 7.81697 16.3856 7.86307C16.8609 8.1302 17.3279 8.41111 17.8031 8.67824C17.9139 8.74071 17.9457 8.81439 17.9427 8.93417C17.9354 9.22068 17.9401 9.50806 17.9401 9.81913C19.5442 9.81913 21.1405 9.81913 22.7553 9.81913C22.7553 10.6343 22.7553 11.4258 22.7553 12.2388C18.6812 12.2388 14.6062 12.2388 10.4985 12.2388C10.4985 12.4715 10.4886 12.6847 10.5075 12.8954C10.511 12.9329 10.6329 12.9868 10.7006 12.9872C11.5118 12.9954 12.3231 12.9954 13.1344 12.9967C13.5997 12.9975 14.0646 12.9967 14.536 12.9967C14.5269 13.0337 14.5274 13.0531 14.5205 13.0566C13.6286 13.5003 13.0478 14.2302 12.6545 15.1195C12.5515 15.3521 12.4265 15.4241 12.1758 15.4202C11.1353 15.4047 10.0943 15.4137 9.02842 15.4137C9.02842 15.6559 9.02842 15.8885 9.02842 16.1311C8.95862 16.1419 8.91166 16.1565 8.8647 16.1557C8.10381 16.147 7.33991 16.1763 6.58377 16.1113C6.13568 16.0729 5.69837 15.8928 5.26063 15.7623C5.03486 15.6951 4.82073 15.5878 4.59625 15.515C4.44804 15.4672 4.42477 15.3862 4.4782 15.2578C4.51655 15.1651 4.5536 15.0716 4.59453 14.9803C4.88794 14.3237 4.45364 13.4697 3.74532 13.3116C3.42908 13.241 3.42908 13.241 3.42908 12.9243C3.42908 12.5882 3.42908 12.2522 3.42908 11.8898C4.36144 11.8898 5.27614 11.8898 6.21453 11.8898C6.21453 11.194 6.21453 10.524 6.21453 9.83378C7.15422 9.83378 8.07021 9.83378 9.00041 9.83378C9.00041 8.65325 9.00041 7.4934 9.00041 6.29563C8.92372 6.29563 8.84186 6.29563 8.75957 6.29563C7.12966 6.29563 5.49975 6.29348 3.86984 6.29908C3.71732 6.29951 3.61822 6.25815 3.53119 6.13234C3.30327 5.80403 3.01805 5.53518 2.60012 5.5033C2.37737 5.48607 2.14514 5.52786 1.92325 5.5731C1.61735 5.63557 1.48206 5.55888 1.40666 5.22669C2.1055 5.06082 2.62769 4.6877 2.58676 3.90484C2.54152 3.04443 1.99736 2.64762 1.1167 2.65193C1.40451 2.03322 1.78021 1.52223 2.12877 0.994873C2.38728 0.994873 2.64579 0.994873 2.9043 0.994873Z" fill="#606060"/>
  <path d="M42.6719 14.1358C42.6426 14.3483 42.6155 14.5607 42.584 14.7726C42.544 15.0437 42.3828 15.2237 42.1497 15.3521C42.0438 15.4107 41.9722 15.3892 41.927 15.2793C41.8999 15.2134 41.8774 15.1449 41.8516 15.0781C41.2432 13.5141 40.0416 12.6046 38.4436 12.6822C36.9705 12.7537 35.9455 13.5115 35.3539 14.8592C35.3453 14.8791 35.3337 14.8985 35.3302 14.9191C35.2665 15.3233 34.983 15.3814 34.6391 15.3823C32.593 15.3888 30.5469 15.4038 28.5008 15.4129C27.668 15.4168 26.8351 15.409 26.0023 15.4176C25.8468 15.4194 25.7731 15.3668 25.7192 15.2263C25.375 14.3315 24.786 13.6386 23.97 13.1376C23.9549 13.1285 23.9476 13.1065 23.8959 13.0311C27.6964 12.9609 31.4526 13.007 35.2432 12.9863C35.2432 12.8816 35.2432 12.792 35.2432 12.702C35.2492 10.4404 35.254 8.17847 35.263 5.91693C35.2643 5.5869 35.2803 5.25686 35.2979 4.92726C35.3298 4.3357 35.6749 3.97508 36.2794 3.9264C36.6435 3.8971 37.011 3.88676 37.3763 3.89925C38.1075 3.92424 38.8387 3.9613 39.5685 4.01257C39.9783 4.041 40.3221 4.22842 40.5939 4.54208C41.3729 5.44127 42.0257 6.42619 42.5879 7.4723C42.6258 7.54296 42.6306 7.63646 42.6332 7.72004C42.6491 8.27885 42.6603 8.83767 42.6728 9.39648C42.6719 10.9764 42.6719 12.5559 42.6719 14.1358ZM36.1816 10.1936C37.9761 10.1936 39.7581 10.1936 41.559 10.1936C41.559 9.56452 41.5612 8.94926 41.5556 8.334C41.5552 8.27541 41.5121 8.21466 41.4811 8.15908C40.8796 7.09962 40.2738 6.04231 39.6775 4.97983C39.6026 4.84626 39.5172 4.80706 39.3725 4.80792C38.3824 4.81309 37.3923 4.8105 36.4022 4.81093C36.3324 4.81093 36.2626 4.8174 36.182 4.82127C36.1816 6.61879 36.1816 8.40122 36.1816 10.1936Z" fill="#606060"/>
  <path d="M38.2341 19.0044C37.9178 18.8971 37.5805 18.8299 37.2888 18.6761C36.2349 18.1194 35.6451 16.8906 35.8273 15.7023C35.9984 14.586 36.9467 13.6407 38.1186 13.418C39.5861 13.1392 41.1139 14.2056 41.3702 15.6881C41.6348 17.2181 40.6029 18.7097 39.1087 18.9596C39.0462 18.9699 38.9851 18.9893 38.9234 19.0048C38.6938 19.0044 38.4637 19.0044 38.2341 19.0044ZM40.3496 16.2C40.3659 15.3697 39.7735 14.4498 38.5391 14.4365C37.6684 14.427 36.8791 15.1202 36.8558 16.187C36.836 17.0828 37.6727 17.9182 38.5671 17.9186C39.6098 17.9195 40.3435 17.212 40.3496 16.2Z" fill="#606060"/>
  <path d="M15.916 19.0046C15.6903 18.9701 15.4623 18.9455 15.2391 18.8994C14.0401 18.6521 13.0685 17.313 13.2051 15.9813C13.3391 14.6741 14.1892 13.6995 15.4701 13.4285C17.0707 13.0898 18.7562 14.4406 18.7777 15.9951C18.7937 17.139 18.3727 18.0093 17.4145 18.625C17.094 18.8309 16.7441 18.9443 16.3637 18.9671C16.243 18.9744 16.1228 18.9921 16.0022 19.005C15.9733 19.0046 15.9449 19.0046 15.916 19.0046ZM17.742 16.2148C17.7411 15.3023 17.1052 14.4363 15.972 14.4251C14.991 14.4156 14.2473 15.2019 14.2344 16.179C14.2219 17.1278 15.0112 17.9253 15.9604 17.933C16.9384 17.9417 17.7368 17.1713 17.742 16.2148Z" fill="#606060"/>
  <path d="M0.448486 3.75232C0.579896 3.41108 0.772917 3.13491 1.16198 3.05434C1.63764 2.9561 2.10209 3.22969 2.2335 3.6907C2.36448 4.15042 2.09649 4.64461 1.63031 4.80359C1.17189 4.95999 0.690194 4.73293 0.507513 4.27408C0.489417 4.22884 0.468305 4.18446 0.448917 4.13965C0.448486 4.01083 0.448486 3.88157 0.448486 3.75232Z" fill="#606060"/>
  <path d="M22.3478 18.9798C20.7019 19.047 19.4947 17.4753 19.524 16.1409C19.558 14.6075 20.8109 13.3723 22.3732 13.3645C23.7105 13.3576 25.1927 14.611 25.1466 16.2181C25.1013 17.8001 23.9363 18.9846 22.3478 18.9798ZM24.0707 16.1638C24.1418 15.2271 23.2129 14.4236 22.4033 14.4326C21.4533 14.443 20.5916 15.2676 20.5851 16.2038C20.5787 17.1073 21.3917 17.9165 22.3051 17.929C23.0699 17.9397 24.1078 17.3736 24.0707 16.1638Z" fill="#606060"/>
  <path d="M24.6481 12.2276C24.6481 11.7989 24.6481 11.3852 24.6481 10.9475C24.8139 10.9475 24.9699 10.9475 25.1255 10.9475C25.8652 10.9475 26.6046 10.9428 27.3443 10.951C27.5072 10.9527 27.6265 10.904 27.7476 10.7993C28.2306 10.3809 28.7192 9.96947 29.2116 9.56189C29.2771 9.5076 29.3745 9.46279 29.4572 9.46236C30.836 9.45633 32.2147 9.45805 33.593 9.45891C33.6417 9.45891 33.6903 9.46968 33.7451 9.47615C33.7451 9.96387 33.7451 10.443 33.7451 10.9471C33.661 10.9471 33.5844 10.9471 33.5081 10.9471C32.309 10.9471 31.11 10.9501 29.9109 10.9436C29.7429 10.9428 29.6123 10.9893 29.4796 11.0901C29.0053 11.4503 28.524 11.8014 28.0415 12.1504C27.976 12.1978 27.8885 12.2405 27.811 12.2409C26.7842 12.2465 25.7575 12.2439 24.7308 12.2431C24.7093 12.2435 24.6886 12.2357 24.6481 12.2276Z" fill="#606060"/>
  <path d="M28.6085 12.1534C28.9868 11.8871 29.3642 11.6196 29.7455 11.3576C29.7882 11.3283 29.8537 11.3227 29.9088 11.3227C31.1488 11.321 32.3892 11.3214 33.6292 11.3223C33.6633 11.3223 33.6977 11.3296 33.7421 11.3348C33.7421 11.6342 33.7421 11.925 33.7421 12.2111C32.0342 12.2111 30.3293 12.2111 28.6245 12.2111C28.6193 12.1913 28.6137 12.1724 28.6085 12.1534Z" fill="#606060"/>
  <path d="M20.9842 13.0088C20.6735 13.2208 20.3616 13.3914 20.1027 13.6215C19.8273 13.8662 19.5848 14.1536 19.3603 14.447C19.1669 14.6999 19.1544 14.7063 18.9885 14.4409C18.7067 13.9898 18.303 13.6542 17.8777 13.3453C17.7287 13.2367 17.571 13.1398 17.3745 13.0088C18.6011 13.0088 19.7774 13.0088 20.9842 13.0088Z" fill="#606060"/>
  <path d="M3.33649 6.76697C3.33519 7.24392 2.88883 7.68511 2.40542 7.68727C1.90132 7.68942 1.49718 7.26417 1.49977 6.73466C1.50235 6.23918 1.89227 5.85314 2.39335 5.85012C2.91253 5.84667 3.33778 6.26029 3.33649 6.76697Z" fill="#606060"/>
  <path d="M3.46752 13.6438C4.02332 13.6421 4.37144 13.9769 4.37144 14.5128C4.37144 15.0169 3.96903 15.4568 3.505 15.4607C2.9785 15.465 2.5567 15.0471 2.55713 14.5223C2.55756 14.0126 2.938 13.6455 3.46752 13.6438Z" fill="#606060"/>
  <path d="M28.9045 6.25079C28.4741 6.24863 27.9932 5.79839 27.9864 5.39081C27.9773 4.85526 28.3892 4.44121 28.9282 4.44337C29.4547 4.44552 29.8502 4.85698 29.8403 5.39296C29.8325 5.81778 29.3582 6.25294 28.9045 6.25079Z" fill="#606060"/>
  <path d="M32.2664 3.18313C32.2444 2.6549 32.8002 2.27662 33.1587 2.2904C33.6391 2.30893 34.076 2.7596 34.06 3.23138C34.0423 3.75314 33.6249 4.15728 33.1173 4.14479C32.6124 4.13186 32.2513 3.72385 32.2664 3.18313Z" fill="#606060"/>
</svg></button>
<button type="">57м <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
  <path d="M2.9043 0.994873C3.10378 1.00866 3.30327 1.02891 3.50275 1.03494C7.54327 1.15687 11.5834 1.27708 15.6239 1.39815C18.3439 1.47958 21.0638 1.56187 23.7833 1.6446C26.7256 1.73378 29.6679 1.82383 32.6102 1.91431C32.6847 1.91646 32.7588 1.92637 32.8838 1.93671C32.4568 2.1991 32.0018 2.38437 31.957 2.90828C31.926 3.27235 31.8627 3.65667 32.1406 3.97895C32.664 4.58516 33.4982 4.66572 34.0242 4.14698C34.3638 3.81221 34.4577 3.39988 34.3724 2.9393C34.2845 2.46623 33.954 2.1935 33.5301 1.97377C33.8454 1.90483 34.2815 2.14395 34.4392 2.48174C34.5184 2.65107 34.5779 2.85529 34.5645 3.03797C34.5064 3.8316 34.428 4.62436 34.3379 5.41497C34.2233 6.42015 34.0889 7.42274 33.9665 8.42705C33.9506 8.55717 33.9398 8.66359 33.7644 8.66445C32.3719 8.66919 30.9794 8.67953 29.5869 8.68643C29.5309 8.68686 29.4745 8.67307 29.3818 8.66144C29.4361 8.50978 29.4762 8.36889 29.5365 8.23662C29.6446 8.00008 29.6421 7.76699 29.5572 7.52571C29.4766 7.29564 29.4085 7.06126 29.3288 6.83118C29.2827 6.69848 29.2991 6.60025 29.4297 6.52312C29.7623 6.32622 30.0484 6.08323 30.2056 5.70106C30.2142 5.81351 30.2233 5.92596 30.2319 6.03842C30.2552 6.04746 30.2789 6.05608 30.3021 6.06513C30.6774 5.36413 31.0527 4.66271 31.4529 3.91475C31.0208 3.91475 30.6347 3.91475 30.2237 3.91475C30.2237 4.27408 30.2237 4.65582 30.2237 5.07719C30.0746 4.85875 29.9635 4.66917 29.826 4.50157C29.6787 4.32148 29.5106 4.15689 29.3413 3.99661C29.303 3.96042 29.2211 3.96214 29.1591 3.96085C27.9604 3.93672 26.7618 3.89493 25.5632 3.89579C19.0436 3.89967 12.5239 3.91389 6.00427 3.92466C5.94697 3.92466 5.8901 3.92466 5.80824 3.92466C5.78799 4.21549 5.76774 4.49769 5.74619 4.80489C13.0547 4.80489 20.3469 4.80489 27.6653 4.80489C27.6869 5.31976 27.599 5.84195 28.0216 6.28917C22.1509 6.28917 16.3361 6.28917 10.5088 6.28917C10.5088 7.47789 10.5088 8.63774 10.5088 9.8131C11.0551 9.8131 11.5967 9.8131 12.171 9.8131C12.171 9.52702 12.1784 9.23576 12.168 8.94537C12.1633 8.81353 12.2042 8.73856 12.3218 8.67566C12.8147 8.41154 13.3012 8.13451 13.7945 7.87083C13.8845 7.82257 13.9961 7.79284 14.0982 7.79198C14.7661 7.78509 15.4339 7.78552 16.1017 7.79155C16.1973 7.79241 16.3029 7.81697 16.3856 7.86307C16.8609 8.1302 17.3279 8.41111 17.8031 8.67824C17.9139 8.74071 17.9457 8.81439 17.9427 8.93417C17.9354 9.22068 17.9401 9.50806 17.9401 9.81913C19.5442 9.81913 21.1405 9.81913 22.7553 9.81913C22.7553 10.6343 22.7553 11.4258 22.7553 12.2388C18.6812 12.2388 14.6062 12.2388 10.4985 12.2388C10.4985 12.4715 10.4886 12.6847 10.5075 12.8954C10.511 12.9329 10.6329 12.9868 10.7006 12.9872C11.5118 12.9954 12.3231 12.9954 13.1344 12.9967C13.5997 12.9975 14.0646 12.9967 14.536 12.9967C14.5269 13.0337 14.5274 13.0531 14.5205 13.0566C13.6286 13.5003 13.0478 14.2302 12.6545 15.1195C12.5515 15.3521 12.4265 15.4241 12.1758 15.4202C11.1353 15.4047 10.0943 15.4137 9.02842 15.4137C9.02842 15.6559 9.02842 15.8885 9.02842 16.1311C8.95862 16.1419 8.91166 16.1565 8.8647 16.1557C8.10381 16.147 7.33991 16.1763 6.58377 16.1113C6.13568 16.0729 5.69837 15.8928 5.26063 15.7623C5.03486 15.6951 4.82073 15.5878 4.59625 15.515C4.44804 15.4672 4.42477 15.3862 4.4782 15.2578C4.51655 15.1651 4.5536 15.0716 4.59453 14.9803C4.88794 14.3237 4.45364 13.4697 3.74532 13.3116C3.42908 13.241 3.42908 13.241 3.42908 12.9243C3.42908 12.5882 3.42908 12.2522 3.42908 11.8898C4.36144 11.8898 5.27614 11.8898 6.21453 11.8898C6.21453 11.194 6.21453 10.524 6.21453 9.83378C7.15422 9.83378 8.07021 9.83378 9.00041 9.83378C9.00041 8.65325 9.00041 7.4934 9.00041 6.29563C8.92372 6.29563 8.84186 6.29563 8.75957 6.29563C7.12966 6.29563 5.49975 6.29348 3.86984 6.29908C3.71732 6.29951 3.61822 6.25815 3.53119 6.13234C3.30327 5.80403 3.01805 5.53518 2.60012 5.5033C2.37737 5.48607 2.14514 5.52786 1.92325 5.5731C1.61735 5.63557 1.48206 5.55888 1.40666 5.22669C2.1055 5.06082 2.62769 4.6877 2.58676 3.90484C2.54152 3.04443 1.99736 2.64762 1.1167 2.65193C1.40451 2.03322 1.78021 1.52223 2.12877 0.994873C2.38728 0.994873 2.64579 0.994873 2.9043 0.994873Z" fill="#606060"/>
  <path d="M42.6719 14.1358C42.6426 14.3483 42.6155 14.5607 42.584 14.7726C42.544 15.0437 42.3828 15.2237 42.1497 15.3521C42.0438 15.4107 41.9722 15.3892 41.927 15.2793C41.8999 15.2134 41.8774 15.1449 41.8516 15.0781C41.2432 13.5141 40.0416 12.6046 38.4436 12.6822C36.9705 12.7537 35.9455 13.5115 35.3539 14.8592C35.3453 14.8791 35.3337 14.8985 35.3302 14.9191C35.2665 15.3233 34.983 15.3814 34.6391 15.3823C32.593 15.3888 30.5469 15.4038 28.5008 15.4129C27.668 15.4168 26.8351 15.409 26.0023 15.4176C25.8468 15.4194 25.7731 15.3668 25.7192 15.2263C25.375 14.3315 24.786 13.6386 23.97 13.1376C23.9549 13.1285 23.9476 13.1065 23.8959 13.0311C27.6964 12.9609 31.4526 13.007 35.2432 12.9863C35.2432 12.8816 35.2432 12.792 35.2432 12.702C35.2492 10.4404 35.254 8.17847 35.263 5.91693C35.2643 5.5869 35.2803 5.25686 35.2979 4.92726C35.3298 4.3357 35.6749 3.97508 36.2794 3.9264C36.6435 3.8971 37.011 3.88676 37.3763 3.89925C38.1075 3.92424 38.8387 3.9613 39.5685 4.01257C39.9783 4.041 40.3221 4.22842 40.5939 4.54208C41.3729 5.44127 42.0257 6.42619 42.5879 7.4723C42.6258 7.54296 42.6306 7.63646 42.6332 7.72004C42.6491 8.27885 42.6603 8.83767 42.6728 9.39648C42.6719 10.9764 42.6719 12.5559 42.6719 14.1358ZM36.1816 10.1936C37.9761 10.1936 39.7581 10.1936 41.559 10.1936C41.559 9.56452 41.5612 8.94926 41.5556 8.334C41.5552 8.27541 41.5121 8.21466 41.4811 8.15908C40.8796 7.09962 40.2738 6.04231 39.6775 4.97983C39.6026 4.84626 39.5172 4.80706 39.3725 4.80792C38.3824 4.81309 37.3923 4.8105 36.4022 4.81093C36.3324 4.81093 36.2626 4.8174 36.182 4.82127C36.1816 6.61879 36.1816 8.40122 36.1816 10.1936Z" fill="#606060"/>
  <path d="M38.2341 19.0044C37.9178 18.8971 37.5805 18.8299 37.2888 18.6761C36.2349 18.1194 35.6451 16.8906 35.8273 15.7023C35.9984 14.586 36.9467 13.6407 38.1186 13.418C39.5861 13.1392 41.1139 14.2056 41.3702 15.6881C41.6348 17.2181 40.6029 18.7097 39.1087 18.9596C39.0462 18.9699 38.9851 18.9893 38.9234 19.0048C38.6938 19.0044 38.4637 19.0044 38.2341 19.0044ZM40.3496 16.2C40.3659 15.3697 39.7735 14.4498 38.5391 14.4365C37.6684 14.427 36.8791 15.1202 36.8558 16.187C36.836 17.0828 37.6727 17.9182 38.5671 17.9186C39.6098 17.9195 40.3435 17.212 40.3496 16.2Z" fill="#606060"/>
  <path d="M15.916 19.0046C15.6903 18.9701 15.4623 18.9455 15.2391 18.8994C14.0401 18.6521 13.0685 17.313 13.2051 15.9813C13.3391 14.6741 14.1892 13.6995 15.4701 13.4285C17.0707 13.0898 18.7562 14.4406 18.7777 15.9951C18.7937 17.139 18.3727 18.0093 17.4145 18.625C17.094 18.8309 16.7441 18.9443 16.3637 18.9671C16.243 18.9744 16.1228 18.9921 16.0022 19.005C15.9733 19.0046 15.9449 19.0046 15.916 19.0046ZM17.742 16.2148C17.7411 15.3023 17.1052 14.4363 15.972 14.4251C14.991 14.4156 14.2473 15.2019 14.2344 16.179C14.2219 17.1278 15.0112 17.9253 15.9604 17.933C16.9384 17.9417 17.7368 17.1713 17.742 16.2148Z" fill="#606060"/>
  <path d="M0.448486 3.75232C0.579896 3.41108 0.772917 3.13491 1.16198 3.05434C1.63764 2.9561 2.10209 3.22969 2.2335 3.6907C2.36448 4.15042 2.09649 4.64461 1.63031 4.80359C1.17189 4.95999 0.690194 4.73293 0.507513 4.27408C0.489417 4.22884 0.468305 4.18446 0.448917 4.13965C0.448486 4.01083 0.448486 3.88157 0.448486 3.75232Z" fill="#606060"/>
  <path d="M22.3478 18.9798C20.7019 19.047 19.4947 17.4753 19.524 16.1409C19.558 14.6075 20.8109 13.3723 22.3732 13.3645C23.7105 13.3576 25.1927 14.611 25.1466 16.2181C25.1013 17.8001 23.9363 18.9846 22.3478 18.9798ZM24.0707 16.1638C24.1418 15.2271 23.2129 14.4236 22.4033 14.4326C21.4533 14.443 20.5916 15.2676 20.5851 16.2038C20.5787 17.1073 21.3917 17.9165 22.3051 17.929C23.0699 17.9397 24.1078 17.3736 24.0707 16.1638Z" fill="#606060"/>
  <path d="M24.6481 12.2276C24.6481 11.7989 24.6481 11.3852 24.6481 10.9475C24.8139 10.9475 24.9699 10.9475 25.1255 10.9475C25.8652 10.9475 26.6046 10.9428 27.3443 10.951C27.5072 10.9527 27.6265 10.904 27.7476 10.7993C28.2306 10.3809 28.7192 9.96947 29.2116 9.56189C29.2771 9.5076 29.3745 9.46279 29.4572 9.46236C30.836 9.45633 32.2147 9.45805 33.593 9.45891C33.6417 9.45891 33.6903 9.46968 33.7451 9.47615C33.7451 9.96387 33.7451 10.443 33.7451 10.9471C33.661 10.9471 33.5844 10.9471 33.5081 10.9471C32.309 10.9471 31.11 10.9501 29.9109 10.9436C29.7429 10.9428 29.6123 10.9893 29.4796 11.0901C29.0053 11.4503 28.524 11.8014 28.0415 12.1504C27.976 12.1978 27.8885 12.2405 27.811 12.2409C26.7842 12.2465 25.7575 12.2439 24.7308 12.2431C24.7093 12.2435 24.6886 12.2357 24.6481 12.2276Z" fill="#606060"/>
  <path d="M28.6085 12.1534C28.9868 11.8871 29.3642 11.6196 29.7455 11.3576C29.7882 11.3283 29.8537 11.3227 29.9088 11.3227C31.1488 11.321 32.3892 11.3214 33.6292 11.3223C33.6633 11.3223 33.6977 11.3296 33.7421 11.3348C33.7421 11.6342 33.7421 11.925 33.7421 12.2111C32.0342 12.2111 30.3293 12.2111 28.6245 12.2111C28.6193 12.1913 28.6137 12.1724 28.6085 12.1534Z" fill="#606060"/>
  <path d="M20.9842 13.0088C20.6735 13.2208 20.3616 13.3914 20.1027 13.6215C19.8273 13.8662 19.5848 14.1536 19.3603 14.447C19.1669 14.6999 19.1544 14.7063 18.9885 14.4409C18.7067 13.9898 18.303 13.6542 17.8777 13.3453C17.7287 13.2367 17.571 13.1398 17.3745 13.0088C18.6011 13.0088 19.7774 13.0088 20.9842 13.0088Z" fill="#606060"/>
  <path d="M3.33649 6.76697C3.33519 7.24392 2.88883 7.68511 2.40542 7.68727C1.90132 7.68942 1.49718 7.26417 1.49977 6.73466C1.50235 6.23918 1.89227 5.85314 2.39335 5.85012C2.91253 5.84667 3.33778 6.26029 3.33649 6.76697Z" fill="#606060"/>
  <path d="M3.46752 13.6438C4.02332 13.6421 4.37144 13.9769 4.37144 14.5128C4.37144 15.0169 3.96903 15.4568 3.505 15.4607C2.9785 15.465 2.5567 15.0471 2.55713 14.5223C2.55756 14.0126 2.938 13.6455 3.46752 13.6438Z" fill="#606060"/>
  <path d="M28.9045 6.25079C28.4741 6.24863 27.9932 5.79839 27.9864 5.39081C27.9773 4.85526 28.3892 4.44121 28.9282 4.44337C29.4547 4.44552 29.8502 4.85698 29.8403 5.39296C29.8325 5.81778 29.3582 6.25294 28.9045 6.25079Z" fill="#606060"/>
  <path d="M32.2664 3.18313C32.2444 2.6549 32.8002 2.27662 33.1587 2.2904C33.6391 2.30893 34.076 2.7596 34.06 3.23138C34.0423 3.75314 33.6249 4.15728 33.1173 4.14479C32.6124 4.13186 32.2513 3.72385 32.2664 3.18313Z" fill="#606060"/>
</svg></button>

</div>
<div className='beton8_tort' >
  <p>Время работы швинга</p>
<input type="number" placeholder='3 часа' />
<p className='beton8_minimal' >Минимальное время работы - 3ч</p>
</div>
<div className='beton8_bir' >
    <input type="checkbox"  />
    <p>Пусковая смесь</p>
  </div>
  <div className='beton8_olti' >
    <p>Интервал подачи машин:</p>
    <button>30мин</button>
    <button>1 час</button>
    <button>1.5 часа</button>
    <button>2 часа</button>

  </div>
  <div className='beton8_bir' >
    <input type="checkbox"  />
    <p>Требуется подвоз воды на участок</p>
  </div>
</div>
     <div className="beton7_linee"> <p className='beton_nomer' >8<span>/9</span></p>
      <div className='beton4_line' >
        <div className='beton4_lin3' ></div>
       </div>
       </div>
       <div className="beton4_but">
        <button className="beton4_button1"> <h3><BsArrowLeft/></h3> <a > Назад</a></button>
        <button className="beton4_button2"> <a >Далее </a><h3><BsArrowRight/></h3></button>
       </div>
    
      </div>
</div>
<div className='beton9_kotta' >

  <div className='beton9_div' >
      <p className='beton9_p' >Заказ</p>
    <div className='beton9_card' >
      <div className='beton9_kichkina' >
        <div className='beton9_beton' >
          <img src={logo} alt=""/>
        </div>
        <div className='beton9_kichkina2' >
          <p className='beton9_p2' >Гравийный бетон М150 B12,5 F100 W4</p>
          <p className='beton9_p' >Наименование опции, наименование опции, наименование опции </p>
        </div>
      </div>
<hr className='beton9_hr'/ >

<div className='beton9_suga' >
  <div className='beton9_suga1' >
    
<div className='beton9_stoy' >
  <div className='beton9_stoy1' >
    <p className='beton9_kop' >Стоимость бетона:</p>
    <p className='beton9_rubl' >5 000 ₽</p>
    
  </div>
  <div className='beton9_stoy1' >
    <p className='beton9_kop' >Стоимость доставки:</p>
    <p className='beton9_rubl' >5 000 ₽</p>
    
  </div>
  <div className='beton9_stoy1' >
    <p className='beton9_kop' >Стоимость швинга:</p>
    <p className='beton9_rubl' >5 000 ₽</p>
    
  </div>
</div>
<div className='beton9_bonus' >
  <div className='beton9_bonus1' >
    <p className='beton9_yozuv' >Бонусы:</p>
    <div className='beton9_sto' >
      <div className='beton9_oq' >
        <p>B</p>
      </div>
      <p className='beton9_df' >12 000 бонусов</p>
    </div>
  </div>
  <div className='beton9_bonus1' >
    <p className='beton9_yozuv' >Списать бонусов: </p>
  <input className='beton9_in' type="number" />
  </div>
  <div className='beton9_bonus1' >
    <p className='beton9_yozuv' >Промокод</p>
   <input type="text" className='beton9_pole' placeholder='Поле для ввода' />
  </div>
</div>

  <button className='beton9_njl'>Списать бонусы</button> <br/>
  <input placeholder='Код из смс' className='beton9_min' type="text"/>
<p className='beton9_otpr' >Отправлен на номер +7 800 900 80 90</p>
<a className='beton9_a' href="">Отправить повторно</a>
  </div>

  <div className='beton9_suga2' >
    <p className='beton9_itogo' >Итого:</p>
    <p className='beton9_rubl' >5 000 ₽</p>
    <p className='beton9_it' >Итого с учетом бонусов/скидки:</p>
  <p className='beton9_hid' >5 000 ₽</p>
  <div className='beton9_bn' >
  <div className='beton9_oq' >
        <p>B</p>
      </div>
      <p>будет начислено бонусов: <br/>
<span>(2% от суммы)</span></p>

  </div>
  <button className='beton9_zakaz' >Заказать</button>
  </div>
</div>



    </div>
  </div>
  
</div>
    </div>  
    )
  
}
