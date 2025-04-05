import React from "react";
import styles from "./input.module.css"
import iconoSes from "../../assets/ico_nombre.png";
const Input = ({type,placeholder,iconoIzq,iconoDer}) => {


    return( 
        <div className={styles.content}>    
             <div className={styles.contentInput}>
                 <input
                    type={type}
                    id={type}
                    name={type}
                    placeholder={placeholder}
                    className={styles.inputField}
                 />
               
 
                 <span className={styles.iconInput}>
                    <img src={iconoIzq} alt={iconoIzq} />
                </span>
         

                {
                    iconoDer && <span className={styles.iconInputDer}>
                                  <img src={iconoDer} alt={iconoDer} />
                                </span>
                }

            </div>          
        </div>
    )
}


export default Input