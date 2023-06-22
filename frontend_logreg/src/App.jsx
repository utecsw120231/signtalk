import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';


import LandingPage from './Components/auth/LandingPage'
import LoginPage from './Components/auth/LoginPage'
import RegisterPage from './Components/auth/RegisterPage'
import Video from './Components/meeting/Video'
import Home from './Components/meeting/Home'

function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/meeting" element={<Home />} />
          <Route path="/meeting/:url" element={<Video />} />
        </Routes>
      </BrowserRouter>

    </div>
    </div>
  );
}

export default App
