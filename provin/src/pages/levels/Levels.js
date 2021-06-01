import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AppNavBar from "../../components/navbar";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    // maxHeight: "100%",
    borderRadius: 30,
  },
  media: {
    height: 0,
    paddingTop: "30.25%",
  },
  media2: {
    height: 0,
    paddingTop: "30.25%",
  },
});

function Levels({ logout, ...rest }) {
  const classes = useStyles();
  let history = useHistory();

  const draw2 = () => {
    history.push("/draw2");
  };
  const draw = () => {
    history.push("/draw");
  };

  const game1 = () => {
    history.push("/game1");
  };
  const puzzle = () => {
    history.push("/puzzle");
  };
  const syllables = () => {
    history.push("/syllables");
  };
  const puzzleInit = () => {
    history.push("/puzzleInit");
  };

  return (
    <div style={{ backgroundColor: "#4682B4" }}>
      <AppNavBar  />
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
        item
        container
      >
        <Container fixed>
          <Grid spacing={2} container>
            <Grid item md={3} xs={1}></Grid>
            <Grid align="center" item xs={10} md={6} sm={12}>
              <Carousel dynamicHeight={true} emulateTouch={true}>
                <Card boxShadow={3} className={classes.root}>
                  <CardMedia
                    className={classes.media2}
                    image="../../images/trazos.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Desarrolla tu motricidad
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Aqui pondras en prueba tus habilidades
                    </Typography>
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                      onClick={draw2}
                    >
                      Jugar
                    </Button>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Deberas repetir las letras o numeros
                    </Typography>
                    <br />
                    <Button
                      onClick={draw}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Jugar
                    </Button>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="../../images/forma_palabras1.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Forma los silabas con el abecedario
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Deberas ordenar las letras para formar silabas
                    </Typography>
                    <br />
                    <Button
                      onClick={puzzleInit}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Jugar
                    </Button>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="../../images/forma_palabras1.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Forma las palabras
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Deberas ordenar las letras para formar las palabras
                    </Typography>
                    <br />
                    <Button
                      onClick={puzzle}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Jugar
                    </Button>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="../../images/logo3.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Identifica el animal
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Deberas reconocer que animalito es !!
                    </Typography>
                    <br />
                    <Button
                      onClick={game1}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Jugar
                    </Button>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="../../images/forma_palabras.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Identifica las silabas
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Deberas reconocer las fraces monosilabas y bisilabas
                    </Typography>
                    <br />
                    <Button
                      onClick={syllables}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Jugar
                    </Button>
                  </CardContent>
                </Card>
              </Carousel>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default Levels;
