import Sketch from './app.js';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');

  if (canvas) {
    new Sketch(document.querySelector('#canvas'));
  }
});