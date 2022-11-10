const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = (galleryPhotos) => {
  const similarListFragment = document.createDocumentFragment();
  galleryPhotos.forEach(({url, likes, comments}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(pictureElement);
  });
  similarListElement.appendChild(similarListFragment);
};
export {photos};
