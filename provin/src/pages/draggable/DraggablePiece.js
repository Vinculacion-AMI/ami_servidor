import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import useForceUpdate from "use-force-update";
import { Button } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
export default function DraggablePiece(props) {
  const [textContent, setTextContent] = useState(Array),
    [anothertext, setanotherText] = useState(Array),
    [stateArrayItems, setStateArrayItems] = useState(Array),
    [puzzleSolve, setPuzzleSolve] = useState(Array);
  const classes = useStyles();

  useEffect(() => {
    begingComponents();
  }, []);
  const forceUpdate = useForceUpdate();
  const shuffle = (array)=>{
    const mix = array.sort(() => Math.random() - 0.5);
    console.log(mix)
    return mix
  }
  const begingComponents = () => {
    setTextContent(shuffle(props.arrayWord));
    setanotherText(props.arrayWord)
    setStateArrayItems(new Array(props.arrayWord.length));
    setPuzzleSolve(new Array(props.arrayWord.length));
  };

  const setText = (item, state) => {
    console.log(item);
    console.log(textContent);
    let arrayUpdated = stateArrayItems;
    let i = textContent.indexOf(item);
    arrayUpdated[i] === undefined
      ? (arrayUpdated[i] = false)
      : (arrayUpdated[i] = undefined);
    if (state) {
      for (let index = 0; index < arrayUpdated.length; index++) {
        let arrayPuzzleSolve = puzzleSolve;
        if (arrayPuzzleSolve[index] === undefined) {
          arrayPuzzleSolve[index] = item;
          setPuzzleSolve(arrayPuzzleSolve);
          break;
        }
      }
    } else {
      let arrayPuzzleDisolve = puzzleSolve;
      for (let index = 0; index < arrayPuzzleDisolve.length; index++) {
        let arrayPuzzleDisolve = puzzleSolve;
        if (arrayPuzzleDisolve[index] === item) {
          arrayPuzzleDisolve[index] = undefined;
          setPuzzleSolve(arrayPuzzleDisolve);
          console.log(index);
          break;
        }
      }
      // setPuzzleSolve(arrayPuzzleDisolve)
    }
    //   const found = stateArrayItems.find(element=> {

    //     if(element === item){

    //       return true
    //     }else{
    //       return false
    //     }
    //   });
    //   if(found){
    //     let i = arrayUpdated.indexOf(item)
    //     arrayUpdated[i] = false
    //     setStateArrayItems(arrayUpdated)
    //     forceUpdate()
    //   }
    //   // arrayUpdated[item] = false
    //   console.log(arrayUpdated)
    //   // arrayUpdated[item]
    //   // console.log(arrayUpdated[item])
    setStateArrayItems(arrayUpdated);
    forceUpdate();
  };

  if (textContent && stateArrayItems) {
    let ikey = 0;
    return (
      <div>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {puzzleSolve.map((content) => {
                ikey += 1;
                return (
                  <Grid key={ikey} item>
                    <Zoom in={content!==undefined}>
                    <Card className={classes.rootEmptyCard}>
                      {content === undefined ? (
                        null
                      ) : (
                        <CardContent onClick={() => setText(content, false)}>
                          <Typography className={classes.title}>
                            {content === undefined
                              ? null
                              : Array.from(content)[0]}
                          </Typography>
                        </CardContent>
                      )}
                    </Card>
                    </Zoom>
                
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justify="center">
              {textContent.map((content) => {
                ikey += 1;
                let i = textContent.indexOf(content);
                return (
                  <Grid key={ikey} item>
                    <Zoom in={stateArrayItems[i] === undefined}>
                    <Card className={classes.rootCard}>
                      {stateArrayItems[i] !== undefined ? (
                        null
                      ) : (
                        
                          <CardContent onClick={() => setText(content, true)}>
                            <Typography className={classes.title}>
                              {stateArrayItems[i] !== undefined
                                ? null
                                : Array.from(content)[0]}
                            </Typography>
                          </CardContent>
                     
                      )}
                    </Card>
                    </Zoom>
                  </Grid>
                );
              })}
            </Grid>
            <Grid>
              <Button onClick={() => console.log(textContent, anothertext, props.arrayWord)}>
                comprobar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>Loading...</Typography>
      </div>
    );
  }
}
