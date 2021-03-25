import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchBeers} from "../../store/beerSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SearchBeer() {
  const classes = useStyles();

  const [query, setquery] = useState();

  const dispatch=useDispatch();

  const handleChange = (event) => {
    setquery(event.target.value);
  };

  const handleClick = () => {
    dispatch(fetchBeers(query));
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant="contained">
        Search beer
      </Button>
    </div>
  );
}
