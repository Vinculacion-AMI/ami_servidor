const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); 


//conectando a la db
mongoose.connect('mongodb://localhost:27017/en4', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));


//importando rutas
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
        //entiende datos de un formulario solo texto
app.use(express.urlencoded({extended: false}));
// autorización CORS
app.use(cors({
    origin: 'http://localhost:3000',
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