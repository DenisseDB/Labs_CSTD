// require es equ a include
// modulo filesystem
const filesystem = require("fs");

// escribir archivos desde js, escribe hola.txt y el texto es el segundo parametro
filesystem.writeFileSync("hola.txt", "Hola desde node");

console.log("hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// con of me imprime cada elemento de arreglo
// for of me ayuda a recorrer el ciclo for
// in me imprime el indice
for (let item of arreglo) {
  // setTimeOut despues del tiempo que marquemos se va a ejecutar lo que mandemos dentro del mismo
  // no me hagas esto, hasta x segundos despues
  // vas a ejecutar la funcion que te digo aqui, cuando pasen los milisegndos que te especifico

  // va a imprimir el item acorde su valor, osea su valor en milisegundos
  setTimeout(() => {
    console.log(item);
  }, item);
}

// SERVIDOR WEB
const http = require("http");

const server = http.createServer((request, response) => {
  // nos de la url del servidor que estoy intentando de acceder
  console.log(request.url);
  // envio una respuesta
  // setHeader es para saber que tipo de contenido le estoy mandando
  response.setHeader("Content-type", "text/html");
  // lo que queremos escribir dentro del servidor html
  response.write("<h1>Hola mundo desde NODE<h1>");
  // enviamos la respuesta
  response.end();
});

// mi servidor escucha las peticiones en
server.listen(3000);
