'use strict';
const buttonStart = document.querySelector('#start');
const buttonReset = document.querySelector('#reset');

let x = 0;
let y = 0;
let xMax = 500;
let yMax = 500;
let active = false;

function resetButton() {
  x = 0;
  y = 0;
  buttonStart.textContent = 'Start';
  active = false;
  buttonStart.removeAttribute('disabled');
}

function toggleButton() {
  if (buttonStart.textContent === 'Start') {
    active = true;
    buttonStart.textContent = 'Stop';
  } else {
    buttonStart.textContent = 'Start';
    active = false;
  }
}

function animate() {
  const object = document.querySelector('.circle');

  function moveObject() {
    if (x < xMax && y < yMax && active) {
      x += 2;
      y += 2;
      if (x >= xMax || y >= yMax) {
        buttonStart.setAttribute('disabled', true);
      }
    }

    object.style.transform = `translate(${x}px, ${y}px)`;

    if (x < xMax && y < yMax && active) {
      requestAnimationFrame(moveObject);
    }
  }

  requestAnimationFrame(moveObject);
}

buttonStart.addEventListener('click', () => {
  toggleButton();
  animate();
});

buttonReset.addEventListener('click', () => {
  resetButton();
  animate();
});
