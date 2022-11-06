import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
let markUp = '';
for (const galleryItem of galleryItems) {
    markUp += `
    <a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="Image description" /> 
    </a>`; 
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = markUp;
const lightbox = new SimpleLightbox('.gallery a', 
{captions: true, captionsData: 'alt', captionDelay: 250});


