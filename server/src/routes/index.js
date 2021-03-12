const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.get('/', (req, res) => {
    //res.send('Hola mundo');
    res.render('index');
});


router.post('/add', (req, res) => {
    //recibe datos del navegador
    console.log(new Task());
 
    console.log(req.body);
    res.send('enviado');
});

router.get('/delete/:id', (req, res) =>{
    //const { id } = req.params;
    console.log(req.params.id)
    res.send('eliminado con éxito');
})


module.exports = router;