const express = require("express");

const router = express.Router();

router.get("/informes", (request, response, next) => {
  let html =
    "<!DOCTYPE html>" +
    '<head><meta charset="UTF-8"></head>' +
    '<form action="informes" method="POST">' +
    "<fieldset>" +
    "<legend>Quiero recibir mas informes</legend>" +
    '<label for="correo">Correo: </label><input type="text" name="correo" id="correo">' +
    "<br><br>" +
    '<label for="termoInteres">Me intersa el termo...</label><input type="text" name="termoInteres" id="termoInteres">' +
    "</fieldset>" +
    '<input type="submit" value="enviarSolicitud">' +
    "</form>";
  response.send(html);
});

router.post("/informes", (request, response, next) => {
  console.log(request.body);
  let html =
    "<!DOCTYPE html>" +
    '<head><meta charset="UTF-8"></head>' +
    "<h1>Gracias hemos recibido tu interes del termo " +
    request.body.termoInteres + // con request.body. agregamos el id del objeto que queremos amnipular obtenido del get
    " y correo electronico :) </h1>" +
    "<p> queda atento a tu correo " +
    request.body.correo +
    " que en breve nos pondremos en contacto contigo </p>";
  response.send(html);
});

module.exports = router;
