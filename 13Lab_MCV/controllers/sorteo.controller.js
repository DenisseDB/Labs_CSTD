const path = require("path");
const SorteoEnviados = require("../models/sorteoEnviaddo.model");
// con exoert en en  require tiene acceso a esa variable
// la accion
exports.getSorteo = (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "views", "sorteo", "sorteoTermo.html")
  );
};

exports.postSorteo = (request, response, next) => {
  console.log(request.body);
  let nombre = "";
  nombre = request.body.nombre;

  const objetoSorteo = new SorteoEnviados(nombre);
  objetoSorteo.save();

  response.render(path.join("sorteo", "sorteo.ejs"), {
    nombre: objetoSorteo.nombre,
    nombresSorteo: SorteoEnviados.fetchAll(),
  });
};
