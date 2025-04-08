import React,{useEffect} from "react";
import styles from "./home.module.css"; 
import titularImg from "../../assets/titular.png";
import paricipaImg from "../../assets/participa.png";
import baloonImg from "../../assets/balloons_izquierda.png";
import premiosImg from "../../assets/premios.png";
import porductosImg from "../../assets/productos.png";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
const Home = () => {


  useEffect(() => {
    const sectionId = localStorage.getItem('scrollTo');
    if (sectionId) {
      const scrollTo = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollTo'); // Limpiamos después de hacer scroll
      };

      // Esperamos un poco para asegurar que el DOM ya está montado
      setTimeout(scrollTo, 300);
    }
  }, []);

  return (
    <div className={styles.homeFondo}>
      <Navbar></Navbar>
      <div className={styles.homeBackground}>
        <img
          src={titularImg}
          className={styles.titularImg}
        />
      </div>


      <div  id="mec" style={{position:"relative",top:"-330px"}}></div>
      <div className={styles.secondSection} id="mec">
        <img
          src={paricipaImg}
          className={styles.participaImg}
        />

        <img
          src={baloonImg}
          className={styles.baloonImg}
        />

        <div  id="premios"  style={{position:"relative",top:"-100px"}}></div>

        <img
          src={premiosImg}
          className={styles.premiosImg}
          id="premios"
        />


      <img
          src={porductosImg}
          className={styles.porductosImg}
        /> 
      </div>

      <div className={styles.containerFooter}>
        <Footer></Footer>     
      </div> 
    </div>
  );
}

export default Home;