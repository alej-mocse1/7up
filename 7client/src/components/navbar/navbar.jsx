import React, { useState } from "react";
import styles from "./navbar.module.css"; // Importar estilos como módulo
import Logo from "../../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <a href="#mecanica">Mecánica</a>
        <a href="#premios">Premios</a>
        <a href="#ganadores">Ganadores</a>
        <button className={`${styles.btn} ${styles["btn-login"]}`}>
          Iniciar Sesión
        </button>
        <button className={`${styles.btn} ${styles["btn-register"]}`}>
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