import React from 'react'
import start from "../img/Group 100.png"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Article() {
  return (
    <div>
        <Navbar/>
        <div className="news_page">
            <img src={start} alt="" />
            <h2>Новости</h2>
        </div>
        <Footer/>
    </div>
  )
}
