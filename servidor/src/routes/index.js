const express = require("express"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");
const { mongo } = require("mongoose");
require("dotenv").config(),
  (router = express.Router()),
  (mongodb = require("../models/task"));

const tokenEncrypt = process.env.TOKEN_SECRET;
const saltRounds = 12;

function authToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
  if (typeof bearerheader !== "undefined") {
    req.token = bearerheader;
    next();
  } else {
    res.sendStatus(403);
  }
}
router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    try {
      mongodb.Persons.insertMany(
        {
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          image: req.body.image,
          password: hash,
        },
        (err) => {
          if (err) {
            res.status(404).json({
              status: 404,
              message: "!Error en el servidor!",
            });
          } else {
            res.status(200).json({
              status: 200,
              message: "Usuario creado con exito",
            });
          }
        }
      );
    } catch (error) {
      res.status(404).json({
        status: 404,
        message: "!Error en el servidor!",
      });
    }
  });
});

//Actualizar contraseña
router.post("/resetpass", (req, res) => {
  mongodb.Persons.find({
    email: req.body.email,
  }).exec((err, content) => {
    if (err || content === null || content.length === 0) {
      res.status(404).json({
        status: 404,
        message: "Correo Incorrecto",
        data: req.body.email,
      });
    } else {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        try {
          var conditions = {
            _id: content[0]._id,
          };
          var update = {
            password: hash,
          };
          mongodb.Persons.findOneAndUpdate(conditions, update, (err) => {
            if (err) {
              res.status(404).json({
                status: 404,
                message: "!No se pudo actualizar intentelo nuevamente!",
              });
            } else {
              res.status(200).json({
                status: 200,
                message: "Contraseña actualizada con exito",
              });
            }
          });
        } catch (error) {
          res.status(404).json({
            status: 404,
            message:
              "!Error en el servidor, intentelo nuevamente en unos minutos!",
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  mongodb.Persons.find({
    email: req.body.email,
  }).exec((err, content) => {
    if (err || content === null || content.length === 0) {
      res.status(404).json({
        status: 404,
        message: "!Usuario Incorrecto!",
      });
    } else {
      try {
        bcrypt.compare(
          req.body.password,
          content[0].password,
          (err, response) => {
            if (!response) {
              const data = {
                status: 204,
                message: "Correo/Contraseña no son correctos",
              };
              res.json(data);
            } else {
              const token = jwt.sign(req.body.email, tokenEncrypt);
              //Actualizamos los valores de inicio de sesion
              content[0].active_session = true;
              content[0].last_session = Date.now();
              content[0].token_session = token;
              content[0].save(function (err) {
                if (err) {
                  console.error("Error to update!");
                }
              });
              let user = content[0].toJSON();

              //Eliminamos informacion no necesaria
              delete user.password;
              delete user.createdAt;
              delete user.updatedAt;
              delete user.token_session;
              delete user.__v;
              delete user._id;

              const data = {
                status: 200,
                message: "Ingreso Exitoso",
                data: user,
                id: content[0]._id,
                token: token,
              };
              res.json(data);
            }
          }
        );
      } catch (error) {
        res.status(404).json({
          status: 404,
          message: "!Usuario Incorrecto!",
        });
      }
    }
  });
});

router.post("/session", (req, res) => {
  mongodb.Persons.findById(req.body.user).exec((err, content) => {
    if (err || content === null || content.length === 0) {
      res.status(404).json({
        status: false,
        message: "!Usuario no esta Activo!",
      });
    } else {
      try {
        if (
          content.token_session === req.body.token &&
          content.active_session === true
        ) {
          res.status(200).json({
            status: 200,
            message: "!Usuario Activo!",
            data: content,
            status: content.active_session,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "!Usuario no esta Activo!",
          });
        }
      } catch (error) {
        res.status(404).json({
          status: false,
          message: "!Usuario erroneo!",
        });
      }
    }
  });
});

router.post("/score", (req, res) => {
  mongodb.Score.create(req.body, (err) => {
    if (err) {
      res.status(404).send("error en el servidor");
    } else {
      res.status(200).send("creado exitosamente");
    }
  });
});

router.post("/stage", (req, res) => {
  mongodb.Stages.findByIdAndUpdate(req.body._id, req.body, (err, doc) => {
    if (err) {
      res.status(404).send("error en el servidor");
    } else {
      res.status(200).send("creado exitosamente");
    }
  });
});

router.get("/stage/:idPerson/:stage", (req, res) => {
  const idPerson = req.params.idPerson;
  const stage = req.params.stage;
  mongodb.Stages.find({ _person: idPerson, stage: stage }, (err, doc) => {
    if (err || doc.length === 0 || !doc) {
      mongodb.Stages.create(
        {
          _person: idPerson,
          stage: stage,
          level: "Monosílabas",
          sub_level: "nivel1",
        },
        (err, doc) => {
          if (err) {
            res.status(404).send("error en el servidor");
          } else {
            res.json(doc);
            res.status(200);
          }
        }
      );
    } else {
      res.json(doc);
      res.status(200);
    }
  });
});

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
          path: "_nivel",
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
