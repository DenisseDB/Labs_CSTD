const path = require("path");
const SorteoEnviados = require("../models/sorteoEnviaddo.model");
// con exoert en en  require tiene acceso a esa variable
// la accion
exports.getSorteo = (request, response, next) => {
  let cookie = 0;
  // es como un else if pero con catch la diferencia es que en catch
  // al no encontrar la condicion, no se termina, sino que el cdifo sigue
  try {
    cookie = request.get("Cookie").split("=")[1];
  } catch (e) {
    console.log(e);
  }
  response.sendFile(
    path.join(__dirname, "..", "views", "sorteo", "sorteoTermo.html")
  );
};

exports.postSorteo = (request, response, next) => {
  let cookie = 0;
  try {
    cookie = request.get("Cookie").split("=")[1];
  } catch (e) {
    console.log(e);
  }

  // definir la cookie
  // creamos lacookie, ndamos su nmmbre y su valor
  const clicks = 1 + Number(cookie); // el cookie es un string, entonces lo hacemos numero con Number
  response.setHeader(
    "Set-Cookie",
    "cantidadParticipantes= " + clicks + "; HttpOnly=true'"
  );

  console.log(request.body);
  let nombre = "";
  nombre = request.body.nombre;

  const objetoSorteo = new SorteoEnviados(nombre);
  objetoSorteo.save();

  response.render(path.join("sorteo", "sorteo.ejs"), {
    nombre: objetoSorteo.nombre,
    nombresSorteo: SorteoEnviados.fetchAll(),
    // desplegar cookie en la vista en la parte ejs
    clicks: clicks,
  });
};
