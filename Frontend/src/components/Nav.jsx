import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import { dataContext } from '../context/context';

function Nav({ seccion }) {
  const { LogOut } = useContext(dataContext);
  const [SesionData, setData] = useState(JSON.parse(localStorage.getItem('Sesion')));

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
                <Link to={'/inicio'} className='nav-link active m-4 fs-5' aria-current='page' href='#'>
                  Inicio
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/Perfil'} className='nav-link active m-4 fs-5' href='#'>
                  Perfil
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/favoritos'} className='nav-link active m-4 fs-5' href='#'>
                  Favoritos
                </Link>
              </li>
              <li className='nav-item dropdown m-4 fs-5'>
              <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seleccione una categoria
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Accion
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Amor
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Vintage
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Paisajes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Minimalista
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Dark
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Ligth
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      all
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button onClick={LogOut} className='botonCerrar'>
              <img
                style={{ width: '20%', borderRadius: '100%' }}
                src={localStorage.getItem('Sesion') === null ? '../assets/logo_transparent.jpg' : SesionData.icon}
                alt=''
              />
              <div>
                <h4>Cerrar sesión</h4>
                <p>{localStorage.getItem('Sesion') === null ? 'null' : SesionData.user}</p>
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
