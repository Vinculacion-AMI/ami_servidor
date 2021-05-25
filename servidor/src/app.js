const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const uri = "mongodb://localhost:27017" + "/ami";

dotenv.config();

mongoose.connect(
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_PATH_DEV
    : process.env.MONGO_PATH,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", function () {
    console.log("Conection has been made!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });
//mode debug mongose
mongoose.set("debug", true);

//importando rutas
const indexRoutes = require("./routes/index");

//settings
app.set("port", process.env.PORT_APP || 4000);

//middlewares
app.use(morgan("dev"));
// autorización CORS
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
//Autorización del uso de json
app.use(express.json());
//Estudio url body-parse
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/", indexRoutes);

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
