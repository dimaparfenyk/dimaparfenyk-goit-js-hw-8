import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryImageContainer = document.querySelector('.gallery');

function createListGalleryItems(items) {

    return items.map(item => 
        `<a class="gallery__item"
            data-lightbox="images" 
            href="${item.original}">
            <img class="gallery__image"
             src="${item.preview}" 
            data-source="${item.original}" 
            alt="${item.description}"/>
        </a>`).join("")
}
galleryImageContainer.innerHTML = createListGalleryItems(galleryItems);

var lightbox  = new SimpleLightbox('.gallery a', {captionsData: 'alt',animationSpeed:250});

console.log(galleryItems);