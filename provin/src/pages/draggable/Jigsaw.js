import React, { useState, useRef } from "react";
import DraggablePiece from "./DraggablePiece";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import TransitionsSnackbar from "../dialogNotifications/notification";
const { List } = require('immutable')
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
    lettersContainer = List(lettersContainer)._tail.array
    setArrayWord(lettersContainer)
    console.log(lettersContainer)
    openDraggable ? setOpenDraggable(false) : setOpenDraggable(true);
  };
  const switchAction =(value)=>{
    childRef.current.handleClick(value)
  }
  const DragabbleComponent = ()=>{
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
        {openDraggable ? <DraggablePiece arrayWord={arrayWord} switchAnswer={switchAction}/> : null}
        {<div className={classes.root}><TransitionsSnackbar ref={childRef}/></div> }
        
      </>
    );
  }
  return (
    <>
    {DragabbleComponent()}
    </>
  )
}
