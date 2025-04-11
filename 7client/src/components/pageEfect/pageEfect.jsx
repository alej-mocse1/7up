import React, { useEffect, useState } from "react";
import "./PageEntrance.css"; // Agrega los estilos aquí

const PageEntrance = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Duración de la animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      {isAnimating && (
        <>
          <div className="curtain left"></div>
            {/* <div className="imgCentral">
              <h1>soy la imagen</h1>
            </div> */}
          <div className="curtain right"></div>
        </>
      )}
      <div className={`page-content ${isAnimating ? "hidden" : "visible"}`}>
        {children}
      </div>
    </div>
  );
};

export default PageEntrance;
