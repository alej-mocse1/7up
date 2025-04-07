import React,{useState} from "react";
import styles from "./input.module.css"
import iconoSes from "../../assets/ico_nombre.png";
const Input = ({type,placeholder,iconoIzq,iconoDer,handleChange,borderErr,msjErr}) => {

    return( 
        <div className={styles.content}>    
             <div className={styles.contentInput}>
                 <input
                    type={ type}
                    id={type}
                    name={type}
                    placeholder={placeholder}
                    className={styles.inputField}
                    onChange={handleChange}
                    style={{border: borderErr ? "2px solid red" : "1px solid white" }}
                 />
               
 
                 <span className={styles.iconInput}>
                    <img src={iconoIzq} alt={iconoIzq} />
                </span>
         

                {
                    iconoDer && <span className={styles.iconInputDer} style={{border:"1px solid black"}}>
                                  <img src={iconoDer} alt={iconoDer}/>
                                </span>
                }

                {borderErr && <p className={styles.Perr}>{msjErr}</p>}

            </div>          
        </div>
    )
}


export default Input