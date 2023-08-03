

const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

dataStartRef.addEventListener('click', onStart);
dataStoptRef.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStart() {
  timerId = setInterval(getBgColor, 1000);
  dataStartRef.toggleAttribute('disable');
}

function onStop() {
  clearInterval(timerId);
  dataStopRef.removeAttribute('disable');
}

function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

