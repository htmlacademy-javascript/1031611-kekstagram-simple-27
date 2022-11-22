import {DEFAULT_SCALE, MIN_SCALE, MAX_SCALE, SCALE_STEP} from './constants.js';

const userModalWindow = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = userModalWindow.querySelector('.scale__control--value');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');

const onSmallerButtonClick = () => {
  let scaleControlValue = parseInt(scaleControl.value, 10);
  if (scaleControlValue > MIN_SCALE ) {
    scaleControlValue -= SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const onBiggerButtonClick = () => {
  let scaleControlValue = parseInt(scaleControl.value, 10);
  if (scaleControlValue < MAX_SCALE) {
    scaleControlValue += SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const onAddScale = () => {
  scaleControl.value = `${DEFAULT_SCALE}%`;
  scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
  scaleControlBigger.addEventListener('click', onBiggerButtonClick);
};

const onRemoveScale = () => {
  scaleControlSmaller.removeEventListener('click', onSmallerButtonClick);
  scaleControlBigger.removeEventListener('click', onBiggerButtonClick);
  imgUploadPreviewImg.style.transform = 'scale(1)';
};

scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);

export { onAddScale, onRemoveScale, imgUploadPreviewImg, scaleControl };
