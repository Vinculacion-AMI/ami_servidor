import React, { useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import { Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import { useStyles } from "./style";

export default function Draw() {
 
    const [canvas, setBrush] = useState("#FCA5A5");
    const [brush, setThick] = useState(20);
    const lienzo = useState(null);
    const classes = useStyles();
    const clear = () => {
        lienzo.current.clear() 
    }

    // const style = {
    //     width: brush + "px",
    //     background: canvas,
    //     marginLeft: "50%"
    //   };
    //   console.log(style.width);
  return (
  <div >
     <Grid container 
        
     >
            <Grid  xs={12} sm={5}>
            <h2>Replica</h2>
        <Grid >
            <Card >
                
                    <CardMedia className={classes.collapseCard}
                    image="../../images/slide_2.jpg"
                    
                    />
                
            </Card>
        </Grid>
       
        </Grid>
        <Grid sm={1}>
        </Grid>
        <Grid  xs={12} sm={6}>
        <Grid style={{ position: 'relative', top: 20,  }}>
        
        <Grid container>
        <Grid sm={2} >
        <label>Colour picker</label>
        <br />
        <input
            style={{ background: { canvas } }}
            type="color"
            value={canvas}
            onChange={(event) => {
            console.log(event.target.value);
            setBrush(event.target.value);
            }}
        />
        <br />
        <label>Brush Thickness</label>
        
        <div className="thickness" ></div>
        <input
          min="2"
          max="50"
          type="range"
          onChange={(event) => {
            console.log(event.target.value);
            setThick(event.target.value);
          }}
        />
        </Grid>
        <Grid sm={2} >
        <Button onClick={clear}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"

        //style={{ borderRadius: 20 }}
      >
        Limpiar
      </Button>
        </Grid>

      </Grid>
            <Card style={{ width: 600, border: '2px solid #14181C' }}>
                <CanvasDraw
                ref={lienzo}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={450}
                    canvasWidth={'100%'}
                    hideGrid={false}
                
            />
            </Card>
            
       </Grid>
        </Grid>
       
     </Grid>
        
 </div>

  );
}

