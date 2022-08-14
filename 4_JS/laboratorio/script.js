// Ejercio 1, solicitar un numero y crear una tabla acorde al numero de entrada
// Solicitar numero
let numero_solicitado = prompt("Ingresa un numero: ");

// Creacion de tabla
function tabla_numeros() {
  let creacionTabla = "<table>";
  for (let i = 0; i < numero_solicitado; i++) {
    creacionTabla += "<tr>";
    creacionTabla +=
      "<td>" +
      i +
      "</td>" +
      "<td>" +
      i * i +
      "</td>" +
      "<td>" +
      i * i * i +
      "</td>";
    creacionTabla += "</tr>";
  }
  creacionTabla += "</table>";
  return creacionTabla;
}

// lo mandamos agregar al html
document.getElementById("res1").innerHTML = tabla_numeros();

// Ejercio 2, validar si la suma de dos numeros es correcta
// math.floor() redondea un numero
// math. random() nos da un numero aleatorio
var numero1 = Math.floor(Math.random() * 10);
var numero2 = Math.floor(Math.random() * 10);
resCorrecto = numero1 + numero2;

var tiempoinicio = Date.now();
const resUsuario = prompt(
  "¿Cuanto da la sumatoria entre " + numero1 + " y " + numero2 + "?"
);
var tiempofin = Date.now();

function validarSuma() {
  let resp = "El resultado esperado es: " + resCorrecto + "<br></br>";

  if (resCorrecto == resUsuario) {
    resp = resp + "Tu respuesta fue correcta <br></br>";
  } else {
    resp =
      resp +
      "Tu respuesta fue incorrecta, tu nos diste " +
      parseInt(resUsuario) +
      "<br></br>";
  }

  let tiempo = (tiempofin - tiempoinicio) / 1000;
  resp = resp + "Tardaste " + tiempo + " segundos en contestar";
  return resp;
}

document.getElementById("res2").innerHTML = validarSuma();

// Ejercicio 3 sacar la cantidad de numeros -, +, 0's
const arreglo = [
  12, -23, 0, 78, 65, -98, 0, 76, 54, -8, 0, 0, 15, -2, -65, 0, 1, 87,
];
function contadorArreglo() {
  var contNegativos = 0;
  var contPositivos = 0;
  var contCeros = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] == 0) {
      contCeros += 1;
    } else if (arreglo[i] < 0) {
      contNegativos += 1;
    } else {
      contPositivos += 1;
    }
  }
  let respuesta =
    "Numeros enteros: " +
    contPositivos +
    " <br></br>" +
    "Numeros negativos: " +
    contNegativos +
    " <br></br>" +
    "0's: " +
    contCeros +
    " <br></br>";
  return respuesta;
}

document.getElementById("res3").innerHTML = contadorArreglo();

// Ejercicio 4 Promedio de matrices
function promedioMatriz() {
  const matriz = [
    [9, 19, 8],
    [3, 40, 98],
    [2, 54, 1],
  ];

  let matrizConPromedios = [];
  var sumaNumeros = 0;

  // recorremos
  for (let i = 0; i < matriz.length; i++) {
    sumaNumeros = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      sumaNumeros += matriz[i][j];
    }
    matrizConPromedios.push(sumaNumeros / matriz[i].length);
  }
  let regresarMatriz = "Los promedios son: " + "[" + matrizConPromedios + "]";
  return regresarMatriz;
}

document.getElementById("res4").innerHTML = promedioMatriz();

// Ejercicio 5 numero inverso
var numero = Math.random();
function numeroInverso() {
  let numeroOriginal = " El numero original es " + numero;
  // con parse int hacemos string un numero
  const invertirNumero = parseInt(
    numero.toString().split("").reverse().join("")
  );
  let impresion =
    numeroOriginal + " <br></br>" + " Numero invertido " + invertirNumero;
  return impresion;
}

document.getElementById("res5").innerHTML = numeroInverso();

// Ejercicio 6 poo
// para la ultima aplicamos docuement.write
class Vuelo {
  constructor(origen, destino, linea) {
    this.origen = origen;
    this.destino = destino;
    this.linea = linea;
  }
  mostrar() {
    return `${this.origen} es el pais de origen, con un destino a ${this.destino}, operado por ${this.linea} actualmente`;
  }
}

class Aerlolinea extends Vuelo {
  constructor(origen, destino, linea, estado) {
    super(origen, destino, linea);
    this.estado = estado;
  }
  operando() {
    return `Origen: ${this.origen}: Destino a ${this.destino}  Aerolinea: ${this.linea}, se encuentra ${this.estado}`;
  }
}

const vuelo1 = new Vuelo("Francia", "Belgica", "Iberia");
const vuelo2 = new Vuelo("Francia", "Mexico", "AirFrance");
const vuelo3 = new Aerlolinea("Francia", "Mexico", "Iberia", "Embarcando");
const vuelo4 = new Aerlolinea("Francia", "Belgica", "AirFrance", "Cancelado");
console.log(vuelo3.operando());
console.log(vuelo4.operando());

document.write(
  "<h3> Ejercicio 4: Vuelos partientes del Aeropuerto Paris-Charles de Gaulle </h3>"
);
document.write("Vuelo 1-> " + vuelo1.mostrar());
document.write("</br> Vuelo 2-> " + vuelo2.mostrar());
document.write("<h5>Estado de vuelos: </h5>");
document.write("Vuelo 1-> " + vuelo3.operando());
document.write("</br> Vuelo 2-> " + vuelo4.operando());
