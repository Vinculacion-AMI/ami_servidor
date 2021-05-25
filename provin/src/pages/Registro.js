import React from "react";
import "../css/singin.css";
import { Grid, TextField, Button, Card, Container } from "@material-ui/core";
// import { Search } from "@trejgun/material-ui-icons-google";
import { useHistory } from "react-router";

//import { makeStyles } from "@material-ui/core/styles";

import SaveIcon from "@material-ui/icons/Save";

const validateEmail = (values) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(values)) {
    return false;
  } else {
    return true;
  }
};

function Registro() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();

  const statusdisable =
    email.length === 0 ||
    name.length === 0 ||
    password.length === 0 ||
    validateEmail(email)
      ? true
      : false;
  const errorMessageNombre =
    name.length === 0 ? "El nombre es obligatorio" : "";
  const errorMessagePass =
    password.length === 0 ? "La contraseña es obligatoria" : "";
  const errorMessage =
    email.length === 0
      ? "El email es obligatorio"
      : validateEmail(email) === true
      ? "El email no es válido"
      : "";

  const helperTextProps = {
    error: true,
  };

  function goLogin() {
      history.push("/");
  }
  async function signup() {
    if (name === "" || email === "" || password === "") {
      alert("Registrate por favor");
    } else {
      let data = { name, email, password };
      console.warn(data);
      let result = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      //result = await result.json();
      console.warn("result", result);
      history.push("/");
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
            item
            // xl={6}
            // sm={6}
            // xs={12}
            // md={6}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card className="content">
              <h1>Registrate</h1>
              <form>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        name="Nombre"
                        variant="outlined"
                        required
                        fullWidth
                        value={name}
                        FormHelperTextProps={helperTextProps}
                        helperText={errorMessageNombre}
                        label="Nombre Completo"
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        name="Email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        helperText={errorMessage}
                        FormHelperTextProps={helperTextProps}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={password}
                        label="Contraseña"
                        type="password"
                        id="password"
                        FormHelperTextProps={helperTextProps}
                        helperText={errorMessagePass}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    // href="/"
                    variant="outlined"
                    color="primary"
                    style={{ margin: 15, borderRadius: 20 }}
                    onClick={signup}
                    disabled={statusdisable}
                    startIcon={<SaveIcon />}
                  >
                    Registrarse
                  </Button>
                  <Button
                    onClick={goLogin}
                    variant="outlined"
                    color="secondary"
                    style={{ margin: 15, borderRadius: 20 }}
                  >
                    Cancelar
                  </Button>
                </Container>

                {/* <p>O</p>
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
              </Grid> */}
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Registro;
