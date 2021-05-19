import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory} from "react-router-dom";
import AppNavBar from '../../components/navbar'


import { Grid, Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Home() {
  const classes = useStyles(); 
  let history = useHistory();
 
const levels  = () => {
  history.push("/levels")
}
const resultados  = () => {
  history.push("/resultados")
}
  return (
    <div>
      <AppNavBar />
      <div style={{ alignItems:'center', marginTop:'10%', marginLeft:'23%'}}>
        <Grid container   >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  
                  image="../../images/forma_palabras.png"
                  title="Niveles"
                  onClick={levels}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Niveles
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    En este apartado encontraras todos los niveles correspondientes al juego
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="../../images/puntajes.jpg"
                  title="Puntajes"
                  onClick={resultados}

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Puntajes
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Aqui podras revisar el avance que has obtenido en el juego
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      </div>
    </div>
    
  )
}