import React, {  } from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import { Grid  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
function Draw() {

  return (
  <div >
     <Grid container 
        
     >
            <Grid style={{ textAlign: 'center', alignItems: 'center' }} xs={12} sm={5}>
            <h2>Replica</h2>
        <Grid style={{ margin: 5, marginTop: 65, position: 'relative', left : 30 }}>
            <Card >
                
                    <CardMedia style={{  height:450 }}
                    image="../../images/slide_2.jpg"
                    
                    />
                
            </Card>
        </Grid>
       
        </Grid>
        <Grid sm={1}>
        </Grid>
        <Grid  xs={12} sm={6}>
        <Grid style={{ position: 'relative', top: 50,  }}>
            <Card style={{ width: 400, border: '2px solid #14181C' }}>
                <CanvasDraw
                canvasHeight={550}
                canvasWidth={'100%'}
                hideGrid={true}
                
            />
            </Card>
            
       </Grid>
        </Grid>
       
     </Grid>
        
 </div>

  );
}

export default Draw;