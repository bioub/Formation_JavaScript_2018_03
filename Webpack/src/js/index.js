'use strict';
const { Horloge } = require('./horloge'); // dynamique et sync

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();

document.addEventListener('click', () => {
  import('./random-css-color').then(({randomCssColor}) => {  // dynamique et async
    document.body.style.backgroundColor = randomCssColor();
  });
});
