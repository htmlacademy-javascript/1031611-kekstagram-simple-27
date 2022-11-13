import { isEscapeKey, isEnterKey } from './until.js';
import { onAddScale, onRemoveScale } from './scale-control.js';

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

function openUserModal() {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscapeDown);
  onAddScale();
}

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

uploadUserPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

function closeUserModal() {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeDown);
  userCloseModalWindow.removeEventListener('click', closeUserModal);
  onRemoveScale();
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalWindow.addEventListener('click', closeUserModal);

userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});
