'use strict';

var scrollBtn = document.querySelector('.promo__link');
var formBtn = document.querySelector('.promo__button');
var advantagesNode = document.querySelector('.advantages');
var formNode = document.querySelector('.form');

var moveTo = new MoveTo();

if (scrollBtn && advantagesNode) {
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(advantagesNode);
  });
}

if (formBtn && formNode) {
  formBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(formNode);
  });
}
