import React, {  } from 'react';
import '../css/singin.css';
import { Grid, TextField,  Button,  Card } from "@material-ui/core";
import { Search }  from '@trejgun/material-ui-icons-google'; 
function Registro() {

  return (
    <div style={{ backgroundColor: '#5DADEF', height: 657 }} >
   
        
        <Grid container   >
            
        <Grid item  sm={1}>
             
        </Grid>
        <Grid  
        style={{          
            textAlign: 'center',
            padding: 20,  marginTop: 20   }}
         className="card" item xl={12} sm={10}>
        <Card  width="300" justifyContent="center" className="content">
          <h1>Registrate</h1> 
          <br></br>  
        <form  noValidate>
        
   <Grid container >
   
      
     <Grid style={{ margin: 20 }}  item xs={12} >
     
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
    
 
     <Grid style={{ margin: 20 }} item xs={12}>
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
      Registrarse
    </Button>
   </Grid>
      <p>O</p>
      <Grid style={{ margin: 20,  }}>
      <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      style={{ borderRadius: 20,  }}
      startIcon={<Search />}
    >
      
      Registrarse con Google
    </Button>
   </Grid>
 </form>
 </Card>
  </Grid>
    <Grid sm={1} >
    </Grid>  
     
 </Grid>
        
 </div>    

  );
}



export default Registro;