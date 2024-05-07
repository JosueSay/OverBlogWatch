import './TextInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const TextInputIcon = ({ type, placeholder, value, onChange, icon}) => {
  return (
    <div className='textinput'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-icon"
      />
      {icon && <FontAwesomeIcon className='icon' icon={icon} />}
    </div>
  );
};

export default TextInputIcon;
