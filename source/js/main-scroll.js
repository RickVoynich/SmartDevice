var scrollBtn = document.querySelector('.promo__link');
var formBtn = document.querySelectorAll('.promo__button');
var advantagesNode = document.querySelector('.advantages');
var formNode = document.querySelector('.form');

var moveTo = new MoveTo();

if (scrollBtn && advantagesNode) {
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(advantagesNode);
  });
}
formBtn.forEach(btn => {
  if (btn && formNode) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      moveTo.move(formNode);
    });
  }
});

