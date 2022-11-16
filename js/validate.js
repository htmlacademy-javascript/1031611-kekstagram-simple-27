import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from './constants.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextClass: 'text__description--error'
});

const validateDescriptionTextLimit = (value) => value.length < MAX_COMMENT_LENGTH;

pristine.addValidator(form.querySelector('.text__description'), validateDescriptionTextLimit, 'Максиммальная длина 140 символов.');

const validateDescription = (value) => value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(form.querySelector('.text__description'), validateDescription, 'От 20 до 140 символов.');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export { form };
