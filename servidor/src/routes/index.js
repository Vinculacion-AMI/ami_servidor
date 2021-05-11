const express = require("express"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");
const { mongo } = require("mongoose");
require("dotenv").config(),
  (router = express.Router()),
  (mongodb = require("../models/task"));

const tokenEncrypt = process.env.TOKEN_SECRET;


function authToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
  console.log(bearerheader);
  if (typeof bearerheader !== "undefined") {
    req.token = bearerheader;
    next();
  } else {
    res.sendStatus(403);
  }
}
router.post("/register", (req, res) => {
  console.log(req.body);
  const saltRounds = 12;
  bcrypt.hash(req.body.contrasena, saltRounds, (err, hash) => {
    try {
      mongodb.Persons.insertMany(
        {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          correo: req.body.correo,
          imagen: req.body.imagen,
          contrasena: hash,
        },
        (err) => {
          if (err) {
            res.status(404).send("error en el servidor");
          } else {
            res.status(200).send("creado exitosamente");
          }
        }
      );
    } catch (error) {
      res.status(404).send("error en el servidor");
    }
  });
});
router.post("/login", (req, res) => {
  mongodb.Persons.find({
    correo: req.body.correo,
  }).exec((err, content) => {
    if (err || content === null || content.length === 0) {
      res.status(404).send("usuario incorrecto");
    } else {
      try {
        bcrypt.compare(
          req.body.contrasena,
          content[0].contrasena,
          (err, response) => {
            if (err) {
              res.status(404).send("usuario incorrecto");
            } else {
              const token = jwt.sign(req.body.correo, tokenEncrypt);
              let user = content[0].toJSON();

              delete user.contrasena;
              const data = {
                data: user,
                token: token,
              };
              res.json(data);
            }
          }
        );
      } catch (error) {
        res.status(404).send("usuario incorrecto");
      }
    }
  });
});

router.post("/score", (req, res) => {
  
  // jwt.verify(req.token, tokenEncrypt, (err) => {
  //   if (err) {
      // res.status(404).send("error en el servidor");
    // } else {
      mongodb.Score.create(req.body, (err) => {
        if (err) {
          res.status(404).send("error en el servidor");
        } else {
          res.status(200).send("creado exitosamente");
        }
      });
    // }
  // });
});
router.post("/stage", (req, res) => {
  console.log(req.body)
      // mongodb.Stages.findById(req.body)
      mongodb.Stages.findByIdAndUpdate(req.body._id,req.body, (err,doc) => {
        
        if (err) {
          res.status(404).send("error en el servidor");
        } else {
          res.status(200).send("creado exitosamente");
        }
      });
    }
  
);
router.get("/stage/:idPerson/:stage", (req, res) => {
  // jwt.verify(req.token, tokenEncrypt, (err) => {
  //   if (err) {
      
    // } else {
      const idPerson = req.params.idPerson
      const stage = req.params.stage
      mongodb.Stages.find({_person: idPerson, etapa: stage}, (err, doc) => {
        if (err || doc.length===0 || !doc) {
          mongodb.Stages.create({
            _person: idPerson,
            etapa: stage,
            nivel: 'Monosílabas',
            sub_nivel: "nivel1"
          } ,(err, doc)=>{
            if(err){
              res.status(404).send("error en el servidor");
            }else{
              
              res.json(doc);
              res.status(200);
            }
          })
         
        } else {
          
          res.json(doc);
          res.status(200);
        }
      });
    // }
  });
// });
router.get("/getscore/:id", authToken, (req, res) => {
  jwt.verify(req.token, tokenEncrypt, (err) => {
    if (err) {
      res.status(404).send("Error en el servidor");
    } else {
      const id = req.params.id;
      

      mongodb.Score.find({ _id: id })
        .populate({
          path: "_person",
          select: "nombre apellido",
        })
        .populate({
          path: "_nivel"
        })
        .exec((err, doc) => {
          
          if (err) {
            res.status(404).send("error en el servidor");
          } else if (doc === null) {
            res.status(404).send("error en el servidor");
          } else {
            res.json(doc);
            res.status(200);
          }
        });
    }
  });
});

module.exports = router;
