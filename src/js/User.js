import React from 'react'
import '../css/User.css'
import Navbar from '../js/Navbar'
import odamcha from '../img/Vector (12).png'
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
                <div className="user-malumotla-kotta">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
