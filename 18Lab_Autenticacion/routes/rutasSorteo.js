const express = require("express");
const sorteoController = require("../controllers/sorteo.controller");
const router = express.Router();
const isAuth = require("../util/isAuth.js");

// manda llamar la accion del controlador
// defino la ruta y le digo que accion del controlador debe ejeutar
router.get("/sorteo", isAuth, sorteoController.getSorteo);
router.get("/giveaway", isAuth, sorteoController.getSorteo);

router.post("/sorteo", sorteoController.postSorteo);

module.exports = router;
