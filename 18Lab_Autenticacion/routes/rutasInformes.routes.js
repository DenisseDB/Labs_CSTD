const express = require("express");
const infoController = require("../controllers/informes.controller");
const router = express.Router();
const isAuth = require("../util/isAuth.js");

// manda llamar la accion del controlador
router.get("/informes", isAuth, infoController.getInformes);

router.post("/informes", isAuth, infoController.postInformes);

module.exports = router;
