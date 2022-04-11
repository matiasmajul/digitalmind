let btnMenu = document.querySelector('#menu');
let btnClose = document.querySelector('.nav-close');
let navLink = document.querySelector('.nav-link');
let btnLink = document.querySelectorAll('.link');
let show = false

function handleMenu(opcion) {
  show = opcion;
  navLink.classList = `nav-link ${show?"show" : ""}`
}

btnMenu.addEventListener('click',()=>handleMenu(true));
btnClose.addEventListener('click', ()=>handleMenu(false));
btnLink.forEach(link => link.addEventListener('click',()=> handleMenu(false)));