const path = require("path");
const Clientes = require("../models/cliente.model");
const SorteoEnviados = require("../models/sorteoEnviaddo.model");
// con exoert en en  require tiene acceso a esa variable
// la accion
exports.getSorteo = (request, response, next) => {
  console.log(request.cookies);
  const numero_clicks = request.cookies.numero_clicks
    ? request.cookies.numero_clicks
    : 0;
  // es como un else if pero con catch la diferencia es que en catch
  // al no encontrar la condicion, no se termina, sino que el cdifo sigue
  //const ultimoNombre = request.session.ultimoNombre ? request.session.ultimoNombre : false;
  Clientes.fetchAll()
    .then(([rows, fieldData]) => {
      console.log("Personas participando: ");
      console.log(rows);
      response.render(path.join("sorteo", "sorteo.ejs"), {
        clicks: request.cookies.numero_clicks
          ? request.cookies.numero_clicks
          : numero_clicks,
        clientes: rows,
      });
    })
    .catch((err) => {
      console.log(err);
      response.render("error.ejs");
    });
};

exports.postSorteo = (request, response, next) => {
  let nombre = "";
  nombre = request.body.nombre;

  const objetoSorteo = new SorteoEnviados(nombre);
  objetoSorteo.save();

  const numero_clicks = request.cookies.numero_clicks
    ? Number(request.cookies.numero_clicks)
    : 1;
  response.cookie("numero_clicks", numero_clicks, {
    httpOnly: true,
  });
  console.log(request.cookies);
  console.log(request.body);

  request.session.nombre = objetoSorteo;

  response.render(path.join("sorteo", "sorteo.ejs"), {
    nombre: objetoSorteo.nombre,
    nombresSorteo: SorteoEnviados.fetchAll(),
    clicks: numero_clicks,
  });
};
