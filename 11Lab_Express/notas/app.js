// modulos
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//bodyparser objeto body es donde se accede a lo que mandas al post
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
// middelewre es un software medio

// use es la funcion que define un middleware, cualquier cosa la tienes que pasar por el
// middleware que re dire a conrinucion
// recibe una funcion con 3 parametros
// next es una funcion que ejecutamos para que se avance al siguiente middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// este es el siguiente middleware que se llega por medio del next anterior
app.use((request, response, next) => {
  console.log("Otro middleware!");
  next();
});

//Para agregar rutas:
// primero se ponene las especificas y luego as generales
// UNA RESPUESTA OPOR RUTA
// si la ruta no coincide se salta al suguiente middleware
// si coincide hace lo de la ruta hola
const rutas_trivia = require("./routes/trivia.routes");
app.use("/adivina", rutas_trivia);

// especifica
app.use("/hola/denisse", (request, response, next) => {
  response.send("hola desde la ruta hola denisse");
});

//general
app.use("/hola", (request, response, next) => {
  response.send("hola desde la ruta hola");
});

app.use((request, response, nect) => {
  console.log("tercer middleware");
  response.statusCode = 404;
  response.send("ERROR 404: el recurso solicitado no existe");
});

app.listen(3000);
