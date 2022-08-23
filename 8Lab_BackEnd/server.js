const http = require("http");
//const filesystem = require("fs");

// SERVIDOR WEB

const server = http.createServer((request, response) => {
  fs.createReadStream("index.html").pipe(response);
});

// mi servidor escucha las peticiones en
server.listen(4000);
