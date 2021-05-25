const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const persons = Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: false },
    email: { type: String, lowercase: true, required: true },
    image: { type: String, required: false },
    last_session: { type: Date, default: null },
    password: { type: String, required: true },
    token_session: { type: String, default: null },
    active_session: { type: Boolean, default: false },
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
  stage: String,
  level: String,
  sub_level: String,
});
const Persons = mongoose.model("Persons", persons),
  Score = mongoose.model("Score", scores),
  Stages = mongoose.model("Stages", stages);

module.exports = {
  Persons,
  Score,
  Stages,
};
