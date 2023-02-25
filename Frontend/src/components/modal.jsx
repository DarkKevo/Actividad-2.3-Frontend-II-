import { FaPlus } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { dataContext } from '../context/context';

function Modal() {
  let data = JSON.parse(localStorage.getItem('Sesion'));
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('all');
  const [file, setFile] = useState('');

  const { CargarImagen } = useContext(dataContext);

  const ModalHandler = (e) => {
    e.preventDefault();
    console.log(descripcion, categoria, file);
    CargarImagen(descripcion, categoria, data.id, file, data.token);
    setFile('');
    setDescripcion('');
    setCategoria('all');
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type='button'
        className='btn bg-secondary rounded-5 m-5 p-3 position-fixed bottom-0 end-0 z-2'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        <FaPlus className='fs-2' />
      </button>

      {/* <!-- Modal --> */}
      <div className='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <form onSubmit={ModalHandler}>
          <div className='modal-dialog modal-fullscreen-sm-down'>
            <div className='modal-content bg-black'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Modal title
                </h1>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body d-flex flex-column'>
                {/* input file */}
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    type='file'
                    className='form-control'
                    id='inputGroupFile02'
                  />
                </div>
                {/* input text */}
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) => {
                      setDescripcion(e.target.value);
                    }}
                    value={descripcion}
                    className='form-control'
                    placeholder='Descripcion'
                    required
                  />
                </div>
                {/* select */}
                <div className='input-group mb-3'>
                  <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Seleccione una categoria
                  </button>

                  <ul className='dropdown-menu'>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Accion');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Accion
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Amor');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Amor
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Vintage');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Vintage
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Paisajes');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Paisajes
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Minimalista');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Minimalista
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('Dark');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Dark
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('ligth');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        Ligth
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setCategoria('all');
                        }}
                        className='dropdown-item'
                        href='#'
                      >
                        all
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='submit' className='btn bg-secondary'>
                  Guardar
                </button>
                <button type='button' className='btn bg-secondary' data-bs-dismiss='modal'>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
