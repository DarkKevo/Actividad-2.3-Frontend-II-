import { Route, Routes } from "react-router-dom";
import "./App.css";
import InicioSesion from "./components/InicioSesion";
import Registro from "./components/Registro";
import Perfil from "./components/Perfil";
import Inicio from "./components/Inicio";
import Favoritos from "./components/Favoritos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
}

export default App;
