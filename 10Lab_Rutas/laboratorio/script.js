const filesystem = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/inicio") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write(
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>'
    );
    response.write('<link rel="stylesheet" href="styles.css" />');
    response.write("<h3>Bienvenido a la pagina oficial de Swell</h3>");
    response.write(
      "<p> tenemos 2 diferentes tipos de termos, escoge el que se acompla a tu estilo de vida </p>"
    );
    // primero
    response.write('<div class="row">');
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write('<div class="card-image">');
    response.write('<img src="img/termo1.png" alt="termo para agua"/>');
    response.write('<span class="card-title">Calacatta Gold Bottle</span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotter or colder, for longer.</li>");
    response.write("<li>- BPA/BPS-free and reusable.</li>");
    response.write(
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>"
    );
    response.write("</ul>");
    response.write("</div>");
    response.write("</div>");
    response.write("</div>");
    // segundo
    response.write('<div class="row">');
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write('<div class="card-image">');
    response.write('<img src="img/termo2.jpg" alt="termo con taza cafe"/>');
    response.write('<span class="card-title">Coffee cup</span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotter or colder, for longer.</li>");
    response.write("<li>- BPA/BPS-free and reusable.</li>");
    response.write("<li>- With a cup to easily drink your coffee.</li>");
    response.write("</ul>");
    response.write("</div>");
    response.write("</div>");
    response.write("</div>");
    response.write(
      '<a href="/nuestrosTermos">Ver todos nuestros termos</a><br>'
    );
    response.end();
  } else if (request.url == "/nuestrosTermos") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write(
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>'
    );
    response.write('<link rel="stylesheet" href="styles.css" />');
    response.write("<h4>Daily modern</h4>");
    response.write('<div class="row">');
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write('<div class="card-image">');
    response.write(' <img src="img/termo3.webp" />');
    response.write(' <span class="card-title">Blue ocean sky</span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotter or colder, for longer.</li>");
    response.write("<li>- BPA/BPS-free and reusable.</li>");
    response.write(
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>"
    );
    response.write("</ul>");
    response.write("</div>");
    response.write(" </div>");
    response.write("</div>");
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write('<div class="card-image">');
    response.write('<img src="img/termo4.jpeg" />');
    response.write('<span class="card-title">Wood fancy eyes </span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write(" <li>- Keeps drinks hotter or colder, for longer.</li>");
    response.write("<li>- BPA/BPS-free and reusable.</li>");
    response.write(
      " <li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>"
    );
    response.write(" </ul>");
    response.write("</div>");
    response.write("</div>");
    response.write("</div>");
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write(' <div class="card-image">');
    response.write('<img src="img/termo5.jpeg" />');
    response.write('<span class="card-title">White cocodrile </span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotter or colder, for longer.</li>");
    response.write("<li>- BPA/BPS-free and reusable.</li>");
    response.write(
      "<li>- Vacuum-insulated, food-grade 18/8 stainless steel.</li>"
    );
    response.write(" </ul>");
    response.write(" </div>");
    response.write("</div>");
    response.write("</div>");
    response.write("<h4>Coffee modern</h4>");
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write(' <div class="card-image">');
    response.write('<img src="img/termo6.jpeg" />');
    response.write('<span class="card-title">Basic Coffee </span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotterfor longer.</li>");
    response.write("<li>- With a cup for easily drink it.</li>");
    response.write("<li>- Heavy less</li>");
    response.write(" </ul>");
    response.write(" </div>");
    response.write("</div>");
    response.write("</div>");
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write(' <div class="card-image">');
    response.write('<img src="img/termo7.jpeg" />');
    response.write('<span class="card-title">Basic Coffee </span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotterfor longer.</li>");
    response.write("<li>- With a cup for easily drink it.</li>");
    response.write("<li>- Heavy less</li>");
    response.write(" </ul>");
    response.write(" </div>");
    response.write("</div>");
    response.write("</div>");
    response.write('<div class="col s12 m7 l4">');
    response.write('<div class="card">');
    response.write(' <div class="card-image">');
    response.write('<img src="img/termo8.jpeg" />');
    response.write('<span class="card-title">Basic Coffee </span>');
    response.write("</div>");
    response.write('<div class="card-content">');
    response.write("<ul>");
    response.write("<li>- Keeps drinks hotterfor longer.</li>");
    response.write("<li>- With a cup for easily drink it.</li>");
    response.write("<li>- Heavy less</li>");
    response.write(" </ul>");
    response.write(" </div>");
    response.write("</div>");
    response.write("</div>");
    response.write(
      '<a href="/informes">¡Quiero el mio! Pedir informes</a><br>'
    );
    response.end();
  } else if (request.url === "/informes" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write('<form action="informes" method="POST">');
    response.write("<fieldset>");
    response.write("<legend>Quiero recibir mas informes</legend>");
    response.write(
      '<label for="correo">Correo: </label><input type="text" name="correo" id="correo">'
    );
    response.write("<br><br>");
    response.write(
      '<label for="termoInteres">Me intersa el termo...</label><input type="text" name="termoInteres" id="termoInteres">'
    );
    response.write("</fieldset>");
    response.write('<input type="submit" value="enviarSolicitud">');
    response.write("</form>");
    response.end();
  } else if (request.url === "/informes" && request.method === "POST") {
    response.write(
      "<h1>Gracias hemos recibido tu duda y correo electronico :) </h1>"
    );
    response.write(
      "<p> queda atento a tu correo que en breve nos pondremos en contacto contigo </p>"
    );
    response.end();
  } else {
    response.statusCode = 404;
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write("<h1>ERROR 404</h1>");
    response.write("<h3>El recurso solicitado no existe</h3>");
  }
});

server.listen(3000);
