
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import TyC from './pages/tyc/tyc';
import InicioSesion from './pages/inicioSesion/inicioSesion';
import Registro from './pages/registro/registro';
import MiPerfil from './pages/miPerfil/miperfil';
import SubirVoucher from './pages/subirVoucher/subirVoucher';
import CorreoOk from './pages/correoOk/correo';


function App() {

  return (
    <div style={{position:"relative"}}>
     {/* <Navbar></Navbar> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Tyc" element={<TyC/>} />
          <Route path="/inicioSesion" element={<InicioSesion/>} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/miPerfil" element={<MiPerfil/>} />
          <Route path="/SubirVoucher" element={<SubirVoucher/>} /> 
          <Route path="/validate" element={<CorreoOk/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
