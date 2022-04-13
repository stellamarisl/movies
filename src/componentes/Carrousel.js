import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
//import { baseUrl, apiKey } from "./auxiliares/";
import ItemCarrousel from "./ItemCarrousel";


const Carrousel = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=44afdc40a26fe041c14d3b79b8370ea3&language=es-AR&page=1")
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <Carousel animation="slide" duration="800" indicators="true">
      {peliculas.map((pelicula) => (
        <ItemCarrousel
          key={pelicula.id}
          tituloSlider={pelicula.title}
          imagenSlider={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}
        `}
          descripcionSlider={pelicula.overview}
          linkCarrousel={`/detalle-pelicula/${pelicula.id}`}
        />
      ))}
    </Carousel>
  );
};

export default Carrousel;




    