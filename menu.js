let menuContainer = document.querySelector('.menu');
let btnMenu = menuContainer.querySelector('.menu__icon');
let btnClose = menuContainer.querySelector('.close');
let navLink = menuContainer.querySelector('.list');
let btnLink = menuContainer.querySelectorAll('.option');
let show = false

function handleMenu(opcion) {
  show = opcion;
  navLink.classList = `list ${show?"list--show" : ""}`
}

btnMenu.addEventListener('click',()=>handleMenu(true));
btnClose.addEventListener('click', ()=>handleMenu(false));
btnLink.forEach(link => link.addEventListener('click',()=> handleMenu(false)));