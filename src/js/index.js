import Sketch from './app.js';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  const options = document.querySelector('#container');

  if (canvas) {
    new Sketch(document.querySelector('#container'));
  }
});