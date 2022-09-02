const path = require("path");
const claseCorreosEnviados = require("../models/correoEnviado.model");
// con exoert en en  require tiene acceso a esa variable
// la accion
exports.getInformes = (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "views", "informes", "envio.html")
  );
};

exports.postInformes = (request, response, next) => {
  // obtemeos la cookie en la consola
  let cookie = request.get("Cookie").split("=")[1];
  console.log(cookie);

  // definir la cookie
  // creamos lacookie, ndamos su nmmbre y su valor
  const clicks = 1 + Number(cookie); // el cookie es un string, entonces lo hacemos numero con Number
  response.setHeader("Set-Cookie", "numeroClicks = " + clicks);

  console.log(request.body);
  let correo = "";
  correo = request.body.correo;

  const objetoCorreo = new claseCorreosEnviados(correo);
  objetoCorreo.save();

  response.render(path.join("informes", "correos.ejs"), {
    correo: objetoCorreo.mail,
    correosEnviados: claseCorreosEnviados.fetchAll(),
    // el priemro es la variable de ejs y el segudno la de este dosc
    clicks: clicks,
  });
};
