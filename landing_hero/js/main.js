let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navList.classList.toggle('open')
}

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal('.hero-text', { origin: 'top', interval: 200 });
sr.reveal('.hero-image', { origin: 'top', interval: 450 });
sr.reveal('.icons', { origin: 'left', interval: 500 });
sr.reveal('.scroll-down', { origin: 'right', interval: 500 });