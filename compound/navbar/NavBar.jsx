import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

function NavBar({ setshowlogin }) {  // Destructure props to get setshowlogin
  const [menu, setmenu] = useState('menu');

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="logo" />
      <ul className='navbar-menu'>
        <li onClick={() => { setmenu('home') }} className={menu === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => { setmenu('menu') }} className={menu === 'menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => { setmenu('mobile-app') }} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</li>
        <li onClick={() => { setmenu('contact-us') }} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="basket icon" />
          <div className='dot'></div>
        </div>
        <button onClick={() => { setshowlogin(true) }}>Sign-In</button>
      </div>
    </div>
  );
}

export default NavBar;
