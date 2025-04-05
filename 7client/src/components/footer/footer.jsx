import React from 'react';
import styles from './footer.module.css';
import logoFb from '../../assets/facebook.png';
import logoRalph from '../../assets/Ralphs.png';

const Footer = () => {
  return (
    <>

    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#contacto">CONTACTO</a>
        <a href="/tyc">TÉRMINOS Y CONDICIONES</a>
        <a href="#privacidad">AVISO DE PRIVACIDAD</a>
        <a href="#faqs">FAQ'S</a>
      </div>
      <p className={styles.promotion}>
        *Promoción válida del 7 de abril al 9 de mayo de 2025. Válida solo para mayores de edad. Válida para residentes <br></br> de México. Consulta bases y reglas en <a href="www.7uppr.com">www.7uppr.com</a>.
      </p>
      <div className={styles.social}>
        <div className={styles.socialIcons}>
            <span>Síguenos</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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