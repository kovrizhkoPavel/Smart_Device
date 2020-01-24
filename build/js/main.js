'use strict';
var buttonCall = document.querySelector('.header__order-call');
var popup = document.querySelector('.popup');
var popupForm = popup.querySelector('.popup__form-feedback');
var popupClose = popup.querySelector('.popup__button-close');
var userName = popup.querySelector('[name=user-name]');
var userPhone = popup.querySelector('[name=user-phone]');
var textMessage = popup.querySelector('textarea');
var footerInfo = document.querySelector('.footer__container-info');
var footerNav = footerInfo.querySelector('.footer__nav');
var footerContacts = footerInfo.querySelector('.footer__container-contacts');
var buttonNav = footerInfo.querySelector('.footer__button--nav');
var buttonInfo = footerInfo.querySelector('.footer__button--contacts');
var inputsTel = document.querySelectorAll('input[type=tel]');

var isStorageSupport = true;
var storageName = '';
var storagePhone = '';

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
var im = new Inputmask('+7(999) 999-9999');
inputsTel.forEach(function (input) {
  im.mask(input);
});
