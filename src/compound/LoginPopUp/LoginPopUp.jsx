import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setshowlogin }) => {
  const [currentState, setCurrentState] = useState('Register');
  const [userType, setUserType] = useState('Patient');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };


  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password); 
  };


  const handleSubmit = (e) => {
        e.preventDefault();
  };

  return (
    <div className='Loginpopup'>
      <form className='loginpopup-con' onSubmit={handleSubmit}>
        <div className='loginpopup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => { setshowlogin(false) }} src={assets.cross_icon} alt="close" />
        </div>
        <div className='loginpopup-input'>
          {currentState === "Register" && (
            <>
              <input type='text' placeholder='Your Name' required />
              <input type='email' placeholder='Your Email' required />
              <input type='password' placeholder='Your Password' value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            </>
          )}
      
          <input type='password' placeholder='Confirmed Password' value={password} onChange={handlePasswordChange} required />
          {!passwordsMatch && <p className="error-message">Passwords do not match</p>} {/* Display error message if passwords don't match */}
        </div>
        <button>{currentState === 'Register' ? 'Create Account' : 'Login'}</button>
        <div className='loginpopuo-condtion'>
          <input type='checkbox' required />
          <p>By Continuing, I agree to the term of use & privacy policy</p>
        </div>
        {currentState === 'Login' ?
          <p>Create a new Account? <span onClick={() => setCurrentState("Register")}>Click Here</span></p> :
          <p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopUp;
