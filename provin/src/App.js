//Componentes React
import React from "react";
import { Grid, TextField, Button, Card, Container } from "@material-ui/core";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
} from "react-router-dom";

//Componentes Juegos
import Game1 from "./pages/dragDrop/game1";
import Draw from "./pages/draw/Draw";
import Draw2 from "./pages/draw/Draw2";
import Draw3 from "./pages/draw/Draw3";
import Draw4 from "./pages/draw/Draw4";
import Draw5 from "./pages/draw/Draw5";
import JigSaw from "./pages/draggable/Jigsaw";
import JigSawInit from "./pages/draggableFist/JigsawInit";
import Syllables from "./pages/syllables/syllables";

// Componentes de gestion/visualizacion
import Puntajes from "./pages/puntajes";
import Resultados from "./pages/resultados";
import Levels from "./pages/levels/Levels";
//import session from "./util/session";

//Componentes Iniciales
import Home from "./pages/home/home";
import Registro from "./pages/Registro";
//import Login from "./pages/Login";

//Componentes de estilos css
import "./App.css";
import "./css/login.css";

const authenticate = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  getLogInStatus() {
    if (localStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  },
  isLoggedInTK() {
    return localStorage.getItem("token") != null;
  },
};

function SecuredRoute(props) {
  authenticate.getLogInStatus();
  return (
    <Route
      path={props.path}
      render={(data) =>
        authenticate.getLogInStatus() === true ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  if (localStorage.getItem("token") != null) {
    return props.history.goBack();
  }

  async function login() {
    if (email === "" || password === "") {
      alert("Registrate por favor");
    } else {
      let data = { email, password };
      console.warn(data);
      let result = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_id", result.data._id);

      authenticate.onAuthentication();
      props.history.push("/home");
    }
  }
  return (
    <div style={{ backgroundColor: "#4682B4", height: "100vh" }}>
      <Container>
        <Grid container>
          <Grid
            style={{
              textAlign: "center",
              minHeight: "100vh",
            }}
            className="card"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card className="content">
              <h1>Bienvenidos</h1>
              <form noValidate>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={6}>
                      <TextField
                        value={email}
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={password}
                        label="Contraseña"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={6} md={12}></Grid>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Button
                      onClick={login}
                      fullWidth
                      variant="outlined"
                      color="primary"
                      style={{ borderRadius: 20 }}
                    >
                      Ingresar
                    </Button>
                  </Grid>
                  <Grid container justify="center">
                    <Grid style={{ margin: 15 }}>
                      <Link variant="body2" to="/signup">
                        Aun no tienes cuenta?
                      </Link>
                    </Grid>
                  </Grid>
                </Container>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Registro} />
        <SecuredRoute path="/home" component={Home} />
        <SecuredRoute path="/levels" component={Levels} />
        <SecuredRoute path="/draw" component={Draw} />
        <SecuredRoute path="/draw2" component={Draw2} />
        <SecuredRoute path="/draw3" component={Draw3} />
        <SecuredRoute path="/draw4" component={Draw4} />
        <SecuredRoute path="/draw5" component={Draw5} />
        <SecuredRoute path="/game1" component={Game1} />
        <SecuredRoute path="/syllables" component={Syllables} />
        <SecuredRoute path="/puzzle" component={JigSaw} />
        <SecuredRoute path="/puzzleInit" component={JigSawInit} />
        <SecuredRoute path="/puntajes" component={Puntajes} />
        <SecuredRoute path="/resultados" component={Resultados} />
      </div>
    </Router>
  );
}
export default App;
