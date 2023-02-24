import "../styles/cards.css";
import {
  FaBookmark,
  FaHeart,
  FaFileSignature,
  FaRegTimesCircle,
} from "react-icons/fa";
function Cards() {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="src\assets\pexels-vladislav-murashko-5990737.jpg"
          className="card-img-top p-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Fototeta</h5>
        </div>
        <div className="card-body">
          <a href="#" className="card-link text-black">
            <FaBookmark />
          </a>
          <a href="#" className="card-link text-black">
            <FaHeart />
          </a>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FaFileSignature />
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-fullscreen-sm-down">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Editar Publicación
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="input-group mb-3">
                    {/* input file */}
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    {/* input text */}
                    <input
                      className="form-control"
                      placeholder="Descripcion"
                      required
                    />
                    {/* select */}
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
                        <a className="dropdown-item" href="#">
                          Accion
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Amor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Vintage
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Paisajes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Minimalista
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Dark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ligth
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          all
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FaRegTimesCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
