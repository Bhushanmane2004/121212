import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'

function NavBar() {

  const [menu,setmenu]=useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' />
      <ul className='navbar-menu'>
        <li onClick={()=>{ setmenu("home")}} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>{ setmenu("menu")}} className={menu==='menu'?'active':''}>Menu</li>
        <li onClick={()=>{ setmenu("mobile-app")}} className={menu==='mobile-app'?'active':''}>mobile-app</li>
        <li onClick={()=>{ setmenu("contact-us")}} className={menu==='contact-us'?'active':''}>contact-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} />
            <div className='dot'></div>
        </div>
        <button>Sign-In</button>
      </div>

    </div>
  )
}

export default NavBar
