import React, { useState } from 'react';
import './LoginPage.css';
function LoginPage() {
 
  return (
    <div>
      <div className='login-container'>
        <form onSubmit=''>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button >Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
