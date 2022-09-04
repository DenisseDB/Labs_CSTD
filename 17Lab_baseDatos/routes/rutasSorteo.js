const express = require("express");
const sorteoController = require("../controllers/sorteo.controller");
const router = express.Router();

// manda llamar la accion del controlador
// defino la ruta y le digo que accion del controlador debe ejeutar
router.get("/sorteo", sorteoController.getSorteo);
router.get("/giveaway", sorteoController.getSorteo);

router.post("/sorteo", sorteoController.postSorteo);

module.exports = router;
