function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

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
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: DESCRIPTIONS[i],
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

const galleryPhotos = Array.from({ length: GALLERY_LENGTH }, (v, k) => getPhotoDescription(k));
