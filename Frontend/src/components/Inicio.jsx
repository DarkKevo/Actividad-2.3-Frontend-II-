import Nav from './Nav';
import Cards from './cards';
import Modal from './modal';
import { NoSession } from './noSession';
import '../styles/Inicio.css';
import { useContext } from 'react';
import { dataContext } from '../context/context';
import { FaRegFileExcel } from 'react-icons/fa';

function Inicio() {
  const { imagenes, LogOut } = useContext(dataContext);

  window.onbeforeunload = function () {
    LogOut();
  };

  if (localStorage.getItem('Sesion') === null) {
    return <NoSession />;
  }

  if (imagenes.length === 0) {
    return (
      <div className='Inicio'>
        <Nav />
        <Modal />
        <div className='noImg'>
          <h2>No tienes Imagenes</h2>
          <FaRegFileExcel className='fs-1' />
        </div>
      </div>
    );
  }

  return (
    <div className='Inicio'>
      <Nav />
      <Modal />
      <div className='container d-flex flex-wrap justify-content-evenly p-4'>
        {imagenes.map((t) => (
          <Cards key={t.Id} imagen={t} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
