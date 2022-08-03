
import React from 'react'
import "../component/topBar.css"

import Logo from "../images/eemanlogo.png"
import { NavLink} from "react-router-dom"
import { Link } from "react-router-dom";


function TopBar() {
  return (
    <div className='top'>
    <div className="topLeft">
    <img className='topImg'  src={Logo}    alt="" />
        </div>
    <div className="topCenter">
        <ul className="topList">
            
            <li className='topListItem' >  <NavLink to="/" 
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'teal' }}
            >home</NavLink></li>
            <li className='topListItem'> <NavLink   to="/about" className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'teal' }}>about</NavLink></li>
            <li className='topListItem'> <NavLink  to="/contact" className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'teal' }}>contact</NavLink></li>
            <li className='topListItem'> <NavLink  to="/services" className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'teal' }}>services</NavLink></li>
            <li className='topListItem'> <NavLink  to="/blogs" className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ color: 'teal' }}>Blogs</NavLink></li>
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