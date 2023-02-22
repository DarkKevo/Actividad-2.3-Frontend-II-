import Nav from "./Nav"
import Cards from "./cards"
import Modal from "./modal";
function Perfil(){
    return(
        <div className="Inicio">
            <Nav/>
            <Modal/>
            <Cards/>
        </div>
    );
}

export default Perfil;