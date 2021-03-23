import React, {  } from 'react';
import '../css/login.css';
import { Grid, form, TextField, Link, Button,  Card,    } from "@material-ui/core";
function Login() {

  return (
  <div style={{ backgroundColor: '#5DADEF', height: 657 }}>
        <Grid container   >
        <Grid   sm={4}>   
        </Grid>
        <Grid  
        style={{          
            textAlign: 'center',
            padding: 20,  marginTop: 40 }}
         className="card" item xs={12} sm={4}>
        <Card  width="300" justifyContent="center" className="content">
          <h1>Bienvenidos</h1> 
          <br></br>  
        <form  noValidate>
        
   <Grid container >
   
      
     <Grid style={{ margin: 20 }}   xs={12} >
     
       <TextField
         name="Nombre"
         variant="outlined"
         required
         fullWidth
         id="name"
         label="Nombre Completo"
         autoFocus
        
       />
     </Grid>
    
 
     <Grid style={{ margin: 20 }}  xs={12}>
       <TextField
         variant="outlined"
         required
         fullWidth
         name="contraseña"
         label="Contraseña"
         type="password"
         id="password"
         autoComplete="current-password"
       />
     </Grid>
     <Grid item xs={4}>
      
     </Grid>
   </Grid>
   <Grid style={{ margin: 20,  }}>
      <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      style={{ borderRadius: 20 }}
    >
      Ingresar
    </Button>
   </Grid>
   
   <Grid container justify="center">
     <Grid item>
       <Link href="/singIn" variant="body2">
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

export default Login;