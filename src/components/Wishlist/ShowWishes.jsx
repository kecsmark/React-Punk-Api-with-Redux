import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { deleteWishlist } from '../../store/beerSlice';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MyModal from "./Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    margin: "1rem",
  },
  media: {
    height: 200,
  },
});

export default function ShowWishes(props) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteWishlist(props.data.id))
    }

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{
          height: "90%",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          onClick={handleOpen}
        >
          <img
            className={classes.media}
            src={
              props.data.image_url != null
                ? props.data.image_url
                : "https://themillsbrewing.com/assets/img/our-beers/DefaultBeer.png"
            }
            alt="beer"
            style={{ width: "20%", margin: "auto" }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
            <div
              style={{
                fontSize: "20px",
                marginTop: "5px",
              }}
            >
              <li>IBU:{props.data.ibu}</li>
              <li>First Brewed:{props.data.first_brewed}</li>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Delete
        </Button>
      </CardActions>
      <MyModal open={open} setOpen={setOpen} data={props.data} />
    </Card>
  );
}