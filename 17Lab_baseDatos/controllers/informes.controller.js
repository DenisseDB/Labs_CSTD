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
  console.log(request.body);
  let correo = "";
  correo = request.body.correo;

  const objetoCorreo = new claseCorreosEnviados(correo);
  objetoCorreo.save();

  response.render(path.join("informes", "correos.ejs"), {
    correo: objetoCorreo.mail,
    correosEnviados: claseCorreosEnviados.fetchAll(),
  });
};
