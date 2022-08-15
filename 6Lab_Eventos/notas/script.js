// DOM es crear los eventos ya cciones
// es dar click, ooner el pulsro arriba etc
// permite manupulr a pagina para que tenga el comportamiento que le queremosd dar
// https://www.w3schools.com/tags/ref_eventattributes.asp

const boton_cambio_animo = document.getElementById("cambio_animo");
// con esta variable validamos el estado del animo y actual acorde en la funcion anonima
let is_happy = false;

function feliz() {
  // cambiar el html interno del contenedor_imagen
  // cambiamos la imagen
  const cont_contenedor_imagen = document.getElementById("contenedor_imagen");
  // INNERTEXT -> LO QUE PONGA LO VA A PNER COMO TEXTO
  // INERHTML PUEDES AGREGAR ATRIBUTOS AL HTML
  // aqui hacemos la edicion directa con el html
  cont_contenedor_imagen.innerHTML =
    '<img src="img/pulpoFeliz.jpeg" alt="pulpo feliz" />';
  // cambio el texto interno del elemento que estamos obteniendo
  boton_cambio_animo.innerText = "Triste";
  is_happy = true;
}

function triste() {
  const cont_contenedor_imagen = document.getElementById("contenedor_imagen");
  cont_contenedor_imagen.innerHTML =
    '<img src="img/pulpoEnojado.webp" alt="pulpo enojado" />';
  boton_cambio_animo.innerText = "Feliz";
  is_happy = false;
}

// cuando le de click al boton
boton_cambio_animo.onclick = () => {
  if (is_happy) {
    triste();
  } else {
    feliz();
  }
};
