import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import { dataContext } from '../context/context';

function Nav({ seccion }) {
  const { LogOut, RenderCategoria_Autor, FavoritosMy, TraerImagenes, Perfil } = useContext(dataContext);
  const [SesionData, setData] = useState(JSON.parse(localStorage.getItem('Sesion')));
  const [categoria, setCategoria] = useState('');
  const [autor, setUsuario] = useState('');

  const filter = (e) => {
    setCategoria(e.target.value);
    RenderCategoria_Autor(e.target.value, autor);
  };

  const filter2 = (e) => {
    setUsuario(e.target.value);
    RenderCategoria_Autor(categoria, e.target.value);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-oscuro z-1'>
      <div className='container-fluid'>
        <div className='container w-25'>
          <Link to={'/'} className='navbar-brand'>
            <img className='w-75' src='src\assets\logo_transparent.jpg' alt='' />
          </Link>
        </div>
        <div style={seccion == 'InicioS' || seccion == 'registro' ? { display: 'none' } : { display: 'block' }}>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link onClick={TraerImagenes} to={'/inicio'} className='nav-link active m-4 fs-5' aria-current='page' href='#'>
                  Inicio
                </Link>
              </li>
              <li
                onClick={() => {
                  Perfil(SesionData.id);
                }}
                className='nav-link m-4 fs-5'
              >
                Perfil
              </li>
              <li
                onClick={() => {
                  FavoritosMy(SesionData.user);
                }}
                className='nav-link m-4 fs-5'
              >
                Favoritos
              </li>
              <li className='nav-item dropdown m-4 fs-5'>
                <div class='input-group'>
                  <select onChange={filter} class='form-select bg-secondary border border-dark' aria-label='Default select example'>
                    <option value='All' selected>
                      All
                    </option>
                    <option value='Accion'>Acción</option>
                    <option value='Amor'>Amor</option>
                    <option value='Paisajes'>Paisajes</option>
                    <option value='Minimalista'>Minimalista</option>
                    <option value='Dark'>Dark</option>
                    <option value='Light'>Light</option>
                  </select>
                  <input
                    onChange={filter2}
                    type='text'
                    class='form-control bg-secondary border border-dark'
                    aria-label='Text input with dropdown button'
                  />
                </div>
              </li>
            </ul>
            <button onClick={LogOut} className='botonCerrar'>
              <img
                style={{ width: '15%', borderRadius: '100%' }}
                src={localStorage.getItem('Sesion') === null ? '../assets/logo_transparent.jpg' : SesionData.icon}
                alt=''
              />
              <div>
                <h4>Cerrar sesión</h4>
                <p>
                  <strong>{localStorage.getItem('Sesion') === null ? 'null' : SesionData.user}</strong>
                </p>
              </div>
              <FaAngleRight className='icon' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
