import React, { useState } from "react";
import DraggablePiece from "./DraggablePiece";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
export default function JigSaw() {
  const [word, setWord] = useState(false),
    [openDraggable, setOpenDraggable] = useState(false);
  const classes = useStyles();
  const handleChangeWord = (event) => {
    setWord(event.target.value);
  };
  const handleChangeOpenDraggable = () => {
    openDraggable ? setOpenDraggable(false) : setOpenDraggable(true);
  };
  return (
    <>
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleChangeWord}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleChangeOpenDraggable}
          >
            Generar
          </Button>
        </form>
      </div>
      {openDraggable ? <DraggablePiece word={word} /> : null}
    </>
  );
}
