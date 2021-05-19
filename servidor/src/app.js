const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); 


//conectando a la db
mongoose.connect('mongodb://localhost:27017/ami', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));


//importando rutas
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
// autorización CORS
app.use(cors({
    origin: '*',
    credentials: true
}))
//Autorización del uso de json
app.use(express.json());
//Estudio url body-parse
app.use(express.urlencoded({ extended: false }))
//routes
app.use('/', indexRoutes);


//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});