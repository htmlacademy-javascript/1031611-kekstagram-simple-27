import {isEscapeKey, isEnterKey} from './until.js';

const uploadUserPhoto = document.querySelector('#upload-file');
const modalWindow = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const userCloseModalWindow = document.querySelector('#upload-cancel');

const onPopupEscapeDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


//функция открытия модального окна

function openUserModal() {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscapeDown);
}

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

uploadUserPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

//функция закрытия модального окна

function closeUserModal() {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  // uploadUserPhoto.innerHTML = '';
  document.removeEventListener('keydown', onPopupEscapeDown);
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});
