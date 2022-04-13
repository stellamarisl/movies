import { Box } from "@mui/material";
import Carrousel from "./Carrousel";
import Listados from "./Listados";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
 
const Main = () => {
  return (
    <Box sx={{ marginTop: 5 }}>
    {<Carrousel />}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: 5,
        }}
      >
        <Listados tituloListado="Películas Populares" urlListado="popular" />
        <Listados
          tituloListado="Películas Mejor Puntuadas"
          urlListado="top_rated"
        />
      </Box>
      <Footer/>
    </Box>
  );
};

export default Main;