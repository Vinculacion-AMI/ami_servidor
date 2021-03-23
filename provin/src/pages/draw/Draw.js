import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../css/draw.css';

const useStyles = makeStyles({
  root: {
   
    maxWidth: "100%",
    maxHeight: "100%",
   
  },
  media: {
    height: 420,
    width: '100%',
  
    
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


function Draw() {
  const classes = useStyles();
    const [canvas,] = useState("#4FA1F3 ");
    const [brush, ] = useState(6);
    const lienzo = useState(null);

    const clear = () => {
        lienzo.current.clear() 
    }

    const img = [
      { photo: ['../../../images/abc1.jpg'] }, 
      { photo: ['../../../images/abc2.jpg'] }, 
      { photo: ['../../../images/abc3.jpg'] }, 
          
    ];

    const style = {
        width: brush + "px",
        background: canvas,
        marginLeft: "50%"
      };
      console.log(style.width);
  return (
  <div >
     <Grid container>
            
            <Grid style={{ textAlign: 'center', alignItems: 'center' }} xs={12} sm={6}>
            <h2>Replica</h2>
        <Grid style={{ margin: 25, marginTop: 70, position: 'relative',  }}>
        
        <Carousel  autoPlay={false} emulateTouch={true}  >
            { img.map(e =>          
              <Card className={classes.root}>
                <CardMedia            
                  className={classes.media}
                  image={e.photo}              
                />
              </Card>
          ) }      
        </Carousel>

        </Grid>
       
        </Grid>
        
        <Grid  xs={12} sm={6}>
        <Grid style={{ position: 'relative', top: 20,  }}>
        
        <Grid container>
        
        <Grid sm={2} >
        <Button onClick={clear}
        className={classes.btn}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Limpiar
      </Button>
        </Grid>

      </Grid>
            <Card className={classes.ancho}  style={{  border: '2px solid #14181C', marginTop: 50 }}>
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

export default Draw;