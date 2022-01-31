const express = require("express");
const router = express.Router();

// Controlador
const indexController = require("../controllers/indexController");

// Rutas
router.get("/", indexController.index);

// Export
module.exports = router;
