import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"; // Importar estilos como módulo
import Logo from "../../assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(false);
  
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const redirect = (param) => {

    console.log("userData",userData);
    

    if(param == "/inicioSesion"){
      if(userData?.id){
        navigate("/miPerfil")
      }else{
        navigate("/inicioSesion")
      }

      return
    }
    navigate(param)
  };


  useEffect(() => {

       try {
          const storedData = localStorage.getItem("userData");
          const dateUser = storedData ? JSON.parse(storedData) : null;
          setUserData(dateUser);            
        } catch (error) {
          console.log("ERROR",error); 
      }
  
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img
          src={Logo}
          alt="7UP Logo"
        />
      </div>
      <div
        className={`${styles["navbar-links"]} ${
          isMenuOpen ? styles["menu-open"] : ""
        }`}
      >
        <Link to="/Tyc">Mecánica</Link>

        <a href="#premios">Premios</a>

        <a href="#ganadores">Ganadores</a>

        <button className={`${styles.btn} ${styles["btn-login"]}`} onClick={() => redirect("/inicioSesion")}>
           {userData?.id ? "perfil" : "Iniciar Sesión"} 
        </button>

        <button className={`${styles.btn} ${styles["btn-register"]}`} onClick={() => redirect("/Registro")}>
          Regístrate
        </button>
      </div>
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
};

export default Navbar;