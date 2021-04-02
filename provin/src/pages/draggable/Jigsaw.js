import React, { useState, useRef } from "react";
import DraggablePiece from "./DraggablePiece";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import TransitionsSnackbar from "../dialogNotifications/notification";
export default function JigSaw() {
  const [word, setWord] = useState(false),
    [openDraggable, setOpenDraggable] = useState(false),
    [arrayWord, setArrayWord] = useState([]);
  const classes = useStyles();
  const handleChangeWord = (event) => {
    setWord(event.target.value);
  };
  const childRef = useRef();
  const handleChangeOpenDraggable = () => {
    let i = 0
    let lettersContainer = [];
    Array.from(word).forEach(element => {
      lettersContainer.push(element+i)
      i+=1
      
    });
    setArrayWord(lettersContainer)
    openDraggable ? setOpenDraggable(false) : setOpenDraggable(true);
  };
  return (
    <>
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Palabra"
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
      {openDraggable ? <DraggablePiece arrayWord={arrayWord} /> : null}
      {<div className={classes.root}><TransitionsSnackbar ref={childRef}/></div> }
      <Button onClick={()=>{childRef.current.handleClick('success')}}>Press Me</Button>
    </>
  );
}
