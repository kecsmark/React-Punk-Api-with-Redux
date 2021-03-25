import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function BeerNavbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{
            margin: "5px",
            padding: "5px",
          }}
        >
          <Typography variant="h6" color="inherit">
            Find your beer
          </Typography>
          <Link to="/">
            {" "}
            <Button
              style={{
                margin: "5px",
              }}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Home
            </Button>
          </Link>

          <Link to="/Search">
            {" "}
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{
                margin: "5px",
              }}
            >
              Beer finder
            </Button>
          </Link>

          <Link to="/Wishlist">
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{
                margin: "5px",
              }}
            >
              Wish List
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
