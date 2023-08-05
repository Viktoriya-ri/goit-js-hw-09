const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

dataStop.setAttribute('disabled', '');

dataStart.addEventListener('click', elem => {
  elem.target.setAttribute('disabled', true);
  dataStop.removeAttribute('disabled');

  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

dataStop.addEventListener('click', elem => {
  elem.target.setAttribute('disabled', true);
  dataStart.removeAttribute('disabled');

  clearInterval(intervalId);
});

