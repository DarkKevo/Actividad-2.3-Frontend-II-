import Nav from './Nav';
import Cards from './cards';
import Modal from './modal';
import { NoSession } from './noSession';
import '../styles/Inicio.css';

function Inicio() {
  if (localStorage.getItem('Sesion') === null) {
    return <NoSession />;
  }
  return (
    <div className='Inicio'>
      <Nav />
      <Modal />
      <Cards />
    </div>
  );
}

export default Inicio;
