import React from "react";
import styles from "./subirVoucher.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/titSes.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets/boton.png"
import productosImg from "../../assets/productos.png";


//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";

//importamos las imagenes de corazones
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";



const SubirVoucher = () => {


    return( 
        <div className={styles.Fondo}>
            <Navbar></Navbar>
               
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <img src={iniImg} alt="iniImg" className={styles.titleImg} />
                </h1>

                <form className={styles.loginForm}>
                 


                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img src={botonLog} alt="iniImg" className={styles.titleImg} />
                    </h1>

                    <p 
                      className={styles.p}> 
                        Si no tienes un cuenta registrate
                        <a 
                            href=""
                            className={styles.a}
                            >Aqui</a>
                   </p>
                </form>


                <div >
                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img
                            src={productosImg}
                            className={styles.productosImg}
                            />                 
                    </h1>
                </div>
            </div>
            <div className={styles.containerFooter}>
                <Footer></Footer>     
            </div>  
             
             
             <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
             <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
             <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
      </div>
    )
}


export default SubirVoucher