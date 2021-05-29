import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import { useHistory} from "react-router-dom";
import AppNavBar from '../../components/navbar'

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
    const lienzo1 = useState(null);
    const lienzo = useState(null);
    let history = useHistory();
   
    const draw3  = () => {
      history.push("/draw3")
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
  <div  style={{ backgroundColor: '#5DADEF', height: 850 }}>
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
                Siguiente
              </Button>
              </Grid>
            </Grid>
           
          
                <Grid style={{ textAlign: 'center', }} >
                    <h2 style={{ fontSize: 22 }} >Realiza las los circulos y las rayas</h2>
                     <center>       
                    <CanvasDraw
                    ref={lienzo1}
                    lazyRadius={1}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={300}
                    canvasWidth={655}
                    imgSrc="../../images/circulo2.jpg"
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
                    lazyRadius={1}
                    brushColor={canvas}
                    brushRadius={brush}
                    canvasHeight={300}
                    canvasWidth={655}
                    imgSrc="../../images/circulo3.jpg"
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

export default Draw2;