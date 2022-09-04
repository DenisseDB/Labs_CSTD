const correosEnviados = [];

module.exports = class claseCorreosEnviados {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(correoInput) {
    this.mail = correoInput;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    correosEnviados.push(this); // this del objeto actual
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  // fecthAll recuepera todo, al ser un metodo estatico se ejecuta sobre la clase, no sobre
  // una instancia de la clase
  static fetchAll() {
    return correosEnviados;
  }
};
