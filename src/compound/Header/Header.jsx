import React from 'react';
import "./Header.css" ;
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-content'>
      <img src={assets.logo} className='mainlogo' alt="logo" />
        <h4>Your Health, Our AI Care</h4>
        <br>
        </br>
        <p>GenHealth Hub is a comprehensive online platform that leverages AI and advanced technology to provide personalized healthcare services. Our mission is to enhance your wellness journey with smart diagnostics, preventive care, and tailored health recommendations. Join us in transforming health management for a better tomorrow.</p>
        <br>
        </br>
        <button type="button" class="btn btn-outline-info">View Details</button>
      </div>
      <div>
        <img className='headerimg' src="https://agentestudio.com/uploads/post/image/48/main_doctor_office-wallpaper-2048x1152.jpg" alt="BigCo Inc. logo"/>
      </div>
    </div>
  )
}
 
export default Header;
