import '../SearchBar/SearchBar.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const TextInputIcon = ({ type, name, placeholder, value, onChange, icon, onIconClick }) => {
  const [inputType, setInputType] = useState(type); // Nuevo estado para el tipo de input

  const handleIconClick = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
    onIconClick && onIconClick();
  };

  return (
    <div className='input-icon'>
      <input
        type={inputType} // Usa el estado inputType para determinar el tipo de input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon && <FontAwesomeIcon className='icon' icon={icon} onClick={handleIconClick} />}
    </div>
  );
};

TextInputIcon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  onIconClick: PropTypes.func
};

export default TextInputIcon;
