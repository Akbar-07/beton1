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
import fliev from "../img/fluent_arrow-fit-16-filled.png";
import phu from "../img/ph_drop-fill.png";
import shield from "../img/bxs_shield.png"
import qor from "../img/Vector.png"
export default function Zakazbeton() {
    
 
    const[data,setData]=useState(0)
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
    
      <div>
    <div className="beton2_accordion">
        {/* <Accordion classname="beton2_accordion" defaultActiveKey="0">
            <Accordion.Item  eventKey="0">
                <Accordion.Header>
                <img src={fliev} alt="" /><p>Подвижность</p>
                </Accordion.Header>
                <Accordion.Body>
            
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
            <img src={phu} alt="" />
            <p>Гидрофобная добавка</p>
                </Accordion.Header>
                <Accordion.Body>
                <div className="beton2_da">
            <div className="beton2_da2">
            <input type="radio" />
        <p>Да</p>
            </div>
        <div className="beton2_da2">
        <input type="radio" />
        <p>Нет</p>
        </div>
                </div>
        
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                <img src={shield} alt="" />
            <p>Фиброволокно</p>
                </Accordion.Header>
                <Accordion.Body>
                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>     <img src={qor} alt="" />
            <p>Противоморозная 
        добавка</p></Accordion.Header>
                <Accordion.Body>
                
                </Accordion.Body>
            </Accordion.Item>
            </Accordion> */}
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
       <input  type="checkbox" id="reading1" className='checkbox-field' />
     <label for="reading1" className='checkbox-label' ></label>
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
    
    </div>  
    )
  
}
