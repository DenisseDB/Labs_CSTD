const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/inicio", (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "views", "termos", "tipos.html")
  );
});

router.use("/nuestrosTermos", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "termos", "menu.html"));
});

module.exports = router;
