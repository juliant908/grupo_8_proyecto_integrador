const express = require("express");
const path = require("path");

const app = express();

const publichpath = path.resolve(__dirname, "./public");

// Protocolos GET y POST para las distintas páginas

app.use(express.static(publichpath));
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/index.html"))
);

// Set up del servidor

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
