// Scroll Suave
const menu = document.querySelectorAll ('nav a[href^="#"]');

menu.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to){
  window.scroll({
    top: to,
    behavior: "smooth",
  })
}

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

//Menu Hamburguer
const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }
  else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




// Clarice

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var elem = document.querySelector('.main-carousel_1');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_1', {
  // options
});

var elem = document.querySelector('.main-carousel_2');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_2', {
  // options
});

var elem = document.querySelector('.main-carousel_3');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_3', {
  // options
});

var elem = document.querySelector('.main-carousel_4');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_4', {
  // options
});

var elem = document.querySelector('.main-carousel_5');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_5', {
  // options
});

var elem = document.querySelector('.main-carousel_6');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_6', {
  // options
});

var elem = document.querySelector('.main-carousel_7');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_7', {
  // options
});

var elem = document.querySelector('.main-carousel_8');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_8', {
  // options
});

var elem = document.querySelector('.main-carousel_9');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_9', {
  // options
});

var elem = document.querySelector('.main-carousel_10');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_10', {
  // options
});

var elem = document.querySelector('.main-carousel_11');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_11', {
  // options
});

var elem = document.querySelector('.main-carousel_12');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_12', {
  // options
});

var elem = document.querySelector('.main-carousel_13');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_13', {
  // options
});

var elem = document.querySelector('.main-carousel_14');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_14', {
  // options
});

var elem = document.querySelector('.main-carousel_15');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_15', {
  // options
});

var elem = document.querySelector('.main-carousel_16');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_16', {
  // options
});

var elem = document.querySelector('.main-carousel_17');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_17', {
  // options
});

var elem = document.querySelector('.main-carousel_18');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_18', {
  // options
});

var elem = document.querySelector('.main-carousel_19');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_19', {
  // options
});

var elem = document.querySelector('.main-carousel_20');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_20', {
  // options
});

var elem = document.querySelector('.main-carousel_21');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_21', {
  // options
});

var elem = document.querySelector('.main-carousel_22');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_22', {
  // options
});

var elem = document.querySelector('.main-carousel_23');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_23', {
  // options
});

var elem = document.querySelector('.main-carousel_24');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_24', {
  // options
});

var elem = document.querySelector('.main-carousel_25');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_25', {
  // options
});

var elem = document.querySelector('.main-carousel_26');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_26', {
  // options
});

var elem = document.querySelector('.main-carousel_27');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_27', {
  // options
});

var elem = document.querySelector('.main-carousel_28');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_28', {
  // options
});

var elem = document.querySelector('.main-carousel_29');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_29', {
  // options
});

var elem = document.querySelector('.main-carousel_30');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_30', {
  // options
});

var elem = document.querySelector('.main-carousel_31');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_31', {
  // options
});

var elem = document.querySelector('.main-carousel_32');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_32', {
  // options
});

var elem = document.querySelector('.main-carousel_33');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_33', {
  // options
});

var elem = document.querySelector('.main-carousel_34');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_34', {
  // options
});

var elem = document.querySelector('.main-carousel_35');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_35', {
  // options
});

var elem = document.querySelector('.main-carousel_36');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_36', {
  // options
});

var elem = document.querySelector('.main-carousel_37');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_37', {
  // options
});

var elem = document.querySelector('.main-carousel_38');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_38', {
  // options
});

var elem = document.querySelector('.main-carousel_39');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_39', {
  // options
});

var elem = document.querySelector('.main-carousel_40');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_40', {
  // options
});

var elem = document.querySelector('.main-carousel_41');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_41', {
  // options
});

var elem = document.querySelector('.main-carousel_42');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_42', {
  // options
});

var elem = document.querySelector('.main-carousel_43');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_43', {
  // options
});

var elem = document.querySelector('.main-carousel_44');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_44', {
  // options
});

var elem = document.querySelector('.main-carousel_45');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_45', {
  // options
});

var elem = document.querySelector('.main-carousel_46');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_46', {
  // options
});

var elem = document.querySelector('.main-carousel_47');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_47', {
  // options
});

var elem = document.querySelector('.main-carousel_48');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_48', {
  // options
});

