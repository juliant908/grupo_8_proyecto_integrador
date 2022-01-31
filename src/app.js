const express = require("express");
const path = require("path");
const indexRouter = require("../src/routes/indexRouter");
const app = express();

// Template engine
app.set("view engine", "ejs");

// Configuración archivos públicos
app.use(express.static("public"));

// Protocolos GET y POST para las distintas páginas
app.set("views", "./src/views");

// Set up del servidor
app.use("/", indexRouter);
app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
