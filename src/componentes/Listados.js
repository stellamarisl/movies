import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import ItemListadoPelicula from "./ItemListadoPeliculas";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  baseUrl,
  apiKey,
  colorTipografiaPrimario,
  tipografiaPrincipal,
} from "./auxiliares";


const Listados = ({ tituloListado, urlListado }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}${urlListado}?api_key=${apiKey}&language=es-AR&page=1`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [urlListado]);
  return (
    <Box>
      <Box
        sx={{
          bgcolor: colorPrimario,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          mt: 4,
        }}
      >
        <Typography
          sx={{
            bgcolor: colorPrimario,
            color: colorTipografiaPrimario,
            p: 3,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
            fontSize: {
              xs: "18px",
              sm: "22px",
            },
          }}
          variant="h5"
          component="div"
        >
          {tituloListado}
        </Typography>
      </Box>

      <Box
        sx={{
          height: "400px",
          overflowY: "scroll",
          borderBottom: `1px ${colorPrimario} solid`,
        }}
      >
        {peliculas.map((pelicula) => (
          <ItemListadoPelicula
            key={pelicula.id}
            tituloItem={pelicula.title}
            imagenItem={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            linkIcono={`/detalle-pelicula/${pelicula.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Listados;