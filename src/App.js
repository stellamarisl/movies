import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Main from "./componentes/Main";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
import Populares from "./componentes/Populares";
import Buscador from "./componentes/Buscador";
import DetallePelicula from "./componentes/DetallePelicula";
<script src="~bulma-carousel/dist/js/bulma-carousel.min.js"></script>

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/buscar" element={<Buscador />} />
        <Route path="/detalle-pelicula/:idPelicula" element={<DetallePelicula />}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;