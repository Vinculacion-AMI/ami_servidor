import React, { useState } from 'react';

import {  Grid  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';

function Draw2() {
    const [canvas, setBrush] = useState("#FCA5A5");
    const [brush, setThick] = useState(20);
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
            
            
            <Grid style={{ margin: 10,  textAlign: 'center', }}>
            <Grid>
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
                <h2> Dibuja</h2>
                    <CanvasDraw
                    
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