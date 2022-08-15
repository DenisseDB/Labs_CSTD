const contra1 = document.getElementById("contra1");
const contra2 = document.getElementById("contra2");
const verificador = document.getElementById("verificador");

function validador() {
  // recuperamos el valor de los datos ingresados y hacemos la comparacion
  if (contra1.value == contra2.value) {
    alert("las contraseñas coinciden");
  } else {
    alert("las contraseñas no coinciden");
  }
}

// boton para verificar, al darle click va a la funcion valdador
verificador.addEventListener("click", validador);