var elem = document.querySelector('.main-carousel_49');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_49', {
  // options
});

var elem = document.querySelector('.main-carousel_50');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_50', {
  // options
});

var elem = document.querySelector('.main-carousel_51');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_51', {
  // options
});

var elem = document.querySelector('.main-carousel_52');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_52', {
  // options
});

var elem = document.querySelector('.main-carousel_53');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_53', {
  // options
});

var elem = document.querySelector('.main-carousel_54');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_54', {
  // options
});

var elem = document.querySelector('.main-carousel_55');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_55', {
  // options
});

var elem = document.querySelector('.main-carousel_56');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_56', {
  // options
});

var elem = document.querySelector('.main-carousel_57');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_57', {
  // options
});

var elem = document.querySelector('.main-carousel_58');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_58', {
  // options
});

var elem = document.querySelector('.main-carousel_59');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_59', {
  // options
});

var elem = document.querySelector('.main-carousel_60');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_60', {
  // options
});

var elem = document.querySelector('.main-carousel_61');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_61', {
  // options
});

var elem = document.querySelector('.main-carousel_62');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_62', {
  // options
});

var elem = document.querySelector('.main-carousel_63');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_63', {
  // options
});

var elem = document.querySelector('.main-carousel_64');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_64', {
  // options
});

var elem = document.querySelector('.main-carousel_65');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_65', {
  // options
});

var elem = document.querySelector('.main-carousel_66');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel_66', {
  // options
});


// Claudio

var elem = document.querySelector('.main-carousel2');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2', {
  // options
});

var elem = document.querySelector('.main-carousel2_1');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2_1', {
  // options
});

var elem = document.querySelector('.main-carousel2_2');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2_2', {
  // options
});

var elem = document.querySelector('.main-carousel2_3');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2_3', {
  // options
});

var elem = document.querySelector('.main-carousel2_4');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2_4', {
  // options
});

var elem = document.querySelector('.main-carousel2_5');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel2_5', {
  // options
});


// Clarice e Claudio

var elem = document.querySelector('.main-carousel3');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3  ', {
  // options
});

var elem = document.querySelector('.main-carousel3_1');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_1', {
  // options
});

var elem = document.querySelector('.main-carousel3_2');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_2', {
  // options
});

var elem = document.querySelector('.main-carousel3_3');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_3', {
  // options
});

var elem = document.querySelector('.main-carousel3_4');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_4', {
  // options
});

var elem = document.querySelector('.main-carousel3_5');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_5', {
  // options
});

var elem = document.querySelector('.main-carousel3_6');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_6', {
  // options
});

var elem = document.querySelector('.main-carousel3_7');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_7', {
  // options
});

var elem = document.querySelector('.main-carousel3_8');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_8', {
  // options
});

var elem = document.querySelector('.main-carousel3_9');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_9', {
  // options
});

var elem = document.querySelector('.main-carousel3_10');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_10', {
  // options
});

var elem = document.querySelector('.main-carousel3_11');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_11', {
  // options
});

var elem = document.querySelector('.main-carousel3_12');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_12', {
  // options
});

var elem = document.querySelector('.main-carousel3_13');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_13', {
  // options
});

var elem = document.querySelector('.main-carousel3_14');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_14', {
  // options
});

var elem = document.querySelector('.main-carousel3_15');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_15', {
  // options
});

var elem = document.querySelector('.main-carousel3_16');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_16', {
  // options
});

var elem = document.querySelector('.main-carousel3_17');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_17', {
  // options
});

var elem = document.querySelector('.main-carousel3_18');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_18', {
  // options
});

var elem = document.querySelector('.main-carousel3_19');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_19', {
  // options
});

var elem = document.querySelector('.main-carousel3_20');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_20', {
  // options
});

var elem = document.querySelector('.main-carousel3_21');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_21', {
  // options
});

var elem = document.querySelector('.main-carousel3_22');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_22', {
  // options
});

var elem = document.querySelector('.main-carousel3_23');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_23', {
  // options
});

var elem = document.querySelector('.main-carousel3_24');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel3_24', {
  // options
});

// Fernando

var elem = document.querySelector('.main-carousel4_');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel4_', {
  // options
});