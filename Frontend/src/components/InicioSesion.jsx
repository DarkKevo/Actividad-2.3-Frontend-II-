import '../styles/InicioSesion.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { dataContext } from '../context/context';
import Nav from './Nav';
function InicioSesion() {
  const { hola, Login } = useContext(dataContext);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const formRegister = (e) => {
    e.preventDefault();
    Login(user, password);
    setUser('');
    setPassword('');
  };

  return (
    <div className='InicioSesion'>
      <Nav seccion={'InicioS'} />
      <div className='contenedor'>
        <h1 onClick={hola}>PHOTOTUP</h1>
        <p>La herramienta para subir tus fotos favoritas!</p>
        <img className='w-75 h-75' src='src\assets\pexels-vladislav-murashko-5990737.jpg' alt='' />
      </div>
      <div className='formulario'>
        <form onSubmit={formRegister} className='w-75 p-5 bg-black rounded-2'>
          <h1>Iniciar Sesión</h1>
          <div className='boton mb-3'>
            <input
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              className='form-control'
              placeholder='Nombre de Usuario'
              required
            />
          </div>
          <div className=' boton mb-3'>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Contraseña'
              required
            />
            <div id='emailHelp' className='form-text'>
              Aun no tienes una cuenta?
              <Link to={'/registro'}>
                <strong> Registrate Aqui </strong>
              </Link>
            </div>
          </div>
          <button type='submit' className='btn bg-secondary'>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
