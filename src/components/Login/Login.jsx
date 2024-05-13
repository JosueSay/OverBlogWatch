import './Login.css'
import { useState, useEffect } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../TextInput/TextInput'
import TextInputIcon from '../TextInput/TextInputIcon'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'
import useAPI from '../../hooks/useApiLogin'
import md5 from 'md5'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessages, setErrorMessages] = useState({})
  const { formData, handleChange } = useForm({ username: '', password: '' })
  const { data, loading, error, fetchData } = useAPI()
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const clickButtonLogin = async () => {
    // Limpiar mensajes de error
    setErrorMessages({})

    // Verificar si los campos están vacíos
    if (!formData.username.trim() || !formData.password.trim()) {
      setErrorMessages({ username: 'Completa ambos campos.' })
      return
    }

    const url = 'http://127.0.0.1:3000/login'
    const method = 'POST'
    const encryptedPassword = md5(formData.password)
    const body = {
      username: formData.username,
      password: encryptedPassword
    }
    fetchData(url, method, body)
  }

  const clickButtonRegister = () => {
    console.log('Click on Button for Register')
  }

  // Efecto secundario para limpiar los mensajes de error cuando se inicia sesión correctamente
  useEffect(() => {
    if (data) {
      setErrorMessages({})
    }
  }, [data])
  return (
        <div className='login-center-container'>
            <div className='login-container'>
                <div className='login-title'>Iniciar Sesión</div>
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

                <div className='password-container'>
                    <TextInputIcon
                        type='password'
                        name='password'
                        placeholder='Ingrese su contraseña'
                        value={formData.password}
                        onChange={handleChange}
                        icon={showPassword ? faEyeSlash : faEye}
                        onIconClick={handlePasswordVisibility}
                    />
                    {errorMessages.password && <div className="error-message">{errorMessages.password}</div>}
                </div>

                <div className='buttons-container'>
                    <Button
                        title='Iniciar Sesión'
                        onClick={clickButtonLogin}
                    />
                    <Button
                        title='Registrarme'
                        onClick={clickButtonRegister}
                    />
                </div>
                {/* Mostrar mensaje de error general solo cuando hay un error y el usuario no está logueado */}
                {error && !data && <div className="error-message">Usuario o contraseña incorrecta</div>}
                {/* Mostrar mensaje de éxito o error al registrar */}
            <div className='msg-container'>
              {data && <div className="success-message">Usuario logueado exitosamente</div>}
            </div>
            </div>
        </div>
  )
}

export default Login
