import './TextInput.css';
import PropTypes from 'prop-types';

const TextInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className='textinput'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default TextInput;
