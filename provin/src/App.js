import React from 'react';
import './css/login.css';
import { Grid,  TextField,  Button,  Card,    } from "@material-ui/core";
import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Game1 from './pages/dragDrop/game1';
import Draw from './pages/draw/Draw';
import Draw2 from './pages/draw/Draw2';
import Draw3 from './pages/draw/Draw3';
import Draw4 from './pages/draw/Draw4';
import Draw5 from './pages/draw/Draw5';
import Levels from './pages/levels/Levels';
import JigSaw from "./pages/draggable/Jigsaw";
import Syllables from "./pages/syllables/syllables";
import Home from './pages/home/home'

import Registro from './pages/Registro';
import Puntajes from './pages/puntajes';
import Resultados from './pages/resultados';

const authenticate = {
  isLoggedIn: false,
  onAuthentication(){
    this.isLoggedIn=true;
  },
  getLogInStatus(){
    return this.isLoggedIn;
  }
}

function SecuredRoute(props){
  return(
    <Route path={props.path} render={data=>authenticate.getLogInStatus()?(
      <props.component {...data}></props.component>): 
      (<Redirect to={{ pathname: '/'}}></Redirect>)
    }></Route>
  )
}

function Login (props){
  const [correo, setCorreo] = React.useState("");
  const [contrasena, setContrasena] = React.useState("");
  let history = useHistory();

 async function login () {
    if ( correo === "" || contrasena === ""){
      alert("Registrate por favor")
    }else {
      let data = {correo, contrasena};
      console.warn(data);
      let result = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type" : 'application/json',
          "Accept" : 'application/json'
        }
      })
   
      result = await result.json()
      console.log("result", result.data._id)
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_id", result.data._id);
      authenticate.onAuthentication();
      history.push("/home")
     
    }
    
  }

  return (
    <div style={{ backgroundColor: "#5DADEF", height: "100vh" }}>
      <Grid container>
        <Grid sm={4}></Grid>
        <Grid
          style={{
            textAlign: "center",
            padding: 20,
            marginTop: 40,
          }}
          className="card"
          xs={12}
          sm={4}
        >
          <Card width="300" justifyContent="center" className="content">
            <h1>Bienvenidos</h1>
            <br></br>
            <form noValidate>
              <Grid container>
                <Grid style={{ margin: 20 }} xs={12}>
                  <TextField
                    value={correo}
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Email"
                    autoFocus
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Grid>

                <Grid style={{ margin: 20 }} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={contrasena}
                    label="Contraseña"
                    type="password"
                    onChange={(e) => setContrasena(e.target.value)}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid xs={4}></Grid>
              </Grid>
              <Grid style={{ margin: 20 }}>
                <Button
                  onClick={login}
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 20 }}
                >
                  Ingresar
                </Button>
              </Grid>

              <Grid container justify="center">
                <Grid style={{ margin: 30 }}>
                  <Link variant="body2" to='/signup' >
                    Aun no tienes cuenta?
                  </Link>
                </Grid>
              </Grid>
              <Grid sm={4}></Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
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
        <SecuredRoute path="/puntajes" component={Puntajes} />
        <SecuredRoute path="/resultados" component={Resultados} />
      </div>
    </Router>
  );
}
export default App;
