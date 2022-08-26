// modulos
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// ruta 1 POST Y GET
const rutasInformes = require("./routes/rutasInformes.routes");
app.use("/enviar", rutasInformes);

// ruta 2
const rutasNuestrosTermos = require("./routes/rutasNuestrosTermos");
app.use("/swell", rutasNuestrosTermos);

// error 404
app.use((request, response, next) => {
  console.log("middleware error 404");
  response.statusCode = 404;
  response.send("ERROR 404: el recurso solicitado no existe");
});

app.listen(3000);
