import React, { useState } from 'react';

import {  Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../css/draw.css';
import { useHistory, withRouter } from "react-router-dom";
import AppNavBar from '../../components/navbar'


function Draw4() {
  
  const [canvas,] = useState("#4FA1F3 ");
    const [brush, ] = useState(6);
    const lienzo = useState(null);
    const lienzo1 = useState(null);
    let history = useHistory();
   
    const draw3  = () => {
      history.push("/draw3")
    }
    const draw5  = () => {
      history.push("/draw5")
    }
    
    const clear = () => {
        lienzo.current.clear() 
        lienzo1.current.clear() 
    }

    const img = [
      { photo: ['../../../images/prueba.jpg'] }, 
      { photo: ['../../../images/prueba.jpg'] }, 
      { photo: ['../../../images/prueba.jpg'] }, 
          
    ];

    const style = {
        width: brush + "px",
        background: canvas,
        marginLeft: "50%"
      };
      console.log(style.width);
  return (
  <div style={{ backgroundColor: '#5DADEF', height: 900 }}>

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
  
              //style={{ borderRadius: 20 }}
            >
              Limpiar
            </Button>
              </Grid>
              <Grid sm={6}>
              </Grid>
              <br />
              <Grid sm={2}>
                <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={draw3}
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
                onClick={draw5}
                style={{ borderRadius: 20, width: 120}}
               
              > 
                Siguiente
               
              </Button>
              </Grid>
            </Grid>
           
        
           
            <Grid style={{ textAlign: 'center', }} >
              <h2 style={{ fontSize: 22 }} >Realiza las curvas</h2>
              <center>        
              <CanvasDraw
              ref={lienzo1}
              brushColor={canvas}
              lazyRadius={1}
              brushRadius={brush}
              canvasHeight={330}
              canvasWidth={655}
              imgSrc="../../images/draw4.jpg"
              hideGrid={false}
              style={{ border: '2px solid #14181C' }}
              
              /> 
              </center>
          </Grid> 
          <Grid style={{ textAlign: 'center', }} >
              <h2 style={{ fontSize: 22 }} ></h2>
              <center>        
              <CanvasDraw
              ref={lienzo}
              brushColor={canvas}
              lazyRadius={1}
              brushRadius={brush}
              canvasHeight={350}
              canvasWidth={655}
              imgSrc="../../images/draw5.jpg"
              hideGrid={false}
              style={{ border: '2px solid #14181C' }}
              
              /> 
              </center>
          </Grid> 
             </Grid>
            </Grid>
            <Grid sm={1}>
            </Grid>
        </Grid>
        
 </div>

  );
}

export default Draw4;