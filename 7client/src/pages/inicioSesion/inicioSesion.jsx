import React,{useState} from "react";
import styles from "./inicioSesion.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/titSes.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets/boton.png"
import productosImg from "../../assets/productos.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";

//importamos las imagenes de corazones
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";



const InicioSesion = () => {

    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");

    const [formData, setFormData] = useState({
        Correo: "",
        Contraseña: ""
    });

    const handleCorreo = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Correo": value
        }));

      };

    const handleContraseña = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Contraseña": value
        }));


      };


    ///funcion para enviar la info al servidor
    const handleSubmit = async (e) => {
                e.preventDefault();
                if(Loading)return
                setLoading(true)
        
                let json = {
                    pass: formData.Contraseña,
                    email: formData.Correo,
                  }
              
                try {
                  const response = await fetch("https://7up-production.up.railway.app/user/getUserByEmail", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(json),
                  });
              
                  if (!response.ok) {
                    throw new Error("Error al enviar los datos");
                  }
              
                  const data = await response.json();

                  setLoading(false)
                  console.log("data GET INFO USER",data);
                  localStorage.setItem("userData", JSON.stringify(data.data));

                  navigate("/miPerfil")
            
              
                } catch (error) {
                  console.error("Error en el registro:", error);
                  setLoading(false)
                  Swal.fire(
                    "¡UPPPSS!",
                    "El Email o Contraseña que enviaste no está registrado o lo escribiste mal. <br> Por favor, intenta con otro número",
                    "error"
                  );
                }
                
    };
  
          
    ///Funcion para aplicar las validaciones
    const isFormValid = () => {    
        const {
            Correo,
            Contraseña
        } = formData;
      
        // Validar campos obligatorios y checkboxes obligatorios
        const camposCompletos = Correo  && Contraseña 
      
      
        return camposCompletos 
    };

    ///Funcion para aplicar las validaciones
    const postResetPas = async() => {    

          try {
            let json = {
              email: formData.Correo,
            }
    
            const response = await fetch(" ", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            });
        
            if (!response.ok) {
              throw new Error("Error al enviar los datos");
            }
        
          } catch (error) {
            console.error("Error en el registro:", error);
            setLoading(false)
            Swal.fire(
              "¡UPPPSS! 😓",
              "Algo salió mal al intentar recuperar tu contraseña. Por favor, intentá nuevamente más tarde.",
              "error"
            );
          }
    
    
        };

        ///Funcion para aplicar las validaciones
    const recuperarPass = () => {    
        
      Swal.fire({
        title: '¿Olvidaste tu contraseña?',
        html: '¿Querés que te enviemos un email para recuperarla?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviarlo',
        cancelButtonText: 'No, cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí podrías llamar a tu función para generar el token y enviar el correo
          Swal.fire({
            title: '¡Listo!',
            text: 'Te enviamos un mensaje a tu correo con instrucciones para recuperar tu contraseña.',
            icon: 'success'
          });

          postResetPas()
        } else {
          Swal.fire({
            title: 'Cancelado',
            text: 'No se envió ningún correo.',
            icon: 'info'
          });
        }
      });


      };



    return( 
        <div className={styles.Fondo}>
            <Navbar></Navbar>
               
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <img src={iniImg} alt="iniImg" className={styles.titleImg} />
                </h1>

                <form className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <Input
                          placeholder="Correo electrónico"
                          type="email"
                          iconoIzq={iconoSes}
                          handleChange={handleCorreo}
                        //   borderErr={touchCorreo && formData.Correo == ""}
                        //   msjErr={"El correo es obligatorio."}
                        />

                        <Input
                          placeholder="Contraseña"
                          type="password"
                          iconoIzq={inconoPass}
                          iconoDer={inconoPassDer}
                          handleChange={handleContraseña}
                        //   borderErr={touchconfirmarContraseña && formData.confirmarContraseña !== formData.Contraseña}
                        //   msjErr={ "Las contraseñas no coinciden."}
                        />
                    </div>
                     
                     <a
                      // href=""
                      className={styles.a}
                      onClick={recuperarPass}
                      style={{cursor:"pointer"}}

                      >Olvidé mi contraseña</a>

                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img 
                          src={botonLog} 
                          alt="iniImg" 
                          className={styles.titleImg2} 
                    
                          onClick={isFormValid() ? handleSubmit : null}
                          style={{
                            filter: isFormValid() ? "none" : "grayscale(100%)",
                            opacity: isFormValid() ? 1 : 0.5,
                            pointerEvents: isFormValid() ? "auto" : "none",
                            cursor: isFormValid() ? "pointer" : "not-allowed",
                          }}
                          />
                    </h1>

                    <p 
                      className={styles.p}> 
                       Si no tienes un cuenta, 
                        <Link
                            to="/Registro"
                            className={styles.a}
                            onClick={recuperarPass}
                            >regístrate aquí</Link>
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


export default InicioSesion