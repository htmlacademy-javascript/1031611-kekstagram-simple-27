import { isEscapeKey, isEnterKey } from './until.js';
import { onAddScale, onRemoveScale, scaleControl } from './scale-control.js';
import { form, onFormChange, filterReset } from './filters.js';
import { elementDescription } from './validate.js';
import { DEFAULT } from './constants.js';

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
  form.addEventListener('change', onFormChange);
  document.removeEventListener('change', onChange);
}

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

function onChange(evt) {
  if (isEnterKey(evt)) {
    openUserModal();
  }
}

uploadUserPhoto.addEventListener('change', onChange);

function closeUserModal() {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeDown);
  userCloseModalWindow.removeEventListener('click', closeUserModal);
  elementDescription.value = '';
  onRemoveScale();
  scaleControl.value = `${DEFAULT}%`;
  filterReset();
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

export {closeUserModal, openUserModal};

