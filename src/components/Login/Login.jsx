import './Login.css'
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextInput from '../TextInput/TextInput'
import TextInputIcon from '../TextInput/TextInputIcon'
import useForm from '../../hooks/useForm'
import Button from '../Button/Button'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const { formData, handleChange } = useForm({ username: '', password: '' });

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const clickButtonLogin = () => {
        const errors = {};
        if (formData.username !== 'usuario_correcto') {
            errors.username = 'Usuario incorrecto';
        }
        if (formData.password !== 'contrasena_correcta') {
            errors.password = 'Contraseña incorrecta';
        }
        setErrorMessages(errors);
    };

    const clickButtonRegister = () =>{
        console.log('Click on Button for Register')
    };
        
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
                
            </div>
        </div>
    );
};

export default Login;
