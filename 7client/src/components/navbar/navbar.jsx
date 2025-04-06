import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"; // Importar estilos como módulo
import Logo from "../../assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const redirect = (param) => {
    navigate(param)
  };

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
          Iniciar Sesión
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