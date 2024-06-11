import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt=''/>
            <p>GenHealth Hub is a comprehensive online platform that leverages AI and advanced technology to provide personalized healthcare services. Our mission is to enhance your wellness journey with smart diagnostics, preventive care, and tailored health recommendations. Join us in transforming health management for a better tomorrow.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>Conatct-Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>Contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @Gen-Health-Hub - All Right Reserved.</p>
    </div>
  )
}

export default Footer
