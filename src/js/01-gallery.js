// Add imports above this line
import { galleryItems } from './gallery-items.js';

// // Описаний в документації
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const boxEl = document.querySelector(".gallery");
boxEl.style.listStyle = "none";


const makeGalleryCard = ({
    preview,
    original,
    description,
}) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
</li >`;


const markup = galleryItems.map((el) => makeGalleryCard(el)).join("");
boxEl.insertAdjacentHTML("afterbegin", markup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    animationSpeed: 250,
});

console.log("Ghbkfn");