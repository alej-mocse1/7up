import React from "react";
import styles from "./miperfil.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit3.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets/UpVouch.png"
import productosImg from "../../assets/productos.png";


//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";

//importamos las imagenes de corazones
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";



const MiPerfil = () => {


    return( 
        <div className={styles.Fondo}>
            <Navbar></Navbar>
               
            <div className={styles.container}>
                
       
                    <h1 className={styles.title}>
                        <img src={iniImg} alt="iniImg" className={styles.titleImg} />
                    </h1>
                
                
                 <p className={styles.p}> 
                    ¡Máximo 5 participaciones al día!                   
                 </p>

                <div className={styles.contentUserData}>
                    <div className={styles.datosUserDiv}>
                        <div className={styles.datosUser}>
                            <h1>USER</h1>
                            <p className={styles.p1}>last name</p>

                            <p className={styles.p2}>Eliminar cuenta</p>
                        </div>

                        <h1 className={styles.title2} style={{cursor:"pointer"}}>
                            <img src={botonLog } alt="iniImg" className={styles.titleImg2} />
                        </h1>
                    </div>

                    <div className={styles.datosVucherDiv}>
                      <div className={styles.datosImg}>
                        <h1>Llevas 3 voucher subidos</h1>
                        <p className={styles.p1}>¡Entre mas vouchers registres , más oportunidad tienes de ganar!</p>
                      </div>
                    </div>

                </div>


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


export default MiPerfil