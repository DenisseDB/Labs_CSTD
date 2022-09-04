// modulos
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/*
Los archivos EJS (.ejs), son archivos que en su mayoría contienen código HTML, 
pero que también permiten escribir código JS, utilizando tags con el símbolo % de la siguiente forma: 
<% código de javascript %>.
*/
app.set("view engine", "ejs");
app.set("views", "views");

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

// ruta 3
const rutasSorteo = require("./routes/rutasSorteo");
app.use("/participa", rutasSorteo);

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
