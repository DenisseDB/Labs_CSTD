const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/cliente.controller");

router.get("/", clientesController.getClientes);

module.exports = router;
