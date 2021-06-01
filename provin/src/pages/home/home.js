import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import AppNavBar from "../../components/navbar";
import { Grid, Card, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 30,
  },
  media: {
    height: 250,
  },
});

export default function Home() {
  const classes = useStyles();
  let history = useHistory();
  //Redirect to windows levels/games
  const levels = () => {
    history.push("/levels");
  };
  // const resultados = () => {
  //   history.push("/resultados");
  // };
  return (
    <div style={{ backgroundColor: "#4682B4" }}>
      <AppNavBar />
      <br></br>
      <br></br>
      <Grid
        style={{
          textAlign: "center",
          height: "100vh",
        }}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        //item
        container
      >
        <Container>
          <Grid spacing={2} container>
            <Grid align="center" item xs={12} md={12} sm={12}>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      En este apartado encontraras todos los niveles
                      correspondientes al juego
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* <Grid align="center" item xs={12} md={6} sm={6}>
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
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Aqui podras revisar el avance que has obtenido en el
                          juego
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid> */}
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
