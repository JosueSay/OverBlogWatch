import './Button.css'
import PropTypes from 'prop-types'

const Button = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Button
