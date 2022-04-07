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

let carouselAfter = document.createElement("article");
let carouselBefore = document.createElement("article");
carouselAfter.classList = "carousel-after carousel"
carouselBefore.classList = "carousel-before carousel"

carouselAfter.innerHTML = `
<div class="after-image"></div>
<div class="job__description">
  <span>Fotografía</span>
  <button>Ver más</button>
</div>
`
carouselBefore.innerHTML = `
<div class="before-image"></div>
<div class="job__description">
  <span>Fotografía</span>
  <button>Ver más</button>
</div>
`

let contenedor = document.querySelector('.job-container')

if (window.screen.width >= 768) {
  contenedor.appendChild(carouselAfter)
  contenedor.appendChild(carouselBefore)
}

let imagenAfter = document.querySelector('.after-image');
let imagenBefore = document.querySelector('.before-image');

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
  if (posicionActual <= 0) {
    imagenAfter.style.backgroundImage = `url(${IMAGENES[posicionActual + 1]})`;
    imagenBefore.style.backgroundImage = `url(${IMAGENES[IMAGENES.length - 1]})`;

  } else if (posicionActual >= IMAGENES.length - 1) {
    imagenAfter.style.backgroundImage = `url(${IMAGENES[0]})`;
    imagenBefore.style.backgroundImage = `url(${IMAGENES[posicionActual - 1]})`;

  }
  else{
    imagenAfter.style.backgroundImage = `url(${IMAGENES[posicionActual + 1]})`;
    imagenBefore.style.backgroundImage = `url(${IMAGENES[posicionActual - 1]})`;
  }
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
renderizarImagen();

window.addEventListener("resize", event => {
  if (event.target.screen.width >= 768) {
    contenedor.appendChild(carouselAfter)
    contenedor.appendChild(carouselBefore)
  }
  else {
    contenedor.removeChild(carouselAfter)
    contenedor.removeChild(carouselBefore)
  }
})

let formulario = document.querySelector("form")
formulario.addEventListener("submit",event=>{
  event.preventDefault()
  console.log(event.target)

  
})
