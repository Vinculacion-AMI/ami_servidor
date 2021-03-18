const express = require('express'),
 router = express.Router(),
 mongodb= require('../models/task')


router.get('/example', (req, res) => {
    res.send('Hola mundo');
});
router.post('/login',(req, res)=>{
    mongodb.Persons.find
})



module.exports = router;