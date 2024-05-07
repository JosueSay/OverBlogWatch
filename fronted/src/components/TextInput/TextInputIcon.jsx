import './TextInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const TextInputIcon = ({ type, placeholder, value, onChange, icon }) => {
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
  )
}

TextInputIcon.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
}

export default TextInputIcon
