import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  colorPrimario,
  colorTipografiaPrimario,
} from "./auxiliares";
import MenuDesplegable from "./MenuDesplegable";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: colorPrimario }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Link to="/">
              <Box sx={{ width: 100, mr: 2 }}>
              </Box>
            </Link>

            <Typography
              sx={{
                fontFamily: "Roboto",
                color: colorTipografiaPrimario,
                fontWeight: "600",
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "30px",
                },
                marginTop: {
                  xs: 4,
                  sm: 4,
                  md: 3,
                },
              }}
            >
              Buscador de Películas
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inline",
              },
            }}
          >
            <Button color="inherit">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                  fontFamily: "Roboto",
                  fontSize: "20px",
                }}
              >
                Home
              </Link>
            </Button>

            <Button>
              <Link
                to="/ultimos-lanzamientos"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                  fontFamily: "Roboto",
                  fontSize: "20px",
                }}
              >
                Ultimos Lanzamientos
              </Link>
            </Button>

            <Button>
              <Link
                to="/populares"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                  fontFamily: "Roboto",
                  fontSize: "20px",
                }}
              >
                Populares
              </Link>
            </Button>

            
            <Button>
              <Link
                to="/buscar"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                  fontFamily: "Roboto",
                  fontSize: "20px",
                }}
              >
                Buscar
              </Link>
            </Button>
          </Box>

          <Box
            sx={{
              display: {
                xs: "inline",
                sm: "inline",
                md: "none"
              },
            }}
          >
            <MenuDesplegable />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;