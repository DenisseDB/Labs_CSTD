const path = require("path");
const Clientes = require("../models/cliente.model");

exports.getClientes = (request, response, next) => {
  Clientes.fetchAll()
    .then(([rows, fieldData]) => {
      console.log(rows);
      response.render(path.join("clientes", "clientes.ejs"), {
        clientes: rows,
      });
    })
    .catch((err) => {
      console.log(err);
      response.render("error.ejs");
    });
};
