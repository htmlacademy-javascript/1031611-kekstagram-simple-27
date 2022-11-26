const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const INPUT_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const OUTPUT_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

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

export { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, DEFAULT_SCALE, MIN_SCALE, MAX_SCALE, SCALE_STEP, INPUT_DATA, OUTPUT_DATA, EFFECTS };
