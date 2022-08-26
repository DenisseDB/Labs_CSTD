const { request } = require("express");
const express = require("express");
const router = express.Router();

router.use("/inicio", (request, response, next) => {
  response.send(
    "<!DOCTYPE html>" +
      '<head><meta charset="UTF-8"></head>' +
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>' +
      '<link rel="stylesheet" href="styles.css" />' +
      " <h3>Bienvenido a la pagina oficial de Swell</h3>" +
      " <p> tenemos 2 diferentes tipos de termos, escoge el que se acompla a tu estilo de vida </p>" +
      // primero
      '<div class="row' +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      '<div class="card-image">' +
      '<img src="img/termo1.png" alt="termo para agua"/>' +
      '<span class="card-title">Calacatta Gold Bottle</span>' +
      "</div>" +
      '<div class="card-content' +
      "<ul>" +
      "<li>- Keeps drinks hotter or colder, for longer.</li>" +
      "<li>- BPA/BPS-free and reusable.</li>" +
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // segundo
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      '<div class="card-image">' +
      '<img src="img/termo2.jpg" alt="termo con taza cafe"/>' +
      '<span class="card-title">Coffee cup</span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotter or colder, for longer.</li>" +
      "<li>- BPA/BPS-free and reusable.</li>" +
      "<li>- With a cup to easily drink your coffee.</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<a href="/nuestrosTermos">Ver todos nuestros termos</a><br>'
  );
});

module.exports = router;
