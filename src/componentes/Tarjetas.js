import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  colorPrimario,
  colorSecundario,
  tipografiaPrincipal,
} from "./auxiliares";

const Tarjeta = ({ tituloTarjeta, imagenTarjeta, linkTarjeta }) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 370,
        m: 2,
        display: "flex",
        flexDirection: "column",
        background: colorSecundario,
        color: colorPrimario,
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imagenTarjeta}
        alt="afiche pelicula"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            width: 200,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            textAlign: "center",
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
          }}
        >
          {tituloTarjeta}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={linkTarjeta}>
          <IconButton style={{ color: colorPrimario }}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Tarjeta;