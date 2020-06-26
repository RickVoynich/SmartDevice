var scrollBtn = document.querySelector('.promo__link');
var promoBtnMobile = document.querySelector('.promo__button--mobile');
var promoBtnDesktop = document.querySelector('.promo__button--desktop');
var advantagesNode = document.querySelector('.advantages');
var formNode = document.querySelector('.form');

var moveTo = new MoveTo();

if (scrollBtn && advantagesNode) {
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(advantagesNode);
  });
}

if (promoBtnMobile && formNode) {
  promoBtnMobile.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(formNode);
  });
}

if (promoBtnDesktop && formNode) {
  promoBtnDesktop.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(formNode);
  });
}
