import React, { useState } from 'react';
import {  Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import { useHistory} from "react-router-dom";
import AppNavBar from '../../components/navbar'


function Draw3() {

    const [canvas,] = useState("#4FA1F3 ");
    const [brush, ] = useState(6);
    const lienzo = useState(null);
    const lienzo1 = useState(null);

    let history = useHistory();
   
    const draw4  = () => {
      history.push("/draw4")
    }
    
    const draw2  = () => {
      history.push("/draw2")
    }
  
    const clear = () => {
        lienzo.current.clear() 
        lienzo1.current.clear()
    }

    const style = {
        width: brush + "px",
        background: canvas,
        marginLeft: "50%"
      };
      console.log(style.width);
  return (
  <div style={{ backgroundColor: '#5DADEF', height: 850 }}>
      <AppNavBar/> 

        <Grid container>
            <Grid sm={1}>
            
            </Grid>
            <Grid xs={12} sm={10}>
   
            <Grid style={{ margin: 8  }}>
            <Grid container>
            
              <Grid sm={2} >
              <Button onClick={clear}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Limpiar
            </Button>
              </Grid>
              <br />
              <Grid sm={6}>
              </Grid>
              <br />
              <Grid sm={2}>
                <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={draw2}
                style={{ borderRadius: 20, width: 120}}
              >
                Regresar
              </Button>
              </Grid>
              <Grid sm={2}>
                <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={draw4}
                style={{ borderRadius: 20, width: 120}}
               
              > 
                Siguiente
               
              </Button>
              </Grid>
            </Grid>
              <Grid style={{ textAlign: 'center', }} >
                <h2> Realiza las curvas</h2>
              </Grid>  
              <center>              
                    <CanvasDraw
                    
                    ref={lienzo1}
                    lazyRadius={1}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={300}
                    canvasWidth={655}
                    hideGrid={false}
                    imgSrc="../../images/draw2.jpg"
                    style={{ border: '2px solid #14181C', }}
                />
                </center>
                <Grid style={{ textAlign: 'center', }} >
                <h2> </h2>
              </Grid>  
              <center>              
                    <CanvasDraw
                    
                    ref={lienzo}
                    lazyRadius={1}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={300}
                    canvasWidth={655}
                    hideGrid={false}
                    imgSrc="../../images/draw3.jpg"
                    style={{ border: '2px solid #14181C', }}
                />
                </center>
             </Grid>
            </Grid>
            <Grid sm={1}>
            </Grid>
        </Grid>
        
 </div>

  );
}

export default Draw3;