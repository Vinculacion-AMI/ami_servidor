const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//example
const TaskSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});
const persons = Schema(
  {
    nombre: String,
    apellido: String,
    correo: String,
    imagen: String,
    contrasena: String,
  },
  {
    timestamps: true,
  }
);
const scores = Schema(
  {
    _person: {
      type: mongoose.Schema.ObjectId,
      ref: "Persons",
    },
    _nivel: {
      type: mongoose.Schema.ObjectId,
      ref: "Stages",
      
    },
    Ptotal: String,
  },
  {
    timestamps: true,
  }
);
const stages = Schema({
  _person: mongoose.Schema.ObjectId,
  etapa: String,
  nivel: String,
})
const Persons = mongoose.model("Persons", persons),
  Score = mongoose.model("Score", scores),
  Stages = mongoose.model("Stages", stages);
module.exports = {
  Persons,
  Score,
  Stages
};
