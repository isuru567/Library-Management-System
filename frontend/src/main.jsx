import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import About from './pages/About.jsx'
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/About"  element={<About />}></Route>
      
      
    </Routes>

    
  </BrowserRouter>
)
