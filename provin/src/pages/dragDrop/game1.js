import React, {  useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import TransitionsSnackbar from "../dialogNotifications/notification";
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";

import {   CardActionArea,  Grid } from "@material-ui/core";


import '../../css/game1.css'
import { Router } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
     
      maxWidth: "60%",
      maxHeight: "100%",
      left: "20%",
      position: "relative",
      borderRadius: 50
    },
   
    media: {
      height: 0,
      width: '100%',
      paddingTop: "50.25%"
      
    },

    

   
    
    
   
}));

  

function Game1() {
    const classes = useStyles();
 
    const [dato1, setDato1] = React.useState({});
    const [contador, setContador] = React.useState(0);
  
   const [alerta, setAlerta] = React.useState("");
  //  const [datosModificados, setDatosModificados] = useState([]);
   let history = useHistory();
    
    let img = [

      {id: 1, name: "Perro", photo: "../../../images/gameDnD/perro.jpg" },
      {id: 2, name: "Gato", photo: "../../../images/gameDnD/gati1.jpg" },
      {id: 3, name: "Conejo", photo: "../../../images/gameDnD/cone1.jpg" },
      {id: 4, name: "Gallina", photo: "../../../images/gameDnD/gal1.jpg" },
      {id: 5, name: "Caballo", photo: "../../../images/gameDnD/cab1.jpg" },
      {id: 6, name: "Perro", photo: "../../../images/gameDnD/perr1.jpg" },
      {id: 7, name: "Gato", photo: "../../../images/gameDnD/gati2.jpg" },
      {id: 8, name: "Conejo", photo: "../../../images/gameDnD/cone2.jpg" },
      {id: 9, name: "Gallina", photo: "../../../images/gameDnD/gal2.jpg" },
      {id: 10, name: "Caballo", photo: "../../../images/gameDnD/cab2.jpg" }
    ];

    function generateRandomInt(){
      return Math.floor((Math.random() * (10-0)) +0);
  }
  let numeros = Number(generateRandomInt()) 
  
  let prueba = img[numeros];
 
  let data = [
    {id: 1, name: "Perro" },
    {id: 2, name: "Conejo" },
    {id: 3, name: "Gato" },
    {id: 4, name: "Gallina" },
    {id: 5, name: "Caballo" },
  ]
  const botones = () =>{

    var data2 = [];
    let aleatorio = data.map(item => {
    
      let random = data[Math.floor(Math.random() * data.length)];

      if(!data2.includes(random))
      {
         data2.push(random);         
      }
    })
    data2.push(dato1);
    // data2.forEach(element => {
    //   let sinRepeticion = element.name;
    //   let separador = sinRepeticion.split(" ");
    //   let palabraRepetida = separador[separador.length -1]
    //   console.log(palabraRepetida);
    //   // console.log(sinRepeticion.replace(repetido,''));
    // });
    console.log(data2.length);
    var datos = [];
    for (let i = 0; i<data2.length; i++){
        datos.push(data2[i].name)
    }
    console.log(datos);
    let sinRepeticion = [...new Set(datos)]; //Me quita los datos repetidos
    console.log(sinRepeticion);

    var objetoAnimales = sinRepeticion.map(function(elemento){
      console.log(elemento);
      var dividir = elemento.split(" ");
      return {name: dividir[0]};
    });
    console.log(objetoAnimales);
    return objetoAnimales;

  }

  let btnR = botones();

  //let random = img[Math.floor(Math.random() * img.length)]
  
    useEffect(() => {
      setDato1(prueba)
     // console.log(data)
    //  console.log(btnR)
    
     
      return () => {
        setDato1({})

      }
    }, [])

    console.log(data)
    //console.log(btnR)

  // const verificar = data2.filter(item => (item.name === dato1.name))
   

    const handleChange = async (dato) => {
      //setChecked((prev) => !prev);
    // let imagenes = Object.values(img).find(item => item.name === dato)
      //console.log(imagenes)
      /*let aleatorio2 = data.map(item => {
    
        let random = data[Math.floor(Math.random() * data.length)]
        
        if(!data2.includes(random))
        {
          data2.push(random)
    
        }
      })*/
      if(dato === dato1.name)
      {
        setAlerta("Correcto");
        prueba = img[numeros];
        setDato1(prueba)
        btnR = botones()
        console.log(btnR)
      //  setVerificar(btnR)
       // data2=[];
        setContador(contador+1);
       // console.log(data2)
        console.log(contador)
       // console.log(verificar)
        if(contador == 5) 
        {
          console.log(contador);
          setContador(0);
          
          let token = localStorage.getItem("token")
          let user = localStorage.getItem("user_id")
          let data = {
            persons: user,
            nivel: 2,
            Ptotal: 5
          }
          let result = await fetch("http://localhost:4000/score", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type" : 'application/json',
              "Accept" : 'application/json',
              "authorization" : token
            }
          })
          console.log(result);
          if(result.status == 200){
            // result = await result.json()
            // console.log(result)
            setAlerta("Fin");
            alert("Fin del juego gracias por jugar");
            history.push("/levels");
          }else{
            setAlerta("Algo paso con el servidor comuniquese con el administrador");    
            history.push("/levels");
          }
          
       //   data2=[];
        //  setVerificar(data2)
        }
      }else {
        setAlerta("Incorrecto");
      }
     

    };

   

  return (
    <div style={{ backgroundColor: "#B7FAD4", height: 759 }}>

      <div>
      <Grid container >
          
              <Grid xs={12} sm={12}  >
                  
                  <Grid className="perro" >
                  
                  <h2>Reconoce el animalito</h2>
                 
                      <Card className={classes.root}>
                          <CardMedia
                              className={classes.media}
                              image={dato1.photo}
                          />
                      </Card>
                      <br />
                      { alerta === "Correcto" ? (
                        <div className={classes.alerta} >
                        <Alert  severity="success">
                        <AlertTitle>Felicitaciones</AlertTitle>
                        Respuesta Correcta — <strong>Muy Bien</strong>
                      </Alert>
                        </div>
                      ): alerta === "Incorrecto" ? (
                        <div className={classes.alerta} >
                        <Alert severity="error">
                        <AlertTitle>Vuelve Intentar</AlertTitle>
                        Respuesta Incorrecta — <strong>Muy mal</strong>
                      </Alert>
                        </div>
                      ): alerta === "Fin" ? (
                        <div className={classes.alerta} >
                        <Alert severity="warning">
                        <AlertTitle>Fin del Juego</AlertTitle>
                       Gracias por Jugar — <strong>Adios</strong>
                      </Alert>
                        </div>
                      ): null
                       }
                  </Grid>        
              </Grid>
             
      </Grid>
      <Grid className="opciones">
      <Grid  container>
      <Grid   sm={2}>
      </Grid>
      <Grid  xs={12} sm={8}>
      <Grid container>
      {Object.values(btnR).map(item => (
          <Grid xs={12} sm={4}>
            
              <Grid className="cards">
              <CardActionArea  style={{borderRadius: 50,}} onClick={() => handleChange(item.name)} >
              <Card  style={{borderRadius: 50,}}>
                    <Card  style={{borderRadius: 50, background: 'linear-gradient(to right bottom,  #825191, #ff93c2)' }} >
                        <h2 style={{ color: "#fff" }}>{item.name}</h2>
                        
                    </Card>
              </Card>
              </CardActionArea>
          </Grid>
  
          </Grid>
          ))}
      
    </Grid>    
      </Grid>
  
      <Grid  sm={2}>
      </Grid>
  </Grid>
      </Grid>
      </div>

    </div> 

  );
}

export default Game1;