const express = require('express'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')
    require('dotenv').config(),
 router = express.Router(),
 mongodb= require('../models/task')

const token = process.env.TOKEN_SECRET
router.get('/example', (req, res) => {
    res.send('Hola mundo');
});
router.post('/login',(req, res)=>{
    mongodb.Persons.find({
        "correo": req.body.correo
    }).exec((err, content)=>{
        if(err || libro===null || libro.length === 0){
            res.status(404).send(('usuario incorrecto'))
        }else{
            try {
                bcrypt.compare(req.body.contrasena, content[0].contrasena, (err, content)=>{
                    if(err){
                        res.status(404).send(('usuario incorrecto'))
                    }else{
                        const token = jwt.sign(req.body.correo, token)
                        let user = content[0]
                        delete user.contra
                        const data = {
                            data: user,
                            token: token

                        }
                        res.json(data)
                    }
                })
            } catch (error) {
                res.status(404).send(('usuario incorrecto'))
            }
        }
    })
})  
router.post('/register', (req, res)=>{
    console.log(req.body)
    const saltRounds= 12
    bcrypt.hash(req.body.contrasena, saltRounds, (err, hash)=>{
        try {
            if(!req.body|| !req.body.length || req.body.length()===0){
                res.status(404).send('error en el servidor')
            }else{
                mongodb.Persons.insertMany(req.body, (err)=>{
                    if(err){
                        res.status(404).send('error en el servidor')
                    }else{
                        res.status(200).send('creado exitosamente')
                    }
                })
            }
         
        } catch (error) {
            res.status(404).send('error en el servidor')
        }
    })
})



module.exports = router;