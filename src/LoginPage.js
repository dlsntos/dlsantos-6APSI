import React, { useState } from 'react';
import './LoginPage.css';
function LoginPage() {
 
  return (
    <div>
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
    </div>
  );
}

export default LoginPage;
