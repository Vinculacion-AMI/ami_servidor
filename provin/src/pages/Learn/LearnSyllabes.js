import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Grid} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../css/draw.css";
import AppNavBar from "../../components/navbar";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "60.25%",
  },
  ancho: {
    margin: 10,
    maxWidth: "100%",
  },
  btn: {
    justifyContent: "center",
    left: "20%",
  },
});

function LearnSyllabes() {
  const classes = useStyles();

  const img = [
    { photo: ["../../../images/fonemas/LFonema.jpg"] },
    { photo: ["../../../images/fonemas/DFonema.jpg"] },
    { photo: ["../../../images/fonemas/Mfonema.png"] },
  ];

  return (
    <div>
      <div style={{ backgroundColor: "#FFFD5F", height: "100vh" }}>
        <AppNavBar />

        <Grid container>
          <Grid
            style={{ textAlign: "center", alignItems: "center" }}
            xs={12}
            sm={12}
          >
            <h2>Aprende las silabas</h2>
            <Grid style={{ margin: 25 }}>
              <Carousel emulateTouch={true}>
                {img.map((e) => (
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={e.photo} />
                  </Card>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LearnSyllabes;
