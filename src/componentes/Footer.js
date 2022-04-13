import Box from "@mui/material/Box";
//import {
//  colorPrimario,
//  colorTipografiaPrimario,
//} from "./auxiliares";

//const Footer = () => {
//  return (
  //  <Box
    
    //  sx={{
      //  flexGrow: 1,
        //flexDirection: "column",
      //  textAlign: "center",
      //  bgcolor: colorPrimario,
      //  width: "100%",
      //  height: "80px",
      //  position: "absolute",
      //  bottom: 0,
     // }}
   // >
    //  <Typography
    //    variant="subtitle1"
    //    gutterBottom
    //    component="div"
    //    sx={{
    //      color: colorTipografiaPrimario,
     //     mt: 1,
     //   }}
      //>
    //    Hecho por Stella
    //  </Typography>
    //</Box>
  //);
//};
import React from "react";

const Footer = () => {
  return (
    <Box>
      
      <h5 style={{ color: "#2196f3",
                   textAlign: "center",
                   position: "absolute",
                   marginTop: "-50px" 
                   }}>
        Hecho por Stella
      </h5>
     
    </Box>
  );
};
export default Footer;