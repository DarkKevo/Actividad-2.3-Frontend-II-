import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function Nav({ seccion }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-oscuro">
      <div className="container-fluid">
        <div className="container w-25">
          <Link to={"/"} className="navbar-brand">
            <img
              className="w-75"
              src="src\assets\logo_transparent.jpg"
              alt=""
            />
          </Link>
        </div>
        <div
          style={
            seccion == "InicioS" || seccion == "registro"
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/inicio"}
                  className="nav-link active m-4 fs-5"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Perfil"}
                  className="nav-link active m-4 fs-5"
                  href="#"
                >
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/favoritos"}
                  className="nav-link active m-4 fs-5"
                  href="#"
                >
                  Favoritos
                </Link>
              </li>
              <li className="nav-item dropdown m-4 fs-5">
                <button
                  className="btn btn-secondary dropdown-toggle nav-link p-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seleccione una categoria
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to={"/"}>
              <button className="botonCerrar">
                <img
                  style={{ width: "20%", borderRadius: "100%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div>
                  <h4>Cerrar sesión</h4>
                  <p>KevinAraujo</p>
                </div>
                <FaAngleRight className="icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
