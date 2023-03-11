import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ element }) => {
  return (
    <Card sx={{ Width: 345, height: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={element.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
