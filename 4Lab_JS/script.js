// declarar variables con let
let pulpo_mundial = "Paul";
// no es recomendable utilizar var
var pulpo_voice = "Timoty";

// contantes para evitar modificaciones externas
const precio_comida_pulpos = 99.99;
console.log(precio_comida_pulpos);

// pruebas optimizadas assert
// imprimir en la consola el valor de alguna variable
// uso log para registrar algo en la bitacora
console.log(pulpo_mundial);

// la variable i muere despues de terminar el ciclo
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// con var la variable no muere nunca
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// como no murio i, se impime el valor mas alto al que llego despues del ciclo
// y eso es 10
console.log(i);

// info es cuando quiero decir que chequen esto porque hay info importante
// y aparece el icono de informcion en la consola
console.info("Esto es infomracion");

// imprimir advertencias con icono y color amarillo
console.warn("advertencia");

// mandar errores con tache y color rojo
console.error("error");

// assert sirve para validar algo
// lo usamos para hacer pruebas del programa y en caso de que
// la prueba falle, se manda error
// ASEGURAR QUE LA FUNCION SEA VERDADERA Y FUNCIONE CORRECTAMENTE
console.assert(1 === 1); // no manda nada porque es true
console.assert(1 === 2); // manda que la prueba falla, es false

// === compara valor y tipo de dato
// == compara valor

// alerta, al incio nos manda un box con la alerta y el texto
alert("esto es una alerta");

// preguntar algo al usuario con prompt
const nombre = prompt("como te llamas?");
console.log("Hola " + nombre + "!");

// box para confirmar una pregunta, con cancelar y aceptar
const is_hungry = confirm("tienes hambre?");

if (is_hungry) {
  alert("ya mero es hora de la comida");
} else {
  alert("tienes que comer bien aunque no tegas hambre");
}
