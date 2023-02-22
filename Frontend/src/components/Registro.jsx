import Nav from "./Nav";
import {Link} from "react-router-dom"
import "../styles/Registro.css"
function Registro() {
  return (
    <div className="Registro">
      <Nav seccion={"registro"} />
      <div className="contenedor">
        <h1>PHOTOTUP</h1>
        <p>La herramienta para subir tus fotos favoritas!</p>
        <img
          className="w-75 h-75"
          src="src\assets\pexels-vladislav-murashko-5990737.jpg"
          alt=""
        />
      </div>
      <div className="formulario">
        <form className="w-75 p-5 bg-black rounded-2">
          <h1>Registrarse</h1>
          <div className="boton mb-3">
            <input
              className="form-control"
              placeholder="Nombre de Usuario"
              required
            />
          </div>
          <div className="boton mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Correo Electronico"
              required
            />
          </div>
          <div className=" boton mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              required
            />
            <div className="form-text">
              Ya tienes una cuenta?
              <Link to={"/"}>
                <strong> Inicia Sesión Aqui </strong>
              </Link>

            </div>
          </div>
          <button type="submit" className="btn bg-secondary">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
