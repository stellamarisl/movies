import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  colorTipografiaPrimario,
} from "./auxiliares";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        textAlign: "center",
        bgcolor: colorPrimario,
        width: "100%",
        height: "100px",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{
          color: colorTipografiaPrimario,
          mt: 1,
        }}
      >
        Hecho por Stella
      </Typography>
    </Box>
  );
};

export default Footer;