const path = require("path");
const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");

exports.getNuevo = (request, response, next) => {
  // render es poner el ejs que queiro que me regrese
  response.render(path.join("usuarios", "nuevo.ejs"));
};

exports.postNuevo = (request, response, next) => {
  const usuario = new Usuario(
    request.body.user,
    request.body.contrasena,
    request.body.nombre
  );
  usuario
    .save()
    .then(() => {
      // encriptar el contra
      response.status(303).redirect("/enviar/informes");
    })
    .catch((err) => {
      console.log(err);
      response.status(303).redirect("new");
    });

  // insertar en la base de datos
};

exports.getLogin = (request, response, next) => {
  response.render(path.join("usuarios", "login.ejs"), {
    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
  });
};

exports.postLogin = (request, response, next) => {
  // recuperar usuario busco si existe
  return Usuario.fetchOne(request.body.user)
    .then(([rows, fielData]) => {
      console.log(rows);
      // row me da solo una consulta
      if (rows.length == 1) {
        // comparo lo que metio con la contra de la base de datos comapre me dice si son equivalentes
        bcrypt
          .compare(request.body.contrasena, rows[0].contrasena)
          .then((doMatch) => {
            // si coincide creo mis variables de sesion y lo dirigio a nfomes
            if (doMatch) {
              request.session.isLoggedIn = true;
              request.session.user = rows[0].nombre;
              return request.session.save((err) => {
                response.redirect("/enviar/informes");
              });
            }
            // no existe
            else console.log("El usuario no existe");
            return response.redirect("/user/login");
          })
          .catch((err) => {
            response.redirect("/user/login");
            console.log("4");
          });
      } else {
        console.log("el user o contra no existe");
        return response.render("error.ejs");
      }
    })
    .catch((err) => {
      console.log("6");
      console.log(err);
      return response.render("error.ejs");
    });
};

exports.logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/user/login"); //Este código se ejecuta cuando la sesión se elimina.
  });
};
