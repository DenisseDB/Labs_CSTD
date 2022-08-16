const contra1 = document.getElementById("contra1");
const contra2 = document.getElementById("contra2");
const verificador = document.getElementById("verificador");
const total = document.getElementById("total");

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

let state = {
  termo1: {
    precio: 12,
    cantidad: 0,
  },
  termo2: {
    precio: 15,
    cantidad: 0,
  },
  termo3: {
    precio: 10,
    cantidad: 0,
  },
  total: 0,
  iva: 0,
};

function anadirCarrito(event) {
  state[event.target.dataset.name].cantidad = event.target.value;
  state.total =
    state.termo1.precio * state.termo1.cantidad +
    state.termo2.precio * state.termo2.cantidad +
    state.termo3.precio * state.termo3.cantidad;
  state.iva = state.total * 0.1;
  console.log(state);

  total.innerHTML = `Total: $${state.total} IVA: $${state.iva} FINAL: ${
    state.total + state.iva
  }`;
}

document
  .querySelectorAll("#agregar")
  .forEach((agregar) => agregar.addEventListener("click", anadirCarrito));
