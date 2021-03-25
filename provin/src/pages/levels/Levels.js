import React, {  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,     } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { shadows } from '@material-ui/system';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../css/slider.css';

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 30,
    
  },
  media: {
    height: 0,
    paddingTop: "30.25%"
    
  },
  media2: {
    height: 0,
    paddingTop: "30.25%"
    
  },
  });

function Levels() {
    const classes = useStyles();

   
  return (
    <Grid container >
        <Grid sm={2}>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Grid  className="name" style={{ margin: 15, }} >
            <h2 >Nombre del Usuario</h2>
        </Grid>
        <Grid style={{ marginTop:60, textAlign: 'center', }} >
            <h2>Juegos</h2>
        </Grid>
        <Grid style={{ margin: 20,  top: 50,  position: 'relative', width: '80%', left: 25  }}>
            <Carousel emulateTouch={true}>
            <Card  boxShadow={3} className={classes.root}>
            
                <CardMedia
                  className={classes.media2}
                  image="../../images/logo.jpg"
            
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   SketchBook
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Aqui pondras en prueba tus habilidades 
                  </Typography>
                  <br />
                  <Button
                  type="submit"
                  
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 20 }}
                  href="/draw2"
                  >Jugar</Button>
                </CardContent>
            
          </Card>
          <Card className={classes.root}>
      
              <CardMedia
                className={classes.media}
                image="../../images/logo2.jpg"
          
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  REPETIR LETRAS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Deberas repetir las letras o numeros 
                </Typography>
                <br />  
                <Button
              type="submit"
              href="draw"
              variant="contained"
              color="primary"
              style={{ borderRadius: 20 }}
              >Jugar</Button>
              </CardContent>              
        </Card>
            </Carousel>
        </Grid>
        </Grid>
        <Grid sm={2}>
        </Grid>
    </Grid>
     

  );
}

export default Levels;