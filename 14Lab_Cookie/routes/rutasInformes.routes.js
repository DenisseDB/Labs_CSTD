const express = require("express");
const infoController = require("../controllers/informes.controller");
const router = express.Router();

// manda llamar la accion del controlador
router.get("/informes", infoController.getInformes);

router.post("/informes", infoController.postInformes);

module.exports = router;
