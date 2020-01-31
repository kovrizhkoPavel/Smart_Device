'use strict';
(function () {
  var body = document.querySelector('body');
  var buttonCall = body.querySelector('.header__order-call');
  var popup = body.querySelector('.popup');
  var popupBackground = popup.querySelector('.popup__background');
  var popupForm = popup.querySelector('.popup__form-feedback');
  var popupClose = popup.querySelector('.popup__button-close');
  var userName = popup.querySelector('[name=user-name]');
  var userPhone = popup.querySelector('[name=user-phone]');
  var textMessage = popup.querySelector('textarea');
  var footerInfo = document.querySelector('.footer__container-info');
  var buttonNav = footerInfo.querySelector('.footer__button--nav');
  var buttonInfo = footerInfo.querySelector('.footer__button--contacts');
  var inputsTel = body.querySelectorAll('input[type=tel]');

  var isStorageSupport = true;
  var storageName = '';
  var storagePhone = '';

  var onPopupClick = function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--active');
    body.classList.remove('body-popup');
  };

  footerInfo.classList.remove('nojs');

  try {
    storageName = localStorage.getItem('name');
    storagePhone = localStorage.getItem('phone');
  } catch (err) {
    isStorageSupport = false;
  }

  if (buttonCall) {
    buttonCall.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--active');
      body.classList.add('body-popup');
      if (storageName) {
        userName.value = storageName;
        userPhone.focus();
      } else if (storagePhone) {
        userPhone.value = storagePhone;
        textMessage.focus();
      } else {
        userName.focus();
      }
    });

    popupForm.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('name', userName.value);
        localStorage.setItem('phone', userPhone.value);
      }
    });

    popupClose.addEventListener('click', onPopupClick);

    popupBackground.addEventListener('click', onPopupClick);

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains('popup--active')) {
          evt.preventDefault();
          popup.classList.remove('popup--active');
          body.classList.remove('body-popup');
        }
      }
    });
  }

  var onFootorClick = function (evt) {
    evt.preventDefault();
    var footerActive = footerInfo.querySelector('.footer-active');
    var parentElement = evt.target.parentNode;

    if (footerActive) {
      parentElement.classList.add('footer-active');
      footerActive.classList.remove('footer-active');
    } else {
      parentElement.classList.toggle('footer-active');
    }
  };

  if (buttonNav) {
    buttonNav.addEventListener('click', onFootorClick);
  }

  if (buttonInfo) {
    buttonInfo.addEventListener('click', onFootorClick);
  }

  // eslint-disable-next-line no-undef
  var im = new Inputmask('+7 (999) 999-9999');
  inputsTel.forEach(function (input) {
    input.addEventListener('invalid', function () {
      if (input.validity.patternMismatch) {
        input.setCustomValidity('Не достаточно символов');
      } else {
        input.setCustomValidity('');
      }
    });
    im.mask(input);
  });
})();
