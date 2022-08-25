const http = require("http");
const filesystem = require("fs");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  // aqui mando el html que quiero que se escriba, para eso uso readFileSync y el nombre dle html
  response.write(filesystem.readFileSync("index.html"));
  response.end();
});

server.listen(3000);
