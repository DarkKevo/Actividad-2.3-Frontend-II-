import { Route, Routes } from "react-router-dom";
import "./App.css";
import InicioSesion from "./components/InicioSesion";
import Registro from "./components/Registro";
import Inicio from "./components/Inicio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;
