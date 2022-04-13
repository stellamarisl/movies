import { Box } from "@mui/material";
import Tarjetas from "./Tarjetas";
import * as React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  colorTipografiaPrimario,
} from "./auxiliares";
import IconButton from "@mui/material/IconButton";


const PeliculasNuevasYPopulares = ({
  tituloSeccion,
  peliculas,
  clickBotonPagSiguiente,
  clickBotonPagAnterior,
  pagina,
}) => {
  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        color: colorTipografiaPrimario,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          fontWeight: "600",
        }}
      >
        {tituloSeccion}
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {peliculas.map((pelicula) => (
          <Tarjetas
            key={pelicula.id}
            tituloTarjetas={pelicula.title}
            imagenTarjetas={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            linkTarjetas={`/detalle-pelicula/${pelicula.id}`}
          />
        ))}
      </Box>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{ m: 2, bgcolor: colorPrimario }}
          onClick={clickBotonPagAnterior}
          disabled={pagina === 1}
        >
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>

        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ m: 2, fontFamily: "Roboto" }}
        >
          Pagina {pagina}
        </Typography>

        <IconButton
          sx={{ m: 2, bgcolor: colorPrimario }}
          onClick={clickBotonPagSiguiente}
        >
          <ArrowForwardIosOutlinedIcon
            sx={{ color: colorTipografiaPrimario }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PeliculasNuevasYPopulares;
