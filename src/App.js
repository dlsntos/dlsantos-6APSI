import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage'; 
import LandingPage from './LandingPage';
function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
