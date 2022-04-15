const JOBS = [
  {
    job: 'Fotografía',
    url: '../images/job1.png',
    jobUrl: 'fotografia1'
  },
  {
    job: 'Fotografía',
    url: '../images/job2.png',
    jobUrl: 'fotografia2'

  },
  {
    job: 'Diseño gráfico',
    url: '../images/job3.png',
    jobUrl: 'diseno'

  },
  {
    job: 'Community Management',
    url: '../images/job4.png',
    jobUrl: 'community'

  },
  {
    job: 'Diseño & Community Management',
    url: '../images/job5.png',
    jobUrl: 'diseno&community'

  },
]

let posicionActual = 0;
let $botonRetroceder = document.querySelector('.before');
let $botonAvanzar = document.querySelector('.after');
let $imagen = document.querySelector('.job-image');
let jobTitle = document.querySelector('.job__title');
let jobBtn = document.querySelector('.job_btn')
let contenedor = document.querySelector('.job-container');
let intervalo;
let newLocation;

let carouselAfter = document.createElement("article");
let carouselBefore = document.createElement("article");
carouselAfter.classList = "carousel-after carousel"
carouselBefore.classList = "carousel-before carousel"

carouselAfter.innerHTML = `
<div class="after-image"></div>
<div class="job__description">
  <span class="job__title job__title-after"></span>
  <button class="job_btn">Ver más</button>
</div>
`
carouselBefore.innerHTML = `
<div class="before-image"></div>
<div class="job__description">
  <span class="job__title job__title-before"></span>
  <button class="job_btn">Ver más</button>
</div>
`
if (window.screen.width > 780) {
  contenedor.appendChild(carouselAfter);
  contenedor.appendChild(carouselBefore);
}

let imagenAfter = document.querySelector('.after-image');
let jobTitleAfter = document.querySelector('.job__title-after');
let imagenBefore = document.querySelector('.before-image');
let jobTitleBefore = document.querySelector('.job__title-before');

// Funciones
/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
  if (posicionActual >= JOBS.length) {
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
  if (posicionActual == 0) {
    posicionActual = JOBS.length - 1;
  } else {
    posicionActual--;
  }
  renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen() {
  $imagen.style.backgroundImage = `url(${JOBS[posicionActual].url})`;
  jobTitle.textContent = `${JOBS[posicionActual].job}`;
  newLocation = JOBS[posicionActual].jobUrl;
  if (window.screen.width > 780) {

    if (posicionActual == 0) {
      imagenAfter.style.backgroundImage = `url(${JOBS[posicionActual + 1].url})`;
      imagenBefore.style.backgroundImage = `url(${JOBS[JOBS.length - 1].url})`;
      jobTitleAfter.textContent = `${JOBS[posicionActual + 1].job}`;
      jobTitleBefore.textContent = `${JOBS[JOBS.length - 1].job}`;

    } else if (posicionActual == (JOBS.length - 1)) {
      imagenAfter.style.backgroundImage = `url(${JOBS[0].url})`;
      imagenBefore.style.backgroundImage = `url(${JOBS[posicionActual - 1].url})`;
      jobTitleAfter.textContent = `${JOBS[0].job}`;
      jobTitleBefore.textContent = `${JOBS[posicionActual - 1].job}`;

    }
    else {
      imagenAfter.style.backgroundImage = `url(${JOBS[posicionActual + 1].url})`;
      imagenBefore.style.backgroundImage = `url(${JOBS[posicionActual - 1].url})`;
      jobTitleAfter.textContent = `${JOBS[posicionActual + 1].job}`;
      jobTitleBefore.textContent = `${JOBS[posicionActual - 1].job}`;

    }
  }
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
jobBtn.addEventListener('click', () => { location.href = `./pages/${newLocation}.html` })
// Iniciar
renderizarImagen();

window.addEventListener("resize", event => {
  if (event.target.screen.width > 780) {
    contenedor.appendChild(carouselAfter)
    contenedor.appendChild(carouselBefore)
  }
  else {
    if(contenedor.children[3]!= undefined)
    {

      contenedor.removeChild(carouselAfter)
      contenedor.removeChild(carouselBefore)
    }
    
  }
})

let formulario = document.querySelector("form")
formulario.addEventListener("submit", event => {
  event.preventDefault()
  console.log(event.target)


})
