import {getRandomPositiveInteger} from './until.js';
import {GALLERY_LENGTH, DESCRIPTIONS} from './constants.js';

const getPhotoDescription = function(i) {
  return {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: DESCRIPTIONS[i],
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

const galleryPhotos = Array.from({length: GALLERY_LENGTH }, (v, k) => getPhotoDescription(k));
export {galleryPhotos};
