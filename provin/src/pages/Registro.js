import React, {  } from 'react';
import '../css/singin.css';
import { Grid, TextField,  Button,  Card } from "@material-ui/core";
import { Gmail, Search }  from '@trejgun/material-ui-icons-google'; 
import { useHistory } from 'react-router';

const validateEmail = (values) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(values)) {
    return false;
  } else {
    return true;
  }
};

function Registro() {
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [contrasena, setContrasena] = React.useState("");
  let history = useHistory();

  const statusdisable =
    correo.length === 0 ||
    nombre.length === 0 ||
    contrasena.length === 0 ||
    validateEmail(correo)
      ? true
      : false;
  const errorMessageNombre =
    nombre.length === 0 ? "El nombre es obligatorio" : "";
  const errorMessagePass =
    contrasena.length === 0 ? "La contraseña es obligatoria" : "";
  const errorMessage =
    correo.length === 0
      ? "El email es obligatorio"
      : validateEmail(correo) === true
      ? "El email no es válido"
      : "";

  const helperTextProps = {
    error: true,
  };

 async function signup () {
    if (nombre === "" || correo === "" || contrasena === ""){
      alert("Registrate por favor")
    }else {
      let data = {nombre, correo, contrasena};
      console.warn(data);
      let result = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type" : 'application/json',
          "Accept" : 'application/json'
        }
      }) 
      result = await result.json()
      console.warn("result", result)
      history.push("/")
    }
    
  }

  return (
    <div style={{ backgroundColor: "#5DADEF", height: "100vh" }}>
      <Grid container>
        <Grid item sm={4}></Grid>
        <Grid
          style={{
            textAlign: "center",
            padding: 10,
            marginTop: 5,
          }}
          className="card"
          item
          xl={12}
          sm={4}
        >
          <Card width="280" justifyContent="center" className="content">
            <h1>Registrate</h1>
            <br></br>
            <form>
              <Grid container>
                <Grid style={{ margin: 15 }} item xs={12}>
                  <TextField
                    name="Nombre"
                    variant="outlined"
                    required
                    fullWidth
                    value={nombre}
                    FormHelperTextProps={helperTextProps}
                    helperText={errorMessageNombre}
                    label="Nombre Completo"
                    autoFocus
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Grid>

                <Grid style={{ margin: 15 }} item xs={12}>
                  <TextField
                    name="Email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    helperText={errorMessage}
                    FormHelperTextProps={helperTextProps}
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Grid>

                <Grid style={{ margin: 15 }} item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={contrasena}
                    label="Contraseña"
                    type="password"
                    id="password"
                    FormHelperTextProps={helperTextProps}
                    helperText={errorMessagePass}
                    autoComplete="current-password"
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Button
                href="/"
                variant="contained"
                color="primary"
                style={{ margin: 15, borderRadius: 20 }}
                onClick={signup}
                disabled={statusdisable}
              >
                Registrarse
              </Button>
              <Button
                href="/"
                variant="contained"
                color="primary"
                style={{ margin: 15, borderRadius: 20 }}
              >
                Cancelar
              </Button>
              <p>O</p>
              <Grid style={{ margin: 20 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 20 }}
                  startIcon={<Search />}
                >
                  Registrarse con Google
                </Button>
              </Grid>
            </form>
          </Card>
        </Grid>
        <Grid sm={4}></Grid>
      </Grid>
    </div>
  );
}



export default Registro;