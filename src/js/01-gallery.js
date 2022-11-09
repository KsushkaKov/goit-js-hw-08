// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = () => {
  const elements = galleryItems
    .map(
      el =>
        `<a class="gallery__item" href="${el.original}">
  <img 
  class="gallery__image"
  src="${el.preview}"
  title="${el.description}"
  alt="${el.description}"/>
  </a>
  `
    )
    .join('');
  gallery.innerHTML = elements;
};

galleryItem();

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
