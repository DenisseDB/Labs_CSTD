// declarar variables con let
let pulpo_mundial = "Paul";
// no es recomendable utilizar var
var pulpo_voice = "Timoty";

// pruebas optimizadas assert
// imprimir en la consola el valor de alguna variable
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
