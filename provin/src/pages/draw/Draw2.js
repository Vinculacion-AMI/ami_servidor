import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import { useHistory, withRouter } from "react-router-dom";
const useStyles = makeStyles({
  root: {
   
    maxWidth: "100%",
    maxHeight: "100%",
   
  },
  media: {
    height: 400,
    
    paddingTop: "60.25%"
    
  },
  ancho:{
    margin: 10,
    maxWidth: "100%",
  },
  btn : {
    justifyContent: 'center',
    left: "20%"
  },
 
});


function Draw2() {
  const classes = useStyles();
  const [canvas,] = useState("#4FA1F3 ");
    const [brush, ] = useState(6);
    const lienzo = useState(null);
    let history = useHistory();
   
    const draw3  = () => {
      history.push("/draw3")
    }
    
  
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
              <Grid sm={8}>
              </Grid>
              <Grid sm={2}>
                <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={draw3}
                style={{ borderRadius: 20, width: 120}}
              >
                Next
              </Button>
              </Grid>
            </Grid>
           
          
                <Grid style={{ textAlign: 'center', }} >
                    <h2 style={{ fontSize: 22 }} >Realiza las los circulos y las rayas</h2>
                            
                    <CanvasDraw
                    ref={lienzo}
                    lazyRadius={1}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={500}
                    canvasWidth={'100%'}
                    imgSrc="../../images/circulo.jpg"
                    hideGrid={false}
                    style={{ border: '2px solid #14181C' }}
                    
                    />
                </Grid> 
              
             
             </Grid>
            </Grid>
            <Grid sm={1}>
            </Grid>
        </Grid>
        
 </div>

  );
}

export default Draw2;