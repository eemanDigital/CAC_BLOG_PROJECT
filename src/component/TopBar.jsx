
import React from 'react'
import "../component/topBar.css"

import Logo from "../images/eemanlogo.png"
import { Link } from "react-router-dom";


function TopBar() {
  return (
    <div className='top'>
    <div className="topLeft">
    <img className='topImg'  src={Logo}    alt="" />
        </div>
    <div className="topCenter">
        <ul className="topList">
            
            <li className='topListItem'>  <Link to="/">home</Link></li>
            <li className='topListItem'> <Link to="/about">about</Link></li>
            <li className='topListItem'> <Link to="/contact">contact</Link></li>
            <li className='topListItem'> <Link to="/services">services</Link></li>
            <li className='topListItem'> <Link to="/blogs">Blogs</Link></li>
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