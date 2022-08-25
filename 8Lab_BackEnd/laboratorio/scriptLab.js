const filesystem = require("fs");

// PROMDIO DE UN ARREGLO
const arreglo = [8, 9, 6, 9, 10, 3];
let suma = 0;
let cont = 0;

for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
  cont++;
}

let promedio = suma / cont;
console.log(promedio);

// RECIBE STRING Y LO PASO A TXT
function stringF(s1) {
  filesystem.writeFileSync("string.txt", s1);
}

stringF("hola este es el laboratorio 8 de Denisse Domiguez");

// AREA DE UN TRIANGULO
function areaTriangulo(base, altura) {
  let area = base * altura;
  console.log(area);
}

areaTriangulo(10, 45);
