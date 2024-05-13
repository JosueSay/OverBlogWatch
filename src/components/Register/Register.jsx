import './Register.css'
import { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../TextInput/TextInput'
import TextInputIcon from '../TextInput/TextInputIcon'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'
import useAPI from '../../hooks/useApiRegister'
import md5 from 'md5'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordC, setShowPasswordC] = useState(false)
  const [errorMessages, setErrorMessages] = useState({})
  const { formData, handleChange } = useForm({ username: '', email: '', password: '', confirmPassword: '' })
  const { fetchData, loading, error, data } = useAPI() // Obtén fetchData del hook useAPI

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordVisibilityC = () => {
    setShowPasswordC(!showPasswordC)
  }

  const handleSubmit = () => {
    // Validar campos vacíos y formato de email
    const errors = {}
    if (!formData.username.trim()) {
      errors.username = 'Por favor ingrese su nombre de usuario'
    }
    if (!formData.email.trim()) {
      errors.email = 'Por favor ingrese su email'
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Por favor ingrese un email válido'
    }
    if (!formData.password.trim()) {
      errors.password = 'Por favor ingrese su contraseña'
    } else if (!isValidPassword(formData.password)) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial'
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Por favor confirme su contraseña'
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden'
    }
    setErrorMessages(errors)

    // Si no hay errores, proceder con el envío del formulario
    if (Object.keys(errors).length === 0) {
      const url = 'http://127.0.0.1:3000/users'
      const method = 'POST'
      const encryptedPassword = md5(formData.password)
      const body = {
        nombre: formData.username,
        email: formData.email,
        password: encryptedPassword
      }
      fetchData(url, method, body)
    }
  }

  // Función para validar el formato de email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Función para validar la contraseña
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  return (
    <div className="login-center-container" >
      <div className='login-container'>
        <div className='login-title'>Registro</div>
        <div className='username-container'>
          <TextInput
            type='text'
            name='username'
            placeholder='Ingrese su username'
            value={formData.username}
            onChange={handleChange}
          />
          {errorMessages.username && <div className="error-message">{errorMessages.username}</div>}
        </div>

        <div className='username-container'>
          <TextInput
            type='email'
            name='email'
            placeholder='Ingrese su email'
            value={formData.email}
            onChange={handleChange}
          />
          {errorMessages.email && <div className="error-message">{errorMessages.email}</div>}
        </div>

        <div className='password-container'>
          <TextInputIcon
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Ingrese su contraseña'
            value={formData.password}
            onChange={handleChange}
            icon={showPassword ? faEyeSlash : faEye}
            onIconClick={handlePasswordVisibility}
          />
          {errorMessages.password && <div className="error-message">{errorMessages.password}</div>}
        </div>

        <div className='password-container'>
          <TextInputIcon
            type={showPasswordC ? 'text' : 'password'}
            name='confirmPassword'
            placeholder='Confirme su contraseña'
            value={formData.confirmPassword}
            onChange={handleChange}
            icon={showPasswordC ? faEyeSlash : faEye}
            onIconClick={handlePasswordVisibilityC}
          />
          {errorMessages.confirmPassword && <div className="error-message">{errorMessages.confirmPassword}</div>}
        </div>

        <div className='buttons-container'>
          <Button
            title='Registrarme'
            onClick={handleSubmit}
            disabled={loading} // Deshabilitar el botón mientras se está procesando la solicitud
          />
          {loading && <div className="loading-message">Registrando...</div>}
        </div>
        <div className='msg-container'>
          {error && <div className="error-message">Error al registrar: {error.message}</div>}
          {data && <div className="success-message">Usuario registrado correctamente</div>}
        </div>
      </div>
    </div>
  )
}

export default Register
