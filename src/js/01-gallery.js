// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const listGallary = document.querySelector('.gallery');

function createElements() {
  const markup = galleryItems.reduce((acc, elem) => {
    return (acc += `<div><a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
</a></div>`);
  }, '');

  listGallary.insertAdjacentHTML('beforeend', markup);
}
createElements();

// const lightbox = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: '250',
// });
