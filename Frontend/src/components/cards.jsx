import "../styles/cards.css";
import {
  FaBookmark,
  FaHeart,
  FaFileSignature,
  FaRegTimesCircle,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { dataContext } from "../context/context";

function Cards({ imagen }) {
  let data = JSON.parse(localStorage.getItem("Sesion"));
  const { EliminarImagen, EditImage, Favorite } = useContext(dataContext);
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("all");
  const [file, setFile] = useState("");

  const ModalHandler = (e) => {
    e.preventDefault();
    console.log(descripcion, categoria, file);
    EditImage(descripcion, categoria, imagen.Id, file, data.token);
    setFile("");
    setDescripcion("");
    setCategoria("all");
  };

  if (imagen.IdUser == data.id) {
    return (
      <>
        <div className="card m-2">
          <img
            src={`/src/Images/${imagen.img_route}`}
            style={{objectFit:'cover'}}
            className="card-img-top p-3 h-75"
            alt="..."
          />
          <div className="card-body p-0 ms-3">
            <h5 className="card-title m-0">{imagen.description}</h5>
            <div className="d-flex align-items-center">
              <a href="#" className="card-link text-black">
                <FaHeart
                  onClick={() => {
                    Favorite(imagen.Id, data.user, data.token);
                  }}
                />
              </a>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class="btn bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#modal2"
              >
                <FaFileSignature />
              </button>

              <FaRegTimesCircle
                onClick={() => {
                  EliminarImagen(imagen.Id, data.token);
                }}
              />
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="modal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen-lg-down">
            <div class="modal-content bg-black">
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
              <div class="modal-body d-flex flex-column">
                <form onSubmit={ModalHandler}>
                  <div class="input-group mb-3">
                    {/* input file */}
                    <input
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                      required
                    />
                  </div>
                  <div class="input-group mb-3">
                    {/* input text */}
                    <input
                      maxLength={43}
                      onChange={(e) => {
                        setDescripcion(e.target.value.toLowerCase());
                      }}
                      value={descripcion}
                      className="form-control"
                      placeholder="Descripcion"
                      required
                    />
                  </div>
                  <div class="input-group mb-3">
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
                        <a
                          onClick={() => {
                            setCategoria("Accion");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Accion
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("Amor");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Amor
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("Vintage");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Vintage
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("Paisajes");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Paisajes
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("Minimalista");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Minimalista
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("Dark");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Dark
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("ligth");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Ligth
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setCategoria("all");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          all
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn bg-secondary">
                  Guardar
                </button>
                <button
                  type="button"
                  class="btn bg-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="card m-2">
      <img
        src={`/src/Images/${imagen.img_route}`}
        style={{objectFit:'cover'}}
        className="card-img-top p-3 h-75"
        alt="..."
      />
      <div className="card-body p-2 ms-3">
        <h5 className="card-title m-0">{imagen.description}</h5>
        <div className="d-flex align-items-center">
          <a href="#" className="card-link text-black">
            <FaHeart
              onClick={() => {
                Favorite(imagen.Id, data.user);
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
