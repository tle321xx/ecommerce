import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your Email' />
          <input type="passworf" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have Account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <p>By continuing, I agree to the trems of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup