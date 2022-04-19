const JOBS = [
  {
    job: 'Fotografía',
    url: 'job1.png',
    jobUrl: 'fotografia1'
  },
  {
    job: 'Fotografía',
    url: 'job2.png',
    jobUrl: 'fotografia2'

  },
  {
    job: 'Diseño gráfico',
    url: 'job3.png',
    jobUrl: 'diseno'

  },
  {
    job: 'Community Management',
    url: 'job4.png',
    jobUrl: 'community'

  },
  {
    job: 'Diseño & Community Management',
    url: 'job5.png',
    jobUrl: 'diseno&community'

  },
]

let position = 0;
const JOBS_CONTAINER = document.querySelector('.trabajos')
const CONTAINER = JOBS_CONTAINER.querySelector('.container-job');
const CAROUSEL = CONTAINER.querySelector('.carousel');
let btnBefore = CONTAINER.querySelector('.container-job__btn--before');
let btnAfter = CONTAINER.querySelector('.container-job__btn--after');
let pictureJob = CAROUSEL.querySelector('.carousel__img');
let titleJob = CAROUSEL.querySelector('.description__title');
let btnJob = CAROUSEL.querySelector('.description__btn')
let intervalo;
let newLocation;

let carouselAfter = document.createElement("div");
let carouselBefore = document.createElement("div");
carouselAfter.classList = "carousel--after carousel";
carouselBefore.classList = "carousel--before carousel";

carouselAfter.innerHTML = `
<div class="carousel__img carousel__img--after"></div>
<div class="description-back">
  <span class="description-back__title description-back__title--after"></span>
  <button class="description-back__btn">Ver más</button>
</div>
`
carouselBefore.innerHTML = `
<div class="carousel__img carousel__img--before"></div>
<div class="description-back">
  <span class="description-back__title description-back__title--before"></span>
  <button class="description-back__btn">Ver más</button>
</div>
`
if (window.screen.width > 780) {
  CONTAINER.appendChild(carouselAfter);
  CONTAINER.appendChild(carouselBefore);
}

let pictureAfter = document.querySelector('.carousel__img--after');
let titleAfter = document.querySelector('.description-back__title--after');
let pictureBefore = document.querySelector('.carousel__img--before');
let titleBefore = document.querySelector('.description-back__title--before');




// Funciones
/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function nextPicture() {
  if (position >= JOBS.length) {
    position = 0;
  } else {
    position++;
  }
  renderImage();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function previousPicture() {
  if (position == 0) {
    position = JOBS.length - 1;
  } else {
    position--;
  }
  renderImage();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de position
 */
function renderImage() {
  pictureJob.style.backgroundImage = `url(./images/${JOBS[position].url})`;
  titleJob.textContent = `${JOBS[position].job}`;
  newLocation = JOBS[position].jobUrl;
  if (window.screen.width > 780) {

    if (position == 0) {
      pictureAfter.style.backgroundImage = `url(./images/${JOBS[position + 1].url})`;
      pictureBefore.style.backgroundImage = `url(./images/${JOBS[JOBS.length - 1].url})`;
      titleAfter.textContent = `${JOBS[position + 1].job}`;
      titleBefore.textContent = `${JOBS[JOBS.length - 1].job}`;

    } else if (position == (JOBS.length - 1)) {
      pictureAfter.style.backgroundImage = `url(./images/${JOBS[0].url})`;
      pictureBefore.style.backgroundImage = `url(./images/${JOBS[position - 1].url})`;
      titleAfter.textContent = `${JOBS[0].job}`;
      titleBefore.textContent = `${JOBS[position - 1].job}`;

    }
    else {
      pictureAfter.style.backgroundImage = `url(./images/${JOBS[position + 1].url})`;
      pictureBefore.style.backgroundImage = `url(./images/${JOBS[position - 1].url})`;
      titleAfter.textContent = `${JOBS[position + 1].job}`;
      titleBefore.textContent = `${JOBS[position - 1].job}`;

    }
  }
}

// Eventos
btnAfter.addEventListener('click', nextPicture);
btnBefore.addEventListener('click', previousPicture);
btnJob.addEventListener('click', () => { location.href = `./pages/${newLocation}.html` })
// Iniciar
renderImage();

window.addEventListener("resize", event => {
  if (event.target.screen.width > 780) {
    CONTAINER.appendChild(carouselAfter)
    CONTAINER.appendChild(carouselBefore)
  }
  else {
    if (CONTAINER.children[3] != undefined) {

      CONTAINER.removeChild(carouselAfter)
      CONTAINER.removeChild(carouselBefore)
    }

  }
})

let formulario = document.querySelector(".form")
formulario.addEventListener("submit", event => {
  event.preventDefault()

  let formInput = document.querySelector('.form').children;

  emailjs.send('service_kof91w4', 'template_r3xszxe', {
    from_name: formInput[2].value,
    subject: formInput[6].value,
    message: formInput[8].value,
    email: formInput[4].value,
    to_email: 'majulmatias@gmail.com',
  })
    .then(function (response) {
      toggleModal('Mensaje enviado!')
      document.querySelector('.form').reset();
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      toggleModal('Error, volver a intentar!')
      console.log('FAILED...', error);
    });

})


function toggleModal(mensaje) {
  let modal = document.getElementById("myModal");
  modal.children[0].children[0].innerHTML = mensaje;
  modal.style.visibility = "visible";
  setTimeout(() => {
    modal.style.visibility = "hidden";
  }, 2000);
}
