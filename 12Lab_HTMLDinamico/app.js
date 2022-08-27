// modulos
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// mandar css de manera estatica, la carpeta se llama public y ahi esta todo el css
app.use(express.static(path.join(__dirname, "public")));

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// ruta 1 POST Y GET
const rutasInformes = require("./routes/rutasInformes.routes");
app.use("/enviar", rutasInformes);

// ruta 2
const rutasNuestrosTermos = require("./routes/rutasNuestrosTermos");
const { request } = require("http");
app.use("/swell", rutasNuestrosTermos);

app.get("/creadora", (request, response, next) => {
  response.sendFile(path.join(__dirname, "views", "index.html"));
});

// error 404
app.use((request, response, next) => {
  console.log("middleware error 404");
  response.statusCode = 404;
  response.send("ERROR 404: el recurso solicitado no existe");
});

app.listen(3000);
