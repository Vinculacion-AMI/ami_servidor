import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { Grid, Button  } from "@material-ui/core";
import CanvasDraw from 'react-canvas-draw';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
  },
  media: {
    height: 440,
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

    const style = {
        width: brush + "px",
        background: canvas,
        marginLeft: "50%"
      };
      console.log(style.width);
  return (
  <div >
     <Grid container 
        
     >
            <Grid style={{ textAlign: 'center', alignItems: 'center' }} xs={12} sm={5}>
            <h2>Replica</h2>
        <Grid style={{ margin: 5, marginTop: 65, position: 'relative', left : 30 }}>
        <Carousel autoPlay={false} emulateTouch={true}>
        <div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="../../images/slide_2.jpg"
            title="Contemplative Reptile"
          />
      </Card>
        </div>
        <div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="../../images/slide_2.jpg"
            title="Contemplative Reptile"
          />
      </Card>
        </div>
        <div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="../../images/slide_2.jpg"
            title="Contemplative Reptile"
          />
      </Card>
        </div>
    </Carousel>
        </Grid>
       
        </Grid>
        <Grid sm={1}>
        </Grid>
        <Grid  xs={12} sm={6}>
        <Grid style={{ position: 'relative', top: 20,  }}>
        
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

      </Grid>
            <Card style={{ width: 600, border: '2px solid #14181C', marginTop: 50 }}>
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