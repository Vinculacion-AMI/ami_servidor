const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//example
const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },

});
const persons = new Schema(
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

persons.methods.encryptPassword = async (contrasena) =>{
  const salt = await bcrypt.genSalt(10);
  bcrypt.hash(contrasena, salt);
};


const score = Schema(
  {
    person: {
      type: mongoose.Schema.ObjectId,
      ref: "Persons",
    },
    nivel: String,
    Ptotal: String,
  },
  {
    timestamps: true,
  }
);
const Persons = mongoose.model("Persons", persons),
  Score = mongoose.model("Score", score);





module.exports = {
  Persons,
  Score,
};
