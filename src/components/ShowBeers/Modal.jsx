import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    margin: "0 auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    textAlign: "center",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h3>{props.data.name}</h3>
          <h4>Brewers Tips</h4>
          <p>{props.data.brewers_tips}</p>
          <img
            src={
              props.data.image_url != null
                ? props.data.image_url
                : "https://themillsbrewing.com/assets/img/our-beers/DefaultBeer.png"
            }
            alt=""
            style={{ width: "150px", margin: "auto", height: "450px" }}
          />
        </div>
      </Modal>
    </div>
  );
}
