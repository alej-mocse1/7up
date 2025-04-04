import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div style={{position:"relative"}}>
     <Navbar></Navbar>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/S" element={<S/>} />
          <Route path="/O" element={<O/>} />
          <Route path="/L" element={<L/>} />
          <Route path="/I" element={<I/>} />
          <Route path="/D" element={<D/>} /> */}
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
