import './ButtonIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const ButtonIcon = ({ onClick, icon }) => {
  return (
  <button className='button_icon' onClick={onClick}>
      <FontAwesomeIcon className= 'icon' icon={icon} />
    </button>
  )
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
}

export default ButtonIcon
