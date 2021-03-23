import React, {  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,     } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/slider.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 140,
    },
  });

function Levels() {
    const classes = useStyles();
      
  return (
    <Grid container >
        <Grid sm={1}>
        </Grid>
        <Grid item xs={12} sm={10}>
        <Grid  className="name" style={{ margin: 20, }} >
            <h2 >Nombre del Usuario</h2>
        </Grid>
        <Grid style={{ marginTop:60, textAlign: 'center', }} >
            <h2>Juegos</h2>
        </Grid>
        <div className="slide-container">
        <Slide  indicators={false}  autoplay={false}>
          <div style={{ marging: 40 }} className="each-slide">
            
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/slide_2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Juego Uno
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               En este juego deberas hacer todo para ganar monedas
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" fullWidth variant="contained" style={{ borderRadius: 20 }} color="primary">
              JUGAR
            </Button>
            
          </CardActions>
        </Card>
            
          </div>
          
          
          <div style={{ marging: 40 }} className="each-slide">
            
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/slide_2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                JUEGO 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              En este juego deberas hacer todo para ganar monedas
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" fullWidth variant="contained" style={{ borderRadius: 20 }} color="primary">
                 JUGAR
          </Button>
            
          </CardActions>
        </Card>
            
          </div>
          <div style={{ marging: 40 }} className="each-slide">
            
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/slide_2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                JUEGO 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              En este juego deberas hacer todo para ganar monedas
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
            <Button size="small"
            fullWidth variant="contained" 
            style={{ borderRadius: 20,   }} 
            color="primary"
            >
                 JUGAR
            </Button>
          
            
           
          </CardActions>
        </Card>
            
          </div>
          
        </Slide>
      </div>
        </Grid>
        <Grid sm={1}>
        </Grid>
    </Grid>
     

  );
}

export default Levels;