import { isEscapeKey, isEnterKey } from './until.js';
import { onAddScale, onRemoveScale, scaleControl, imgUploadPreviewImg } from './scale-control.js';
import { form, onFormChange, filterReset } from './filters.js';
import { elementDescription } from './validate.js';
import { DEFAULT_SCALE } from './constants.js';

const userUploadPhoto = document.querySelector('.img-upload__input');
const modalWindow = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const userCloseModalWindow = document.querySelector('#upload-cancel');

//Функция очистки данных модального окна
const onUserModalWindow = () => {
  modalWindow.classList.add('hidden');
  body.classList.toggle('modal-open');
  elementDescription.value = '';
  scaleControl.value = `${DEFAULT_SCALE}%`;
  imgUploadPreviewImg.style = 'transform: scale(1)';
  filterReset();
  onRemoveScale();
  userUploadPhoto.value = '';
  userUploadPhoto.innerHTML = '';
};

//Функция закрытия модального окна клавишей ESC
const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUserModalWindow();
  }
};

//Функция открытия модального окна
const openUserModal = () => {
  modalWindow.classList.remove('hidden');
  body.classList.toggle('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  onAddScale();
  form.addEventListener('change', onFormChange);
  document.removeEventListener('change', onEnterKey);
};

//Обработчик открытия модального окна
userUploadPhoto.addEventListener('change', () => {
  openUserModal();
});

//Обработчик открытия модального окна клавишей Enter
function onEnterKey (evt) {
  if (isEnterKey(evt)) {
    openUserModal();
  }
}
document.addEventListener('change', onEnterKey);

//Функция закрытия модального окна
const closeUserModal = () => {
  form.removeEventListener('change', onFormChange);
  document.removeEventListener('keydown', onModalEscKeydown);
  onUserModalWindow();
};

//Обработчик закрытия модального окна
userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

//Обработчик закрытия модального окна клавишей ESC
userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

export { openUserModal, closeUserModal};

