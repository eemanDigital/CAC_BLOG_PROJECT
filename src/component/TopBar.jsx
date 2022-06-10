
import React from 'react'
import "../component/topBar.css"

import Logo from "../images/eemanlogo.png"



function TopBar() {
  return (
    <div className='top'>
    <div className="topLeft">
    <img className='topImg'  src={Logo}    alt="" />
        </div>
    <div className="topCenter">
        <ul className="topList">
            
            <li className='topListItem'>home</li>
            <li className='topListItem'>about</li>
            <li className='topListItem'>contact</li>
            <li className='topListItem'>services</li>
            <li className='topListItem'>logout</li>
        </ul>


    </div>
    <div className="topRight">
        

        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className=" topIcon  fa-brands fa-twitter-square"></i>
        <i className=" topIcon fa-brands fa-instagram-square"></i>
        <i className=" topIcon  fa-brands fa-whatsapp-square"></i>
        <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
} 

export default TopBar;