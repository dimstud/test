const trigger = document.querySelector('.menu__body-drob-link');
const block = document.querySelector('.menu__body-drop');

function showBlock() {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    block.classList.toggle('menu__body-drop-active');
  });
}

showBlock();
