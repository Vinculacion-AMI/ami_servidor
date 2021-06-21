import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import CanvasDraw from "react-canvas-draw";
import { useHistory } from "react-router-dom";
import AppNavBar from "../../components/navbar";

function Draw3() {
  const [canvas] = useState("#4FA1F3 ");
  const [brush] = useState(6);
  const lienzo = useState(null);
  const lienzo1 = useState(null);

  let history = useHistory();

  const draw4 = () => {
    history.push("/draw4");
  };

  const draw2 = () => {
    history.push("/draw2");
  };

  const clear = () => {
    lienzo.current.clear();
    lienzo1.current.clear();
  };

  const style = {
    width: brush + "px",
    background: canvas,
    marginLeft: "50%",
  };
  console.log(style.width);
  return (
    <div style={{ backgroundColor: "#6495ED", height: 850 }}>
      <AppNavBar />

      <Grid  container>
        <Grid xs={12} sm={12}>
          <Grid style={{ margin: 8 }}>
            <Grid container>
              <Grid sm={2}>
                <Button
                  onClick={clear}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ width: 100 }}
                >
                  Limpiar
                </Button>
              </Grid>
              <Grid style={{ textAlign: "center" }} sm={8}>
                <h2> Realiza las curvas</h2>
              </Grid>
              <Grid container sm={2}>
                <Grid xl={12} xs={12} md={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={draw2}
                    style={{ width: 95 }}
                  >
                    Regresar
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={draw4}
                    style={{ width: 95 }}
                  >
                    Siguiente
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <center>
              <CanvasDraw
                ref={lienzo1}
                lazyRadius={1}
                brushColor={canvas}
                brushRadius={brush}
                canvasHeight={300}
                canvasWidth={655}
                hideGrid={false}
                imgSrc="../../images/draw2.jpg"
                style={{ border: "2px solid #14181C" }}
              />
            </center>
            <center>
              <CanvasDraw
                ref={lienzo}
                lazyRadius={1}
                brushColor={canvas}
                brushRadius={brush}
                canvasHeight={300}
                canvasWidth={655}
                hideGrid={false}
                imgSrc="../../images/draw3.jpg"
                style={{ border: "2px solid #14181C" }}
              />
            </center>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Draw3;
