const dropBtn = document.querySelector('.menu__body-drob-link');
const headerBtn = document.querySelector('.header__burger');
const dropMenu = document.querySelector('.menu__body-drop');
const mainMenu = document.querySelector('.menu');

function showDropMenu(event, btn, block) {
  btn.addEventListener(event, (e) => {
    e.preventDefault();
    block.classList.toggle('menu__body-drop-active');
  });
}

function showBlock(event, btn, block) {
  btn.addEventListener(event, (e) => {
    e.preventDefault();
    block.classList.toggle('menu__active');
  });
}

showDropMenu('click', dropBtn, dropMenu);
showBlock('click', headerBtn, mainMenu);
