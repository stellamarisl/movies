import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  colorTipografiaPrimario,
} from "./auxiliares";

const ItemCarrousel = ({
  tituloSlider,
  imagenSlider,
  descripcionSlider,
  linkCarrousel,
}) => {
  return (
    <Box id="imgcarrousel"
      sx={{
        backgroundImage: `url(${imagenSlider})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "50% 30%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          bgcolor: "#3f3b3b",
          color: colorTipografiaPrimario,
          opacity: [0.9, 0.8, 0.7],
          borderRadius: "5px",
        }}
      >
        <Typography
          p={2}
          sx={{
            fontSize: {
              xs: "19px",
              sm: "21px",
              md: "23px",
              lg: "25px",
              xl: "27px",
            },
            fontWeight: "600",
          }}
        >
          {tituloSlider}
        </Typography>
        <Typography
          gutterBottom
          p={2}
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "20px",
            },
            fontFamily: "Roboto",
          }}
        >
          {descripcionSlider}
        </Typography>
        <Link to={linkCarrousel}>
          <IconButton style={{ color: colorTipografiaPrimario }}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default ItemCarrousel;