const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

// console.log(process.env);

// crear servidor de express
const app = express();

// Base de Datos
dbConnection()

// Directorio Publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
// TODO: CRUD: eventos

// escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
