import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        Width: 345,
        height: 350,
        backgroundColor: "#C7E069",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 180, backgroundColor: "#929BF0" }}
        image={element.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
        <Typography variant="body">${element.price}.</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${element.id}`} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained">
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
