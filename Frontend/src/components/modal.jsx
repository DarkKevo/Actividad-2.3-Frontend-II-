import { FaPlus } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { dataContext } from '../context/context';

function Modal() {
  let data = JSON.parse(localStorage.getItem('Sesion'));
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('all');
  const [file, setFile] = useState('');

  const { CargarImagen } = useContext(dataContext);

  const ModalHandler = () => {
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
        class='btn bg-secondary rounded-5 m-5 p-3 position-absolute bottom-0 end-0'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        <FaPlus className='fs-2' />
      </button>

      {/* <!-- Modal --> */}
      <div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                Modal title
              </h1>
              <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body d-flex flex-column'>
              <div class='input-group mb-3'>
                {/* input file */}
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  type='file'
                  class='form-control'
                  id='inputGroupFile02'
                />
                {/* input text */}
                <input
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                  value={descripcion}
                  className='form-control'
                  placeholder='Descripcion'
                  required
                />
                {/* select */}
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
            <div class='modal-footer'>
              <button onClick={ModalHandler} type='button' class='btn bg-secondary'>
                Guardar
              </button>
              <button type='button' class='btn bg-secondary' data-bs-dismiss='modal'>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
