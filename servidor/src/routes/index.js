const express = require("express"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  key1 = require("../config");
const { mongo } = require("mongoose");
require("dotenv").config(),
  (router = express.Router()),
  (mongodb = require("../models/task"));

const tokenEncrypt = key1;
console.log(key1)
router.get("/example", (req, res) => {
  res.send("Hola mundo");
});

function authToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
  // console.log(bearerheader);
  if (typeof bearerheader !== "undefined") {
    req.token = bearerheader;
    next();
  } else {
    res.sendStatus(403);
  }
}
router.post("/login", (req, res, next) => {
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


router.post("/register", (req, res, next ) => {
  //console.log(req.body);

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

router.post("/score", authToken, (req, res) => {

  jwt.verify(req.token, tokenEncrypt, (err) => {
    if (err) {
      res.status(404).send("error en el servidor1");
    } else {
      mongodb.Score.create(req.body, (err) => {
        if (err) {
          res.status(404).send("error en el servidor");
        } else {
          res.status(200);
          res.json("creado exitosamente");
        }
      });
    }
  });
});

router.get("/getscore/:id", authToken, (req, res) => {
  jwt.verify(req.token, tokenEncrypt, (err) => {
    if (err) {
      res.status(404).send("no mames te la creiste");
    } else {
      const id = req.params.id;
      console.log(id);

      mongodb.Score.find({ _id: id })
        .populate({
          path: "person",
          select: "nombre apellido",
        })
        .exec((err, doc) => {
          console.log(doc);
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
