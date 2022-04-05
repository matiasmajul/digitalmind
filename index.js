document.addEventListener("DOMContentLoaded", () => {
  
});

// Variables
const IMAGENES = [
  '../images/job1.png',
  '../images/job2.png',
  '../images/job3.png',
  '../images/job4.png',
  '../images/job5.png'

];
const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
let posicionActual = 0;
let $botonRetroceder = document.querySelector('.next');
let $botonAvanzar = document.querySelector('.prev');
let $imagen = document.querySelector('.job-image');
let intervalo;

// Funciones
/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
  if (posicionActual >= IMAGENES.length - 1) {
    posicionActual = 0;
  } else {
    posicionActual++;
  }
  renderizarImagen();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function retrocederFoto() {
  if (posicionActual <= 0) {
    posicionActual = IMAGENES.length - 1;
  } else {
    posicionActual--;
  }
  renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen() {
  $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
renderizarImagen();




