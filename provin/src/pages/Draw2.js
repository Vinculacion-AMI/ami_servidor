import React, {  } from 'react';
import Card from '@material-ui/core/Card';
import { Grid  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';

function Draw2() {

  return (
  <div style={{ backgroundColor: '#5DADEF', height: 657 }}>
        <Grid container>
            <Grid sm={1}>
            </Grid>
            <Grid xs={12} sm={10}>
            <Grid style={{ margin: 10, marginTop: 20, textAlign: 'center', }}>
                <h2> Dibuja</h2>
                    <CanvasDraw
                    canvasHeight={550}
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