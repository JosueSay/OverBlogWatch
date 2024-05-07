import './TopBar.css';
import logo from '../../assets/icon_name_ow2.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = () => {
    console.log('Click botón');
  };

  const handleImageClick = () => {
    console.log('Click Logo');
  };

  const handleMenuOptionClick = (option) => {
    if (option === "Inicio") {
      handleImageClick();
    } else if (option === "Iniciar Sesión") {
      handleButtonClick();
    }
    // Cierra el menú desplegable después de hacer clic en una opción
    setMenuOpen(false);
  };

  return (
    <div className="topbar">
      <div className='c1'>
        <Image src={logo} alt='Logo de la página' onClick={handleImageClick}/>
      </div>

      <div className='c2'>
        <SearchBar />
      </div>

      <div className='c3'>
        <Button title='Iniciar Sesión' onClick={handleButtonClick} /> 
      </div>

      {/* Icono del menú desplegable */}
      <div className='menu-icon' onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => handleMenuOptionClick("Inicio")}>Inicio</li>
            <li onClick={() => handleMenuOptionClick("Iniciar Sesión")}>Iniciar Sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Topbar;
