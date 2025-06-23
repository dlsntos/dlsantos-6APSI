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
          <button
            type='submit' 
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
