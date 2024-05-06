import React from 'react';
import './TopBar.css'; // Archivo CSS para estilos específicos de la barra superior

function TopBar() {
  return (
    <div className="topbar">
      <div className="logo">Logo</div>
      <div className="menu">
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
      </div>
    </div>
  );
}

export default TopBar;
