'use strict';
var buttonCall = document.querySelector('.header__order-call');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup__button-close');
var footerInfo = document.querySelector('.footer__container-info');
var footerNav = footerInfo.querySelector('.footer__nav');
var footerContacts = footerInfo.querySelector('.footer__container-contacts');
var buttonNav = footerInfo.querySelector('.footer__button--nav');
var buttonInfo = footerInfo.querySelector('.footer__button--contacts');
var inputsTel = document.querySelectorAll('input[type=tel]');

footerInfo.classList.remove('nojs');

if (buttonCall) {
  buttonCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--active');
  });

  popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--active');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('popup--active')) {
        evt.preventDefault();
        popup.classList.remove('popup--active');
      }
    }
  });
}

if (buttonNav) {
  buttonNav.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerNav.classList.toggle('footer__nav--active');
  });
}

if (buttonInfo) {
  buttonInfo.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerContacts.classList.toggle('footer__container-contacts--active');
  });
}

// eslint-disable-next-line no-undef
var im = new Inputmask('+9(999) 999-9999');
inputsTel.forEach(function (input) {
  im.mask(input);
});
