import { Box } from "@mui/material";
import PeliculasNuevasYPopulares from "./PeliculasNuevasYPopulares";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "./auxiliares";

const Populares = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`${baseUrl}popular?api_key=${apiKey}&language=es-AR&page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [pagina]);

  const handleClickSiguiente = () => {
    setPagina(pagina + 1);
  };

  const handleClickAnterior = () => {
    setPagina(pagina - 1);
  };
  return (
    <Box sx={{ marginTop: 10 }}>
      <PeliculasNuevasYPopulares
        tituloSeccion="Películas Populares"
        peliculas={peliculas}
        clickBotonPagSiguiente={handleClickSiguiente}
        clickBotonPagAnterior={handleClickAnterior}
        pagina={pagina}
      />
    </Box>
  );
};

export default Populares;