import React from 'react';
import styles from './footer.module.css';
import logoFb from '../../assets/facebook.png';
import logoRalph from '../../assets/Ralphs.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

    <footer className={styles.footer}>
      <div className={styles.links}>
         {/* <a href="#contacto">CONTACTO</a> */}
         <Link to="/tyc">TÉRMINOS Y CONDICIONES</Link>
         <Link to="/Priv">AVISO DE PRIVACIDAD</Link>
         {/*<a href="#faqs">FAQ'S</a> */}
         {/* <a href="#faqs">new</a> */}
      </div>
      <p className={styles.promotion}>
      *Promoción válida del 7 de abril al 19 de mayo de 2025. Nada que comprar para participar.
      <br />
       Válida para residentes de Puerto Rico. Consulta las reglas en 7uppr.com
      </p>
      <div className={styles.social}>
        <div className={styles.socialIcons}>
            <span>Síguenos</span>
            <a href="https://www.facebook.com/7UPPR" target="_blank" rel="noopener noreferrer">
            <img src={logoFb} alt="Facebook" />
            </a>
        </div>

        <img  className={styles.logoIMG} src={logoRalph} alt="Ralph's Logo" />

      </div>

    </footer>
    </>
  );
};

export default Footer;