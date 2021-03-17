import React, { useState } from 'react';

import {  Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';

function Draw2() {
    const [canvas, setBrush] = useState("#FCA5A5");
    const [brush, setThick] = useState(20);
    const lienzo = useState(null);

    const clear = () => {
        lienzo.current.clear() 
    }

    const style = {
        width: brush + "px",
        background: canvas,
        marginLeft: "50%"
      };
      console.log(style.width);
  return (
  <div style={{ backgroundColor: '#5DADEF', height: 657 }}>
        <Grid container>
            <Grid sm={1}>
            
            </Grid>
            <Grid xs={12} sm={10}>
   
            <Grid style={{ margin: 8  }}>
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
              
              <div className="thickness" style={style}></div>
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
                <h2> Dibuja</h2>
                    <CanvasDraw
                    ref={lienzo}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={450}
                    canvasWidth={'100%'}
                    hideGrid={false}
                    style={{ border: '2px solid #14181C' }}
                  
                />
             
            
             </Grid>
            </Grid>
            <Grid sm={1}>
            </Grid>
        </Grid>
        
 </div>

  );
}

export default Draw2;