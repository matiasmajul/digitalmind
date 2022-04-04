const SEGUNDOS_ENTRE_DIAPOSITIVAS = 2;
let CAROUSEL = document.querySelector('.carousel')
let SLIDERS = CAROUSEL.querySelectorAll('.carousel__slider');

let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let posicionActual;



async function autoPlay(posicionPartida = SLIDERS.length) {
  
  /*const SIGUIENTE_POSICION = SLIDERS.length - 1 > posicionPartida ? posicionPartida + 1 : 0;
  posicionActual= SIGUIENTE_POSICION;
  // Mueve el scroll al siguiente slider

  SLIDERS[SIGUIENTE_POSICION].scrollIntoView({  block: "center"});
*/
  // Retardo antes de volver a ejecutarse
  await new Promise((res) => {
    setTimeout(res, SEGUNDOS_ENTRE_DIAPOSITIVAS * 1000);
  });
  

  // Creamos un objeto IntersectionObserver
  observerCarousel = new IntersectionObserver((entries) => {
    // Comprobamos todas las intesecciones.
    entries.forEach((entry) => {
      // Si es observable, entra
      if (entry.isIntersecting) {
        // Activamos
        autoPlay(posicionActual)
      }
    });
  });
  // Añado a mi Observable que quiero observar. En este caso el carousel
  observerCarousel.observe(CAROUSEL);
}


function nextPicture() {
  // Mueve el scroll al siguiente slider
  posicionActual+1< SLIDERS.length? posicionActual+=1:posicionActual=0
  SLIDERS[posicionActual].scrollIntoView({ block: "center"  });

}

function prevPicture(posicionPartida = SLIDERS.length) {
  // Mueve el scroll al siguiente slider
  posicionActual-1>0? posicionActual-=1:posicionActual=SLIDERS.length-1
  SLIDERS[posicionActual].scrollIntoView({ block: "center" });

}


btnNext.addEventListener('click', nextPicture);
btnPrev.addEventListener('click', prevPicture);

// Ejecuta
autoPlay();

