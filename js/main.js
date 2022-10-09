// function getRandomNumber(min, max) {
//   if (min <= max && min >= 0) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   return NaN;
// }

// getRandomNumber(2, 20);


// function getLengthString(string, maxLength) {
//   if (string.length <= maxLength) {
//     return true;
//   }
//   return false;
// }

// getLengthString(0);

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger();


function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('Hello', 10);

// module4-task1

const GALLERY_LENGTH = 25;
const DESCRIPTIONS = [
  'Мои собаки',
  'Солнечная погода',
  'На работе',
  'Отдых',
  'Xbox one X',
  'В гостях у друзей',
  'Учим Frontend',
  'Москва',
  'Новый год 2022',
  'Учим Backend',
  'Сноубординг',
  'Сочи',
  'Бетанкур',
  'Мои мыши',
  'Бар',
  'Собираю мебель',
  'Вечер за сериалом',
  'Участвую в конурсе',
  'Новая работа',
  'Продаю PS4',
  'Новое хобби',
  'Кросс',
  'С друзьями в зале',
  'Велоезда',
  'Мой первый обзор на фильм'
];

const getPhotoDescription = function(i) {
  return {
    id: i++,
    url: `photos/${i++}.jpg`,
    description: getRandomPositiveInteger(0, DESCRIPTIONS.length - 1),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

const galleryPhotos = Array.from({ length: GALLERY_LENGTH }, (v, k) => getPhotoDescription(k));
// eslint-disable-next-line no-console
console.log(galleryPhotos);
