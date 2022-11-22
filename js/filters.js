import { form } from './validate.js';
import { imgUploadPreviewImg } from './scale-control.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const filterReset = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgUploadPreviewImg.style.filter = 'none';
  imgUploadPreviewImg.className = '';
  valueElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgUploadPreviewImg.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgUploadPreviewImg.classList.add(`effects__preview--${chosenEffect.name}`);
  valueElement.value = sliderValue;
};

updateSlider();

sliderElement.noUiSlider.on('update', onSliderUpdate);

export { form, onFormChange, filterReset };


// const fullPhotoElement = document.querySelector('.img-upload__preview img');
// const effectLevelElement = document.querySelector('.effect-level');
// const effectsListElement = document.querySelector('.effects__list');

// const onFormChange = (evt) => {
//   fullPhotoElement.className = 'effects__preview--none';
//   const target = evt.target.value;
//   effectLevelElement.classList.remove('hidden');
//   fullPhotoElement.style.filter = '';
//   if (target === 'none') {
//     effectLevelElement.classList.add('hidden');
//   }
//   fullPhotoElement.classList.add(`effects__preview--${target}`);// меняется класс
// };
// effectsListElement.addEventListener('click', onFormChange);

// export {onFormChange};
