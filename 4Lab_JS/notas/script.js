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

// declarar funciones
function comer() {
  const comida = "Picadillo";
  console.log(comida);
  return true;
}
// en esta nueva constante, mando llamar la funcion comida
// apunta a la funcion
const comida = comer;

// box para confirmar una pregunta, con cancelar y aceptar
const is_hungry = confirm("tienes hambre?");

if (is_hungry) {
  alert("ya casi es hora de la comida");
  comida();
} else {
  alert("tienes que comer bien aunque no tegas hambre");
}

// FUNCIONES MODERNAS
// despues de la flecha va el valor de retorno

// aqui la declaro como const para poder imprimirla
const anon = () => console.log("funcion anonimo");
// la impprimo en consola
anon();

// recibe un valor que es platillo
const platillo_fuerte = (platillo) => {
  console.log("La " + platillo + " esta delicioso");
};
// le mando el valor de entrada
platillo_fuerte("milanesa");

// ARREGLOS
const menu = ["Papa al horno", "Arrachera", "Nopales"];
console.log(menu); // imprime todo lo que se encuentra en el arreglo

// con let p in menu puedo recorrer todas las llaves de mi arreglo
for (let p in menu) {
  console.log(menu[p]);
}

// otra manera de recorrer el arreglo
for (let p of menu) {
  console.log(p);
}

// en la localidad 10 se agrega pasta
menu[10] = "Pasta";
console.log(menu);

menu.lenght = 2;
console.log(menu);

// ARREGLOS ASOCIATIVOS
// en vez de indice podemos poner llaves
menu["postre"] = "Ate de queso";
console.log(menu);

// HTML DINAMICO
// recuperar el elemento con el id que le de
const boton = document.getElementById("boton_imagen");

// cuando le des click te va a mostrar algo
boton.onclick = () => {
  console.log("se hizo click");
  // aqui agregamos al html la imagen del pulpo despues de que se hizo el click
  document.getElementById("contenedor_imagen").innerHTML =
    ' <img src = "img/pulpo1.jpeg" alt="foto de un pulpo">';
};
