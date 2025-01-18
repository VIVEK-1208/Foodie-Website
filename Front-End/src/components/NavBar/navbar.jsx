import React, { useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';

const navbar = ({setLogin}) => {

  const [menu, setmenu] = useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=> setLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default navbar
