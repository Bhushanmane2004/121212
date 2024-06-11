import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

function NavBar({ setShowLogin }) {  
  const [menu, setMenu] = useState('menu');

  return (
    <div className='navbar'>
      <div className='logo'>
      <img src='./logo-white.png' className='iitlogo' alt="iitlogo" />
      <img src='./logo.png' className='viitlogo' alt="viitlogo"/>
      </div>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>About Us</li>
        <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="basket icon" />
          <div className='dot'></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign-In</button>
      </div>
    </div>
  );
}

export default NavBar;
