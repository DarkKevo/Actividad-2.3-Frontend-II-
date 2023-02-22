import Nav from "./Nav";
import Cards from "./cards";
import Modal from "./modal";
import "../styles/Inicio.css";

function Inicio() {
  return (
    <div className="Inicio">
      <Nav />
      <Modal/>
      <Cards />
    </div>
  );
}

export default Inicio;
