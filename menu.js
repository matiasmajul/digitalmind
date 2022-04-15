let btnMenu = document.querySelector('.menu-icon');
let btnClose = document.querySelector('.menu-close');
let navLink = document.querySelector('.menu');
let btnLink = document.querySelectorAll('.link');
let show = false

function handleMenu(opcion) {
  show = opcion;
  navLink.classList = `menu ${show?"show" : ""}`
}

btnMenu.addEventListener('click',()=>handleMenu(true));
btnClose.addEventListener('click', ()=>handleMenu(false));
btnLink.forEach(link => link.addEventListener('click',()=> handleMenu(false)));