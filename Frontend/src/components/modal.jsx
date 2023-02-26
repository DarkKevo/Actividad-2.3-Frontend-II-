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
    CargarImagen(descripcion, categoria, data.id, file, data.token, data.user);
    setFile('');
    setDescripcion('');
    setCategoria('All');
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
        <div className='modal-dialog modal-fullscreen-lg-down'>
          <div className='modal-content bg-black'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Agregar Imagen
              </h1>
            </div>
            <div className='modal-body d-flex flex-column'>
              <form onSubmit={ModalHandler}>
                {/* input file */}
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    type='file'
                    className='form-control'
                    id='inputGroupFile02'
                    required
                  />
                </div>
                {/* input text */}
                <div className='input-group mb-3'>
                  <input
                    maxlength='43'
                    onChange={(e) => {
                      setDescripcion(e.target.value.toLocaleLowerCase());
                    }}
                    value={descripcion}
                    className='form-control'
                    placeholder='Descripcion'
                    required
                  />
                </div>
                {/* select */}
                <div className='input-group mb-3'>
                  <select
                    onChange={(e) => {
                      setCategoria(e.target.value);
                    }}
                    class='form-select'
                    aria-label='Default select example'
                  >
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
                </div>
                <div className='input-group mb-3'>
                  <button type='submit' className='btn bg-secondary'>
                    Guardar Imagen
                  </button>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn bg-secondary' data-bs-dismiss='modal'>
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
