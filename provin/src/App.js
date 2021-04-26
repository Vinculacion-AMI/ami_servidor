import React, { useState  } from 'react';
import './css/login.css';
import { Grid, form, TextField,  Button,  Card,    } from "@material-ui/core";
import { Route, BrowserRouter as Router, Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import Game1 from './pages/dragDrop/game1';
import Draw from './pages/draw/Draw';
import Draw2 from './pages/draw/Draw2';
import Draw3 from './pages/draw/Draw3';
import Draw4 from './pages/draw/Draw4';
import Draw5 from './pages/draw/Draw5';
import Levels from './pages/levels/Levels';

import Registro from './pages/Registro';

import Protected from './Protected';


/*const validar = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}*/

//let validar2 = "";

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
 /*const [redirectToReferrer, setRedirectToReferrer ] = React.useState(false)
  const { state } = useLocation();*/
  const [correo, setCorreo] = React.useState("");
  const [contrasena, setContrasena] = React.useState("");
  let history = useHistory();
  

 /* const entrar = () => {
    validar.authenticate(() => {
      setRedirectToReferrer(true)
  }) 
    
    
  }*/

  
 

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
      history.push("/levels")
     
    }
    
  }
    /*if (redirectToReferrer === true) {
    return <Redirect to={state.from || '/'} />
  }*/

  return (
    
    <div style={{ backgroundColor: '#5DADEF', height: 657 }}>
          <Grid container   >
          <Grid   sm={4}>   
          </Grid>
          <Grid  
          style={{          
              textAlign: 'center',
              padding: 20,  marginTop: 40 }}
           className="card" xs={12} sm={4}>
          <Card  width="300" justifyContent="center" className="content">
            <h1>Bienvenidos</h1> 
            <br></br>  
          <form  noValidate>
          
     <Grid container >
     
        
       <Grid style={{ margin: 20 }}   xs={12} >
       
         <TextField
           value={correo}
           variant="outlined"
           required
           fullWidth
           id="name"
           label="Email"
           autoFocus
           onChange={(e)=>setCorreo(e.target.value)}
         />
       </Grid>
      
   
       <Grid style={{ margin: 20 }}  xs={12}>
         <TextField
           variant="outlined"
           required
           fullWidth
           value={contrasena}
           label="Contraseña"
           type="password"
           onChange={(e)=>setContrasena(e.target.value)}
           autoComplete="current-password"
         />
       </Grid>
       <Grid  xs={4}>
        
       </Grid>
     </Grid>
     <Grid style={{ margin: 20,  }}>
        <Button
      /* onClick={() => {
         setIsAuth(true)
       }}*/
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
       <Grid >
         <Link href="/signup" variant="body2">
           Aun no tienes cuenta??
         </Link>
       </Grid>
     </Grid>
   </form>
   </Card>
          </Grid>
          <Grid   sm={4}>
              
          </Grid>
       
   </Grid>
          
   </div>
  
    );
}

/*function PrivateRoute({ children, ...rest }) {
  console.log(validar)
  return (
   <Route {...rest} render={({ location }) => {
     
      return validar.isAuthenticated === true
        ? children
        : <Redirect to={{
            pathname: '/',
            state: { from: location }
          }} />
    }} />
    
  )
  

}*/



/*function AuthButton () {
  const history = useHistory()

  return validar.isAuthenticated === true
    ? <p>
        Welcome! <button onClick={() => {
          validar.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p>You are not logged in.</p>
}

  function Levels2 (){
    return (
      <div>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
    </div>
    )

  }
*/

//         <Route path="/levels" component={Levels} />
//   <Protected path="/levels" component={Levels} isAuth={isAuth} />


function App() {
  //const [isAuth, setIsAuth] = React.useState(false);

  return (
    
    <Router>
       <div>
    
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Registro} />
          <SecuredRoute path="/levels" component={Levels} />
          <SecuredRoute path='/draw'   component={Draw} />      
          <SecuredRoute path="/draw2" component={Draw2} />
          <SecuredRoute path="/draw3" component={Draw3} />
          <SecuredRoute path="/draw4" component={Draw4} />
          <SecuredRoute path="/draw5" component={Draw5} />
          <SecuredRoute path="/game1" component={Game1} />
      
      </div>
    
      
      
     </Router>
     
   
   
   
  );
}



export default App;
