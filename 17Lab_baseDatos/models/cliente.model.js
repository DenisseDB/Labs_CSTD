const db = require("../util/database");

module.exports = class Clientes {
  constructor(nombreCliente) {
    this.nombre = nombreCliente;
  }

  save() {
    return db.execute("INSERT INTO clientes (nombre) VALUES (?)", [
      this.nombre,
    ]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM clientes");
  }
};
