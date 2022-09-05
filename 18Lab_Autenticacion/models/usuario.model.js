const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(unUsername, unContra, unNombre) {
    this.user = unUsername;
    this.contra = unContra;
    this.nombre = unNombre;
  }

  save() {
    return bcrypt
      .hash(this.contra, 12)
      .then((newContra) => {
        return db.execute(
          "INSERT INTO usuarios (user, contrasena, nombre) VALUES (?, ?, ?)",
          [this.user, newContra, this.nombre]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    return db.execute("SELECT * FROM usuarios");
  }

  static fetchOne(unUsername) {
    return db.execute("SELECT * FROM usuarios WHERE user = ? ", [unUsername]);
  }
};
