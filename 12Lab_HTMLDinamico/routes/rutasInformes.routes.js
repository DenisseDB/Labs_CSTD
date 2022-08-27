const { response } = require("express");
const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/informes", (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "views", "informes", "envio.html")
  );
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
