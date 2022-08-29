const { response } = require("express");
const express = require("express");
const path = require("path");

const router = express.Router();

const correosEnviados = [];

router.get("/informes", (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "views", "informes", "envio.html")
  );
});

router.post("/informes", (request, response, next) => {
  console.log(request.body);
  let correo = "";
  correo = request.body.correo;
  correosEnviados.push(correo);
  response.render(path.join("informes", "correos.ejs"), {
    correo: correo,
    correosEnviados: correosEnviados,
  });
});

module.exports = router;
