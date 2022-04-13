import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey} from "./auxiliares";
import Tarjetas from "./Tarjetas";



const Buscador = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    busquedaUsuario: "",
  });

  const [peliculas, setPeliculas] = useState([]);

  const handleChange = (e) => {
    setSearchParams({ busquedaUsuario: e.target.value });
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es&query=${searchParams.get(
        "busquedaUsuario"
      )}`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [searchParams]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px",
        paddin: "20px",
      }}
    >
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label="Buscar película"
          variant="standard"
          onChange={handleChange}
          value={searchParams.get("busquedaUsuario")}
          sx={{
            width: {
              xs: "350px",
              sm: "450px",
              md: "600px",
            },
          }}
        />

        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {peliculas &&
            peliculas.map((pelicula) => {
              return (
                <Tarjetas
                  key={pelicula.id}
                  tituloTarjetas={pelicula.title}
                  imagenTarjetas={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
                  linkTarjetas={`/detalle-pelicula/${pelicula.id}`}
                />
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Buscador;