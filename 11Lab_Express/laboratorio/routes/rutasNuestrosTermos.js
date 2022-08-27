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

router.use("/nuestrosTermos", (request, response, next) => {
  response.send(
    "<!DOCTYPE html>" +
      '<head><meta charset="UTF-8"></head>' +
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>' +
      '<link rel="stylesheet" href="styles.css" />' +
      "<h4>Daily modern</h4>" +
      '<div class="row">' +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      '<div class="card-image">' +
      ' <img src="img/termo3.webp" />' +
      ' <span class="card-title">Blue ocean sky</span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotter or colder, for longer.</li>" +
      "<li>- BPA/BPS-free and reusable.</li>" +
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>" +
      "</ul>" +
      "</div>" +
      " </div>" +
      "</div>" +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      '<div class="card-image">' +
      '<img src="img/termo4.jpeg" />' +
      '<span class="card-title">Wood fancy eyes </span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      " <li>- Keeps drinks hotter or colder, for longer.</li>" +
      "<li>- BPA/BPS-free and reusable.</li>" +
      " <li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>" +
      " </ul>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      ' <div class="card-image">' +
      '<img src="img/termo5.jpeg" />' +
      '<span class="card-title">White cocodrile </span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotter or colder, for longer.</li>" +
      "<li>- BPA/BPS-free and reusable.</li>" +
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>" +
      " </ul>" +
      " </div>" +
      "</div>" +
      "</div>" +
      "<h4>Coffee modern</h4>" +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      ' <div class="card-image">' +
      '<img src="img/termo6.jpeg" />' +
      '<span class="card-title">Basic Coffee </span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotterfor longer.</li>" +
      "<li>- With a cup for easily drink it.</li>" +
      "<li>- Heavy less</li>" +
      " </ul>" +
      " </div>" +
      "</div>" +
      "</div>" +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      ' <div class="card-image">' +
      '<img src="img/termo7.jpeg" />' +
      '<span class="card-title">Basic Coffee </span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotterfor longer.</li>" +
      "<li>- With a cup for easily drink it.</li>" +
      "<li>- Heavy less</li>" +
      " </ul>" +
      " </div>" +
      "</div>" +
      "</div>" +
      '<div class="col s12 m7 l4">' +
      '<div class="card">' +
      ' <div class="card-image">' +
      '<img src="img/termo8.jpeg" />' +
      '<span class="card-title">Basic Coffee </span>' +
      "</div>" +
      '<div class="card-content">' +
      "<ul>" +
      "<li>- Keeps drinks hotterfor longer.</li>" +
      "<li>- With a cup for easily drink it.</li>" +
      "<li>- Heavy less</li>" +
      " </ul>" +
      " </div>" +
      "</div>" +
      "</div>" +
      '<a href="/informes">¡Quiero el mio! Pedir informes</a><br>'
  );
});

module.exports = router;
