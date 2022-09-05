const nombresSorteo = [];

module.exports = class SorteoEnviados {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nombrePersona) {
    this.nombre = nombrePersona;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    nombresSorteo.push(this); // this del objeto actual
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  // fecthAll recuepera todo, al ser un metodo estatico se ejecuta sobre la clase, no sobre
  // una instancia de la clase
  static fetchAll() {
    return nombresSorteo;
  }
};
