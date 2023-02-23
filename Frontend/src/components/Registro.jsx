import Nav from './Nav';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';
import { useState, useContext } from 'react';
import { dataContext } from '../context/context';

function Registro() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState('https://cdn-icons-png.flaticon.com/512/1484/1484867.png');
  const { CreateUser } = useContext(dataContext);

  const formRegister = (e) => {
    e.preventDefault();
    CreateUser(user, password, icon);
    setUser('');
    setIcon('');
    setPassword('');
    window.location.href = '/';
  };

  return (
    <div className='Registro'>
      <Nav seccion={'registro'} />
      <div className='contenedor'>
        <h1>PHOTOTUP</h1>
        <p>La herramienta para subir tus fotos favoritas!</p>
        <img className='w-75 h-75' src='src\assets\pexels-vladislav-murashko-5990737.jpg' alt='' />
      </div>
      <div className='formulario'>
        <form onSubmit={formRegister} className='w-75 p-5 bg-black rounded-2'>
          <h1>Registrarse</h1>
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
          <div className='boton mb-3'>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type='password'
              className='form-control'
              id='password'
              aria-describedby='emailHelp'
              placeholder='password'
              required
            />
          </div>
          <div className=' boton mb-3'>
            <input
              value={icon}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Icon URL'
              required
            />
            <div className='form-text'>
              Ya tienes una cuenta?
              <Link to={'/'}>
                <strong> Inicia Sesión Aqui </strong>
              </Link>
            </div>
          </div>
          <button type='submit' className='btn bg-secondary'>
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
