import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import TyC from './pages/tyc/tyc';
import Footer from './components/footer/footer';


function App() {

  return (
    <div style={{position:"relative"}}>
     {/* <Navbar></Navbar> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Tyc" element={<TyC/>} />
          {/*<Route path="/O" element={<O/>} />
          <Route path="/L" element={<L/>} />
          <Route path="/I" element={<I/>} />
          <Route path="/D" element={<D/>} /> */}
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
