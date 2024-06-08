import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setshowlogin }) => {  
  const [CurrentState, setCurrentState] = useState('Sign Up');  
  const [userType, setUserType] = useState('Patient');

  return (
    <div className='Loginpopup'>
      <form className='loginpopup-con'>
        <div className='loginpopup-title'>
          <h2>{CurrentState}</h2>
          <img onClick={() => { setshowlogin(false) }} src={assets.cross_icon} alt="close" />
        </div>
        <div className='loginpopup-input'>
          {CurrentState === "Login" ? <></> : 
            <>
              <input type='text' placeholder='Your Name' required />
            </>
          }
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Your Password' required />\
          <input type='password' placeholder='Confirm Password' required />
        </div>
        <button>{CurrentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className='loginpopuo-condtion'>
          <input type='checkbox' required />
          <p>By Continuing, I agree to the term of use & privacy policy</p>
        </div>
        {CurrentState === 'Login' ?
          <p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :
          <p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopUp;
