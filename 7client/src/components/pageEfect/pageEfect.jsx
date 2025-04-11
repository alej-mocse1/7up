import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageEntrance.css";

const PageEntrance = ({ children }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1); // Duración de la animación total

    return () => clearTimeout(timer);
  }, [location.pathname]); // Se ejecuta en cada cambio de ruta

  return (
    <div className="page-container">
      {isAnimating && (
        <>
          <div className="curtain left"></div>
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
