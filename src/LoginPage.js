import React, { useState } from 'react';
import './LoginPage.css';
function LoginPage() {
 
  return (
    <div className='login-page-wrapper'>
      <div className='login-container'>
        <h1>Welcome</h1>
        <form onSubmit=''>
          <label>Email</label>
          <input
            type="text"
            placeholder="Username"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
          />

          <a href="" className='forgot-password'>Forgot password</a>

          <button
            type='submit' 
            id="login-button"
          >
            Login
          </button>
        </form>

        <p>
          Dont have an account? <a href=''>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
