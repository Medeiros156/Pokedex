import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function PokemonCard({ name, image, types, onClick }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card sx={{
      maxWidth: 250, maxHeight: 280, boxShadow: "0px 0px 20px #010101", borderRadius: '20px', backgroundColor: "#bababa",
      "@media (max-width: 600px)": {
        // maxWidth: "20%",
      },

    }}>
      <CardMedia component="img" height="220" image={image} alt="" sx={{
        backgroundSize: 'cover',
        "@media (max-width: 600px)": {
          height: "150px"
        },
      }} />
      <CardContent sx={{ py: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column"
          },
        }}>
          <Typography variant="h5" component="div">
            {capitalizeFirstLetter(name)}
          </Typography>
          <Typography variant="caption" component="div">
            {typeHandler()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
