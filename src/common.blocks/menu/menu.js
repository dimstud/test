const trigger = document.querySelector('.menu__body-drob-link');
const block = document.querySelector('.menu__body-drop');

function showBlock(event) {
  trigger.addEventListener(event, (e) => {
    e.preventDefault();
    e.stopPropagation();
    block.classList.toggle('menu__body-drop-active');
  });
}

showBlock('click');
showBlock('mouseover');
