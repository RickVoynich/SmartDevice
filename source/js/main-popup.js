var ESC_KEYCODE = 27;

var link = document.querySelector('.header__btn');
var popup = document.querySelector('.popup');
var close = popup.querySelector('.popup__close-btn');

var form = popup.querySelector('.popup__content form');
var popupName = form.querySelector('#popup-name');
var phone = form.querySelector('#popup-phone');
var question = form.querySelector('#popup-question');

var isStorageSupport = true;
var storage = {
  popupName: '',
  phone: '',
  question: ''
};

try {
  storage.popupName = localStorage.getItem('popupName');
  storage.phone = localStorage.getItem('phone');
  storage.question = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

if (link && popup) {
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closePopup();
    }
  };

  if (form) {
    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('popupName', popupName.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('question', question.value);
      }
    });
  }

  var checkLocalStorage = function () {
    if (popupName && storage.popupName !== null) {
      popupName.value = storage.popupName;
    }

    if (phone && storage.phone !== null) {
      phone.value = storage.phone;
    }

    if (question && storage.question !== null) {
      question.value = storage.question;
    }
  };

  var openPopup = function () {
    popup.classList.add('popup--opened');
    document.body.classList.add('disable-scroll');
    document.addEventListener('keydown', onPopupEscPress);
    checkLocalStorage();
    popupName.focus();
  };

  var closePopup = function () {
    popup.classList.remove('popup--opened');
    document.body.classList.remove('disable-scroll');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  close.addEventListener('click', function () {
    closePopup();
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
}
