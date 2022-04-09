import { Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  colorPrimario,
  colorSecundario,
  tipografiaPrincipal,
} from "./auxiliares";
import { IconButton } from "@mui/material";


const ItemListadoPelicula = ({ tituloItem, imagenItem, linkIcono }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "80%",
          sm: "80%",
          md: "100%",
        },
      }}
    >
      <List
        sx={{
          bgcolor: colorSecundario,
          width: {
            xs: "320px",
            sm: "400px",
            md: "450px",
          },
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="poster pelicula" src={imagenItem} />
          </ListItemAvatar>
          <ListItemText
            primary={tituloItem}
            sx={{ fontFamily: tipografiaPrincipal }}
          />
          <Link to={linkIcono}>
            <IconButton style={{ color: colorPrimario }}>
              <RemoveRedEyeIcon />
            </IconButton>
          </Link>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Box>
  );
};

export default ItemListadoPelicula;