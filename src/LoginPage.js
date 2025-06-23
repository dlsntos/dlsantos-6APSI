import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
       
      />
      <input
        type="password"
        placeholder="Password"
     
      />
      <button >Login</button>
    </div>
  );
}

export default LoginPage;
