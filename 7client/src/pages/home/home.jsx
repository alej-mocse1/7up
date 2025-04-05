import React from "react";
import styles from "./home.module.css"; 
import titularImg from "../../assets/titular.png";
import paricipaImg from "../../assets/participa.png";
import baloonImg from "../../assets/balloons_izquierda.png";
import premiosImg from "../../assets/premios.png";
import porductosImg from "../../assets/productos.png";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
const Home = () => {
  return (
    <div className={styles.homeFondo}>
      <Navbar></Navbar>
      <div className={styles.homeBackground}>
        <img
          src={titularImg}
          className={styles.titularImg}
        />
      </div>
      <div className={styles.secondSection}>
        <img
          src={paricipaImg}
          className={styles.participaImg}
        />

        <img
          src={baloonImg}
          className={styles.baloonImg}
        />

        <img
          src={premiosImg}
          className={styles.premiosImg}
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